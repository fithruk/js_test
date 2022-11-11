import { getData, getRepoData } from "./apiWays.js";
import { renderListItems } from "./renderListItems.js";

const avatarEl = document.querySelector(".user__avatar");
const nameEl = document.querySelector(".user__name");
const locationEl = document.querySelector(".user__location");
const show = document.querySelector(".name-form__btn");
const inputEl = document.querySelector(".name-form__input");
const spinnerEl = document.querySelector(".spinner");

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

const renderNewData = (data = defaultUser) => {
  const { avatar_url, name, location } = data;

  nameEl.textContent = name;
  avatarEl.src = avatar_url;
  locationEl.textContent = location ? `from ${location}` : "";
  inputEl.value = "";
};

const onloadRepoData = (url) => {
  return getRepoData(url)
    .then((repoData) => repoData)
    .catch((e) => alert("Failed to load data"));
};

const onloadData = () => {
  spinnerEl.classList.toggle("spinner_hidden");
  getData(inputEl.value)
    .then((data) => data)
    .then((data) =>
      onloadRepoData(data.repos_url).then((repoData) => {
        renderNewData(data);
        renderListItems(repoData);
      })
    )
    .then(() => spinnerEl.classList.toggle("spinner_hidden"))
    .catch((e) => alert("Failed to load data"));
};

show.addEventListener("click", onloadData);

export { renderNewData };
