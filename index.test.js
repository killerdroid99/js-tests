import { sort } from "semver";
import {
	capitalize,
	sum,
	reverseString,
	Calculator,
	CaesarCipher,
	analyzeArray,
	bubbleSort,
} from "./index";

test("adds 1 + 2 = 3", () => {
	let a;
	let b;
	expect(sum(a, b)).toBe(a + b);
});

test("checks if first letter is capitalized", () => {
	let str = "this";
	expect(capitalize(str)).toMatch(/^[A-Z]/);
});

test("checks for reverse of a string", () => {
	let str = "reverse";
	expect(reverseString(str)).toBe("esrever");
});

test("checks all the methods of calculator object", () => {
	let a = 1;
	let b = 2;
	expect(Calculator.add(a, b)).toBe(a + b);
	expect(Calculator.subtract(a, b)).toBe(a - b);
	expect(Calculator.multiply(a, b)).toBe(a * b);
	expect(Calculator.divide(a, b)).toBe(a / b);
});

test("checks for valid caesar cipher", () => {
	let str = "hello";
	expect(CaesarCipher(str)).toBe("khoor");
});

test("analyze array working or not", () => {
	let array = [1, 2, 3, 4, 5];
	let result = analyzeArray(array);
	expect(result.average).toBe(3);
	expect(result.min).toBe(1);
	expect(result.max).toBe(5);
	expect(result.length).toBe(5);
});

test("Bubble sort testing when array is in descending order", () => {
	const unsortedArrayInReverseOrder = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

	expect(bubbleSort(unsortedArrayInReverseOrder)).toStrictEqual([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]);
});

test("sort testing when array is in random order", () => {
	const unsortedRandomArray = [7, 2, 4, 9, 1, 10, 5, 3, 8, 6];

	expect(bubbleSort(unsortedRandomArray)).toStrictEqual([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]);
});

test("sort testing when array is already sorted", () => {
	const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	expect(bubbleSort(sortedArray)).toStrictEqual([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]);
});
