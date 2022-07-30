'use strict'

//? Напишите функцию filterRange(arr, a, b), 
//? которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//* Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.slice(a, b);
} //todo|Методом SLICE

let filtered = filterRange(arr, 1, 4);
console.log(filtered); // (3) [3, 8, 1] // Найдены элементы между a и b и отдан массив этих элементов
console.log(arr); // (4) [5, 3, 8, 1] Исходный массив не изменен

//?==================================================================>

let filterRangeTwo = (arr, a, b) => {
	return arr.filter((item) => (a <= item && item <= b)) //Условия при котором на item вернется в новый [...]
} //todo|Методом FILTER
let filteredTwo = filterRangeTwo(arr, 1, 4);

console.log(filteredTwo);// (2) [3, 1] (совпадающие значения)
console.log(arr);// (4) [5, 3, 8, 1] Исходный массив не изменен