// Radix sort comes under special type of sorting algorithms which sorts based on the data type.
// Radix sorts array of numbers. Numbers(including binary numbers) is the only data type it works with.
// It considers 10 boxes (0-9) each box representing a digit. It iterates through the array and check every numbers last digi
// and puts the whole number in the box based on the last digit.
// This way it iterates again and checks penultimate digit.(in case of single digits if there is no penultimate digit it considers zero)
// and follows the same process
// at the end of the iterations the array is sorted

function getBoxNumber(number, digit) {
	return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

function digitCount(number) {
	if (number === 0) return 1;
	return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(array) {
	let max = 0;
	array.forEach((elem) => (max = Math.max(max, digitCount(elem))));
	return max;
}

function radixSort(numberArray) {
	let maxDigit = mostDigits(numberArray);

	for (let k = 0; k < maxDigit; k++) {
		digitBoxes = Array.from({ length: 10 }, () => []);
		for (let index = 0; index < numberArray.length; index++) {
			let boxNumber = getBoxNumber(numberArray[index], k);
			digitBoxes[boxNumber].push(numberArray[index]);
		}
		numberArray = [].concat(...digitBoxes);
	}

	return numberArray;
}

console.log(radixSort([2, 3, 41, 523, 5, 1231, 43, 523, 1321]));
