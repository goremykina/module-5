// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.forEach(function(item) {
	console.log(item);
});
