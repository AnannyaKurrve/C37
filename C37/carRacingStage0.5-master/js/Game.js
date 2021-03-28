class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

play(){
  form.hide();
  textSize(30);
  text("Game Start",120,100);
  player.getPlayerInfo();
  if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance=player.distance+50;
    player.update();
  }
  if(player.index===1){
    fill ("red")
  }
  else if(player.index===2){
    fill(gold)
  }
  else if(player.index===3){
    fill(pink)
  }
  else{
    fill(blue)
  }
}

}
