const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0) {
    return [];
  }
  return arr
    .map((num) => Math.pow(Math.abs(num), 2))
    .reduce((acc, next) => (acc < next ? acc : (acc = next)));
};

console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));

export default getMinSquaredNumber;
