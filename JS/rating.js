let btns = document.getElementsByClassName("rate");
let submitBtn = document.getElementsByClassName("submit");
let card2 = document.querySelector("#contain");
let card = document.querySelector("#container");
let span = document.querySelector("span");
let submit = document.querySelector(".submit-p");
let para = document.querySelector(".thanks p");
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rating = e.target.textContent;
    span.textContent = rating;
  });
});

submit.addEventListener("click", (e) => {
  if (span.textContent) {
    card.style.display = "none";
    card2.style.display = "block";
  } else {
    para.textContent = "Choose a rating";
  }
});
