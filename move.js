function upArrowPressed() {
  let element = document.getElementById("nobita");
  element.style.top = parseInt(element.style.top) - 5 + "px";
}
function downArrowPressed() {
  var element = document.getElementById("nobita");
  element.style.top = parseInt(element.style.top) + 5 + "px";
}
function leftArrowPressed() {
  var element = document.getElementById("nobita");
  element.style.left = parseInt(element.style.left) - 5 + "px";
}
function rightArrowPressed() {
  var element = document.getElementById("nobita");
  element.style.left = parseInt(element.style.left) + 5 + "px";
}

function moveSelection(evt) {
  switch (evt.key) {
    case "ArrowUp":
      upArrowPressed();
      break;
    case "ArrowDown":
      downArrowPressed();
      break;
    case "ArrowLeft":
      leftArrowPressed();
      break;
    case "ArrowRight":
      rightArrowPressed();
      break;
  }
}

function docReady() {
  window.addEventListener("keydown", moveSelection);
}
