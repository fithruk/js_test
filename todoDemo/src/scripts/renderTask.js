import { state } from "./createTask.js";

const listElem = document.querySelector(".list");

export const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(createCheckBox(id, done), text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

function handleCheckBox(e) {
  let ind = state.findIndex((task) => task.id == e.target.dataset.id);
  state[ind].done = !state[ind].done;
  listElem.innerHTML = "";
  localStorage.setItem("tasksList", JSON.stringify(state));
  renderTasks(state);
}

function createCheckBox(id, done) {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.dataset.id = id;
  checkbox.checked = done;
  checkbox.classList.add("list__item-checkbox");
  checkbox.addEventListener("click", handleCheckBox);
  return checkbox;
}
