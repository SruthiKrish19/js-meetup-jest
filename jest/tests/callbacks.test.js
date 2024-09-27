const greetUser = require("../callbacks");

test("callback function is invoked with correct arguments", () => {
  const mockCallback = jest.fn();
  greetUser(mockCallback, "Alice");

  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith("Hello, Alice!");
});
