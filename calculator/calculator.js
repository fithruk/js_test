const getSquaredArray = (arr) => {
  return arr.map((num) => num * num);
};

const getOddNumbers = (arr) => {
  return arr.filter((num) => num % 2 !== 0);
};

const getSum = (a, b) => {
  return a + b;
};

export { getOddNumbers, getSquaredArray };
export default getSum;
