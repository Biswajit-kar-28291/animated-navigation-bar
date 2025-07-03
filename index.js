const subtitle = document.getElementById("typing-text");
const text = "Web Developer | Designer | Freelancer";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;
