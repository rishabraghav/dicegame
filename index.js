const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;


const pressMe = () =>{
document.querySelector('img.leftDice').setAttribute("src", `./dice${randomNumber1}.png`);
document.querySelector('img.rightDice').setAttribute("src", `./dice${randomNumber2}.png`);
 
if(randomNumber1 > randomNumber2){
    document.querySelector('h1').textContent = "Player 1 Wins!";
} else if(randomNumber1 == randomNumber2) {
    document.querySelector('h1').textContent = "Draw!";
} else {
    document.querySelector('h1').textContent = "Player 2 Wins!";

}
}