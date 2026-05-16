const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

//Вішаємо слухач подію на інпут імені і прибираємо зайві пробіли. Якщо рядок порожній, вітаємося з анонімом
nameInput.addEventListener('input', (event) => {
  const inputValue = event.currentTarget.value.trim();
  nameOutput.textContent = inputValue || 'Anonymous';
});

/*другий варіант не через тернарний оператор а через if
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handleInput = (event) => {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
};

nameInput.addEventListener('input', handleInput);*/
