//Object in JavaScript
// variabler

const fileButton = document.getElementById("file-btn");

let personName = "therese";
let Age = 22;
let Occupation = "student";
let Hobbies = ["gaming", "coding", "reading"];
let isHappy = true;

//object
let person = {
  name: "therese",
  age: 22,
  occupation: "student",
  hobbies: ["gaming", "coding", "reading"],
};

console.log(person);

function buttonwasClicked() {
  console.log("button was clicked");
}

fileButton.addEventListener("click", function () {
  console.log("clicked");
});
