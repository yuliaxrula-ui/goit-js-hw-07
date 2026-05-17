//Знаходимо основні лі-шки
const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

//Проходимося по масиву лішок 
categories.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});
