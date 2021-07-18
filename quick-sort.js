// quick sort sorts the array by selecting a pivot point in the array and placing it at its
// correct position in the array.

function getPivotIndex(arr, start = 0, end = arr.length + 1) {
	function swap(firstIndex, secondIndex) {
		const temp = arr[firstIndex];
		arr[firstIndex] = arr[secondIndex];
		arr[secondIndex] = temp;
	}

	var pivot = arr[start];
	var swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(i, swapIdx);
		}
	}

	swap(start, swapIdx);
	console.log(swapIdx, arr);
	return swapIdx;
}

function quickSort(numberArray, start = 0, end = numberArray.length) {
	if (start < end) {
		const pivotIndex = getPivotIndex(numberArray, start, end);
		quickSort(numberArray, start, pivotIndex - 1);
		quickSort(numberArray, pivotIndex + 1, end);
	}
	return numberArray;
}

console.log(quickSort([9, 100, 5, 32, 1, 99, 3, 3, 0, 200, 2]));
