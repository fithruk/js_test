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
  return getRepoData(url).then((repoData) => repoData);
};

// const onloadData = () => {
//   spinnerEl.classList.toggle("spinner_hidden");
//   getData(inputEl.value)
//     .then((data) => data)
//     .then((data) =>
//       onloadRepoData(data.repos_url).then((repoData) => {
//         renderNewData(data);
//         renderListItems(repoData);
//       })
//     )
//     .catch((e) => alert("Failed to load data"))
//     .then(() => spinnerEl.classList.toggle("spinner_hidden"));
// };

const onloadData = () => {
  spinnerEl.classList.toggle("spinner_hidden");
  getData(inputEl.value)
    .then((data) => {
      renderNewData(data);
      return data.repos_url;
    })
    .then((url) => onloadRepoData(url))
    .then((repolist) => {
      spinnerEl.classList.toggle("spinner_hidden");
      renderListItems(repolist);
    })
    .catch((e) => {
      spinnerEl.classList.toggle("spinner_hidden");
      alert("Failed to load data");
    });
};

show.addEventListener("click", onloadData);

export { renderNewData };
