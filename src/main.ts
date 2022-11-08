import "./style.css";

const root = document.querySelector<HTMLDivElement>("#app");
const button = document.createElement("button");
button.innerText = "Say Hello";
button.onclick = function () {
  console.log("Hello!");
};

root?.append(button);
