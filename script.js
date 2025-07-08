// Dark Mode Toggle
const button = document.getElementById("dark-mode-toggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//Typing Effect
const text = "Aspiring Software Developer";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // speed of typing
  }
}

typeText();