// export const pinger = (count, period) => {
//   let i = count;
//   console.log("Ping");
//   const interval = setInterval(() => {
//     if (--i > 0) {
//       console.log("Ping");
//     } else {
//       clearInterval(interval);
//     }
//   }, period);
// };

// // examples
// //pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval

export const printing = () => {
  console.log(1);

  setTimeout(function () {
    console.log(5);
  }, 1000);

  console.log(2);

  setTimeout(function () {
    console.log(4);
  }, 0);

  setTimeout(function () {
    console.log(6);
  }, 2000);

  console.log(3);
};

printing();
