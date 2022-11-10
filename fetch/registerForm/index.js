const formElem = document.querySelector(".login-form");
const textFields = document.querySelectorAll(".login-form input");
const buttonElem = document.querySelector(".submit-button");
const url = "https://636b6df9ad62451f9fb14be5.mockapi.io/api/v1/users";

const sentUserData = (userData) => {
  return fetch("url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

const checkValidtate = (e) => {
  let boo = formElem.reportValidity();
  boo ? (buttonElem.disabled = false) : (buttonElem.disabled = true);
};

const submitForm = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  sentUserData(formData)
    .then((data) => data.json())
    .then((data) => {
      alert(JSON.stringify(data, null, 2));
      formElem.reset();
    });
};

formElem.addEventListener("input", checkValidtate);
buttonElem.addEventListener("click", submitForm);
