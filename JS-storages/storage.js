// let fullName = "Mammadova Arkinaz";
// let age = 18;
// let skills = ["drawing", "coding", "yatmaq"];

// localStorage.setItem("fullName", fullName);
// localStorage.setItem("age", age);
// localStorage.setItem("skills", JSON.stringify(skills));

// console.log(JSON.parse(localStorage.getItem("skills")));
// console.log(localStorage.getItem("age"));
// console.log(localStorage.getItem("fullName"));

let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

let arr = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let info = {
    id: Date.now(),
    firstName: allInputs[0].value,
    lastName: allInputs[1].value,
    adress: allInputs[2].value,
  };

  arr.push(info);
  localStorage.setItem("users", JSON.stringify(arr));
});
