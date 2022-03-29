import {
	capitalize,
	sum,
	reverseString,
	Calculator,
	CaesarCipher,
	analyzeArray,
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
