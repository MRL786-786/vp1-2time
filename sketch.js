//Create variables here
var dog, happyDog, database, foodS, foodStock
var dogimg,happydogimg

function preload()
{
  //load images here
  happydogimg = loadImage("images/dogImg.png")
  dogimg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(700, 600);
  database = firebase.database();
  dog = createSprite(300,300)
  dog.addImage("dog",dogimg)
  dog.scale = 0.5
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);

  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("dog",happydogimg)
  } 

  drawSprites();

  fill("black")
  textSize(30)
  text("Press the Up_Arrow to feed the Dog",100,100)
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

