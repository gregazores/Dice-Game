function myFunction() {

/* this function generates random numbers and ranges it from 1 to 6*/
function randomGenerator() {
  var random = Math.floor(6 * Math.random()) + 1;
  return random;
}

/* calls the funtion randomGenerator and assigns the value to random1 and random2 */
var random1 = randomGenerator();
var random2 = randomGenerator();

  if(random1 == random2) {
    document.querySelector(".header").textContent = "Draw😁 Try again.";
    document.querySelector(".header").classList.add("mystyle");
  } else if(random1 > random2) {
    document.querySelector(".header").textContent = "🚩 Player 1 Wins!";
  } else {
    document.querySelector(".header").textContent = "Player 2 Wins! 🚩";
  }


document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");

}
