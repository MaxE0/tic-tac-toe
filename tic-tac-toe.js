// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
 var turn="player1"
 function createShape() {
 var circle = document.createElementNS(namespace, "circle")
   if(turn=="player1") {
     circle.setAttribute("cx", 80)
     circle.setAttribute("cy", 80)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "red")
     var canvas = document.getElementById("game-board")
     canvas.appendChild(circle)
     turn="player2"
   } else {
     circle.setAttribute("cx", 80)
     circle.setAttribute("cy", 80)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
     turn="player1"
     var canvas = document.getElementById("game-board")
     canvas.appendChild(circle)
   }
 }
var turn="player1"
function createCircle() {
  var runCode = document.createElementNS(namespace, "circle")
  if(turn=="player1") {
    runCode.setAttribute("cx", 170)
    runCode.setAttribute("cy", 80)
    runCode.setAttribute("r", 30)
    runCode.setAttribute("fill", "red")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    turn="player2"
  } else {
    runCode.setAttribute("cx", 170)
    runCode.setAttribute("cy", 80)
    runCode.setAttribute("r", 30)
    runCode.setAttribute("fill", "blue")
    turn="player1"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  }
}
function createCircle2() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 260)
  circle.setAttribute("cy", 80)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle2() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
function createCircle3() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 80)
  circle.setAttribute("cy", 170)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle3() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
function createCircle4() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 170)
  circle.setAttribute("cy", 170)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle4() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
function createCircle5() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 260)
  circle.setAttribute("cy", 170)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle5() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
function createCircle6() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 80)
  circle.setAttribute("cy", 260)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle6() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
function createCircle7() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 170)
  circle.setAttribute("cy", 260)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle7() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
function createCircle8() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 260)
  circle.setAttribute("cy", 260)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createCircle8() {
  if(turn=="player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
  } else {
    circle.setAttribute("fill", "blue")
    turn="player1"
  }
}
