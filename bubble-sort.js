// bubble sort puts the largest value at last position of the array. i.e in first full iteration of the array largest value will be
// placed at last position, 2nd full iteration of the array 2nd largest value will be placed at second last position and so on.
// This way array is sorted in ascending order (The largest value bubbles to the last position it can get in an array)

function bubbleSort(array, logic) {
	let swapped = false;
	for (var i = array.length; i > 0; i--) {
		swapped = false;
		for (var j = 0; j < i - 1; j++) {
			if (logic(array[j], array[j + 1])) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}

	return array;
}

function compare(operand1, operand2) {
	return operand1 > operand2;
}

console.log(bubbleSort([3, 12, 3, 21, 321, 21, 3, 1, 213, 441], compare));
console.log(bubbleSort([3, 4, 5, 6, 4, 5, 6, 6], compare));
