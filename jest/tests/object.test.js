const { ageIsNumber, hasContactDetails } = require("../object");
const { validDetails, invalidDetails } = require("./test-data");

describe("ageIsNumber function", () => {
  // Positive Test Case
  test("returns true for all valid ages", () => {
    expect(ageIsNumber(validDetails)).toEqual([true, true]);
  });
  // Negative Test Case
  test("returns false if age is not a number", () => {
    expect(ageIsNumber(invalidDetails)).toEqual([false, false]);
  });
});

describe("hasContactDetails function", () => {
  // Positive Test Case
  test("returns true if person has phone or email", () => {
    expect(hasContactDetails(validDetails)).toEqual([true, true]);
  });
  // Negative Test Case
  test("returns false if person has no phone or email", () => {
    expect(hasContactDetails(invalidDetails)).toEqual([false, false]);
  });
});

// Snapshots example
test("snapshot of valid person details", () => {
  expect(validDetails).toMatchSnapshot();
});

test("snapshot of invalid person details", () => {
  expect(invalidDetails).toMatchSnapshot();
});
