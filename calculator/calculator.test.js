import { calc } from "./calculator";

it("test 1", () => {
  const res = calc("2 + 2");
  expect(res).toEqual("2 + 2 = 4");
});

it("test 2", () => {
  const res = calc("2 - 2");
  expect(res).toEqual("2 - 2 = 0");
});

it("test 3", () => {
  const res = calc("2 * 2");
  expect(res).toEqual("2 * 2 = 4");
});

it("test 4", () => {
  const res = calc("2 / 2");
  expect(res).toEqual("2 / 2 = 1");
});
