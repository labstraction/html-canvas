
const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

const rectArray = [];

for (let i = 0; i < 1; i++) {

  const randomX = Math.random() * 500;
  const randomY = Math.random() * 380;
  const randomW = Math.random() * 100;
  const randomH = Math.random() * 100;
  const randomRed = Math.random() * 255;
  const randomGreen = Math.random() * 255;
  const randomBlue = Math.random() * 255;
  const randomAlpha = Math.random();
  const randomVX = randomBetween(-2, 2);
  const randomVY = randomBetween(-2, 2);

  const colorRgbString = 'rgba(' + randomRed +', ' + randomGreen + ', ' + randomBlue +', '+ randomAlpha +')';

  const rect = {x: randomX, y: randomY, width: randomW, height: randomH, color:colorRgbString, velX: randomVX, velY: randomVY};

  rectArray.push(rect);
  
}

// setInterval(() => {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   for (const rect of rectArray) {
//     context.fillStyle = rect.color;
//     context.fillRect(rect.x, rect.y, rect.width, rect.height);
//     rect.x = rect.x + rect.velX;
//     rect.y = rect.y + rect.velY;

//     if (rect.x < 0 || (rect.x + rect.width) > canvas.width) {
//       rect.velX = rect.velX * -1;
//     }

//     if (rect.y < 0 || (rect.y + rect.height) > canvas.height) {
//       rect.velY = rect.velY * -1;
//     }

//   }
// }, 10);
let actualTime = 0

function update(event){

  const deltaTime = event - actualTime;

  actualTime = event;

  console.log(deltaTime);

  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const rect of rectArray) {
    context.fillStyle = rect.color;
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
    rect.x = rect.x + rect.velX * deltaTime/10;
    rect.y = rect.y + rect.velY * deltaTime/10;
    if (rect.x < 0 || (rect.x + rect.width) > canvas.width) {
      rect.velX = rect.velX * -1 ;
    }
    if (rect.y < 0 || (rect.y + rect.height) > canvas.height) {
      rect.velY = rect.velY * -1;
    }
  }
  requestAnimationFrame(update)
}

requestAnimationFrame(update);

// setTimeout(() => {
//   console.log('ciao')
// }, 10000);


function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}



