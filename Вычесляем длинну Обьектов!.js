//? ===== Способ#1 "Object.keys" ====>
const student = { // Имеем объект с 4-мя свойствами
	name: 'Jun', // <-----
	level: 'VI', // <-----
	rollno: 12, // <-----
	delRollno: function delRollno() { // <-----
		delete this.rollno
	},
}; //todo| Метод Object.keys() возвращает массив ключей. Несложно догадаться, как теперь определить размер самого объекта:
// Выводим сразу в консоль и вызываем наш OBJ как аргумент метода "keys" объекта "Object"
console.log(Object.keys(student).length); // 4
// Можем вывести результат в отдельную переменную:
let sizeMyObject = Object.keys(student).length;
console.log(sizeMyObject); // 4


//? ===== Способ#2 Цикл "for...in" ====>
const student = {
	name: 'Jun',
	level: 'VI',
	rollno: 12,
	delRollno: function delRollno() {
		delete this.rollno
	},
};
function sizeMyObj() {
	let count = 0;
	for (let key in student) {
		count++; // Тут все довольно просто, перебераем наш ОBJ, на каждой иттерации инкрементим, и по 
	} // окончанию цикла возвращаем. 
	return count
}
console.log(sizeMyObj()); // 4   Ну и запускаем нашу функцию в методе "log". Обьекта "console"


//? ===== Способ#2 ДОБАВИТЬ СВОЙСТВ LENGTH В ПРОТОТИП ОБЪЕКТА ====> [ advanced ] - Нужно вернуться и разобраться по лучше!
const student = {
	name: 'Jun',
	level: 'VI',
	rollno: 12,
	delRollno: function delRollno() {
		delete this.rollno
	},
};

if (!Object.prototype.length) {
	Object.defineProperty(Object.prototype, 'length', { // Добавив свойство length к прототипу объекта, 
		get: function () { 															// мы сможем повторно использовать его во всем приложении:
			return Object.keys(this).length
		}
	})
};

console.log(student.length); // 4 