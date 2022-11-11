// window.addEventListener("error", function onUnhandledError(err) {
//   console.error("error", err.message);
// });

// const valid = JSON.stringify({
//   id: "2",
//   email: "cool@email.com",
//   firstName: "Vasya",
//   lastName: "Pupkin",
//   age: 42,
// });

// const invalid = {
//   id: "2",
//   email: "cool@email.com",
//   firstName: "Vasya",
//   lastName: "Pupkin",
//   age: 42,
// };

// let userParsingResult;

// try {
//   const user = JSON.parse(valid);
//   console.log("User data: ", user);
//   userParsingResult = "success";
// } catch (e) {
//   userParsingResult = "error";
// } finally {
//   console.log(`User parsing finished with ${userParsingResult}`);
// }

// let productParsingResult;

// try {
//   const product = JSON.parse(invalid);
//   console.log("Product data: ", product);
//   productParsingResult = "success";
// } catch (e) {
//   productParsingResult = "error";
// } finally {
//   console.log(`Product parsing finished with ${productParsingResult}`);
// }

const successRequest = Promise.resolve({ name: "Tom" });

successRequest
  .then(function onSuccess1(data) {
    // (1)
    throw new Error("Error with data");
  })
  .catch(function onError1(error) {
    console.error("onError1", error.message);
  });

const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
  .catch(function onError2(error) {
    console.error("onError2", error.message);
    // (2)
    throw new Error("Server error");
  })
  .then(function onSuccess2(data) {
    console.log("onSuccess2", data);
  })
  .catch(function onError3(error) {
    console.error("onError3", error.message);
  });
