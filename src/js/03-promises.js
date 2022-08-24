import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let delayInput = null;
let stepInput = null;
let amountInput = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = evt => {
  evt.preventDefault();
  if (!evt.target.tagName === 'BUTTON') return;

  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  delayInput = Number(delay.value);
  stepInput = Number(step.value);
  amountInput = Number(amount.value);

  for (let i = 1; i <= amountInput; i++) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayInput += stepInput;
  }

  evt.currentTarget.reset();
};
form.addEventListener('submit', submitHandler);