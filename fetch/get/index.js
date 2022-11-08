const show = document.querySelector(".name-form__btn");
const avatarEl = document.querySelector(".user__avatar");
const nameEl = document.querySelector(".user__name");
const locationEl = document.querySelector(".user__location");
const inputEl = document.querySelector(".name-form__input");

const link = `https://api.github.com/users/`;
let value = inputEl.value;

const getData = async (username) => {
  return await fetch(`${link}${username}`).then((data) => data.json());
};

const onChangeHandler = (e) => {
  value = e.target.value;
};

const renderNewData = (data) => {
  const { avatar_url, name, location } = data;
  nameEl.textContent = name;
  avatarEl.src = avatar_url;
  locationEl.textContent = location ? `from ${location}` : "";
  inputEl.value = "";
};

const onloadData = () => {
  getData(value).then((data) => renderNewData(data));
};

inputEl.addEventListener("change", onChangeHandler);
show.addEventListener("click", onloadData);
