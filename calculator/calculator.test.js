import { getOddNumbers, getSquaredArray } from "./calculator";
import getSum from "./calculator";

it("test 1", () => {
  const res = getSquaredArray([1, 2, 4]);
  expect(res).toEqual([1, 4, 16]);
});

it("test 2", () => {
  const res = getOddNumbers([1, 2, 3]);
  expect(res).toEqual([1, 3]);
});

it("test 3", () => {
  const res = getSum(1, 1);
  expect(res).toEqual(2);
});
