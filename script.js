var timer =60;
var score =0;
var hitrn=0;
function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter =" ";
for(var i=1;i<=112;i++){
            var ran=Math.floor(Math.random()*10)
            clutter +=`<div id="bubble">${ran}</div>`;
}
 
document.querySelector("#pbtm").innerHTML =clutter;
}

function runTimer(){
      var timerint =setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;

        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h4>Game Over! </br>Your Score is${score} </h4>`;
        }
      },1000);
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent =score;
}
document.querySelector("#pbtm").addEventListener("click",function(a){
      
      var clickdnum=Number(a.target.textContent);
      console.log(clickdnum)
       if(clickdnum ===hitrn){
        increaseScore();
        makeBubble();
        getNewHit()
       }
});
runTimer();
makeBubble();
getNewHit();

