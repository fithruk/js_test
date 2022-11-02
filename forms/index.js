const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");

const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");

const formElem = document.querySelector(".login-form");

const isRequaired = (value) => (value ? undefined : "Requaired");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Shoild be an email";

const validatorByField = {
  email: [isRequaired, isEmail],
  password: [isRequaired],
};

const validate = (fieldName, value) => {
  const validators = validatorByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
  passwordErrorElem.textContent = errorText;
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  alert(JSON.stringify(formData));
};

emailInputElem.addEventListener("input", onEmailChange);
passwordInputElem.addEventListener("input", onPasswordChange);
formElem.addEventListener("submit", onFormSubmit);
