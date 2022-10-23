it("test 1", () => {
  expect(17).toEqual(17);
});

it("test 2", () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

it("test 3", () => {
  const res = getEvenNumbers([2, 4, 6]);
  expect(res).toEqual([2, 4, 6]);
});
