var randomNumber1 = (Math.round(Math.random()*5) + 1); //Gives random numbers from 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
//image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //can also be used

var randomNumber2 = (Math.round(Math.random()*5) + 1);
var randomImageSource = "images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);
//image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource); //can also be used


if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
	document.querySelector("h1").innerHTML = "Draw!";
}