import { Notify } from 'notiflix/build/notiflix-notify-aio';

//const button = document.querySelector("button[type=submit]");
const form = document.querySelector('.form');
// const delayInput = document.querySelector("input[name=delay]");
// const stepInput = document.querySelector("input[name=step]");
// const amountInput = document.querySelector("input[name=amount]");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const promiseResult = {
        position: position,
        delay: delay,
      };
      if (shouldResolve) {
        resolve(promiseResult);
      } else {
        reject(promiseResult);
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let position = 1; position <= amount; position++) {
    const currentDelay = delay + (step * (position - 1));
    
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

form.addEventListener('submit', onSubmit);
