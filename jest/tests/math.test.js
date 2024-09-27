const { sum, difference, product } = require("../math");

test("testing math sum function", () => {
  expect(sum(1, 2)).toBe(3);
});

test("testing math difference function", () => {
  expect(difference(2, 2)).toBe(0);
});

test("testing math product function", () => {
  expect(product(3, 2)).toBe(6);
});

// Concurrent Test Cases
const inputs = [
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
];

test.each(inputs)("sum of numbers %i %i", (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});

