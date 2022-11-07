export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  const containerElem = document.querySelector(".page");
  imgElem.setAttribute("alt", "Photo");
  imgElem.src = imgSrc;
  containerElem.appendChild(imgElem);
  // const onImageLoaded = () => {
  //   callback(null, imgElem);
  // };

  imgElem.addEventListener("load", onImageLoaded);

  imgElem.addEventListener("error", () => {
    callback("Image load is failed");
  });
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector(".image-size");

  sizeElem.textContent = `${width} x ${height}`;
};
