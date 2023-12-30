// Получите элемент с классом birthday-gift
const birthdayGift = document.querySelector('.birthday-gift');

// Добавьте класс 'visible' через определенное время (например, после загрузки страницы или какой-то задержки)
setTimeout(() => {
    birthdayGift.classList.add('visible');
}, 1000); // Пример задержки в 1 секунду (1000 миллисекунд)
