
var randomNumber1=Math.floor(Math.random() * 6) + 1;

var randomdice="dice" + randomNumber1 + ".png";


var randomdiceSrc="images/" + randomdice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdiceSrc);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomdice2="dice" + randomNumber2 + ".png";

var randomdiceSrc2="images/" + randomdice2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomdiceSrc2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!🚩 "
}

else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins! "
}
else{
  document.querySelector("h1").innerHTML="Draw!!"
}
