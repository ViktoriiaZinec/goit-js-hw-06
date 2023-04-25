const btnDecrement = document.querySelector("[data-action = 'decrement']");
const btnIncrement = document.querySelector("[data-action = 'increment']");
const span = document.querySelector("#value");
let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
