
function draw(move){
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 0 + move);
    ctx.lineTo(75, 0 + move);
    ctx.lineTo(75, 25 + move);
    ctx.lineTo(50, 25 + move);
    ctx.lineTo(50, 50 + move);
    ctx.lineTo(25, 50 + move);
    ctx.lineTo(25, 25 + move);
    ctx.lineTo(0, 25 + move);
    ctx.fillStyle = "#FF8001";
    ctx.fill();
    console.log(move);
}

let count = 0;
setInterval(() => {
  count+= 2;
  draw(count);
  console.log(count);
}, 100);

/* O-Block
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8001";
ctx.fillRect(0, 0, 50, 50);
*/

/* I-Block
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF8001";
ctx.fillRect(0, 0, 25, 100);
*/

/* S-Block
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
ctx.fill();
*/

/* Z-Block
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(25, 0);
ctx.fill();
*/

/* L-Block
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(25, 0);
ctx.lineTo(25, 50);
ctx.lineTo(50, 50);
ctx.lineTo(50, 75);
ctx.lineTo(0, 75);
ctx.fill();
*/

/* J-Block
ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 75);
ctx.lineTo(25, 75);
ctx.lineTo(0, 75);
ctx.lineTo(0, 50);
ctx.lineTo(25, 50);
ctx.fill();
*/

/* T-Block
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(75, 0);
ctx.lineTo(75, 25);
ctx.lineTo(50, 25);
ctx.lineTo(50, 50);
ctx.lineTo(25, 50);
ctx.lineTo(25, 25);
ctx.lineTo(0, 25);
ctx.fill();
*/
