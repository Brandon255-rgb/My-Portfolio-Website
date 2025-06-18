const words = ["Java", "C++", "JavaScript", "Python", "C#", "Flutter", "HTML", "CSS", "Tailwind CSS ", "TypeScript", "React"];
const typedText = document.getElementById("typed-text");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 100;
let pauseBetweenWords = 1000;

function type() {
  const currentWord = words[wordIndex];
  
  if (!isDeleting) {
 
    typedText.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;
    
    if (letterIndex === currentWord.length) {
     
      isDeleting = true;
      setTimeout(type, pauseBetweenWords);
      return;
    }
  } else {
  
    typedText.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;
    
    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();
