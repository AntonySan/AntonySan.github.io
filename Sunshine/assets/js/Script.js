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
    newEnvelope.style.top = topPosition + 'px';
    newEnvelope.style.left = leftPosition + 'px';

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
    /*1*/createEnvelope('Ты милашкарчик', 280, 735);
    /*2*/createEnvelope('Ты самая лучшая', 280, 810);

    /*3*/createEnvelope('Твоя улыбка самое прекрасное что есть в этом мире', 330, 885);

    /*4*/createEnvelope('Love Letter', 380, 960);

    /*5*/createEnvelope('Love Letter', 330, 1035);

   /*6*/ createEnvelope('Love Letter', 280, 1110);
   /*7*/ createEnvelope('Love Letter', 280, 1185);

   /*8*/ createEnvelope('Love Letter', 330, 1260);

    /*9*/createEnvelope('Love Letter', 380, 1335);
    /*10*/createEnvelope('Love Letter', 430, 1335);
    /*11*/createEnvelope('Love Letter', 480, 1335);
    /*12*/createEnvelope('Love Letter', 530, 1335);

    /*13*/createEnvelope('Love Letter', 580, 1260);
    /*14*/createEnvelope('Love Letter', 630, 1185);
   /*15*/ createEnvelope('Love Letter', 680, 1110);
   /*16*/ createEnvelope('Love Letter', 730, 1035);

   /*17*/createEnvelope('Love Letter', 780, 960);

   /*18*/ createEnvelope('Love Letter', 330, 660);

    /*19*/createEnvelope('Love Letter', 380, 585);
    /*20*/createEnvelope('Love Letter', 430, 585);
    /*21*/createEnvelope('Love Letter', 480, 585);
    /*22*/createEnvelope('Love Letter', 530, 585);

    /*23*/createEnvelope('Love Letter', 580, 660);
    /*24*/createEnvelope('Love Letter', 630, 735);
    /*25*/createEnvelope('Love Letter', 680, 810);
    /*26*/createEnvelope('Love Letter', 730, 885);


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
