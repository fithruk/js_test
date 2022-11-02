// export const user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
// };

// user.getFullName();

// export const callbackPrompt = {
//   message: "Est telefon s cameroy pozvonit?",
//   showPrompt() {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt(ms) {
//     setTimeout(this.showPrompt.bind(callbackPrompt), ms);
//   },
// };

// callbackPrompt.showDeferredPrompt(2000);

// export const defer = (func, ms) => {
//   return function () {
//     setTimeout(() => func.call(this, ...arguments), ms);
//   };
// };

// // const sum = (a, b) => {
// //   console.log(a + b);
// // };

// const user = {
//   name: "Valera",
//   sayHi() {
//     console.log(`Zdarova, ya ${this.name}`);
//   },
// };

// // const defferredSum = defer(sum, 1000);

// const defferredHi = defer(user.sayHi, 1000);

// // defferredSum(1, 4);

// defferredHi.call({ name: "Vasya" });

// const student = {
//   name: "Tom",
// };

// export function sayName() {
//   console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// // ... your code here
// sayName.call(student);

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// // ... your code here
// sayName.call({ name: "Bruce" });

// =============================

// const company = {
//   companyName: "Microsoft",
// };

// function greeting(firstName, lastName) {
//   console.log(
//     `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
//   );
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// // ... your code here
// greeting.call(company, ...["Bob", "Marley"]);

// ==================

// const country = {
//   countryName: "Ukraine",
//   capital: "Kyiv",
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// // ... your code here
// const population = getPopulation.call(country, ...[43000]);
// console.log(population);

// =======================

// const transaction = {
//   amount: 1200,
//   operation: "sell",
//   currency: "USD",
//   exchange: "NYSE",
//   printTransaction() {
//     console.log(
//       `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
//     );
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: "buy",
//   currency: "USD",
//   exchange: "NASDAQ",
// };

// transaction.printTransaction.call(anotherTransaction);

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// // ... your code here

//========= BIND =========//

// /* ===> 1 <=== */
// const student = {
//   name: "Tom",
// };

// function sayName() {
//   console.log(this.name);
// }

// const sayStudentName = sayName.bind(student);
// const sayBruceName = sayName.bind({ name: "Bruce" });
// sayStudentName();
// sayBruceName();

// /*
//  * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
//  * используйте .bind и ф-цию sayName
//  */

// /*
//  * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
//  * используйте ф-цию sayName и .bind с нужным объектом
//  */

// /* ===> 2 <=== */
// const company = {
//   companyName: "Microsoft",
// };

// function greeting(firstName, lastName) {
//   console.log(
//     `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
//   );
// }

// const specialGreeting = greeting.bind(company, "Bob", "Marley");

// specialGreeting();

// /*
//  * создайте ф-цию specialGreeting которая будет выводить в консоль
//  * 'Hello, Bob Marley. Welcome to the Microsoft`
//  * используйте ф-цию greeting и .bind с нужным объектом и аргументами
//  * specialGreeting не должна принимать ни одного аргумента
//  */

// /* ===> 3 <=== */
// const country = {
//   countryName: "Ukraine",
//   capital: "Kyiv",
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// const getUkrainePopulation = getPopulation.bind(country, 43000);

// /*
//  * создайте ф-цию getUkrainePopulation которая будет возвращать строку
//  * 'Population in Ukraine is 43000`
//  * 43000 передавайте в виде числа
//  * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
//  * getUkrainePopulation не должна принимать ни одного аргумента
//  */

// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: "sell",
//   currency: "USD",
//   exchange: "NYSE",
//   printTransaction() {
//     console.log(
//       `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
//     );
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: "buy",
//   currency: "USD",
//   exchange: "NASDAQ",
// };

// const printSpecialTransaction =
//   transaction.printTransaction.bind(anotherTransaction);
// printSpecialTransaction();
// /*
//  * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
//  * '400 USD - buy on NASDAQ`
//  * используйте метод transaction.printTransaction и .bind с нужным объектом
//  * printSpecialTransaction не должна принимать ни одного аргумента
//  */

// export {sayBruceName, sayStudentName, specialGreeting, getUkrainePopulation, printSpecialTransaction}

// export const user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     let [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// user.setFullName("Vasya Rogov");

// console.log(user);

// const event = {
//   message: "Welcome to the party!",
//   guests: [
//     { name: "John", age: 18, email: "example@server.com" },
//     { name: "Vasya", age: 16, email: "example2@server.com" },
//     { name: "Ivan", age: 19, email: "example3@server.com" },
//   ],
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         email,
//         message: `Dear ${name}! ${this.message}`,
//       }));
//   },
// };

// console.log(event.getInvitations());

// export const wallet = {
//   transactions: [23, 56, 76, 1, 67, 5, 32, 1, 999, 666],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   },
// };

// console.log(wallet.getMax());
// console.log(wallet.getMin());

