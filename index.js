function diceRoll(){
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
document.querySelector("h1").innerText = "Lets see who wins"


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}
}
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    diceRoll();
}
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
