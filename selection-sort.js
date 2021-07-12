// selection sort in all of its iteration finds the minimum unsorted number in an array and
// places that minimum value from the starting position of the array in its sorted position.
// At the end of each loop we make a swap.

function selectionSort(numberArray, logic) {
	if (numberArray.length < 2) return numberArray;
	let minIndex = 0;
	let startIndex = 0;
	let nextIndex = startIndex + 1;

	while (startIndex < numberArray.length) {
		if (logic(numberArray[minIndex], numberArray[nextIndex])) {
			minIndex = nextIndex;
		}
		nextIndex += 1;
		if (nextIndex > numberArray.length - 1) {
			const temp = numberArray[startIndex];
			numberArray[startIndex] = numberArray[minIndex];
			numberArray[minIndex] = temp;
			startIndex += 1;
			minIndex = startIndex;
			nextIndex = startIndex + 1;
		}
	}

	return numberArray;
}

function compare(minimumValue, value) {
	return minimumValue > value;
}

console.log(
	selectionSort([2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535], compare)
);
console.log(selectionSort([2, 32, 4, 54, 2, 42, 535], compare));
console.log(selectionSort([2, 32, 4], compare));

console.log(selectionSort([2, 32], compare));
console.log(selectionSort([500, 2], compare));

console.log(
	selectionSort(
		[
			2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134,
			54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2,
			42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2,
			32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54,
			25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42,
			42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4,
			54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25,
			535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535,
		],
		compare
	)
);
