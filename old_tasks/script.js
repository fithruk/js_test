// function getKeys(obj) {
//   Object.keys(obj).forEach((key) => console.log(key));
// }

// // examples
// getKeys({ name: "Denis", city: "Warsaw", englishLevel: "A1" });
// // prints ===>
// // name
// // city
// // englishLevel

// const getAdults = (obj) => {
//   const adults = Object.entries(obj).filter((person) => person[1] >= 18);
//   return adults.map((adult) => adult[0]);
// };

// console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));

// const copyObj = (obj) => {
//   return { ...obj };
// };

// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }

// function addPropertyV2(userData, userId) {
//   let id = { id: userId };
//   return Object.assign(userData, id);
// }

// function addPropertyV3(userData, userId) {
//   const copy = Object.assign({}, userData);
//   copy.id = userId;
//   return copy;
// }

// function addPropertyV4(userData, userId) {
//   return {
//     ...userData,
//     id: userId,
//   };
// }

// // put your code here

// // examples
// const user = {
//   name: "Sam",
// };
// console.log(addPropertyV1(user, "1234567")); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, "1234567"));
// console.log(addPropertyV3(user, "1234567"));
// console.log(addPropertyV4(user, "1234567"));

// function mergeObjectsV1(obj1, obj2) {
//   return Object.assign(obj1, obj2);
// }

// function mergeObjectsV2(obj1, obj2) {
//   return Object.assign({}, obj2, obj1);
// }

// function mergeObjectsV3(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// function mergeObjectsV4(obj1, obj2) {
//   return { ...obj2, ...obj1 };
// }

// // examples
// const obj1 = {
//   name: "Tom",
//   age: 17,
// };

// const obj2 = {
//   name: "Bob",
//   student: false,
// };

// // console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// // console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// // console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }

// let rooms = {
//   room1: [
//     { name: "Jack" },
//     { name: "Andrey" },
//     { name: "Ann" },
//     { name: "Vasyl" },
//   ],
//   room2: [{ name: "Dan" }],
//   room3: [{ name: "Denis" }, { name: "Max" }, { name: "Alex" }],
// };

// const getPeople = (roomMembers) => {
//   return Object.entries(roomMembers)
//     .map((room) => room[1])
//     .flat()
//     .map((name) => String(name.name));
// };

// console.log(getPeople(rooms));

// const getTotalRevenue = (transactions) => {
//   return transactions
//     .map(({ amount }) => amount)
//     .reduce((acc, next) => acc + next, 0);
// };

// // examples
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: "sell" },
//   { userId: 22, amount: 160, operation: "buy" },
//   { userId: 44, amount: 90, operation: "sell" },
// ];

// const result = getTotalRevenue(dayTransactions); // ==> 310
// console.log(result);

// function buildObject(keysList, valuesList) {
//   if (
//     !Array.isArray(keysList) ||
//     !Array.isArray(valuesList) ||
//     keysList.length !== valuesList.length
//   ) {
//     return;
//   }
//   let human = {};
//   keysList.reduce((acc, next, ind, arr) => {
//     valuesList.map((value, i, array) => {
//       if (ind === i) {
//         human[arr[ind]] = array[i];
//       }
//     });
//   }, 0);
//   return human;
// }

// // examples
// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// function compareObjects(firstObj, secondObj) {
//   const first = Object.entries(firstObj);
//   const second = Object.entries(secondObj);
//   if (first.length !== second.length) {
//     return false;
//   }
//   let comparedSucces = first.map((key) => {
//     return second.map((secondKey) => {
//       if (key[0] === secondKey[0] && key[1] === secondKey[1]) {
//         return key;
//       } else {
//         return null;
//       }
//     });
//   });

//   comparedSucces = comparedSucces.flat().filter((item) => item !== null);
//   return comparedSucces.length === first.length ? true : false;
// }

// // examples
// const obj1 = {
//   name: "Tom",
//   age: 17,
// };

// const obj2 = {
//   name: "Bob",
//   age: 17,
// };

// const obj3 = {
//   name: "Bob",
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: "Tom",
//   age: 17,
// };

// const obj5 = {
//   age: 17,
//   name: "Tom",
// };

