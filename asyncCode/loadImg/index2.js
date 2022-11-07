const containerElem = document.querySelector(".page");

const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "Photo");
  imgElem.setAttribute("src", imgSrc);
  containerElem.append(imgElem);

  if (imgElem.complete) {
    console.log("ready");
    const { width, height } = imgElem;
    const sizeElem = document.querySelector(".image-size");

    sizeElem.textContent = `${width} x ${height}`;
  }
};

// // callack function
// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector(".image-size");

//   sizeElem.textContent = `${width} x ${height}`;
// };

addImage(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
  null
);
