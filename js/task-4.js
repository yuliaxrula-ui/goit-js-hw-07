// Знаходимо форму в DOM
const loginForm = document.querySelector('.login-form');

//  Створюємо функцію-обробник події сабміту
const handleSubmit = (event) => {
  event.preventDefault();

  //Дестуктуризація полів форми
  const { email, password } = event.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Валідація: перевіряємо, чи всі поля заповнені
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return; // Перериваємо виконання функції, якщо є порожні поля
  }

  // Створюємо об'єкт із даними, де ключі — це імена інпутів (name)
  const formData = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  };

  console.log(formData);

  //  Очищаємо поля форми після успішного сабміту
  event.currentTarget.reset();
};


loginForm.addEventListener('submit', handleSubmit);

/*найкращий варіант оскільки дозволяє додавати більшу кулькість полів
//Вибираємо форму
const loginForm = document.querySelector('.login-form');

//Функція обробник
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
  // Автоматично збираємо всі інпути форми за допомогою класу FormData
    const formDataInstance = new FormData(form);
    
  // Перетворюємо FormData на звичайний об'єкт { email: "...", password: "..." }
    const formData = Object.fromEntries(formDataInstance.entries());
    
  // Валідація: перевіряємо, чи є хоча б одне порожнє поле (після trim)
    const hasEmptyFields = Object.values(formData).some(value => value.trim() === '');
        if (hasEmptyFields) {
            alert('All form fields must be filled in');
            return;
        }
 
    const cleanedData = {};
        for (const key in formData) {
            cleanedData[key] = formData[key].trim();
            }
        
    // Вивід та очищення форми
    console.log(cleanedData);
    form.reset();
};


loginForm.addEventListener('submit', handleSubmit);*/
