import { Notify } from 'notiflix/build/notiflix-notify-aio';

const button = document.querySelector("button[type=submit]");
const form = document.querySelector(".form")
const delayInput = document.querySelector("input[name=delay]");
const stepInput = document.querySelector("input[name=step]");
const amountInput = document.querySelector("input[name=amount]");

let delay = delayInput.value;
const step = stepInput.value;
const amount = amountInput.value; 

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
  resolve (`Fulfilled promise ${position} in ${delay}ms`)
  } else {
    reject(`Rejected promise ${position} in ${delay}ms`);
  }
});
}

// function onSubmit(event) {
// event.preventDefault();
// for(let position = 1; position <= amount, position =+ 1) {
//   createPromise(position, delay)
//   .then
// }
// };

//form.addEventListener("submit", onSubmit);