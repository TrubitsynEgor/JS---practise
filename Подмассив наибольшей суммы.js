//? Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//* Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;

	for (let item of arr) { // для каждого элемента массива
		partialSum += item; // добавляем значение элемента к partialSum
		maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
		if (partialSum < 0) partialSum = 0; // ноль если отрицательное
	}

	return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
