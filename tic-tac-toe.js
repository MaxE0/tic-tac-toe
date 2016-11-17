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
function createCircle() {
  var runCode = document.createElementNS(namespace, "circle")
  runCode.setAttribute("cx", 170)
  runCode.setAttribute("cy", 80)
  runCode.setAttribute("r", 30)
  runCode.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(runCode)
}
function createCircle2() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 250)
  circle.setAttribute("cy", 80)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
