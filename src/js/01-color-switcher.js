import "../css/common.css";

const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

let intervalID = null;

const randomColor = {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgc();
    }, 1000);
  },

  start() {
    startBtn.addEventListener('click', () => {
      this.interval();
      stopBtn.disabled = false;
      startBtn.disabled = true;
    });
    stopBtn.addEventListener('click', () => {
      clearInterval(intervalID);
      startBtn.disabled = false;
      stopBtn.disabled = true;
    });
  },
}

function changeBgc() {
  body.style.backgroundColor = `${randomColor.getRandomHexColor()}`
}

randomColor.start();