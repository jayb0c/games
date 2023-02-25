

/*
function draw(move){
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    if(move < 700){
    ctx.moveTo(250, 0 + move);
    ctx.lineTo(325, 0 + move);
    ctx.lineTo(325, 25 + move);
    ctx.lineTo(300, 25 + move);
    ctx.lineTo(300, 50 + move);
    ctx.lineTo(275, 50 + move);
    ctx.lineTo(275, 25 + move);
    ctx.lineTo(250, 25 + move);
    ctx.fillStyle = "#FF8001";
    ctx.fill();
    } else {
      ctx.moveTo(250, 700);
      ctx.lineTo(325, 700);
      ctx.lineTo(325, 725);
      ctx.lineTo(300, 725);
      ctx.lineTo(300, 750);
      ctx.lineTo(275, 750);
      ctx.lineTo(275, 725);
      ctx.lineTo(250, 725);
      ctx.fillStyle = "#FF8001";
      ctx.fill();
    }
}
*/

/* count interval
let count = 0;
setInterval(() => {
  count+= 4;
  draw(count);
  console.log(count);
}, 100);
*/


/* O1
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8001";
ctx.fillRect(0, 0, 50, 50);
*/

/* O2
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8001";
ctx.fillRect(0, 0, 50, 50);
*/

/* I1
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8001";
ctx.fillRect(0, 0, 25, 100);
*/

/* I2
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8001";
ctx.fillRect(0, 0, 100, 25);
*/

/* S1
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(75, 0);
ctx.lineTo(75, 25);
ctx.lineTo(75, 25);
ctx.lineTo(50, 25);
ctx.lineTo(50, 50);
ctx.lineTo(25, 50);
ctx.lineTo(0, 50);
ctx.lineTo(0, 25);
ctx.lineTo(25, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* S2
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(25, 0);
ctx.lineTo(25, 25);
ctx.lineTo(50, 25);
ctx.lineTo(50, 75);
ctx.lineTo(25, 75);
ctx.lineTo(25, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* Z1
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 25);
ctx.lineTo(75, 25);
ctx.lineTo(75, 50);
ctx.lineTo(25, 50);
ctx.lineTo(25, 25);
ctx.lineTo(0, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* Z2
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 50);
ctx.lineTo(25, 50);
ctx.lineTo(25, 75);
ctx.lineTo(0, 75);
ctx.lineTo(0, 25);
ctx.lineTo(25, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* L1
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(25, 0);
ctx.lineTo(25, 50);
ctx.lineTo(50, 50);
ctx.lineTo(50, 75);
ctx.lineTo(0, 75);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* L25
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(75, 0);
ctx.lineTo(75, 25);
ctx.lineTo(25, 25);
ctx.lineTo(25, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* L50
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 75);
ctx.lineTo(25, 75);
ctx.lineTo(25, 25);
ctx.lineTo(0, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* L75
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(50, 0);
ctx.lineTo(75, 0);
ctx.lineTo(75, 50);
ctx.lineTo(0, 50);
ctx.lineTo(0, 25);
ctx.lineTo(50, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/


/* J1
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 75);
ctx.lineTo(25, 75);
ctx.lineTo(0, 75);
ctx.lineTo(0, 50);
ctx.lineTo(25, 50);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* J25
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(25, 0);
ctx.lineTo(25, 25);
ctx.lineTo(75, 25);
ctx.lineTo(75, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* J50
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 25);
ctx.lineTo(25, 25);
ctx.lineTo(25, 75);
ctx.lineTo(0, 75);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* J75
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(75, 0);
ctx.lineTo(75, 50);
ctx.lineTo(50, 50);
ctx.lineTo(50, 25);
ctx.lineTo(0, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* T1
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(75, 0);
ctx.lineTo(75, 25);
ctx.lineTo(50, 25);
ctx.lineTo(50, 50);
ctx.lineTo(25, 50);
ctx.lineTo(25, 25);
ctx.lineTo(0, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* T25
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 75);
ctx.lineTo(25, 75);
ctx.lineTo(25, 50);
ctx.lineTo(0, 50);
ctx.lineTo(0, 25);
ctx.lineTo(25, 25);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* T50
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 25);
ctx.lineTo(25, 25);
ctx.lineTo(25, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 25);
ctx.lineTo(75, 25);
ctx.lineTo(75, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/

/* T75
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(25, 0);
ctx.lineTo(25, 25);
ctx.lineTo(50, 25);
ctx.lineTo(50, 50);
ctx.lineTo(25, 50);
ctx.lineTo(25, 75);
ctx.lineTo(0, 75);
ctx.fillStyle = "#FF8001";
ctx.fill();
*/


// ------------------------------------------------------

// ------ PSUEDO CODE BELOW ------------

/* Step 1: there is a function with switches and each shape will be a switch. There will be an array with each shape name and it will be randomly generated. The variable will be used to select the shape. */


//On each function call, grab one of these randomly
const shapeArray = ['o1', 'o2', 'i1', 'i2', 's1', 's2', 'z1', 'z2', 'l1', 'l25', 'l50', 'l75', 'j1', 'j25', 'j50', 'j75', 't1', 't25', 't50', 't75'];
const canvas = document.getElementById("canvas");

setInterval(() => {
  draw();
}, 500);


function draw(){

  let shape = shapeArray[Math.floor(Math.random() * shapeArray.length)];
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  let halfBoard = 250;

  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  switch (shape) {
    case "o1": {
      ctx.fillStyle = randomColor;
      ctx.fillRect(0, 0, 50 + halfBoard, 50);
      break;
    }
    case "o2": {
      ctx.fillStyle = randomColor;
      ctx.fillRect(0, 0, 50 + halfBoard, 50);
      break;
    }
    case "i1": {
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0, 25, 100);
      break;
    }
    case "i2": {
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0, 100, 25);
      break;
    }
    case "s1": {
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "s2": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "z1": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "z2": {
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l1": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(50 + halfBoard, 50);
      ctx.lineTo(50 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 75);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l25": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l50": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l75": {
      ctx.beginPath();
      ctx.moveTo(50 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j1": {
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j25": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j50": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 75);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j75": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 50);
      ctx.lineTo(50 + halfBoard, 50);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t1": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 0);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t25": {
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t50": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(25 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 0);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 25);
      ctx.lineTo(75 + halfBoard, 50);
      ctx.lineTo(0 + halfBoard, 50);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t75": {
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 0);
      ctx.lineTo(25 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 25);
      ctx.lineTo(50 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 50);
      ctx.lineTo(25 + halfBoard, 75);
      ctx.lineTo(0 + halfBoard, 75);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    default: {
      console.log("Empty action received.");
    }
  }

}
