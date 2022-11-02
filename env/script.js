// let message = "Just learn it";

// const sendMessage = (name) => {
//   const sender = "Gromcode";
//   console.log(`${name}, ${message}! Your ${sender}`);
// };

// const setMessage = (test) => {
//   message = test;
// };

// export { sendMessage, setMessage };

// function createMessenger() {
//   let message = "Just learn it";
//   let sender = "Gromcode";

//   const sendMessage = (name) => {
//     console.log(
//       `Hello, ${name}! ${message}! This message was sent by ${sender}`
//     );
//   };

//   const setMessage = (newMessage) => {
//     message = newMessage;
//   };

//   const setSender = (newSender) => {
//     sender = newSender;
//   };

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// }

// export default createMessenger;

// // examples
// const messanger1 = createMessenger();
// messanger1.sendMessage("Anna"); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

// const messanger2 = createMessenger();
// messanger2.setMessage("You are learning JS and you do it well");
// messanger2.sendMessage("Michael"); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

// const messanger3 = createMessenger();
// messanger3.setMessage("The weather is amazing today");
// messanger3.setSender("Anna");
// messanger3.sendMessage("Alex"); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna

// let memory = 0;

// const add = (num) => {
//   memory += num;
// };

// const decrease = (num) => {
//   memory -= num;
// };

// const reset = () => [(memory = 0)];

// const getMemo = () => {
//   return memory;
// };

// export {add, decrease, reset, getMemo}

// console.log(getMemo());

// const makeCounter = () => {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// };

// export { makeCounter };

// const counter1 = makeCounter();
// const counter2 = makeCounter();
// console.log(counter1()); // 0
// console.log(counter1()); // 1
// console.log(counter2()); // 0
// console.log(counter1()); // 2
// console.log(counter2()); // 1

// export const createCalculator = () => {
//   let memory = 0;

//   const add = (num) => {
//     memory += num;
//   };

//   const decrease = (num) => {
//     memory -= num;
//   };

//   const reset = () => [(memory = 0)];

//   const getMemo = () => {
//     return memory;
//   };

//   return {
//     add,
//     decrease,
//     reset,
//     getMemo,
//   };
// };

// export const createLogger = () => {
//   const messages = [];

//   const warn = (text) => {
//     const warnMessage = {
//       message: text,
//       dateTime: new Date(),
//       type: "warn",
//     };
//     messages.push(warnMessage);
//   };
//   const error = (text) => {
//     const errorMessage = {
//       message: text,
//       dateTime: new Date(),
//       type: "error",
//     };
//     messages.push(errorMessage);
//   };
//   const log = (text) => {
//     const logMessage = {
//       message: text,
//       dateTime: new Date(),
//       type: "log",
//     };
//     messages.push(logMessage);
//   };
//   const getRecords = (type) => {
//     if (!type) {
//       return messages.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     if (type) {
//       return messages
//         .filter((item) => item.type === type)
//         .sort((a, b) => b.dateTime - a.dateTime);
//     }
//   };

//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

// // examples
// const logger1 = createLogger();
// logger1.log("User logged in");
// logger1.warn("User is tring to ented restricted page");
// logger1.log("User logged out");
// logger1.error("Unexpected error on the site");
// console.log(logger1.getRecords());
// // logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords("log"); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords("error"); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// logger1.getRecords("warn"); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn("Opps, something is happenning");
// logger2.getRecords("error"); // ===> []
// logger2.getRecords("warn"); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// logger3.getRecords("error"); // ===> []
// logger3.getRecords(); // ===> []

// export const createArrayOfFunctions = (num) => {
//   let arr = [];
//   if (!num) {
//     return arr;
//   }
//   if (typeof num !== "number") {
//     return null;
//   }

//   for (let i = 0; i < num; i += 1) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
// };
// console.log(createArrayOfFunctions("s"));
