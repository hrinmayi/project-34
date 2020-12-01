var dog,happyDog,database;
var foodS,foodStock;

function preload()
{
happyDog=loadImage("images/dogImg.png");
dogimg1=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  foodStock=dataBase.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addimage(happyDog);
}
  drawSprites();
  fill("white");
  textSize(20);
text("Note: Press 'UP_ARROW' to feed the Dog milk",100,480);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  } else
  {
    x=x-1
  }

dataBase.ref('/').update({
  Food:x
})
}