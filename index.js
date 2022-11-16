const btn = document.querySelector("button");
const bdy = document.querySelector("body");
var color = ["rgb(255,25,25)","rgb(255,255,0)","rgb(25,255,102)","rgb(255,25,217)","rgb(25,140,255)","rgb(128,234,255)","rgb(255,87,160)"];


function randomColor(){
    var randomColor = color[Math.floor(Math.random()*color.length)];
    bdy.style.background = randomColor; 
    btn.innerText = randomColor;
}

btn.addEventListener("click",randomColor);