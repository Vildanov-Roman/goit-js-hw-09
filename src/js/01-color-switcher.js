import "../css/common.css";

const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

stopBtn.disabled = true;
let intervalID = null;

const randomColor = {
  DELAY: 500,
  
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgc();
    }, this.DELAY);
    stopBtn.disabled = false;
  },

  start() {
    startBtn.addEventListener('click', () => {
      this.interval();
      startBtn.disabled = true;
      stopBtn.disabled = false;
    });
    stopBtn.addEventListener('click', this.stop);
  },
  
  stop() {
    clearInterval(intervalID);
    stopBtn.disabled = true;
    startBtn.disabled = false;
  },
}

function changeBgc() {
  body.style.backgroundColor = `${randomColor.getRandomHexColor()}`
}

randomColor.start();






















// import '../css/common.css';

// const bodyEl = document.querySelector('body');
// const startEl = document.querySelector('button[data-start]');
// const stopEl = document.querySelector('button[data-stop]');
// stopEl.disabled = true;
// let intervalID = null;

// const randomBodyColorGenerator = {
//   DELAY: 1000,

//   getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   },

//   interval() {
//     intervalID = setInterval(() => {
//       changeBgColorRandom();
//     }, this.DELAY);
//     stopEl.disabled = false;
//   },

//   start() {
//     startEl.addEventListener('click', () => {
//       this.interval();
//       startEl.disabled = true;
//       stopEl.disabled = false;
//     });
//     stopEl.addEventListener('click', this.stop);
//   },

//   stop() {
//     clearInterval(intervalID);
//     stopEl.disabled = true;
//     startEl.disabled = false;
//   },
// };

// function changeBgColorRandom() {
//   bodyEl.style.backgroundColor = `${randomBodyColorGenerator.getRandomHexColor()}`;
// }

// randomBodyColorGenerator.start();

