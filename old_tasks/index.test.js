import { getAdults, withdraw, reverseArray } from "./script.js";

it("getAdults test 1", () => {
  const res = getAdults({});
  expect(res).toEqual({});
});

it("getAdults test 2", () => {
  const res = getAdults({ "John Doe": 10, Tom: 10, Bob: 10 });
  expect(res).toEqual({});
});

it("getAdults test 3", () => {
  const res = getAdults({ "John Doe": 23, Tom: 20, Bob: 16 });
  expect(res).toEqual({ "John Doe": 23, Tom: 20 });
});

it("withdraw test 1", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 100);
  expect(res).toEqual(-1);
});

it("withdraw test 2", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(res).toEqual(37);
});

it("withdraw test 3", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 10);
  expect(res).toEqual(1390);
});

it("reverseArray test 1", () => {
  const res = reverseArray("");
  expect(res).toEqual(null);
});

it("reverseArray test 2", () => {
  const res = reverseArray(NaN);
  expect(res).toEqual(null);
});

it("reverseArray test 2", () => {
  const res = reverseArray([1, 2, 3, 4]);
  expect(res).toEqual([4, 3, 2, 1]);
});
