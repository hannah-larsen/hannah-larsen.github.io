const keywords = [
  "graphic designer",
  "marketing specialist",
  "sound designer",
  "creative developer",
];
let currentKeywordIndex = 0;
let charIndex = 0;
let typingSpeed = 100;

function typeKeyword() {
  const keywordSpan = document.querySelector(".keyword");
  const currentKeyword = keywords[currentKeywordIndex];

  if (charIndex < currentKeyword.length) {
    keywordSpan.textContent += currentKeyword.charAt(charIndex);
    charIndex++;
    setTimeout(typeKeyword, typingSpeed);
  } else {
    setTimeout(() => {
      keywordSpan.textContent = "";
      charIndex = 0;
      currentKeywordIndex = (currentKeywordIndex + 1) % keywords.length;
      typeKeyword();
    }, 2000); // Pause after the full word is typed
  }
}

typeKeyword();
