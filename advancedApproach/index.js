//add, subtract, mult, div

// const calc = (num) => {
//   let result = num;
//   let calculator = {
//     add(num) {
//       result += num;
//       return this;
//     },
//     subtract(num) {
//       result -= num;
//       return this;
//     },
//     mult(num) {
//       result *= num;
//       return this;
//     },
//     div(num) {
//       result /= num;
//       return this;
//     },
//     result() {
//       return result;
//     },
//   };

//   return calculator;
// };

// console.log(calc(3).add(2).mult(4).div(10).subtract(5).result());

// const favorites = ["id-2"];
// const tree = {
//   id: "id-1",
//   name: "Products",
//   nodes: [
//     {
//       id: "id-2",
//       name: "Food",
//       nodes: [],
//     },
//   ],
// };
// const result = markFavorites(tree, favorites);

// function markFavorites(tree, favorites) {
//   const isFavorite = favorites.includes(tree.id);

//   return {
//     ...tree,
//     isFavorite,
//     nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
//   };
// }
// console.log(result);

// const mult = (a) => (b) => a * b;

// console.log(mult(4)(5));

// const twice = mult(2);
// console.log(twice(7));

// const triple = mult(3);

// console.log(triple(9));

// export {triple, twice}

// export const compose =
//   (...functions) =>
//   (value) => {
//     return functions.reduce((acc, func) => func(acc), value);
//   };
// const add2 = (value) => value + 2;
// const square = (value) => value * value;
// const half = (value) => value / 2;

// const superFunc = compose(add2, square, half);
// console.log(superFunc(2)); // 8

// const shmoment = (date) => {
//   let initialDate = Date.parse(new Date(date));
//   let result = initialDate;
//   const timeMachine = {
//     add(timeType, timeValue) {
//       switch (timeType) {
//         case "years":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//         case "months":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//         case "days":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//         case "hours":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//         case "minutes":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//         case "seconds":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//         case "milliseconds":
//           result += timeValue * getMilliSeconds(timeType);
//           return this;
//       }
//     },
//     subtract(timeType, timeValue) {
//       switch (timeType) {
//         case "years":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//         case "months":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//         case "days":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//         case "hours":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//         case "minutes":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//         case "seconds":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//         case "milliseconds":
//           result -= timeValue * getMilliSeconds(timeType);
//           return this;
//       }
//     },
//     result() {
//       return new Date(result);
//     },
//   };
//   return timeMachine;
// };

// console.log(
//   shmoment(new Date(2020, 0, 7, 17, 17, 17))
//     .add("minutes", 2)
//     .add("days", 8)
//     .subtract("years", 1)
//     .result()
// );

// function getMilliSeconds(timeType) {
//   switch (timeType) {
//     case "years":
//       return 31536000000;
//     case "months":
//       return 2628000000;
//     case "days":
//       return 86400000;
//     case "hours":
//       return 3600000;
//     case "minutes":
//       return 60000;
//     case "seconds":
//       return 1000;
//     case "milliseconds":
//       return timeType;
//   }
// }

const shmoment = (date) => {
  let initialDate = new Date(date);
  let resultData = new Date(initialDate);

  const timeMachine = {
    add(timeType, timeValue) {
      let [getKey, getFunc] = dateGet.call(this, resultData, timeType);
      let [setKey, setFunc] = dateSet.call(this, resultData, getKey);

      resultData = setFunc.call(
        new Date(resultData),
        getFunc.call(new Date(resultData), resultData) + timeValue
      );
      return this;
    },
    subtract(timeType, timeValue) {
      let [getKey, getFunc] = dateGet.call(this, resultData, timeType);
      let [setKey, setFunc] = dateSet.call(this, resultData, getKey);
      resultData = setFunc.call(
        new Date(resultData),
        getFunc.call(new Date(resultData), resultData) - timeValue
      );
      return this;
    },
    result() {
      return new Date(resultData);
    },
  };
  return timeMachine;
};

function dateSet(date, timeType) {
  date = new Date(date);
  let dateObj = {
    years: date.setFullYear,
    months: date.setMonth,
    days: date.setDate,
    hours: date.setHours,
    minutes: date.setMinutes,
    seconds: date.setSeconds,
    milliseconds: date.setMilliseconds,
  };

  return Object.entries(dateObj).find((key) => key[0] === timeType && key[1]);
}

function dateGet(date, timeType) {
  date = new Date(date);
  let dateObj = {
    years: date.getFullYear,
    months: date.getMonth,
    days: date.getDate,
    hours: date.getHours,
    minutes: date.getMinutes,
    seconds: date.getSeconds,
    milliseconds: date.getMilliseconds,
  };
  return Object.entries(dateObj).find((key) => key[0] === timeType && key[1]);
}

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add("minutes", 2)
    .add("years", 20)
    .add("minutes", 93)
    .subtract("years", 20)
    .subtract("years", 20)
    .add("milliseconds", 343425)
    .subtract("seconds", 10000)
    .add("years", 20)
    .subtract("years", 40)
    .result()
);

// var x = new Date();
// var foo = x.getDate.bind(x);
// console.log(foo());