// export function sumOfSquares() {
//   return [...arguments]
//     .map((num) => Math.pow(num, 2))
//     .reduce((acc, next) => acc + next, 0);
// }

// console.log(sumOfSquares(1, 2, 4, 6, 8));

// function saveFuncCalls(func) {
//   const callsHistory = [];

//   return function withMemory() {
//     return func(...arguments);
//   };
// }

// // example 1
// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }
// const sumWithMemory = saveFuncCalls(sum.bind(sum));
// sumWithMemory(4, 2); // ===> 6
// sumWithMemory(9, 1); // ===> 10

// sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]

// const vehicle = {
//   name: "Argo",
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };

// Object.setPrototypeOf(ship, vehicle);
// console.log(ship.stopMachine());
// export { vehicle, ship };

// function getOwnProps(obj) {
//   return Object.entries(obj)
//     .filter((item) => typeof item[1] !== "function" && item[0])
//     .map((item) => item[0]);
// }

// console.log(getOwnProps(vehicle));

// export const user = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(fullName) {
//     let [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// user.fullName = "vasya rogov";

// export function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (age) {
//   this.age = age;
//   if (this.age >= 25) {
//     console.log(`New photo request was sent for ${this.name}`);
//   } else if (this.age > 0) {
//     return age;
//   } else if (age < 0 || age === 0) {
//     return false;
//   }
// };

// const john = new User("John", 20);
// console.log(john.setAge(27));

// export class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static createEmpty() {
//     return new User("", null);
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }

//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   setAge(age) {
//     this.age = age;
//     if (this.age >= 25) {
//       console.log(`New photo request was sent for ${this.name}`);
//     } else if (this.age > 0) {
//       return age;
//     } else if (age < 0 || age === 0) {
//       return false;
//     }
//   }
// }

// // const john = new User("John", 20);
// // console.log(john.setAge(24));
// const empty = User.createEmpty();
// console.log(empty);

// const vehicle = {
//   name: "Argo",
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };

// Object.setPrototypeOf(ship, vehicle);
// console.log(ship.stopMachine());

// class Vehicle {
//   constructor(name = "Argo", numberOfWheels) {
//     this.name = name;
//     this.numberOfWheels = numberOfWheels;
//   }

//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }

// class Ship extends Vehicle {
//   constructor(name = "Argo", numberOfWheels, maxSpeed) {
//     super();
//     this.name = name;
//     this.numberOfWheels = numberOfWheels;
//     this.maxSpeed = maxSpeed;
//   }

//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }
// }

// const ship = new Ship();
// ship.move();
// ship.stop();

// export { Vehicle, Ship };

// export class Wallet {
//   _balance = 0;

//   getBalance() {
//     return this._balance;
//   }

//   deposit(value) {
//     this._balance += value;
//   }

//   withdraw(value) {
//     if (value > this._balance) {
//       console.log(`No enough funds`);
//       return;
//     }
//     this._balance -= value;
//   }
// }

// const wallet = new Wallet();
// wallet.deposit(400);
// wallet.withdraw(355);
// wallet.getBallance();
// wallet.withdraw(355);
// console.log(wallet);

// export class Order {
//   isConfirmed = false;
//   dateConfirmed = null;
//   dateCreated = new Date();

//   constructor(price, city, type) {
//     this.price = price;
//     this.city = city;
//     this.type = type.toLowerCase();
//     this.id = String(Math.random());
//   }

//   checkPrice() {
//     return this.price > 1000 ? true : false;
//   }

//   confirmOrder() {
//     this.isConfirmed = true;
//     this.dateConfirmed = new Date();
//   }

//   isValidType() {
//     if (
//       this.type === "Buy".toLowerCase() ||
//       this.type === "Sell".toLowerCase()
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const order = new Order(34, "Sumy", "Sell");
// order.confirmOrder();
// console.log(order);

// const order2 = new Order(3466, "Sumy", "Sell");

// console.log(order2);

const usersArray = [
  {
    id: Math.round(Math.random() * (1000 - 100) + 100),
    name: "Vasya",
    sessionId: Math.round(Math.random() * (100 - 10) + 10),
  },
  {
    id: Math.round(Math.random() * (1000 - 100) + 100),
    name: "Petya",
    sessionId: Math.round(Math.random() * (100 - 10) + 10),
  },
  {
    id: Math.round(Math.random() * (1000 - 100) + 100),
    name: "Adolf",
    sessionId: Math.round(Math.random() * (100 - 10) + 10),
  },
  {
    id: Math.round(Math.random() * (1000 - 100) + 100),
    name: "Ivan",
    sessionId: Math.round(Math.random() * (100 - 10) + 10),
  },
  {
    id: Math.round(Math.random() * (1000 - 100) + 100),
    name: "Uzurbek",
    sessionId: Math.round(Math.random() * (100 - 10) + 10),
  },
];

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((user) => user.name);
  }

  getUserIds() {
    return this._users.map((user) => user.id);
  }

  getUserNameById() {}
}
