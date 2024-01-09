const formEl = document.querySelector("#link");
const ytLinkEl = document.getElementById("ytLink");
const imageSrc = document.getElementById("imgSrc");
const hiddenDivEl = document.getElementById("hiddenDiv");
console.log(ytLinkEl);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const videoLink = ytLinkEl.value.split("=")[1];

  if (videoLink.includes("&")) {
    const value1 = videoLink.split("&")[0];
    const getThumbnail = `https://i.ytimg.com/vi/${value1}/maxresdefault.jpg`;
    imageSrc.setAttribute("src", getThumbnail);
  } else {
    const getThumbnail = `https://i.ytimg.com/vi/${videoLink}/maxresdefault.jpg`;
    imageSrc.setAttribute("src", getThumbnail);
  }
  hiddenDivEl.classList.remove("hidden");
});










// My Challenge
// https://www.youtube.com/watch?v=Fh9YgIT1mPc
// https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg

// My Logic
// const valueOfLink = "UK1kn-VFd7Y&t";

// if (valueOfLink.includes("&")) {
// const value1 = valueOfLink.split("&")
// console.log(value1);
// } else {
//   console.log("Not found");
// }

// Before

// const videoLink = ytLinkEl.value;
//   const splitVideoLink = videoLink.split("=");
//   const valueOfLink = splitVideoLink[1];
//   //   console.log(valueOfLink);
//   if (valueOfLink.includes("&")) {
//     const value1 = valueOfLink.split("&");
//     const finalLinkId = value1[0];
//     const getThumbnail = `https://i.ytimg.com/vi/${finalLinkId}/maxresdefault.jpg`;
//     imageSrc.setAttribute("src", getThumbnail);
//     console.log(getThumbnail);
//   } else {
//     const getThumbnail = `https://i.ytimg.com/vi/${valueOfLink}/maxresdefault.jpg`;
//     console.log(getThumbnail);
//     imageSrc.setAttribute("src", getThumbnail);
//   }
//   hiddenDivEl.classList.remove("hidden");
