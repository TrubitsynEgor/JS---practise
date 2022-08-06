
//? Вычислить факториал
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два",
// и так далее до 1. Факториал n обозначается как n!  Формула {n! = n * (n - 1) * (n - 2) * ...*1}

function factorialFor(n) {
	let s = 1;
	for (let i = 1; i <= n; i++) {
		s *= i;
	}
	return s
}
console.log(factorialFor(5));



let s = 1;
function factorialRecursion(n) {
	if (n === 0) return;
	s *= n;
	factorialRecursion(--n)
}
factorialRecursion(5);
console.log(s);


//? По определению факториал n! можно записать как n * (n-1)!.
/* Другими словами, factorial(n) можно получить как n умноженное на результат factorial(n-1).
И результат для n-1, в свою очередь, может быть вычислен рекурсивно и так далее до 1.*/
function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // 120


//? Базисом рекурсии является значение 1. А можно было бы сделать базисом и 0, однако это добавило рекурсии дополнительный шаг:
function factorialRecursionTwo(n) {
	return n ? n * factorialRecursionTwo(n - 1) : 1 //т.е когда n == 0 Условие будет false и func return 1
}
console.log(factorialRecursionTwo(5));// 120