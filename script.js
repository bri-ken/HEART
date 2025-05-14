// Sweet love note messages
const reasons = [
  "Bernadeth, you always know how to make me smile, even on my worst days.",
  "Your laugh, Bernadeth, is my favorite sound in the world.",
  "You support my dreams and encourage me to chase them.",
  "You believe in me, even when I doubt myself.",
  "Every moment with you, Bernadeth, feels special.",
  "You're my safe place and my home.",
  "You're so thoughtful and always remember the little things.",
  "You make me want to be a better person.",
  "You're beautiful inside and out, Bernadeth.",
  "You always know what to say to cheer me up.",
  "You're my best friend and my partner in everything.",
  "You're so patient with me, even when I'm difficult.",
  "You make ordinary days feel extraordinary.",
  "You always listen to me, no matter what I have to say.",
  "You give the best hugs in the world, Bernadeth.",
  "You make me feel loved every single day.",
  "You're so hardworking and dedicated.",
  "You inspire me with your kindness.",
  "You're always honest with me.",
  "You make me laugh until my stomach hurts.",
  "You're my favorite adventure, Bernadeth.",
  "You're so creative and talented.",
  "You always know how to surprise me.",
  "You make me feel special and important.",
  "You're my biggest supporter.",
  "You're so understanding and forgiving.",
  "You make me feel like I can do anything.",
  "You're always there when I need you.",
  "You make even the simplest things fun.",
  "You're my sunshine on cloudy days, Bernadeth.",
  "You're so generous and giving.",
  "You always put others before yourself.",
  "You make me feel safe and protected.",
  "You're my favorite person to talk to.",
  "You're so passionate about the things you love.",
  "You make me feel like the luckiest person alive.",
  "You're always up for trying new things with me.",
  "You make me feel confident and strong.",
  "You're so gentle and caring.",
  "You always know how to calm me down.",
  "You make my heart skip a beat, Bernadeth.",
  "You're my partner in crime.",
  "You're so loyal and trustworthy.",
  "You make me feel like I belong.",
  "You're always willing to help others.",
  "You make every day brighter.",
  "You're my favorite hello and my hardest goodbye.",
  "You're so smart and insightful.",
  "You make me feel like I matter.",
  "You're always there to celebrate my successes.",
  "You make me feel like I'm enough.",
  "You're so fun to be around.",
  "You make me feel like I can be myself.",
  "You're always willing to listen to my problems.",
  "You make me feel like I'm your priority.",
  "You're so respectful and considerate.",
  "You make me feel like I'm loved unconditionally.",
  "You're always there to pick me up when I'm down.",
  "You make me feel like I'm your one and only.",
  "You're so adventurous and spontaneous.",
  "You make me feel like I'm your best friend.",
  "You're always willing to compromise.",
  "You make me feel like I'm your everything.",
  "You're so affectionate and loving.",
  "You make me feel like I'm your soulmate.",
  "You're always willing to forgive.",
  "You make me feel like I'm your forever.",
  "You're so supportive of my goals.",
  "You make me feel like I'm your partner in life.",
  "You're always willing to make sacrifices for us.",
  "You make me feel like I'm your reason to smile.",
  "You're so thoughtful with your surprises.",
  "You make me feel like I'm your favorite person.",
  "You're always willing to go the extra mile.",
  "You make me feel like I'm your dream come true.",
  "You're so sweet and caring.",
  "You make me feel like I'm your priority.",
  "You're always willing to stand by my side.",
  "You make me feel like I'm your world.",
  "You're so loving and affectionate.",
  "You make me feel like I'm your everything.",
  "You're always willing to put me first.",
  "You make me feel like I'm your one and only.",
  "You're so understanding and patient.",
  "You make me feel like I'm your forever.",
  "You're always willing to listen to my needs.",
  "You make me feel like I'm your soulmate.",
  "You're so supportive and encouraging.",
  "You make me feel like I'm your partner in life.",
  "You're always willing to make me happy.",
  "You make me feel like I'm your reason to smile.",
  "You're so thoughtful and caring.",
  "You make me feel like I'm your favorite person.",
  "You're always willing to go the extra mile.",
  "You make me feel like I'm your dream come true.",
  "You're so sweet and loving.",
  "You make me feel like I'm your everything.",
  "You're always willing to stand by my side.",
  "You make me feel like I'm your world.",
  "You're so loving and affectionate.",
  "You make me feel like I'm your one and only.",
  "Bernadeth, you make me feel like I'm the luckiest person alive to have you.",
  "I love the way you say my name, Bernadeth.",
  "I love how you always make time for us, Bernadeth.",
  "I love you, Bernadeth, for being you."
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


