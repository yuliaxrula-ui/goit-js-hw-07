function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Створюємо функцію-обробник кліку
const changeColor = () => {
  const randomColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
  //Використовуємо вбудовану властивість щоб не шукати селектором
  document.body.style.backgroundColor = randomColor;
};


colorButton.addEventListener("click", changeColor);