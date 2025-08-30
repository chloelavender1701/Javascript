console.log("Inner text");

const myBtnElement = document.getElementById("myBtn");

const myBackBtnElement = document.getElementById("backBtn");
const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
  console.log("Button clicked");
  //   myTextElement.innerText = "Button was clicked!";
  myTextElement.innerHTML =
    "<strong>Chào bạn,</strong> <em>học Javascript với Chloe!</em>";
});

myBackBtnElement.addEventListener("click", () => {
  console.log("Button change back clicked");
  myTextElement.innerText = "Inner text";
});
