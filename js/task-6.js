function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Шукаємо усі необхідні DOM-елементи за допомогою атрибутів та ID
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Функція створення колекції квадратів
function createBoxes(amount) {
  // Перед створенням нових квадратів очищаємо контейнер, щоб нова колекція рендерилась замість старої
  boxesContainer.innerHTML = "";

  const elements = []; 
  let size = 30; // Початковий розмір першого квадрата

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    elements.push(box);
    size += 10; // Наступний квадрат буде на 10px більшим
  }

  // Вставляємо всі створені елементи в DOM
  boxesContainer.append(...elements);
}

// Функція очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// 4. Слухач події на кнопку Create
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  // Валідація: перевіряємо, чи число в межах від 1 до 100 включно
 if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Очищаємо інпут
  } else {
    // Якщо валідація не пройшла — показуємо alert
    alert("Please insert a number between 1 and 100");
  }
});

// Слухач події на кнопку Destroy
destroyBtn.addEventListener("click", destroyBoxes);