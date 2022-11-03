export let tasks =
  JSON.parse(localStorage.getItem("tasksList")) ||
  [
    //   { text: "Buy milk", done: false },
    //   { text: "Pick up Tom from airport", done: false },
    //   { text: "Visit party", done: false },
    //   { text: "Visit doctor", done: true },
    //   { text: "Buy meat", done: true },
  ];
