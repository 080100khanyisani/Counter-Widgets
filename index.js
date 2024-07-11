let counter = 0;
const maxCounterValue = 10;

const counterElem = document.querySelector('.counter');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
const resetBtn = document.querySelector('.reset-js');

incrementBtn.addEventListener('click', function() {
    counter++;
    if (counter > maxCounterValue) {
        counter = 0;
    }
    counterElem.innerText = counter;
});

decrementBtn.addEventListener('click', function() {
    if (counter > 0) {
        counter--;
    }
    counterElem.innerText = counter;
});

resetBtn.addEventListener('click', function() {
    counter = 0;
    counterElem.innerText = counter;
});

const caption = document.querySelector('.caption');
caption.innerText = 'Counter';
console.log(caption);
