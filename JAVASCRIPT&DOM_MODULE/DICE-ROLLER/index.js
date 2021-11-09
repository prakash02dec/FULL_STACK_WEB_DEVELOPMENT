var randomNumber1 = Math.floor((Math.random()*6)) +1;
var randomNumber2 = Math.floor((Math.random()*6)) +1;
var randomImages1 = "images/dice" + randomNumber1 + ".png";
var randomImages2 = "images/dice" + randomNumber2 + ".png";

if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerText = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins!🚩";
} 
else{
    document.getElementsByTagName("h1")[0].innerText = "Draw!";
}

 document.querySelector(".img1").setAttribute("src" , randomImages1);
 document.querySelector(".img2").setAttribute("src" , randomImages2);


