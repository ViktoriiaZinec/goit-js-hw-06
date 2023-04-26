function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  let size = 30;
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    const divRef = document.createElement("div");
    divRef.style.width = size + "px";
    divRef.style.height = size + "px";
    const randomColor = getRandomHexColor();
    divRef.style.backgroundColor = randomColor;
    size += 10;
    boxesRef.append(divRef);
  }
}

btnCreate.addEventListener("click", () => {
  const amount = inputRef.value;
  createBoxes(amount);
});

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
