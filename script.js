let ball = document.querySelector("#ball");
let ball2 = document.querySelector("#ball2");
let score = document.querySelector('#live-score');
let restart = document.querySelector('#Restart');
let beep = document.querySelector('#beep');

// fetching initial position of ball 
// but taking one ball as refrence as initially both same position
let Top = ball.style.top;
let Top2 = ball.style.top;
let Left = ball.style.left;
let Left2 = ball.style.left;


// fetching window height
let windowHeight = window.innerHeight;
// fetching window width;
let windowWidth = window.innerWidth;

// getBoundingClientRect = return size of elements and their position 
// here we get all attributes of ball like width height top left etc at one place ;
let ballAttr = ball.getBoundingClientRect();
let ball2Attr = ball2.getBoundingClientRect();


// here we separate width and height of both balls
let ballWidth = ballAttr.width;
let ball2Width = ball2Attr.width;
let ballHeight = ballAttr.height;
let ball2Height = ball2Attr.height;
var counter = 0;



// this function return new postion(randomly); 
function newPos() {
  //creating logic so that ball dont get out of window height and width
  let newX = Math.floor((Math.random() * windowHeight) + 1) - ballHeight;
  let newY = Math.floor((Math.random() * windowWidth) + 1) - ballWidth;

  // creating logic so that ball dont get above of window height and width
  if (newX < 200) newX = 200;
  if (newY < 0) newY = 0;

  return { x: newX, y: newY };
}

// adding 'px' at last of value
function value(number) {
  return number + "px";
}



// main function excute to change ball position
function catchIt() {

  let pos = newPos();
  Top = value(pos.x);
  Left = value(pos.y);
  ball.style.top = Top;
  ball.style.left = Left;

}
function catchIt2() {

  let pos = newPos();
  Top2 = value(pos.x);
  Left2 = value(pos.y);
  ball2.style.top = Top2;
  ball2.style.left = Left2;

}


// adding events 

// for beep sound
ball.addEventListener('mouseover', () => {
  beep.play();
});
ball2.addEventListener('mouseover', () => {
  beep.play();
});

// beep sound function
function beepSound() {
  beep.play();
}


restart.addEventListener('click', () => {
  beepSound();
  counter = 0;
  score.innerHTML = 0;
})
ball.addEventListener('mouseover', () => {
  // beepSound();
  counter += 1;
  score.innerHTML = counter;
});
ball2.addEventListener('mouseover', () => {
  // beepSound();
  counter += 1;
  score.innerHTML = counter;
});

// mouseover to both balls
ball.addEventListener('mouseover', catchIt);
ball2.addEventListener('mouseover', catchIt2);