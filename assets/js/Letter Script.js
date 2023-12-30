// JavaScript code
// Вибираємо тіло документа та контейнер для конвертів
const body = document.body;
const envelopeContainer = document.getElementById('envelopeContainer');
let returnButton;
// Функція для створення нового конверта
function createEnvelope(text, topPosition, leftPosition) {
    // Створюємо новий елемент конверта
    const newEnvelope = document.createElement('div');
    newEnvelope.classList.add('wrapper');

    // Встановлюємо позицію конверта
    newEnvelope.style.position = 'absolute';
    newEnvelope.style.top = topPosition + '%';
    newEnvelope.style.left = leftPosition + '%';

    // Копіюємо структуру конверта в новий елемент
    newEnvelope.innerHTML = `
                <div class="lid one"></div>
                <div class="lid two"></div>
                <div class="envelope"></div>
                <div class="heart"></div>
                <div class="letter">
                    <p>${text}</p>
                </div>
            `;

    // Додаємо новий конверт до контейнера для конвертів
    envelopeContainer.appendChild(newEnvelope);

    // Додаємо подію кліку на серце для відкриття конверта
    const heart = newEnvelope.querySelector('.heart');
    heart.addEventListener('click', () => {
        newEnvelope.classList.toggle('flap');
    });
}



function showEnvelopes() {
    createEnvelope('Поздравляю с Новым Годом милашкарчик!' +
    'Желаю чтобы етот год был для тебя  намного лучше и спо-' +
    'койнее. Чтобы с учебой было меньше мороки и ты обязятально доучишься ведь ты умничка)) А еще побольше нервных' + 'клеток, так как слишком много уже умерло в борьбе с учебой.' +

    'Также пусть тебя окружают только хорошие и добрые люди которым ты можеш довериться полностью и которые никогда тебя не кинут..' +

    'С Новым Годом, лисичка🥺 ❤️', 48.5,4);

}




function removeEnvelopes() {
    envelopeContainer.innerHTML = ''; // Clear all envelopes
    if (returnButton) {
        returnButton.style.display = 'none'; // Hide the button
    }

}

function goBack() {
    // Your code to go back to the previous page or perform desired action
    window.history.back();
}
