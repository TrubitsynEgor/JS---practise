'use strict'

//? Привидите вырожения в camelCase

const camelize = (str) => {
	return str
		.split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']

		.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
		// Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
		// превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
		.join('');  // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
console.log(camelize("background-color")); // backgroundColor
console.log(camelize("font-size")); // fontSize
