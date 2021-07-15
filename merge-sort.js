function mergeSort(numberArray) {
	if (numberArray.length < 2) return numberArray;
	const mid = Math.floor(numberArray.length / 2);
	let firstArray = mergeSort(numberArray.slice(0, mid));
	let secondArray = mergeSort(numberArray.slice(mid));

	return merge(firstArray, secondArray);
}

function merge(firstArray, secondArray) {
	resultArray = [];
	firstArrayIndex = 0;
	secondArrayIndex = 0;
	while (
		firstArrayIndex !== firstArray.length &&
		secondArrayIndex !== secondArray.length
	) {
		if (firstArray[firstArrayIndex] < secondArray[secondArrayIndex]) {
			this.resultArray.push(firstArray[firstArrayIndex]);
			firstArrayIndex += 1;
		} else {
			this.resultArray.push(secondArray[secondArrayIndex]);
			secondArrayIndex += 1;
		}
	}

	if (firstArrayIndex === firstArray.length)
		return [...resultArray, ...secondArray.slice(secondArrayIndex)];

	if (secondArrayIndex === secondArray.length)
		return [...resultArray, ...firstArray.slice(firstArrayIndex)];
}

console.log(mergeSort([2, 3, 4, 500, 6, 1, 32, 42]));
