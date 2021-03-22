var canva;
var gameState=0;
var database;
var quiz;
var question;
var contestant;
var contestantCount;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database(); 

  var question = new Quiz(150,80);
}


function draw(){
  background("pink");

    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
  }