function diceGame() {
    let r1 = Math.floor(Math.random() * 6) + 1;
    let r2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('img.img1').setAttribute("src", "./images/dice" + r1 + ".png");
    document.querySelector('img.img2').setAttribute("src", "./images/dice" + r2 + ".png");

    if (r1 > r2) {
        document.querySelector('h1').textContent = "Player 1 Wins 🎉";
    } else if (r2 > r1) {
        document.querySelector('h1').textContent = "Player 2 Wins 🎉";
    } else {
        document.querySelector('h1').textContent = "Draw 🤝";
    }
}
function refresh(event) {
    event.preventDefault(); 
    diceGame();
}
document.querySelector('.container a').addEventListener('click', refresh);
