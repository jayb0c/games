// ------ PSUEDO CODE BELOW ------------

/* Step 1: there is a function with switches and each shape will be a switch. There will be an array with each shape name and it will be randomly generated. The variable will be used to select the shape. */

/* Step 2: there needs to be a log book created which keeps track of all of the pieces locations. Whenever a new piece is dropped from the top, the array needs to be looped through and each piece needs to be re-placed on the screen.
*/

//On each function call, grab one of these randomly
console.log(postions, 'map');
const shapeArray = ['o1', 'o2', 'i1', 'i2', 's1', 's2', 'z1', 'z2', 'l1', 'l25', 'l50', 'l75', 'j1', 'j25', 'j50', 'j75', 't1', 't25', 't50', 't75'];
const colorPallete = ['#C7FFED', '#D8FFDB', '#008F8C', '#015958', '#023535'];
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
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.i1.push(shape);
        console.log(postions.i1);
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0 + dropping, 25, 100);
      break;
    }
    case "i2": {
      if (dropping < 725) {
        dropping += 1;
      }
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.i2.push(shape);
        console.log(postions.i2);
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0 + dropping, 100, 25);
      break;
    }
    case "s1": {
      if (dropping < 700) {
        dropping += 1;
      }
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.s1.push(shape);
        console.log(postions.s1);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.s2.push(shape);
        console.log(postions.s2);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.z1.push(shape);
        console.log(postions.z1);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.z2.push(shape);
        console.log(postions.z2);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.l1.push(shape);
        console.log(postions.l1);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.l25.push(shape);
        console.log(postions.l25);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.l50.push(shape);
        console.log(postions.l50);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.l75.push(shape);
        console.log(postions.l75);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.j1.push(shape);
        console.log(postions.j1);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.j25.push(shape);
        console.log(postions.j25);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.j50.push(shape);
        console.log(postions.j50);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.j75.push(shape);
        console.log(postions.j75);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.t1.push(shape);
        console.log(postions.t1);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.t25.push(shape);
        console.log(postions.t25);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.t50.push(shape);
        console.log(postions.t50);
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
      else if (dropping === 700) {
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        postions.t75.push(shape);
        console.log(postions.t75);
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
