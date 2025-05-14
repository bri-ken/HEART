// Sweet love note messages
const reasons = [
  "I'm grateful for the way you make time for us.",
  "I'm grateful for the way you say my name like it's special.",
  "I fall for you all over again when you look at me like I'm your whole world.",
  // ... all your other reasons
  "I'm grateful for the way you make me feel seen and heard."
];

// Wait for full page load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const typingTitle = document.getElementById("typing-title");

  // Show content after 1.5s
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    mainContent.classList.remove("hidden");
    mainContent.style.display = "block";
    mainContent.classList.add("show");

    // Animate title text
    const titleText = "💗 100 Reasons Why I Love You 💗";
    typingTitle.innerText = titleText;
  }, 1500);
});

// Show a random love note with typing animation
function revealReason() {
  const note = document.getElementById("note");
  const message = reasons[Math.floor(Math.random() * reasons.length)];

  // Clear existing text and animation state
  note.classList.remove("show");
  note.innerText = '';
  void note.offsetWidth; // Forces reflow for animation reset

  let index = 0;

  // Typing effect function
  function typeNextLetter() {
    if (index < message.length) {
      note.innerText += message.charAt(index);
      playTypingSound?.(); // Only call if function exists
      index++;
      setTimeout(typeNextLetter, 60); // Typing speed
    } else {
      // Hide after delay
      setTimeout(() => {
        note.classList.remove("show");
      }, 5000);
    }
  }

  // Start typing
  note.classList.add("show");
  typeNextLetter();
}

// Optional: Stub for typing sound (override in your own file if needed)
function playTypingSound() {
  // You can hook this to a real sound later
  // const audio = new Audio('type.mp3');
  // audio.play();
}
