'use strict'

function makeCounter() {
	let count = 0;

	function counter() {
		return updateDisplay(count++)
	};

	counter.set = value => count = value;
	counter.decrease = () => {
		return updateDisplay(count--);
	}
	return counter
}
let counter = makeCounter();

const btnIncrement = document.querySelector('.block_1');
btnIncrement.addEventListener('click', counter);

const btnDicrement = document.querySelector('.block_2');
btnDicrement.addEventListener('click', counter.decrease);

function updateDisplay(val) {
	document.querySelector('.block_3').innerHTML = val;
}










