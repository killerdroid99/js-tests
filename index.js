import { array } from "yargs";

export const sum = (a, b) => {
	return a + b;
};

export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
	return str.split("").reverse().join("");
};

export const Calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => a / b,
};

export const CaesarCipher = (str) => {
	let array = str.split("");
	let resultArray = [];
	for (let i = 0; i < array.length; i++) {
		let charCode = array[i].charCodeAt(0);
		if (charCode >= 65 && charCode <= 90) {
			resultArray.push(String.fromCharCode(charCode + 3));
		} else if (charCode >= 97 && charCode <= 122) {
			resultArray.push(String.fromCharCode(charCode + 3));
		} else {
			resultArray.push(array[i]);
		}
	}
	return resultArray.join("");
};

export const analyzeArray = (array) => {
	let result = {};
	result.average = array.reduce((a, b) => a + b) / array.length;
	result.min = Math.min(...array);
	result.max = Math.max(...array);
	result.length = array.length;
	return result;
};

// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const bubbleSort = (inputArray) => {
	let array = [...inputArray];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
};
