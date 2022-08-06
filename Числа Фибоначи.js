'use strict'


//? Числа Фибоначчи
/* Последовательность чисел Фибоначчи определяется формулой 
Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.*/
//todo| т.е fibonacci(0) будет равен = 0; fibonacci(1) будет равен = 1;
//todo| а fibonacci(n) = fibonacci(n-1) + fibonacci(n-2), и при этом n > 1;

// Все способы по сути одинаковы просто используется разный формат записи:
//? 1. Стандартный function declaration с условным ветвлением IF
function fibonacciOne(n) {
	if (n <= 1) {
		return n // вернем n если n <= 1, ограничитель для рекурсии
	} else {
		return fibonacciOne(n - 1) + fibonacciOne(n - 2)
	}
}
console.log(fibonacciOne(6));//8


//? 2. function declaration + тернарный оператор "?"
function fibonacci(n) {
	return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n
}
console.log(fibonacci(6));//8


//? 3. function expression + arrow funvtion + неявный return +тернарный оператор "?" все в одну строчку
const fibonacciTwo = (n) => n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n
console.log(fibonacciTwo(6)); //8