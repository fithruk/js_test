const user = JSON.stringify({
  id: "2",
  email: "cool@email.com",
  firstName: "Vasya",
  lastName: "Pupkin",
  age: 42,
});

const parseUser = (user) => {
  try {
    return JSON.parse(user);
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

console.log(parseUser("zalupa"));
