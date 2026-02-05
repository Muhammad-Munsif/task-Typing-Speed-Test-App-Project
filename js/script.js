
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteInput = document.getElementById("quoteInput");
  const timeElement = document.getElementById("time");
  const wpmElement = document.getElementById("wpm");
  const accuracyElement = document.getElementById("accuracy");
  const errorsElement = document.getElementById("errors");
  const restartBtn = document.getElementById("restartBtn");
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  const practiceBtn = document.getElementById("practiceBtn");
  const clearBtn = document.getElementById("clearBtn");
  const themeToggle = document.getElementById("themeToggle");
  const settingsToggle = document.getElementById("settingsToggle");
  const settingsPanel = document.getElementById("settingsPanel");
  const charCount = document.getElementById("charCount");
  const quoteLength = document.getElementById("quoteLength");
  const wordsCount = document.getElementById("wordsCount");
  const difficultyBadge = document.getElementById("difficultyBadge");
  const progressFill = document.getElementById("progressFill");
  const resultModal = document.getElementById("resultModal");
  const closeResultBtn = document.getElementById("closeResultBtn");
  const shareResultBtn = document.getElementById("shareResultBtn");
  const resultWPM = document.getElementById("resultWPM");
  const resultAccuracy = document.getElementById("resultAccuracy");
  const resultErrors = document.getElementById("resultErrors");
  const resultTime = document.getElementById("resultTime");
  const instructionsPanel = document.getElementById("instructionsPanel");
  const body = document.body;

  // Game variables
  let timer;
  let timeLeft = 60;
  let totalTime = 60;
  let isTyping = false;
  let isCompleted = false;
  let currentQuote = "";
  let errors = 0;
  let totalTyped = 0;
  let correctTyped = 0;
  let difficulty = "medium";
  let quoteSource = "programming";
  let practiceMode = false;
  let testStartTime = null;

  // Quotes database by difficulty and source
  const quotes = {
    programming: {
      easy: [
        "HTML is the standard markup language for web pages.",
        "JavaScript makes web pages interactive and dynamic.",
        "CSS is used to style and layout web pages.",
        "Python is a popular programming language for beginners.",
        "Git is a version control system for tracking code changes."
      ],
      medium: [
        "Programming is the art of telling another human what one wants the computer to do.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "First, solve the problem. Then, write the code.",
        "The best error message is the one that never shows up.",
        "Code is like humor. When you have to explain it, it's bad."
      ],
      hard: [
        "The process of preparing programs for a digital computer is especially attractive because it can be an exacting task requiring meticulous attention to detail.",
        "Programs must be written for people to read, and only incidentally for machines to execute. This is the fundamental truth of programming.",
        "Simplicity is prerequisite for reliability. The more complex the system, the more likely it is to fail in unexpected ways.",
        "There are two ways of constructing a software design: one way is to make it so simple that there are obviously no deficiencies, and the other is to make it so complicated that there are no obvious deficiencies."
      ]
    },
    literature: {
      easy: [
        "The sun was shining on the sea.",
        "It was a bright cold day in April.",
        "The sky above the port was the color of television.",
        "All happy families are alike.",
        "It is a truth universally acknowledged."
      ],
      medium: [
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
        "All that we see or seem is but a dream within a dream.",
        "The only way to get rid of a temptation is to yield to it.",
        "It is not down in any map; true places never are.",
        "The world is full of obvious things which nobody by any chance ever observes."
      ],
      hard: [
        "Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.",
        "There are years that ask questions and years that answer, but the answers are seldom what we expect or desire.",
        "The universe is made of stories, not of atoms, and every story begins with a question that has no answer.",
        "We live in a world where there is more and more information, and less and less meaning."
      ]
    },
    mixed: {
      easy: [
        "Practice makes perfect in all things.",
        "The early bird catches the worm.",
        "A journey of a thousand miles begins with a single step.",
        "Where there is a will, there is a way.",
        "Time and tide wait for no man."
      ],
      medium: [
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Life is what happens to you while you're busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
      ],
      hard: [
        "The intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift.",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit formed through consistent practice and determination.",
        "The significant problems we face cannot be solved at the same level of thinking we were at when we created them."
      ]
    }
  };

  // Initialize
  initApp();

  function initApp() {
    initTheme();
    loadNewQuote();
    initEventListeners();
    updateThemeColors();
  }

  function initEventListeners() {
    quoteInput.addEventListener("input", checkInput);
    quoteInput.addEventListener("keydown", handleKeydown);
    restartBtn.addEventListener("click", resetTest);
    newQuoteBtn.addEventListener("click", loadNewQuote);
    practiceBtn.addEventListener("click", togglePracticeMode);
    clearBtn.addEventListener("click", clearInput);
    themeToggle.addEventListener("click", toggleTheme);
    settingsToggle.addEventListener("click", toggleSettings);
    closeResultBtn.addEventListener("click", closeResultModal);
    shareResultBtn.addEventListener("click", shareResults);

    // Settings event listeners
    document.querySelectorAll(".time-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".time-option").forEach(b => b.classList.remove("bg-blue-500", "text-white"));
        e.target.classList.add("bg-blue-500", "text-white");
        totalTime = parseInt(e.target.dataset.time);
        timeLeft = totalTime;
        timeElement.textContent = `${timeLeft}s`;
      });
    });

    document.querySelectorAll(".difficulty-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".difficulty-option").forEach(b => {
          b.classList.remove("bg-blue-500", "text-white");
        });
        e.target.classList.add("bg-blue-500", "text-white");
        difficulty = e.target.dataset.difficulty;
        loadNewQuote();
      });
    });

    document.querySelectorAll(".source-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".source-option").forEach(b => b.classList.remove("bg-blue-500", "text-white"));
        e.target.classList.add("bg-blue-500", "text-white");
        quoteSource = e.target.dataset.source;
        loadNewQuote();
      });
    });

    // Detect system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        // If user hasn't set a preference, follow system
        if (e.matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }
    });
  }

  function handleKeydown(e) {
    // Ctrl+Enter to restart
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      resetTest();
    }

    // Escape to clear input
    if (e.key === "Escape") {
      e.preventDefault();
      clearInput();
    }
  }

  function loadNewQuote() {
    const quoteArray = quotes[quoteSource][difficulty];
    currentQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

    // Update UI with quote info
    const wordCount = currentQuote.split(" ").length;
    wordsCount.textContent = `${wordCount} word${wordCount !== 1 ? 's' : ''}`;
    quoteLength.textContent = `${currentQuote.length} chars`;

    // Update difficulty badge
    difficultyBadge.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    difficultyBadge.className = `difficulty-badge difficulty-${difficulty}`;

    // Render quote with character spans
    quoteDisplay.innerHTML = "";
    currentQuote.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.className = "char";
      charSpan.innerText = char;
      quoteDisplay.appendChild(charSpan);
    });

    // Reset test
    resetTest();
  }

  function checkInput() {
    if (!isTyping && quoteInput.value.length > 0) {
      startTimer();
      isTyping = true;
      testStartTime = Date.now();
    }

    const inputChars = quoteInput.value.split("");
    const quoteChars = quoteDisplay.querySelectorAll(".char");
    let correctChars = 0;
    errors = 0;
    totalTyped = inputChars.length;

    quoteChars.forEach((charSpan, index) => {
      const inputChar = inputChars[index];
      const expectedChar = charSpan.innerText;

      // Reset classes
      charSpan.classList.remove("correct", "incorrect", "extra", "current");

      if (index < inputChars.length) {
        if (inputChar === expectedChar) {
          charSpan.classList.add("correct");
          correctChars++;
          correctTyped++;
        } else {
          charSpan.classList.add("incorrect");
          errors++;
        }
      }
    });

    // Handle extra characters (typed beyond quote length)
    if (inputChars.length > quoteChars.length) {
      for (let i = quoteChars.length; i < inputChars.length; i++) {
        const extraCharSpan = document.createElement("span");
        extraCharSpan.className = "char extra";
        extraCharSpan.innerText = inputChars[i];
        quoteDisplay.appendChild(extraCharSpan);
        errors++;
      }
    }

    // Highlight current character
    if (inputChars.length < quoteChars.length) {
      quoteChars[inputChars.length].classList.add("current");
    }

    // Update character count
    charCount.textContent = `${inputChars.length}/${quoteChars.length}`;

    // Update progress
    const progress = Math.min(100, (inputChars.length / quoteChars.length) * 100);
    progressFill.style.width = `${progress}%`;

    // Calculate real-time metrics
    const timeElapsed = testStartTime ? (Date.now() - testStartTime) / 1000 : 0;
    const minutes = timeElapsed / 60;
    const wordsTyped = correctChars / 5;
    const wpm = Math.round(wordsTyped / minutes) || 0;
    const accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;

    wpmElement.textContent = wpm;
    accuracyElement.textContent = `${accuracy}%`;
    errorsElement.textContent = errors;

    // Check if quote is completed
    if (inputChars.length >= quoteChars.length && !isCompleted) {
      completeTest();
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timeElement.textContent = `${timeLeft}s`;

      // Update progress based on time
      const timeProgress = ((totalTime - timeLeft) / totalTime) * 100;
      if (!isCompleted) {
        progressFill.style.width = `${Math.max(timeProgress, parseFloat(progressFill.style.width) || 0)}%`;
      }

      if (timeLeft <= 0) {
        completeTest();
      }
    }, 1000);
  }

  function completeTest() {
    clearInterval(timer);
    isCompleted = true;
    isTyping = false;
    quoteInput.disabled = true;

    // Calculate final metrics
    const timeUsed = totalTime - timeLeft;
    const minutes = timeUsed / 60;
    const wordsTyped = correctTyped / 5;
    const wpm = Math.round(wordsTyped / minutes) || 0;
    const accuracy = totalTyped > 0 ? Math.round((correctTyped / totalTyped) * 100) : 0;

    // Show results
    showResults(wpm, accuracy, errors, timeUsed);

    // Store in history
    storeTestResult(wpm, accuracy, timeUsed);
  }

  function showResults(wpm, accuracy, errors, time) {
    resultWPM.textContent = wpm;
    resultAccuracy.textContent = `${accuracy}%`;
    resultErrors.textContent = errors;
    resultTime.textContent = `${time}s`;
    resultModal.classList.add("active");
  }

  function closeResultModal() {
    resultModal.classList.remove("active");
  }

  function shareResults() {
    const wpm = resultWPM.textContent;
    const accuracy = resultAccuracy.textContent;

    if (navigator.share) {
      navigator.share({
        title: 'Typing Test Results',
        text: `I just typed at ${wpm} WPM with ${accuracy} accuracy! Try beating my score.`,
        url: window.location.href
      });
    } else {
      // Fallback: Copy to clipboard
      const text = `Typing Test Results: ${wpm} WPM, ${accuracy} accuracy`;
      navigator.clipboard.writeText(text).then(() => {
        alert("Results copied to clipboard!");
      });
    }
  }

  function storeTestResult(wpm, accuracy, time) {
    const history = JSON.parse(localStorage.getItem('typingTestHistory') || '[]');
    history.push({
      wpm,
      accuracy,
      time,
      date: new Date().toISOString(),
      difficulty,
      source: quoteSource
    });

    // Keep only last 10 results
    if (history.length > 10) history.shift();

    localStorage.setItem('typingTestHistory', JSON.stringify(history));
  }

  function resetTest() {
    clearInterval(timer);
    timeLeft = totalTime;
    isTyping = false;
    isCompleted = false;
    errors = 0;
    totalTyped = 0;
    correctTyped = 0;
    quoteInput.value = "";
    quoteInput.disabled = false;
    timeElement.textContent = `${timeLeft}s`;
    wpmElement.textContent = "0";
    accuracyElement.textContent = "0%";
    errorsElement.textContent = "0";
    charCount.textContent = "0/0";
    progressFill.style.width = "0%";
    quoteInput.focus();

    // Re-render quote
    quoteDisplay.innerHTML = "";
    currentQuote.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.className = "char";
      charSpan.innerText = char;
      quoteDisplay.appendChild(charSpan);
    });
  }

  function clearInput() {
    quoteInput.value = "";
    checkInput();
    quoteInput.focus();
  }

  function togglePracticeMode() {
    practiceMode = !practiceMode;
    practiceBtn.innerHTML = practiceMode
      ? '<i class="fas fa-check"></i> Practice Mode (On)'
      : '<i class="fas fa-dumbbell"></i> Practice Mode';

    practiceBtn.classList.toggle("bg-green-500");
    practiceBtn.classList.toggle("bg-green-600");
    practiceBtn.classList.toggle("bg-gray-500");
    practiceBtn.classList.toggle("dark:bg-gray-600");

    if (practiceMode) {
      // In practice mode, timer doesn't run out
      totalTime = 999;
      timeLeft = 999;
      timeElement.textContent = "∞";
    } else {
      totalTime = 60;
      timeLeft = 60;
      timeElement.textContent = "60s";
    }

    resetTest();
  }

  function toggleSettings() {
    settingsPanel.classList.toggle("active");
    const icon = settingsToggle.querySelector("i");
    if (settingsPanel.classList.contains("active")) {
      icon.style.transform = "rotate(90deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  }

  // Theme functions - FIXED
  function toggleTheme() {
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    // Update button icon with animation
    const icon = themeToggle.querySelector("i");
    icon.style.transform = "rotate(360deg)";
    setTimeout(() => {
      icon.style.transform = "rotate(0deg)";
    }, 300);
  }

  function setTheme(theme) {
    // Remove both classes first
    body.classList.remove("light", "dark");
    // Add the selected theme
    body.classList.add(theme);

    // Update button icon
    const icon = themeToggle.querySelector("i");
    if (theme === "dark") {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }

    // Update instructions panel color
    updateInstructionsPanel(theme);

    // Save preference
    localStorage.setItem("theme", theme);
  }

  function updateInstructionsPanel(theme) {
    if (theme === "dark") {
      instructionsPanel.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
      instructionsPanel.style.color = "#e5e7eb";
    } else {
      instructionsPanel.style.backgroundColor = "rgba(59, 130, 246, 0.05)";
      instructionsPanel.style.color = "#4b5563";
    }
  }

  function updateThemeColors() {
    const theme = body.classList.contains("dark") ? "dark" : "light";
    updateInstructionsPanel(theme);
  }

  function initTheme() {
    let savedTheme = localStorage.getItem("theme");

    // If no saved theme, check system preference
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      savedTheme = prefersDark ? "dark" : "light";
    }

    setTheme(savedTheme);
  }
});
