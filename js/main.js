import Game from './Game.js';
import GameView from './GameView.js';

let game = new Game();
let gameview=new GameView(document.getElementById("app"));

// defining functions

gameview.onTileClick=function(i){
    game.makeMove(i);
    gameview.update(game);
}
gameview.onRestartClick=function(){
    game=new Game();
    gameview.update(game);
}
gameview.update(game);
