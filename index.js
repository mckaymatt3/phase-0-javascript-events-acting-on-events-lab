// Your code here
const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = "blue";

document.addEventListener("keydown", function (event){
  if (event.key === "Arrow Left") {
  const leftNumbers = dodger.style.left.replace("px", " ");
  const left = parsetInt(leftNumbers,10);

  dodger.style.left = `${left - 1}px`
  }
})


// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#ff69b4";

// // function moveDodgerLeft() {
// //     var leftNumbers = dodger.style.left.replace("px", "");
//     var left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 5}px`;
//     }
//   }

// function moveDodgerRight() {
//     var leftNumbers = dodger.style.left.replace("px", "");
//     var left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left + 5}px`;
//     }
//   }

// document.addEventListener("keydown", function (e) {
//    if (e.key === "ArrowLeft") {
//         moveDodgerLeft();
//    }
//    if (e.key === "ArrowRight") {
//         moveDodgerRight();
//    }
// });



