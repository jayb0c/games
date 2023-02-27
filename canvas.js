

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

/* Step 2: there needs to be a log book created which keeps track of all of the pieces locations. Whenever a new piece is dropped from the top, the array needs to be looped through and each piece needs to be re-placed on the screen.
*/

//On each function call, grab one of these randomly
console.log(postions, 'map');
const shapeArray = ['o1', 'o2', 'i1', 'i2', 's1', 's2', 'z1', 'z2', 'l1', 'l25', 'l50', 'l75', 'j1', 'j25', 'j50', 'j75', 't1', 't25', 't50', 't75'];
const colorPallete = ['#F2EEAE', '#F2DF7E', '#F2BC79','#F26E50', '#36D97D'];
const canvas = document.getElementById("canvas");
let drawTimes = 0;


setInterval(() => {
  if(drawTimes > 700){return};
  draw();
  drawTimes++;
}, 10);


let dropping = 0;
let shape = 'o1';
let randomColor = '#F2EEAE';
let colorIndex = 1;

function draw(){
  if(dropping >= 699){
    //dropping = 699;
    //shape = shapeArray[Math.floor(Math.random() * shapeArray.length)];
    randomColor = colorPallete[colorIndex];
    colorIndex++;
  }

  let halfBoard = 250; //sets pieces in middle of board. Will be used to move x axis.

  console.log(dropping);
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  switch (shape) {
    case "o1": {
      if(dropping < 700){
        dropping += 1;
      } else if (dropping === 700) {
        let shape = {};
        shape['color'] = randomColor;
        shape['dropping'] = dropping;
        postions.o1.push(shape);
        console.log(postions.o1);
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(0 + halfBoard, 0 + dropping, 50, 50);
      break;
    }
    case "i1": {
      if (dropping < 650) {
        dropping += 1;
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0 + dropping, 25, 100);
      break;
    }
    case "i2": {
      if (dropping < 725) {
        dropping += 1;
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0 + dropping, 100, 25);
      break;
    }
    case "s1": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "s2": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "z1": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "z2": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l1": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(50 + halfBoard, 50 + dropping);
      ctx.lineTo(50 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 75 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l25": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l50": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "l75": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j1": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j25": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j50": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 75 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "j75": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 50 + dropping);
      ctx.lineTo(50 + halfBoard, 50 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t1": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 0 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t25": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t50": {
      if (dropping < 700) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 0 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 25 + dropping);
      ctx.lineTo(75 + halfBoard, 50 + dropping);
      ctx.lineTo(0 + halfBoard, 50 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    case "t75": {
      if (dropping < 675) {
        dropping += 1;
      }
      ctx.beginPath();
      ctx.moveTo(0 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 0 + dropping);
      ctx.lineTo(25 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 25 + dropping);
      ctx.lineTo(50 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 50 + dropping);
      ctx.lineTo(25 + halfBoard, 75 + dropping);
      ctx.lineTo(0 + halfBoard, 75 + dropping);
      ctx.fillStyle = randomColor;
      ctx.fill();
      break;
    }
    default: {
      console.log("Empty action received.");
    }
  }

}
