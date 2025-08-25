// Get the coin and result from the document to a variable
const coin = document.querySelector("#coin");
const result = document.querySelector("#result");
// Declare the function that flip the coin a random number
function randomFLip() {
  // Get a random nunber between 0 and 10
  num = Math.floor(Math.random() * 10);
  // Do the first flip
  coin.classList.toggle("flipped");
  // Do a number of flips between 0 and 10
  for ( let i = 0; i <= num - 1; i++) {
    // Do a flip after 0'5 seconds to wait the first flip to finish
    setTimeout(() => {
    coin.classList.toggle("flipped");
    }, i * 500)
  }
  // Wait until every flip has done
  setTimeout(() => {
    printResult();
  }, num * 500 + 100);
;
}
// Declare a function that print Heads or Tails depending on the class of the div with id = "coin"
function printResult() {
  if (coin.className == "coin") {
    result.textContent = "Heads"
  } else {
    result.textContent = "Tails"
  }
}
// Before any flip, the result is "Heads"
result.textContent = "Heads"
// Add eventListener to the div#coin
document.querySelector("#coin").addEventListener("click", function(event){
  event.preventDefault();
  // Do the flip
  coin.classList.toggle("flipped");
  // Print result
  printResult();
})
// Add eventListener to the button#random
document.querySelector("#random").addEventListener("click", function (event) {
  event.preventDefault();
  // Execute randomFlip
  randomFLip();
});