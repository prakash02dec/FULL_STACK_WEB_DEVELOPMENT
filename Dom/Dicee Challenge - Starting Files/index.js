var randomNumber1 = Math.floor(Math.random()*6) + 1  ;
var randomNumber2 = Math.floor(Math.random()*6) +1 ;

var randomdiceimg1 = "dice"+randomNumber1 + ".png" ;
var randomdiceimg2 = "dice"+randomNumber2 + ".png" ;


document.querySelector(".img1").setAttribute("src" , "./images/"+randomdiceimg1);
document.querySelector(".img2").setAttribute("src" , "./images/"+randomdiceimg2);


var h1 = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    h1.textContent = "🙌 Player 1 Win!"    ;
}else if (randomNumber1 < randomNumber2){
    h1.textContent = "🙌 PLayer 2 Win!"  ;
}else {
    h1.textContent = "Draw!" ;
}