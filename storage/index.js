const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];
localStorage.clear();
const task = { text: "Buy milk", done: false, money: null };

localStorage.setItem("task", JSON.stringify(task));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: JSON.parse(value),
    };
  }, {});
};

console.log(getLocalStorageData());

// const counterElem = document.querySelector(".counter");
// const counter = document.querySelector(".counter__body");

// let counterValue = 0;
// counter.textContent = localStorage.getItem("counterValue") || counterValue;

//  const changeCounter = (e) => {
//   if (e.target.closest(".btn")) {
//     switch (e.target.dataset.type) {
//       case "inc":
//         counter.textContent = counterValue += 1;
//         localStorage.setItem("counterValue", counterValue);
//         break;
//       case "dec":
//         counter.textContent = counterValue -= 1;
//         localStorage.setItem("counterValue", counterValue);
//         break;
//     }
//   }
// };

// counterElem.addEventListener("click", changeCounter);

// window.addEventListener("storage", () => {
//   counter.textContent = localStorage.getItem("counterValue") || counterValue;
// });
