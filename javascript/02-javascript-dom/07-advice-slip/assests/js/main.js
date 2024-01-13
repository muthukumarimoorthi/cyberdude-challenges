// https://api.adviceslip.com/advice

const adviceBlockEl = document.querySelector("blockquote > p");
const btnEl = document.getElementById("btn")

const apiURL = "https://api.adviceslip.com/advice";

btnEl.style.display="none";

btnEl.addEventListener("click", () =>{
    window.location.href="/";
})

const fetchAPI = fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    adviceBlockEl.innerText = `${data.slip.advice}`;
  });
  
  btnEl.style.display="block";
 
  