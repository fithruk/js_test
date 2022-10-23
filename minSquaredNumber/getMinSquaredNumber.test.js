import getMinSquaredNumber from "./getMinSquaredNumber";

it("test", () => {
  const res = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(res).toEqual(4);
});

it("test 2", () => {
  const res = getMinSquaredNumber([]);
  expect(res).toEqual([]);
});
it("test", () => {
  const res = getMinSquaredNumber("durak");
  expect(res).toEqual(null);
});
