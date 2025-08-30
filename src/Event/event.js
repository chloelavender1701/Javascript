console.log("Event");

const element = document.getElementById("myBtn");
console.log(element);

const handleClickBtn = () => {
  console.log("Button clicked");
};
element.addEventListener("click", handleClickBtn);
