const { arrayLength, cloneArray } = require("../arrays");

test("testing array length function", () => {
  const array = [1, 2, 3, 4];
  expect(arrayLength(array)).toBe(array.length);
});

test("testing clone array function", () => {
  const array = [1, 2, 3, 4];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});

test("testing clone array function 2", () => {
  const array = [1, 2, 3, 4];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
