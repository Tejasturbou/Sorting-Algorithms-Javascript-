// Insertion sort builds up the sort by gradually creating a larger left half which is always sorted.
// Write insertion sort code again for better understanding.

function insertionSort(numberArray) {
	for (let index = 1; index < numberArray.length; index++) {
		let currentVal = numberArray[index];
		for (var j = index - 1; j >= 0 && numberArray[j] > currentVal; j--) {
			numberArray[j + 1] = numberArray[j];
		}
		numberArray[j + 1] = currentVal;
	}
	return numberArray;
}

console.log(insertionSort([2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535]));
console.log(insertionSort([2, 32, 4, 54, 2, 42, 535]));
console.log(insertionSort([2, 32, 4]));

console.log(insertionSort([2, 32]));
console.log(insertionSort([500, 2]));

console.log(
	insertionSort([
		2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54,
		25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42,
		134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54,
		2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2,
		32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54,
		25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42,
		134, 54, 25, 535, 2, 32, 4, 54, 2, 42, 42, 134, 54, 25, 535, 2, 32, 4, 54,
		2, 42, 42, 134, 54, 25, 535,
	])
);
