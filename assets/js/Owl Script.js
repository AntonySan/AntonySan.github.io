let currentImage = null; // Для отслеживания текущего изображения

const clickableElements = document.querySelectorAll('.frame div');

clickableElements.forEach(element => {
    element.addEventListener('click', () => {
        showEnvelopes();
    });
});
