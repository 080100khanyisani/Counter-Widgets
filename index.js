let counter = 0;
const maxCounterValue = 10;

document.addEventListener("DOMContentLoaded", function() {
    const counterElem = document.querySelector('.counter');
    const incrementBtn = document.querySelector('.increment');
    const decrementBtn = document.querySelector('.decrement');
    const resetBtn = document.querySelector('.reset-js');
    const caption = document.querySelector('.caption');

    caption.innerText = 'Counter';

    incrementBtn.addEventListener('click', function() {
        counter++;
        if (counter > maxCounterValue) {
            counter = 0;
        }
        counterElem.innerText = counter;
    });

    decrementBtn.addEventListener('click', function() {
        counter = Math.max(0, counter - 1);
        counterElem.innerText = counter;
    });

    resetBtn.addEventListener('click', function() {
        counter = 0;
        counterElem.innerText = counter;
    });
});
