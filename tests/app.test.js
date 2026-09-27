const { add, getMessage } = require("../src/app");

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("returns the expected application message", () => {
  expect(getMessage()).toBe("CI/CD pipeline is working!");
});