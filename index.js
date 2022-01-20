// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#ff69b4";

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 5}px`;
    }
  }

document.addEventListener("keydown", function (e) {
   if (e.key === "ArrowLeft") {
        moveDodgerLeft();
   }
   if (e.key === "ArrowRight") {
        moveDodgerRight();
   }
});



