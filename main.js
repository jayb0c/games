/* The board and the general block container */
var gameBoard = document.getElementById('board');
var defaultBlock = document.createElement('div');
defaultBlock.className = 'defaultBlock';

/* The default block is an empty grid which is 3 wide by 4 blocks tall. Each shape has a name and an array of numbers that describe which blocks will get colored in on the default block shape to make the new shape. Grid blocks that are not needed to make a shape will be hidden and only the visible squares will interact with eachother in gameplay.
*/

let shapes = [
  {
    "name": "Oblock",
    "numbers": [7,8,10,11],
    "active": true
  },
  {
    "name": "Iblock",
    "numbers": [1,4,7,10],
    "active": false
  },
  {
    "name": "Sblock",
    "numbers": [7,8,9,10],
    "active": true
  },
  {
    "name": "Zblock",
    "numbers": [6,7,10,11],
    "active": false
  },
  {
    "name": "Lblock",
    "numbers": [3,6,9,10],
    "active": false
  },
  {
    "name": "Jblock",
    "numbers": [5,8,10,11],
    "active": false
  },
  {
    "name": "Tblock",
    "numbers": [7,9,10,11],
    "active": false
  },
];

currentPostion = {
  "x": 40,
  "y": 0
};

//top 650

let index = shapes.findIndex(item => item.active === true);
let indexNumbers = (shapes[index].numbers);
let falling = 0;

function sendShape(){
  for (var i = 0; i < 12; i++) {
    let square = document.createElement('div');
    square.id = i;
    square.className = "hideSquare";
    if (indexNumbers.includes(i)) {
      square.className = "square";
    }
    defaultBlock.appendChild(square);
  }
  defaultBlock.style.top = currentPostion.y + "px";
  defaultBlock.style.left = currentPostion.x + "%";
  gameBoard.appendChild(defaultBlock);
  currentPostion.y + 5;
}

sendShape();
