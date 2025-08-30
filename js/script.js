document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteInput = document.getElementById("quoteInput");
  const timeElement = document.getElementById("time");
  const wpmElement = document.getElementById("wpm");
  const accuracyElement = document.getElementById("accuracy");
  const restartBtn = document.getElementById("restartBtn");
  const themeToggle = document.getElementById("themeToggle");

  // Game variables
  let timer;
  let timeLeft = 60;
  let isTyping = false;
  let currentQuote = "";
  let errors = 0;

  // Sample quotes
  const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "Coding is not just code, it's a way of thinking and problem-solving.",
    "The best way to predict the future is to invent it.",
    "Simplicity is the soul of efficiency.",
  ];

  // Initialize
  loadNewQuote();
  initTheme();

  // Event Listeners
  quoteInput.addEventListener("input", checkInput);
  restartBtn.addEventListener("click", resetTest);
  themeToggle.addEventListener("click", toggleTheme);

  // Functions
  function loadNewQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = "";
    currentQuote.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.innerText = char;
      quoteDisplay.appendChild(charSpan);
    });
    resetTest();
  }

  function checkInput() {
    if (!isTyping) {
      startTimer();
      isTyping = true;
    }

    const inputChars = quoteInput.value.split("");
    const quoteChars = quoteDisplay.querySelectorAll("span");
    let correctChars = 0;
    errors = 0;

    quoteChars.forEach((charSpan, index) => {
      const inputChar = inputChars[index];

      if (inputChar == null) {
        charSpan.classList.remove("correct", "incorrect", "current");
      } else if (inputChar === charSpan.innerText) {
        charSpan.classList.add("correct");
        charSpan.classList.remove("incorrect");
        correctChars++;
      } else {
        charSpan.classList.add("incorrect");
        charSpan.classList.remove("correct");
        errors++;
      }
    });

    // Highlight current character
    quoteChars.forEach((charSpan) => charSpan.classList.remove("current"));
    if (inputChars.length < quoteChars.length) {
      quoteChars[inputChars.length].classList.add("current");
    }

    // Calculate WPM & Accuracy
    const timeElapsed = 60 - timeLeft;
    const minutes = timeElapsed / 60;
    const wordsTyped = inputChars.length / 5;
    const wpm = Math.round(wordsTyped / minutes) || 0;
    const accuracy = Math.round((correctChars / inputChars.length) * 100) || 0;

    wpmElement.textContent = wpm;
    accuracyElement.textContent = `${accuracy}%`;

    // Check if quote is completed
    if (inputChars.length === quoteChars.length) {
      clearInterval(timer);
      quoteInput.disabled = true;
    }
  }

  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeElement.textContent = `${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        quoteInput.disabled = true;
      }
    }, 1000);
  }

  function resetTest() {
    clearInterval(timer);
    timeLeft = 60;
    isTyping = false;
    errors = 0;
    quoteInput.value = "";
    quoteInput.disabled = false;
    timeElement.textContent = `${timeLeft}s`;
    wpmElement.textContent = "0";
    accuracyElement.textContent = "0%";
    quoteInput.focus();
    checkInput(); // Reset highlighting
  }

  // Theme functions
  function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }

    // Save preference
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }

  function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme);

    const icon = themeToggle.querySelector("i");
    if (savedTheme === "dark") {
      icon.classList.add("fa-moon");
      icon.classList.remove("fa-sun");
    } else {
      icon.classList.add("fa-sun");
      icon.classList.remove("fa-moon");
    }
  }
});