// console.log(compareObjects(obj1, obj2));

// const getFiniteNumbers = (arr) => {
//   return arr.filter((num) => Number.isFinite(num));
// };

// console.log(getFiniteNumbers(["23", 45, "56", 99]));

// const getFiniteNumbersV2 = (arr) => {
//   return arr.filter((num) => isFinite(num));
// };

// console.log(getFiniteNumbersV2(["23", 45, "56", 99]));

// const getNaN = (arr) => {
//   return arr.filter((num) => Number.isNaN(num));
// };

// console.log(getNaN([NaN, 34, "34rrw", 84, "3443"]));

// const getNaNV2 = (arr) => {
//   return arr.filter((num) => isNaN(num));
// };

// console.log(getNaNV2([NaN, 34, "34rrw", 84, "3443"]));

// const getIntegers = (arr) => {
//   return arr.filter((num) => Number.isInteger(num));
// };

// console.log(getIntegers([34, 65, 56.65, 54.53, 34, 43, "34.3"]));

// const getParsedIntegers = (arr) => {
//   return arr.map((num) => Number.parseInt(num));
// };

// console.log(getParsedIntegers(["342", "343tr", 324234, "4553t"]));

// const getParsedIntegersV2 = (arr) => {
//   return arr.map((num) => parseInt(num));
// };

// const getParsedFloats = (arr) => {
//   return arr.map((num) => Number.parseFloat(num));
// };

// console.log(getParsedFloats(["342", 324234.56, "t455", "45.567", "ty567.78"]));

// const getParsedFloatsV2 = (arr) => {
//   return arr.map((num) => parseFloat(num));
// };

// console.log(
//   getParsedFloatsV2(["342", 324234.56, "t455", "45.567", "ty567.78"])
// );

// const multiRound = (num) => {
//   const floor = Math.floor(num * 100) / 100;
//   const trunc = Math.trunc(num * 100) / 100;
//   const ceil = Math.ceil(num * 100) / 100;
//   const round = Math.round(num * 100) / 100;
//   const fixed = +num.toFixed(2);
//   return [floor, trunc, ceil, round, fixed];
// };

// // examples
// console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

// const getMaxAbsoluteNumber = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//    else {
//     return arr
//       .map((num) => Math.abs(num))
//       .reduce((acc, next) => (acc > next ? acc : (next = acc)));
//   }
// };

// const getMaxAbsoluteNumber = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   if (arr.length === 0) {
//     return null;
//   }
//   return Math.max(...arr.map((num) => Math.abs(num)));
// };
// // examples
// console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
// console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
// console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
// console.log(getMaxAbsoluteNumber([])); // ===> 777

// const getTotalPrice = (arr) => {
//   return `$${Math.floor(arr.reduce((acc, next) => acc + next) * 100) / 100}`;
// };

// console.log(getTotalPrice([34.5, 34.7, 89.4, 43.67, 43.78]));

// const getRandomNumbers = (length, from, to) => {
//   const min = Math.ceil(from);
//   const max = Math.floor(to);
//   if (min > max) {
//     return null;
//   }
//   if (Math.floor(Math.random() * (max - min + 1) + min) < 1) {
//     return null;
//   }

//   return [
//     ...Array(length)
//       .fill(null)
//       .map((item) => {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//       }),
//   ];
// };

// // examples
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]

// const superRound = (num, prec) => {
//   let numbersOfNulls = "";
//   for (let i = 0; i < prec; i++) {
//     String((numbersOfNulls += "0"));
//   }
//   numbersOfNulls = 1 + numbersOfNulls;
//   console.log(numbersOfNulls);
//   const floor = Math.floor(num * numbersOfNulls) / numbersOfNulls;
//   const trunc = Math.trunc(num * numbersOfNulls) / numbersOfNulls;
//   const ceil = Math.ceil(num * numbersOfNulls) / numbersOfNulls;
//   const round = Math.round(num * numbersOfNulls) / numbersOfNulls;
//   const fixed = +num.toFixed(prec);
//   return [floor, trunc, ceil, round, fixed];
// };

// // examples
// console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(superRound(6.1112, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

