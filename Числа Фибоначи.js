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

//! При больших значениях n такое решение будет работать очень долго.
//! Например, fib(77) может повесить браузер на некоторое время, съев все ресурсы процессора.
//* Это потому, что функция порождает обширное дерево вложенных вызовов.
//* При этом ряд значений вычисляется много раз снова и снова.
//todo| Можно это оптимизировать, запоминая уже вычисленные значения: если значение, скажем,
//todo| fibonacci(3) вычислено однажды, затем мы просто переиспользуем это значение для последующих вычислений.

//todo| Другим вариантом было бы отказаться от рекурсии и использовать совершенно другой алгоритм на основе цикла.|

/* Вместо того, чтобы начинать с n и вычислять необходимые предыдущие значения, можно написать цикл, который начнёт с 1 и 2,
затем из них получит fib(3) как их сумму, затем fib(4)как сумму предыдущих значений, затем fib(5) и так далее,
до финального результата. На каждом шаге нам нужно помнить только значения двух предыдущих чисел последовательности.*/

function fib(n) {
	let a = 1; // a = fib(1)
	let b = 1; // b = fib(2) эти значения по определению равны 1
	for (let i = 3; i <= n; i++) {//Цикл начинается с i=3, потому что первое и второе значения последовательности заданы a=1, b=1.
		let c = a + b; //[1] получим c = fib(3) как их сумму [2]  // c = fib(4)
		a = b; // теперь a = fib(2)
		b = c; // теперь b = fib(3)
	}// Теперь мы хотим получить fib(4) = fib(2) + fib(3).
	// Переставим переменные: a,b, присвоим значения fib(2),fib(3), тогда c можно получить как их сумму:
	return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

[50] /*1 иттерация теперь у нас есть fib(1), fib(2), fib(3)
a  b  c
1, 1, 2
*/
/*2 иттерация имеем последовательность:
	 a  b  c
1, 1, 2, 3
при этом храним лиш 3 значения в памяти!*/
//? …И так далее, пока не получим искомое значение. Это намного быстрее рекурсии и не требует повторных вычислений.

//todo| Такой способ называется динамическое программирование снизу вверх.|
// https://ru.wikipedia.org/wiki/Динамическое_программирование

