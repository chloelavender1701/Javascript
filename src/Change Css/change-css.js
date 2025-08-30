console.log("Change CSS");

const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const myBackBtnElement = document.getElementById("myBackBtn");

myBtnElement.addEventListener("click", () => {
  console.log("Button clicked");
  myTextElement.style.color = "red";
  myBtnElement.classList.add("chloe", "btn");
});

myBackBtnElement.addEventListener("click", () => {
  console.log("Button clicked");
  myTextElement.style.color = "black";
  myBtnElement.classList.remove("chloe", "btn");
});
