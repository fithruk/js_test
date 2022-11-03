import { renderTasks } from "./renderTask.js";
import { state } from "./createTask.js";

renderTasks(state);

window.addEventListener("storage", () => {
  let tasks = JSON.parse(localStorage.getItem("tasksList"));
  console.log(tasks);
  renderTasks(tasks);
});
