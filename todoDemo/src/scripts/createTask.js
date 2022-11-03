import { tasks } from "./storage.js";
import { updateTask } from "./updateTask.js";
import { renderTasks } from "./renderTask.js";

const btn = document.querySelector(".create-task-btn");

const listElem = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");

export let state = updateTask(tasks);

function crateTask() {
  if (taskInput.value == "") {
    return;
  }
  let newTask = {
    text: taskInput.value,
    done: false,
  };
  tasks.push(newTask);
  listElem.innerHTML = "";
  state = updateTask(tasks);
  renderTasks(state);
  taskInput.value = "";
}

btn.addEventListener("click", crateTask);
