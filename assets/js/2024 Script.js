// Отримати посилання на елемент контейнера анімації
const animationContainer = document.querySelector('.animation-container');
//const secAnim = document.querySelector('.sec-anim');
const trees = document.querySelector('.trees');
const mainSVG = document.querySelector('.mainSVG');

// Отримати посилання на кнопку
const button = document.querySelector('.button');

// Додати обробник події click на кнопку
button.addEventListener('click', function () {
    // Змінити клас контейнера анімації для відображення
    animationContainer.classList.remove('hidden');
    setTimeout(function () {
        //secAnim.classList.remove('hidden');
        //trees.classList.remove('hidden');
        mainSVG.classList.remove('hidden');
        mainSVG.style.animationPlayState = 'running';
    }, 3000);
  
    button.style.opacity = 0; // Зміна прозорості на нуль
});

// Отримуємо елементи, які потрібно видалити
const elementsToRemove = document.querySelectorAll('.ano_novo > span, .balao');


// Функція, що видаляє певні посилання на стилі
function removeStylesheets() {
    const stylesheetsToRemove = [
        "assets/css/Style 2024.css",
        "assets/css/Style Christmas Buttoncss.css"
    ];

    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        if (stylesheetsToRemove.includes(link.getAttribute('href'))) {
            link.remove();
        }
    });
}

// Функція, що видаляє елементи та певні посилання на стилі
function removeElementsAndStyles() {
    // Отримати посилання на елементи, які потрібно видалити
    const elementsToRemove = document.querySelectorAll('.ano_novo > span, .balao');

    // Видалення елементів
    elementsToRemove.forEach(element => {
        element.remove();
    });

    // Виклик функції для видалення певних посилань на стилі
    removeStylesheets();
}

// Отримуємо елементи з анімацією
const animatedElements = document.querySelectorAll('.ano_novo > span, .balao');

// Функція, яка буде викликана після завершення анімації
function onAnimationEnd() {
    // Затримка перед видаленням елементів та стилів (у мілісекундах)
    const delayBeforeRemoval = 10000; // Наприклад, 3 секунди

    // Запускаємо таймер для виклику функції видалення через затримку
    setTimeout(removeElementsAndStyles, delayBeforeRemoval);
}
onAnimationEnd();