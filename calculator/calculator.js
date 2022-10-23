// const getSquaredArray = (arr) => {
//   return arr.map((num) => num * num);
// };

// const getOddNumbers = (arr) => {
//   return arr.filter((num) => num % 2 !== 0);
// };

// const getSum = (a, b) => {
//   return a + b;
// };

// export { getOddNumbers, getSquaredArray };
// export default getSum;

export const calc = (expression) => {
  if (typeof expression !== "string") {
    return null;
  }

  const [a, operation, b] = expression.split(" ");
  let result;

  switch (operation) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "*":
      result = +a * +b;
      break;
    case "/":
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};
