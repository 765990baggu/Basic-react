import { sum } from "../sum";

test("Sum function Should Calculate the Sum of two numbers", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});
