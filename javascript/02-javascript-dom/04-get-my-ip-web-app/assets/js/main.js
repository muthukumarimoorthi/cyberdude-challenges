const ipAddress = document.querySelector("#ipAddress");


let xhr = new XMLHttpRequest();
console.log(xhr.responseText);

xhr.onreadystatechange = function () {
    console.log();
  if (this.readyState === 4) {
    console.log(xhr.responseText);
    if (this.status === 200) {
        ipAddress.textContent = xhr.responseText;
    } else {
        ipAddress.innerHTML =
        `<div class='alert-danger'>COULDN'T GET YOUR IP.</div>`;
    }
  }

};
xhr.open(
  "GET",
  "https://ipv4.icanhazip.com/"
);
xhr.send();