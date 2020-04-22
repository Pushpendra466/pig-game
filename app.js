/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var current=0,val=0;
var score_0=0;
var score_1=0;
var gamePlaying=true;
var currentDOM0=document.querySelector('#current-0');
var currentDOM1=document.querySelector('#current-1');
var score0=document.getElementById('score-0');
var score1=document.getElementById('score-1');
var activePlayer=currentDOM0;
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener("click", function(){
    if(gamePlaying)   
    {val= Math.floor( Math.random()*6)+1
        document.querySelector('.dice').style.display='block';
   document.querySelector('.dice').src="dice-"+val+".png";
   if(val!==1)
    {   current+=val
        activePlayer.textContent=current;}
        else{current=0;
            activePlayer.textContent=current;
            if(activePlayer==currentDOM0)
            {activePlayer=currentDOM1;
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            }
            else
            {activePlayer=currentDOM0; 
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.player-1-panel').classList.remove('active');}
        }
}});
document.querySelector('.btn-hold').addEventListener("click", function(){
    if(gamePlaying)
{if(activePlayer==currentDOM0&&val!=1)
{   score_0+=current;
    score0.textContent=score_0;
    activePlayer=currentDOM1;
    current=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    if(score_0>=20)
    {document.querySelector('#name-0').textContent='Winner!';
    document.querySelector('.player-0-panel').classList.add('winner');
    gamePlaying=false;
    document.querySelector('.player-1-panel').classList.remove('active');
}
}
else if(activePlayer==currentDOM1&&val!=1){
    score_1+=current;
    score1.textContent=score_1;
    activePlayer=currentDOM0;
    current=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    if(score_1>=20){document.querySelector('#name-1').textContent='Winner!';
    document.querySelector('.player-1-panel').classList.add('winner');
    gamePlaying=false;
    document.querySelector('.player-0-panel').classList.remove('active')
    }
}}
})
document.querySelector('.btn-new').addEventListener("click", function(){
    gamePlaying=true;
    if(score_1>=20){
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('#name-1').textContent='PLAYER 2';
    }
    else{
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('#name-0').textContent='PLAYER 1';
    }
    current=0,score_1=0,score_0=0;
    score0.textContent=score_0;
    score1.textContent=score_1;
    currentDOM0.textContent=current;
    currentDOM1.textContent=current;
    document.querySelector('.player-0-panel').classList.add('active');
    activePlayer=currentDOM0;
})
