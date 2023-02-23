/* The board and the general block container */
var gameBoard = document.getElementById('board');
var defaultBlock = document.createElement('div');
defaultBlock.className = 'template';

/* The default block is an empty grid which is 3 wide by 4 blocks tall. Each shape has a name and an array of numbers that describe which blocks will get colored in on the default block shape to make the new shape. Grid blocks that are not needed to make a shape will be hidden and only the visible squares will interact with eachother in gameplay.

let shapes = [
  {
    "name": "Oblock",
    "numbers": [],
    "active": false
  },
  {
    "name": "Iblock",
    "numbers": [],
    "active": true
  },
  {
    "name": "Sblock",
    "numbers": [],
    "active": false
  },
  {
    "name": "Zblock",
    "numbers": [],
    "active": false
  },
  {
    "name": "Lblock",
    "numbers": [],
    "active": false
  },
  {
    "name": "Jblock",
    "numbers": [],
    "active": false
  },
  {
    "name": "Tblock",
    "numbers": [],
    "active": false
  },
];

var index = shapes.findIndex(item => item.active === true);
console.log(shapes[index]);

for (var i = 0; i < 12; i++ ){
  let square = document.createElement('div');
  square.id = i;
  square.className = "square";
  defaultBlock.appendChild(square);
}

gameBoard.appendChild(defaultBlock);