// const splitText = (str, length = 10) => {
//   if (typeof str !== "string") {
//     return null;
//   }
//   const res = [];
//   let start = 0;
//   for (let i = 0; i <= str.length; i += length) {
//     if (start >= str.length) {
//       break;
//     }
//     let chop = str.substr(start, length);
//     start += length;
//     res.push(chop.charAt(0).toUpperCase() + chop.slice(1));
//   }
//   return res.join("\n");
// };

// console.log(splitText("qqqqwwwwrrrrttttyyyy", 4));

// let contacts = [
//   { name: "Tom", phoneNumber: "777-77-77" },
//   { name: "Vasya", phoneNumber: "222-55-77" },
//   { name: "Adolf", phoneNumber: "222-55-77" },
//   { name: "Gitler", phoneNumber: "1488-88-78" },
//   { name: "Gus", phoneNumber: "9876-88-78" },
// ];

// const sortContacts = (arr, sort = true) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const res = arr.sort((a, b) => {
//     if (!sort) {
//       return b.name.localeCompare(a.name);
//     } else {
//       return a.name.localeCompare(b.name);
//     }
//   });

//   return res;
// };

// console.log(sortContacts(contacts, false));

// const splitString = (str, length = 10) => {
//   if (typeof str !== "string") {
//     return null;
//   }
//   const res = [];
//   let start = 0;
//   for (let i = 0; i <= str.length; i += length) {
//     if (start >= str.length) {
//       break;
//     }
//     let chop = str.substr(start, length);
//     start += length;
//     res.push(chop);
//   }

//   let lastEl = res.splice(res.length - 1, 1);
//   if (lastEl.length < length) {
//     lastEl = lastEl.join();
//     for (let i = lastEl.length; i < length; i++) {
//       lastEl += ".";
//     }

//     return [...res, ...[lastEl]];
//   } else {
//     return res;
//   }
// };

// console.log(splitString("qqqqwwwwrrrrttttyyyyrt"));

// const countOccurrences = (text = "", str) => {
//   if (!str || str === " ") {
//     return null;
//   }
//   return text.split(" ").filter((word) => word.indexOf(str) > -1).length;
// };

// console.log(
//   countOccurrences(
//     "ochko dinozavra gorit adskim plamenem ibo on zaebalsya gorit pizdets",
//     "gorit"
//   )
// );

// const calc = (exp) => {
//   const [a, b, c] = exp.split(" ");
//   switch (b) {
//     case "+":
//       return `${exp} = ${Number(a) + Number(c)}`;
//     case "-":
//       return `${exp} = ${Number(a) - Number(c)}`;
//     case "*":
//       return `${exp} = ${Number(a) * Number(c)}`;
//     case "/":
//       return `${exp} = ${Number(a) / Number(c)}`;
//   }
// };

// console.log(calc("1 / 2"));

// const reverseString = (str) => {
//   if (typeof str !== "string") {
//     return null;
//   }
//   return str.split("").reverse().join("");
// };

// console.log(
//   reverseString(
//     "ochko dinozavra gorit adskim plamenem ibo on zaebalsya gorit pizdets"
//   )
// );

// const cleanTransactionsList = (transactionsArr) => {
//   const newArr = [
//     ...transactionsArr.map((transaction) => Number(transaction)),
//   ].filter((transaction) => !isNaN(transaction));
//   return newArr.map((transaction) => `$${transaction.toFixed(2)}`);
// };

// console.log(cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]));

export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = [...arr];
  return newArr.reverse();
}

export function withdraw(clients, balances, client, amount) {
  if (!Array.isArray(clients)) {
    return null;
  }
  if (!Array.isArray(balances)) {
    return null;
  }

  return (balances[clients.indexOf(client)] =
    balances[clients.indexOf(client)] - amount > 0
      ? (balances[clients.indexOf(client)] =
          balances[clients.indexOf(client)] - amount)
      : -1);
}

export const getAdults = (obj) => {
  const filteredPeoples = Object.entries(obj).filter(
    (persone) => persone[1] >= 18
  );
  let result = {};
  filteredPeoples.forEach((person) => (result[person[0]] = person[1]));
  return result;
};

console.log(getAdults({}));
