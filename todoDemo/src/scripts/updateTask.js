export function updateTask(tasks) {
  let updatedTask = tasks.map(({ text, done }, ind) => {
    return {
      text,
      done,
      id: ind + 1,
    };
  });

  localStorage.setItem("tasksList", JSON.stringify(updatedTask));
  return updatedTask;
}
