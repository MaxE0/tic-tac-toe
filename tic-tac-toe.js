// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function createShape() {
 var newShape = document.createElementNS(namespace, "circle")
 newShape.setAttribute("cx", 80)
 newShape.setAttribute("cy", 80)
 newShape.setAttribute("r", 30)
 newShape.setAttribute("fill", "red")
 var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
var shapeClicked = "no"
function runCode() {
  if (shapeClicked == "no") {
    shapeClicked == "yes"
  }
}
function createSquare() {
  var newSquare = document.createElementNS(namespace, "square")
  newSquare.steAttribute("")
}
