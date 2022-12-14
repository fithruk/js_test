const repoListEl = document.querySelector(".repo-list");
const renderListItems = (arrRepo) => {
  repoListEl.innerHTML = "";
  arrRepo.forEach(({ name }) => {
    const repoNameEl = document.createElement("li");
    repoNameEl.classList.add("repo-list__item");
    repoNameEl.textContent = name;
    repoListEl.append(repoNameEl);
  });
};

export { renderListItems };
