// ------ TETRIS ------------

const positions = [];
const shapeArray = ['o1', 'o2', 'i1', 'i2', 's1', 's2', 'z1', 'z2', 'l1', 'l25', 'l50', 'l75', 'j1', 'j25', 'j50', 'j75', 't1', 't25', 't50', 't75'];
const colorPallete = ['#C7FFED', '#D8FFDB', '#008F8C', '#015958', '#023535'];
const canvas = document.getElementById("canvas");

const myInterval = setInterval(draw, 10);



let dropping = 0;
let shape = 'o1';
let randomColor = '#F2EEAE';
let colorIndex = 1;
let halfBoard = 0;
let shapeSwitch = false;

function draw(){

  if (shapeSwitch === true) {
    clearInterval(myInterval);
    //randomColor = colorPallete[colorIndex];
    //colorIndex++;
  }

  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Jacob, set some type of parameter for resetting the board vs placing new pieces. Use the obj
  //to place rest pieces vs drawing fresh pieces when it's not being reset.
  function placeShape(){
    if(halfBoard > 550){
      if (shape === 'i2' || shape === 'z2' || shape === 's2' || shape === 'l25' || shape === 'l75' || shape === 'j25' || shape === 'j75'){
        halfBoard = 500;
      } else{
        halfBoard = 550;
      }
    }
    if(halfBoard < 0){
      halfBoard = 0;
    }
    if (shape === 'o1') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
        console.log(positions);
      }
      if (dropping < 700){
        dropping += 1;
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(0 + halfBoard, 0 + dropping, 50, 50);
    } else if (shape === 'i1'){
      if (dropping === 650) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
      if (dropping < 650) {
        dropping += 1;
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0 + dropping, 25, 100);
    } else if (shape === 'i2') {
      if (dropping === 725) {
        shapeSwitch = true
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
      if (dropping < 725) {
        dropping += 1;
      }
      ctx.fillStyle = randomColor;
      ctx.fillRect(halfBoard, 0 + dropping, 100, 25);
    } else if (shape === 's1') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 's2') {
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        postions.push(place);
      }
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
    } else if (shape === 'z1') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 'z2'){
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        postions.push(place);
      }
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
    } else if (shape === 'l1') {
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 'l25') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if(shape === 'l50') {
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if(shape === 'l75') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 'j1'){
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 'j25') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 'j50') {
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 'j75') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 't1') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 't25') {
      if (dropping === 675) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 't50') {
      if (dropping === 700) {
        shapeSwitch = true;
        let place = {};
        place['shape'] = shape;
        place['color'] = randomColor;
        place['y'] = dropping;
        place['x'] = halfBoard;
        positions.push(place);
      }
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
    } else if (shape === 't75') {
      if (dropping === 675) {
        shapeSwitch = true;
        let shape = {};
        shape['shape'] = shape;
        shape['color'] = randomColor;
        shape['y'] = dropping;
        shape['x'] = halfBoard;
        positions.push(shape);
      }
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
    } else {
      console.log("Empty action received.");
    }
  }
  placeShape();
}


/* Key movement, X-axis */

document.addEventListener("keydown", (event) => {
  if(halfBoard < 0){
    halfBoard = 0;
    } else if (halfBoard > 550 || halfBoard > 500) {
    if (shape === 'o1' || shape === 'i2' || shape === 'z2' || shape === 's2' || shape === 'l25' || shape === 'l75' || shape === 'j25' || shape === 'j75') {
      halfBoard = 500;
    } else if(shape === 'i2') {
      halfBoard = 550;
    }
  } else {
    if (event.keyCode === 39) {
      if (shape === 'z2' || shape === 's2' || shape === 'l25' || shape === 'l75' || shape === 'j25' || shape === 'j75') {
        halfBoard += 75;
      } else if (shape === 'i2'){
        halfBoard += 100;
      } else {
        halfBoard += 50;
      }
    } else if (event.keyCode === 37) {
      if (shape === 'z2' || shape === 's2' || shape === 'l25' || shape === 'l75' || shape === 'j25' || shape === 'j75') {
        halfBoard -= 75;
      } else if (shape === 'i2') {
        halfBoard -= 100;
      } else {
        halfBoard -= 50;
      }
    }
  }

});
