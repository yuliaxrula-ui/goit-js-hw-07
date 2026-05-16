const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

// Окрема функція для створення розмітки одного елемента (щоб використовувати повторно)
const createGalleryItemMarkup = pictureInfo => {
  return `<li><img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="300"></li>`;
};

const gallery = document.querySelector(".gallery");

// Створюємо фінальний рядок щоб вставити в ДОМ.Мар автоматично вписує в перший аргумент функці елемент масиву
const galleryMarkup = images.map(createGalleryItemMarkup).join("");

// Вставляємо в DOM за одну операцію
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

/*
другий варіант без створення окремої функції
const galleryList = document.querySelector('.gallery');
const galleryMarkup = images
  .map(image => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);


третій варіант з окремою фнкцією але досить складним однорядковим синтаксисом при додаванні в ДОМ:
const createGallery = pictureInfo =>
 `<li><img src ="${pictureInfo.url}" alt = "${pictureInfo.alt}"></li>`;
const gallery = document.querySelector(".gallery")
gallery.insertAdjacentHTML ('beforeend', images.map(image => createGallery(image)).join(""));


четвертий варіант через створення елементів:
const addPicture = pictureInfo => {
  const pictureList = document.createElement("li");
  const image = document.createElement("img"); 
  image.src = pictureInfo.url; 
  image.alt = pictureInfo.alt; 
  image.width = 300; // Додаємо розмір для краси
  pictureList.append(image);
  return pictureList; // Обов'язково повертаємо створений елемент
};
const picturesArray = images.map(addPicture);
const gallery = document.querySelector(".gallery"); // 
// Розпилюємо масив елементів на список
gallery.append(...picturesArray); */

