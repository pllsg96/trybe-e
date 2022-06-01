let submitButton = document.getElementsByTagName("button")[0];
// let clearButton = document.getElementsByTagName("button")[1];

function submitFunction(event) {
  event.preventDefault();
  console.log(event);
}

// function clearFunction(event) {
//   event.preventDefault();
//   console.log(event);
// }

submitButton.addEventListener("click", submitFunction);
// clearButton.addEventListener("click", clearFunction);
