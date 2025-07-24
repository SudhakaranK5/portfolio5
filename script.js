const typing = document.querySelector('.typing');
const words = ["Sudhakaran", "a Developer", "a CSE Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  typing.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 800);
  }
}
typeEffect();

document.getElementById("year").textContent = new Date().getFullYear();
