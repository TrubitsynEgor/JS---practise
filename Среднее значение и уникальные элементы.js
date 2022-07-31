'use strict'

//? Получить средний возраст
//* Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let galy = { name: "Галя", job: true };
let arr = [vasya, petya, masha, galy];

//? 1. Решение задачи без использования .reduce() (императивный цикл)

function getAverageAge(arr) {
	let ageSum = 0;
	let ageFound = 0;
	let item = null;

	for (let i = 0; i < arr.length; i++) {
		item = arr[i];
		if (item.age) {
			ageSum += item.age;
			ageFound += 1;
		}
	}
	let averageAge = ageSum / ageFound;
	return averageAge;
}

console.log(getAverageAge(arr));
//?==============================================>

//? 2. Простое решение №1: .filter(), .map() и нахождение суммы с помощью .reduce()
Вспомогательные функции
function isAge(el) {
	return el.age
};
function addAge(ageTotal, age) {
	return ageTotal + age
};
// Вычесляем:
const foundAge = arr.filter(isAge); // Вычесляем те эллементы в которых присутствует кей 'AGE';
console.log(foundAge); // (3) [{…}, {…}, {…}]
const getAge = foundAge.map(isAge); // Извлекаем значение 'AGE' в массив, получаем массив чисел;
console.log(getAge); // (3) [25, 30, 29]
/* Находим сумму всех оценок популярности. Обратите внимание на то, что второй параметр
указывает на то, что reduce нужно использовать начальное значение аккумулятора, равное 0.*/
const sumAge = getAge.reduce(addAge, 0);
console.log(sumAge); // 84 - сумма всех елементов массива чисел который мы получили map выше (getAge)

// Ну и вычисляем и выводим в консоль среднее значение.
const averageAge = sumAge / foundAge.length;
console.log(averageAge);


function isAge(el) {
	return el.age
};
function addAge({ ageTotal, ageCount }, age) {
	return { // Для представления нескольких значений, возвращаемых return, мы используем объект.
		ageTotal: ageTotal + age,
		ageCount: ageCount + 1,
	}
};


const initialInfo = {
	ageTotal: 0,
	ageCount: 0,
};
const infoAge = arr.filter(isAge)
	.map(isAge)
	.reduce(addAge, initialInfo);


const { ageTotal, ageCount } = infoAge;
const averageAge = ageTotal / ageCount;
console.log(averageAge);



//? Оставить уникальные элементы массива
//*Пусть arr – массив строк. Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];
//Простой и понятный вариант: //! НО КРАЙНЕ НЕ ОПТИМИЗИРОВАННЫЙ! Использовать только для маленьких массивов !!
function unique(arr) {
	let result = [];
	for (let str of arr) { // циклом for...of перебераем наш массив 
		if (!result.includes(str)) {// если в массиве result НЕ!incluses наш элемент(строка в данном примере)
			result.push(str);// То мы добавляем это строку в конец массива result!
		}
	}
	return result;
};
console.log(unique(strings)); // (3) ['кришна', 'харе', ':-O']


//* Более сложный и непонятный способ так и не вкурил всей логики происходящего, но работает
function unique(value, index, self) {
	return self.indexOf(value) === index
};
console.log(strings.filter(unique)); // (3) ['кришна', 'харе', ':-O']



