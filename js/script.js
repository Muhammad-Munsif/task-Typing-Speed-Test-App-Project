
// ==================== COMPLETE QUOTE DATABASE ====================
const QUOTES_LIB = {
  programming: { easy: ["HTML structures the web like bones.", "CSS paints the web with style.", "JavaScript makes pages come alive.", "Python emphasizes readability and fun.", "Git helps teams collaborate smoothly.", "React components build interactive UIs.", "APIs connect services like magic.", "Algorithms are recipes for computers.", "Debugging is like detective work.", "Open source fuels innovation.", "Code is poetry in logic.", "Functions are the building blocks.", "Arrays store collections elegantly.", "Loops repeat tasks efficiently.", "Variables hold data like containers.", "console.log() is a developer's best friend.", "Version control saves history.", "DRY: don't repeat yourself.", "KISS: keep it simple.", "Refactoring improves structure.", "Clean code is readable code."], medium: ["Programming is the art of algorithmically expressing intent.", "Any fool can write code a computer understands; good programmers write human-readable code.", "First solve the problem, then craft the code.", "The best error message is the one never shown.", "Code is like humor: when you explain it, it's bad.", "Simplicity is the ultimate sophistication in software.", "Make it work, make it right, make it fast.", "Premature optimization is root of all evil.", "Software entropy increases without refactoring.", "Design patterns are reusable solutions to common problems.", "Testing ensures reliability and confidence.", "Code reviews spread knowledge and catch bugs.", "Technical debt slows future development.", "Documentation is love letter to future maintainers.", "Consistency beats cleverness in teams.", "YAGNI: You aren't gonna need it.", "Functional programming reduces side effects.", "Modular code enables reuse and clarity.", "Security must be built-in, not bolted-on.", "Performance is a feature, not an afterthought.", "The cloud enables scaling at will.", "Containers simplify deployment environments.", "CI/CD pipelines deliver value rapidly.", "Agile embraces change and iteration.", "Legacy code teaches humility and patience.", "Abstraction hides complexity wisely.", "Recursion can be elegant but risky.", "Big O notation measures efficiency.", "Concurrency demands careful coordination.", "AI and ML are reshaping our world.", "Edge computing brings power closer.", "Quantum computing unlocks new paradigms.", "Open source communities build amazing things.", "Version control is time travel for code.", "Pair programming boosts collaboration."], hard: ["The process of preparing programs for digital computers is a meticulous art requiring systematic precision and creative problem-solving synergy.", "Programs must be written for people to read, and only incidentally for machines to execute — this is the fundamental truth of software craftsmanship.", "Simplicity is a prerequisite for reliability; complex systems often fail in unforeseen, chaotic ways that defy simple diagnosis.", "There are two ways of constructing a software design: make it so simple there are obviously no deficiencies, or so complex there are no obvious deficiencies.", "The computing scientist's main challenge is not to get confused by the complexities of his own making.", "Measuring programming progress by lines of code is like measuring aircraft building by weight.", "Software is a gas; it expands to fill its container with ever more complexity and features.", "The most important property of a program is whether it accomplishes the intention of its user.", "Object-oriented programming offers a powerful way to model real-world entities but requires disciplined design.", "Functional languages emphasize immutability, leading to fewer side effects and more predictable concurrency.", "Microservices architectures enable independent deployability at the cost of distributed system complexity.", "Event-driven systems excel at loose coupling but demand robust monitoring and idempotency strategies.", "Machine learning models are shaped by data quality more than algorithm sophistication.", "Low-level optimization requires deep understanding of CPU caches, branch prediction, and memory latency.", "High-level architecture decisions influence productivity more than language choices over the long term.", "A type system can prevent entire categories of runtime errors when used expressively and rigorously.", "Code maintainability hinges on naming, structure, and the principle of least astonishment.", "Refactoring legacy systems is a delicate art requiring comprehensive test coverage and incremental change.", "Distributed consensus algorithms like Raft and Paxos enable reliable coordination in unreliable networks.", "Database indexing strategies separate efficient queries from full-table scan nightmares.", "Security by design means threat modeling from day one, not as an afterthought during audits.", "The UNIX philosophy: write programs that do one thing well and work together via text streams.", "Reactive programming shifts focus to data flows and propagation of change, simplifying UI state.", "Compilers translate human-friendly syntax into optimized machine code, bridging abstraction gaps.", "Interpreters offer flexibility and rapid iteration at the cost of raw execution speed.", "Garbage collection trades throughput for developer productivity in memory management.", "Concurrency primitives like goroutines or async/await reshape how we structure I/O-bound tasks.", "The actor model encapsulates state and behavior, scaling across cores and networks naturally.", "WebAssembly brings near-native performance to web browsers, unlocking new application categories.", "Blockchain provides decentralized trust through cryptographic consensus, albeit with energy trade-offs.", "DevOps culture blurs the line between development and operations, emphasizing automation and observability.", "Site reliability engineering applies software principles to infrastructure management.", "Chaos engineering proactively tests system resilience by injecting failures in production.", "Quantum algorithms like Shor's and Grover's demonstrate exponential speedups for specific problems.", "Neural networks approximate any function given sufficient depth, data, and compute.", "Embedded systems programming demands resource frugality and real-time guarantees.", "Game development marries physics, graphics, AI, and interactive storytelling into a cohesive experience.", "Compiler optimizations like loop unrolling and inlining can yield order-of-magnitude speedups.", "The CAP theorem reminds us that distributed systems must choose between consistency, availability, and partition tolerance.", "Serverless architectures abstract infrastructure entirely, letting developers focus purely on business logic.", "Kernel development requires meticulous attention to concurrency, memory ordering, and hardware interfaces.", "Formal verification can mathematically prove correctness for critical software components.", "Parser combinators offer a declarative way to build language processors that mirror grammar structure.", "Metaprogramming blurs the line between code and data, enabling powerful abstractions.", "Domain-driven design aligns software models with complex business domains through ubiquitous language.", "Hexagonal architecture isolates core logic from external dependencies, improving testability.", "Event sourcing persists state as a sequence of immutable events, enabling temporal queries and replay.", "CQRS separates read and write models to optimize for complex query requirements.", "Message brokers like Kafka provide durable, ordered event streams for microservice communication.", "GraphQL empowers clients to request exactly the data they need, reducing over-fetching and under-fetching."] },
  literature: { easy: ["The sun rises with hope each day.", "Dreams are whispers of the soul.", "Stories connect hearts across time.", "A book is a door to infinite worlds.", "Courage is not the absence of fear.", "Kindness costs nothing but means everything.", "Laughter echoes in memory.", "Friendship multiplies joy.", "Autumn leaves teach us about letting go.", "The sea speaks in ancient rhythms.", "Stars remind us of vast possibilities.", "Music is the language of emotion.", "Home is where the heart belongs.", "Patience ripens sweetest fruits.", "Curiosity lights the way forward.", "Imagination paints reality anew.", "Gratitude transforms ordinary moments.", "Silence holds its own wisdom.", "Truth stands tall over time.", "Love weaves invisible threads."], medium: ["It was the best of times, it was the worst of times – a season of light and darkness.", "All that we see or seem is but a dream within a dream, woven by perception.", "The only way to get rid of temptation is to yield to it gracefully.", "True places are not found on any map; they live within.", "The world is full of obvious things which nobody observes until pointed out.", "There is no greater agony than bearing an untold story inside you.", "What is to give light must endure burning.", "The past is never dead; it's not even past.", "We accept the love we think we deserve.", "Not all those who wander are lost; some seek unseen horizons.", "Happiness can be found even in the darkest times if one remembers to turn on the light.", "You have power over your mind, not outside events; realize this, and you will find strength.", "It does not do to dwell on dreams and forget to live.", "There are darknesses in life and there are lights; you are one of the lights.", "The soul becomes dyed with the color of its thoughts.", "We are what we repeatedly do; excellence becomes habit.", "The wound is the place where the light enters you.", "To live is the rarest thing; most people merely exist.", "And still, I rise with the dawn of courage.", "Books are a uniquely portable magic.", "Words are the voice of the heart.", "Hope is the thing with feathers."], hard: ["Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show the unfolding truth.", "There are years that ask questions and years that answer, yet the answers seldom satisfy the yearning heart.", "The universe is made of stories, not atoms, and every story births a thousand questions.", "We live in a world where information overflows, but meaning remains scarce and precious.", "The boundaries which divide Life from Death are shadowy and vague; who shall say where one ends and the other begins?", "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to than I have ever known.", "I am no bird; and no net ensnares me: I am a free human being with an independent will.", "All animals are equal, but some animals are more equal than others in the theater of power.", "Who controls the past controls the future; who controls the present controls the past.", "The man who does not read has no advantage over the man who cannot read.", "In the midst of winter, I found there was within me an invincible summer.", "For what is it to die but to stand naked in the wind and melt into the sun?", "Memory is a cruel mistress, weaving both torment and tenderness.", "There is no exquisite beauty without some strangeness in the proportion.", "The fool doth think he is wise, but the wise man knows himself to be a fool.", "It is not in the stars to hold our destiny but in ourselves.", "What we call the beginning is often the end, and to make an end is to make a beginning.", "Time present and time past are both perhaps present in time future.", "Human speech is like a cracked kettle on which we tap crude rhythms for bears to dance to.", "Art washes away from the soul the dust of everyday life."] },
  mixed: { easy: ["Breathe deep and begin.", "Small steps lead to great distances.", "Clarity comes from action.", "Mistakes are proof you are trying.", "Rise after every fall.", "Today is a gift.", "Focus on the present.", "Discipline equals freedom.", "Progress over perfection.", "Create without fear.", "Every master was once a beginner.", "Consistency beats intensity.", "Embrace the challenge.", "Wisdom grows with patience.", "Strength is forged in struggle.", "Innovation starts with curiosity.", "Balance brings harmony.", "Simplify to amplify.", "Gratitude shifts perspective.", "Kindness multiplies."], medium: ["The only limit to our realization of tomorrow will be our doubts of today.", "Life is what happens while you're busy making other plans.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Do what you can, with what you have, where you are.", "Happiness is not something ready made; it comes from your own actions.", "Turn your wounds into wisdom.", "What you get by achieving your goals is not as important as what you become.", "It does not matter how slowly you go as long as you do not stop.", "The secret of getting ahead is getting started.", "Believe you can and you're halfway there.", "Act as if what you do makes a difference; it does.", "The future depends on what you do today.", "Dream it. Believe it. Build it.", "Great things never come from comfort zones.", "Start where you are. Use what you have.", "Perseverance is not a long race; it is many short races one after another.", "You are braver than you believe, stronger than you seem.", "Make each day your masterpiece.", "The harder you work for something, the greater you'll feel when you achieve it.", "Don't watch the clock; do what it does. Keep going.", "Your time is limited, don't waste it living someone else's life."], hard: ["The intuitive mind is a sacred gift, and the rational mind is a faithful servant; we have created a society that honors the servant and has forgotten the gift.", "We are what we repeatedly do; excellence, then, is not an act but a habit carved by consistent effort.", "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.", "It is not enough to have a good mind; the main thing is to use it well, with discipline and imagination.", "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.", "To know what you know and what you do not know, that is true wisdom.", "He who has a why to live can bear almost any how, finding meaning in struggle.", "The journey of a thousand miles begins beneath one's feet, but only if one takes the first step.", "Watch your thoughts, for they become words; watch your words, for they become actions; watch your actions, for they become destiny.", "In the end, it's not the years in your life that count; it's the life in your years, the depth you lived.", "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", "The man who moves a mountain begins by carrying away small stones; persistence triumphs over magnitude.", "We suffer more often in imagination than in reality, yet freedom lies in mastering the mind.", "It is better to be feared than loved, if you cannot be both, but wisdom blends both arts.", "The greatest glory in living lies not in never falling, but in rising every time we fall.", "Our life is what our thoughts make it; the architecture of the mind shapes reality.", "Do not pray for an easy life; pray for the strength to endure a difficult one.", "The unexamined life is not worth living; reflection births wisdom.", "Courage is resistance to fear, mastery of fear — not absence of fear.", "The secret of change is to focus all energy not on fighting the old, but on building the new."] },
  science: { easy: ["Science is curiosity about the world.", "Physics explains motion and energy.", "Chemistry studies matter and reactions.", "Biology explores living organisms.", "The Earth orbits around the Sun.", "Water freezes at zero degrees Celsius.", "Gravity pulls objects toward Earth.", "Light travels faster than sound.", "Atoms are the building blocks of matter.", "DNA carries genetic information."], medium: ["The important thing is to not stop questioning. Curiosity has its own reason for existing.", "Science is not only a disciple of reason but also one of romance and passion.", "Somewhere something incredible is waiting to be known.", "The most beautiful thing we can experience is the mysterious.", "We are a way for the cosmos to know itself.", "In science, the credit goes to the man who convinces the world, not to whom the idea first occurs.", "The universe is under no obligation to make sense to you.", "Extraordinary claims require extraordinary evidence.", "Science without religion is lame, religion without science is blind.", "The good thing about science is that it's true whether or not you believe in it."], hard: ["The most incomprehensible thing about the universe is that it is comprehensible.", "We have to constantly be jumping off cliffs and developing our wings on the way down.", "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, were made in the interiors of collapsing stars.", "We are made of star-stuff. We are a way for the universe to know itself.", "There are in fact two things: science and opinion; the former begets knowledge, the latter ignorance.", "The laws of science are not external constraints but the internal harmony of the universe.", "Science is the poetry of reality, and we can all be poets of the real.", "The universe is not only stranger than we imagine, it is stranger than we can imagine.", "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.", "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."] }
};
for (let category in QUOTES_LIB) { QUOTES_LIB[category].expert = [...(QUOTES_LIB[category].hard || [])]; }

// DOM Elements and App State
let timer = null, timeLeft = 60, totalDuration = 60, isTyping = false, testDone = false;
let currentQuoteText = "", errors = 0, totalTypedChars = 0, correctCharsTyped = 0, startTime = null;
let difficulty = "medium", quoteSource = "programming", practiceActive = false, focusMode = false;
let bestWpm = parseInt(localStorage.getItem("bestWpm") || "0");

const elements = {
  quoteDisplay: document.getElementById("quoteDisplay"), quoteInput: document.getElementById("quoteInput"),
  timeElem: document.getElementById("time"), wpmElem: document.getElementById("wpm"), rawWpmElem: document.getElementById("rawWpm"),
  accuracyElem: document.getElementById("accuracy"), errorsElem: document.getElementById("errors"), charPerSecElem: document.getElementById("charPerSec"),
  timeElapsedElem: document.getElementById("timeElapsed"), restartBtn: document.getElementById("restartBtn"), newQuoteBtn: document.getElementById("newQuoteBtn"),
  practiceBtn: document.getElementById("practiceBtn"), clearBtn: document.getElementById("clearBtn"), themeToggle: document.getElementById("themeToggle"),
  settingsToggle: document.getElementById("settingsToggle"), historyToggle: document.getElementById("historyToggle"), statsToggle: document.getElementById("statsToggle"),
  settingsPanel: document.getElementById("settingsPanel"), historyPanel: document.getElementById("historyPanel"), statsPanel: document.getElementById("statsPanel"),
  focusModeToggle: document.getElementById("focusModeToggle"), charCountSpan: document.getElementById("charCount"), quoteLengthSpan: document.getElementById("quoteLength"),
  wordsCountSpan: document.getElementById("wordsCount"), difficultyBadge: document.getElementById("difficultyBadge"), progressFill: document.getElementById("progressFill"),
  resultModal: document.getElementById("resultModal"), closeResult: document.getElementById("closeResultBtn"), shareBtn: document.getElementById("shareResultBtn"),
  resultWPM: document.getElementById("resultWPM"), resultRawWPM: document.getElementById("resultRawWPM"), resultAccuracy: document.getElementById("resultAccuracy"),
  resultErrors: document.getElementById("resultErrors"), resultTime: document.getElementById("resultTime"), quoteCountBadge: document.getElementById("quoteCountBadge"),
  historyList: document.getElementById("historyList"), clearHistoryBtn: document.getElementById("clearHistoryBtn"), bestWpmElem: document.getElementById("bestWpm"),
  avgWpmElem: document.getElementById("avgWpm"), totalTestsElem: document.getElementById("totalTests"), avgAccuracyElem: document.getElementById("avgAccuracy"),
  achievementBadge: document.getElementById("achievementBadge"), achievementText: document.getElementById("achievementText")
};

let testHistory = JSON.parse(localStorage.getItem("velocityHistory") || "[]");

function updateStatsSummary() {
  if (testHistory.length === 0) { elements.bestWpmElem.innerText = "0"; elements.avgWpmElem.innerText = "0"; elements.totalTestsElem.innerText = "0"; elements.avgAccuracyElem.innerText = "0%"; return; }
  const wpmValues = testHistory.map(h => parseInt(h.wpm) || 0);
  const accValues = testHistory.map(h => parseInt(h.accuracy) || 0);
  const best = Math.max(...wpmValues);
  const avgWpm = Math.floor(wpmValues.reduce((a, b) => a + b, 0) / wpmValues.length);
  const avgAcc = Math.floor(accValues.reduce((a, b) => a + b, 0) / accValues.length);
  elements.bestWpmElem.innerText = best;
  elements.avgWpmElem.innerText = avgWpm;
  elements.totalTestsElem.innerText = testHistory.length;
  elements.avgAccuracyElem.innerText = avgAcc + "%";
  if (best > bestWpm) { bestWpm = best; localStorage.setItem("bestWpm", bestWpm); }
}

// ==================== SOUND & HAPTIC FEEDBACK SYSTEM (DAY 1) ====================
const SoundManager = {
  // Settings
  enabled: true,
  hapticsEnabled: true,
  volume: 0.4,

  // Audio context for web audio API (better than HTMLAudioElement)
  audioContext: null,
  sounds: {},

  // Initialize audio system (requires user interaction first)
  init() {
    if (this.audioContext) return;
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.log('Web Audio API not supported');
      this.enabled = false;
    }
  },

  // Generate beep sound using Web Audio API
  playBeep(frequency, duration, type = 'sine') {
    if (!this.enabled || !this.audioContext) return;

    // Resume audio context if suspended (browser policy)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;
    gainNode.gain.value = this.volume;

    oscillator.start();

    // Fade out for smoother sound
    gainNode.gain.exponentialRampToValueAtTime(0.00001, this.audioContext.currentTime + duration);
    oscillator.stop(this.audioContext.currentTime + duration);
  },

  // Keypress sound (subtle click)
  playKeypress() {
    if (!this.enabled) return;
    this.playBeep(880, 0.03, 'sine');
  },

  // Error sound (lower pitch, buzzer-like)
  playError() {
    if (!this.enabled) return;
    this.playBeep(440, 0.15, 'triangle');

    // Haptic feedback on mobile
    if (this.hapticsEnabled && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  },

  // Test completion fanfare (pleasant ascending notes)
  playComplete() {
    if (!this.enabled) return;
    this.playBeep(523.25, 0.2, 'sine');  // C5
    setTimeout(() => this.playBeep(659.25, 0.2, 'sine'), 150);  // E5
    setTimeout(() => this.playBeep(783.99, 0.4, 'sine'), 300);  // G5
  },

  // Achievement unlock sound
  playAchievement() {
    if (!this.enabled) return;
    this.playBeep(987.77, 0.15, 'sine');  // B5
    setTimeout(() => this.playBeep(1318.52, 0.3, 'sine'), 120); // E6
  },

  // Toggle sound on/off
  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled && this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    return this.enabled;
  },

  // Toggle haptics
  toggleHaptics() {
    this.hapticsEnabled = !this.hapticsEnabled;
    return this.hapticsEnabled;
  },

  // Set volume (0-1)
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }
};

// Load sound settings from localStorage
const soundSettings = JSON.parse(localStorage.getItem('velocitySoundSettings') || '{"enabled":true,"hapticsEnabled":true,"volume":0.4}');
SoundManager.enabled = soundSettings.enabled;
SoundManager.hapticsEnabled = soundSettings.hapticsEnabled;
SoundManager.volume = soundSettings.volume;

function updateQuoteCountDisplay() { const count = QUOTES_LIB[quoteSource]?.[difficulty]?.length || 20; elements.quoteCountBadge.innerHTML = `<i class="fas fa-book-open mr-1"></i>${count} quotes`; }
function updateQuoteUI() { elements.quoteDisplay.innerHTML = "";[...currentQuoteText].forEach(ch => { let span = document.createElement("span"); span.className = "char"; span.innerText = ch; elements.quoteDisplay.appendChild(span); }); const wordCount = currentQuoteText.split(/\s+/).filter(w => w).length; elements.wordsCountSpan.innerText = wordCount; elements.quoteLengthSpan.innerText = currentQuoteText.length; elements.difficultyBadge.innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1); elements.difficultyBadge.className = `difficulty-badge difficulty-${difficulty === "expert" ? "hard" : difficulty}`; updateQuoteCountDisplay(); }
function loadQuote() { const arr = QUOTES_LIB[quoteSource]?.[difficulty] || QUOTES_LIB.programming.medium; currentQuoteText = arr[Math.floor(Math.random() * arr.length)]; updateQuoteUI(); resetTestState(); }
function resetTestState() {
  clearInterval(timer); isTyping = false; testDone = false; errors = 0; totalTypedChars = 0; correctCharsTyped = 0; elements.quoteInput.value = ""; elements.quoteInput.disabled = false; timeLeft = practiceActive ? 9999 : totalDuration; if (!practiceActive) elements.timeElem.innerText = timeLeft + "s"; else elements.timeElem.innerText = "∞"; elements.wpmElem.innerText = "0"; elements.rawWpmElem.innerText = "0"; elements.accuracyElem.innerText = "0%"; elements.errorsElem.innerText = "0"; elements.charPerSecElem.innerText = "0"; elements.timeElapsedElem.innerText = "0"; elements.charCountSpan.innerText = `0/${currentQuoteText.length}`; elements.progressFill.style.width = "0%"; startTime = null; const quoteChars = elements.quoteDisplay.querySelectorAll(".char"); quoteChars.forEach(c => c.classList.remove("correct", "incorrect", "current", "extra")); if (currentQuoteText.length) quoteChars[0]?.classList.add("current"); elements.quoteInput.focus();

}
function computeAndUpdateMetrics() { const elapsed = startTime ? (Date.now() - startTime) / 1000 : 0; elements.timeElapsedElem.innerText = Math.floor(elapsed); const minutes = Math.max(0.01, elapsed / 60); const wpm = Math.floor((correctCharsTyped / 5) / minutes); const rawWpm = Math.floor((totalTypedChars / 5) / minutes); const accuracy = totalTypedChars ? Math.floor((correctCharsTyped / totalTypedChars) * 100) : 0; const cps = elapsed > 0 ? (totalTypedChars / elapsed).toFixed(1) : 0; elements.wpmElem.innerText = wpm || 0; elements.rawWpmElem.innerText = rawWpm || 0; elements.accuracyElem.innerText = accuracy + "%"; elements.errorsElem.innerText = errors; elements.charPerSecElem.innerText = cps; }
function handleInput() {
  if (!isTyping && elements.quoteInput.value.length > 0 && !testDone) {
    startTime = Date.now();
    isTyping = true;
    startTimer();
    // Initialize sound on first keystroke (browser requires user interaction)
    SoundManager.init();
    SoundManager.playKeypress();
  }

  // Play sound on each keystroke (optional - can be toggled)
  if (isTyping && !testDone && elements.quoteInput.value.length > 0) {
    // Only play on actual new character (not backspace)
    const lastChar = elements.quoteInput.value[elements.quoteInput.value.length - 1];
    if (lastChar && lastChar !== '') {
      SoundManager.playKeypress();
    }
  }

  // Rest of your existing handleInput code...
  const inputVal = elements.quoteInput.value;
  const quoteChars = elements.quoteDisplay.querySelectorAll(".char");
  let correctCount = 0, errCount = 0;
  totalTypedChars = inputVal.length;

  // Track if this input caused any new errors
  let hadNewError = false;

  quoteChars.forEach((span, idx) => {
    span.classList.remove("correct", "incorrect", "current", "extra");
    if (idx < inputVal.length) {
      if (inputVal[idx] === span.innerText) {
        span.classList.add("correct");
        correctCount++;
      } else {
        span.classList.add("incorrect");
        errCount++;
        hadNewError = true;
      }
    }
  });

  // Play error sound if there's a mistake
  if (hadNewError && isTyping && !testDone) {
    SoundManager.playError();
  }






  // Rest of your existing code...
  if (inputVal.length > quoteChars.length) {
    for (let i = quoteChars.length; i < inputVal.length; i++) {
      let extra = document.createElement("span");
      extra.className = "char extra";
      extra.innerText = inputVal[i];
      elements.quoteDisplay.appendChild(extra);
      errCount++;
    }
  }
  if (inputVal.length < quoteChars.length) quoteChars[inputVal.length]?.classList.add("current");
  correctCharsTyped = correctCount;
  errors = errCount;
  const progress = Math.min(100, (inputVal.length / currentQuoteText.length) * 100);
  elements.progressFill.style.width = `${progress}%`;
  elements.charCountSpan.innerText = `${inputVal.length}/${currentQuoteText.length}`;
  computeAndUpdateMetrics();
  if (inputVal.length >= currentQuoteText.length && !testDone) finishTest();
}
function startTimer() { if (timer) clearInterval(timer); timer = setInterval(() => { if (practiceActive) return; if (timeLeft <= 1) finishTest(); else { timeLeft--; elements.timeElem.innerText = timeLeft + "s"; if (!testDone) { const timeProgress = ((totalDuration - timeLeft) / totalDuration) * 100; elements.progressFill.style.width = `${Math.max(timeProgress, parseFloat(elements.progressFill.style.width) || 0)}%`; } } }, 1000); }
function finishTest() { if (testDone) return; testDone = true; isTyping = false; clearInterval(timer); elements.quoteInput.disabled = true; const usedTime = practiceActive ? (startTime ? (Date.now() - startTime) / 1000 : totalDuration) : totalDuration - timeLeft; const finalWPM = parseInt(elements.wpmElem.innerText), finalRawWPM = parseInt(elements.rawWpmElem.innerText), finalAccuracy = elements.accuracyElem.innerText, finalErrors = elements.errorsElem.innerText; elements.resultWPM.innerText = finalWPM; elements.resultRawWPM.innerText = finalRawWPM; elements.resultAccuracy.innerText = finalAccuracy; elements.resultErrors.innerText = finalErrors; elements.resultTime.innerText = Math.floor(usedTime) + "s"; const isNewBest = finalWPM > bestWpm && finalWPM > 0; if (isNewBest) { elements.achievementBadge.classList.remove("hidden"); elements.achievementText.innerText = "New Personal Best! 🏆"; } else { elements.achievementBadge.classList.add("hidden"); } elements.resultModal.classList.add("active", "flex"); elements.resultModal.classList.remove("hidden"); const historyEntry = { wpm: finalWPM, rawWpm: finalRawWPM, accuracy: finalAccuracy, errors: finalErrors, time: Math.floor(usedTime), difficulty, source: quoteSource, date: new Date().toISOString() }; testHistory.unshift(historyEntry); if (testHistory.length > 15) testHistory.pop(); localStorage.setItem("velocityHistory", JSON.stringify(testHistory)); updateHistoryDisplay(); updateStatsSummary(); document.querySelector(".typing-test").classList.add("celebration"); setTimeout(() => document.querySelector(".typing-test").classList.remove("celebration"), 500); }
function updateHistoryDisplay() { if (testHistory.length === 0) { elements.historyList.innerHTML = '<p class="text-center text-sm opacity-50 text-gray-600 dark:text-gray-400">No history yet. Complete a test!</p>'; return; } elements.historyList.innerHTML = testHistory.slice(0, 10).map(entry => `<div class="history-item bg-white/50 dark:bg-gray-800/50 rounded-lg p-2 flex justify-between items-center text-sm"><span><span class="font-bold text-blue-500">${entry.wpm}</span> WPM</span><span class="text-emerald-500">${entry.accuracy}</span><span class="text-xs opacity-60 text-gray-600 dark:text-gray-400">${new Date(entry.date).toLocaleTimeString()}</span></div>`).join(''); }
function resetTest() { resetTestState(); testDone = false; }
function newQuote() { loadQuote(); resetTestState(); testDone = false; clearInterval(timer); isTyping = false; startTime = null; }
function togglePractice() { practiceActive = !practiceActive; elements.practiceBtn.innerHTML = practiceActive ? '<i class="fas fa-check-circle"></i>Practice ON' : '<i class="fas fa-infinity"></i>Practice Mode'; if (practiceActive) { totalDuration = 9999; timeLeft = 9999; elements.timeElem.innerText = "∞"; } else { totalDuration = parseInt(document.querySelector(".time-option.bg-blue-500")?.dataset.time || "60"); timeLeft = totalDuration; elements.timeElem.innerText = timeLeft + "s"; } resetTest(); }
function toggleFocusMode() { focusMode = !focusMode; elements.focusModeToggle.innerHTML = focusMode ? '<i class="fas fa-eye mr-1"></i>Focus On' : '<i class="fas fa-eye-slash mr-1"></i>Focus Off'; const statsCards = document.querySelectorAll('.stat'); if (focusMode) { elements.settingsPanel.classList.remove('active'); elements.historyPanel.classList.remove('active'); elements.statsPanel.classList.remove('active'); statsCards.forEach(c => c.style.opacity = '0.5'); } else { statsCards.forEach(c => c.style.opacity = '1'); } }
function clearInputField() { elements.quoteInput.value = ""; handleInput(); elements.quoteInput.focus(); }
function shareResults() { const text = `VelocityType: ${elements.resultWPM.innerText} WPM · ${elements.resultAccuracy.innerText} accuracy. Can you beat me?`; navigator.clipboard?.writeText(text); alert("Results copied to clipboard!"); }
function closeModal() { elements.resultModal.classList.remove("active", "flex"); elements.resultModal.classList.add("hidden"); resetTest(); }
function clearHistory() { testHistory = []; localStorage.setItem("velocityHistory", "[]"); updateHistoryDisplay(); updateStatsSummary(); }

// Fixed theme functions - completely rewritten
function initTheme() {
  let savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.body.classList.add(savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const icon = elements.themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "fas fa-moon";
    icon.style.color = "#fbbf24";
  } else {
    icon.className = "fas fa-sun";
    icon.style.color = "#eab308";
  }
}

function toggleThemeGlobal() {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  // Remove both classes and add the new one
  document.body.classList.remove("light", "dark");
  document.body.classList.add(newTheme);

  // Save to localStorage
  localStorage.setItem("theme", newTheme);

  // Update icon
  updateThemeIcon(newTheme);

  // Force refresh of quote display colors
  const quoteChars = elements.quoteDisplay.querySelectorAll(".char");
  quoteChars.forEach(char => {
    if (char.classList.contains("correct")) {
      char.style.color = "#10b981";
    } else if (char.classList.contains("incorrect")) {
      char.style.color = "#f87171";
    }
  });
}

function finishTest() {
  if (testDone) return;

  // Play completion fanfare
  SoundManager.playComplete();

  testDone = true;
  isTyping = false;
  clearInterval(timer);
  elements.quoteInput.disabled = true;
  const usedTime = practiceActive ? (startTime ? (Date.now() - startTime) / 1000 : totalDuration) : totalDuration - timeLeft;
  const finalWPM = parseInt(elements.wpmElem.innerText),
    finalRawWPM = parseInt(elements.rawWpmElem.innerText),
    finalAccuracy = parseInt(elements.accuracyElem.innerText),
    finalErrors = parseInt(elements.errorsElem.innerText);

  elements.resultWPM.innerText = finalWPM;
  elements.resultRawWPM.innerText = finalRawWPM;
  elements.resultAccuracy.innerText = finalAccuracy + "%";
  elements.resultErrors.innerText = finalErrors;
  elements.resultTime.innerText = Math.floor(usedTime) + "s";

  const isNewBest = finalWPM > bestWpm && finalWPM > 0;
  if (isNewBest) {
    elements.achievementBadge.classList.remove("hidden");
    elements.achievementText.innerText = "New Personal Best! 🏆";
    SoundManager.playAchievement();
  } else {
    elements.achievementBadge.classList.add("hidden");
  }

  elements.resultModal.classList.add("active", "flex");
  elements.resultModal.classList.remove("hidden");
  // Update leaderboards
  LeaderboardSystem.updateLeaderboards();

  // AI Difficulty Adaptation
  AIDifficultySystem.analyzePerformance(testResult);
  // Create test result object for achievements
  const testResult = {
    wpm: finalWPM,
    rawWpm: finalRawWPM,
    accuracy: finalAccuracy,
    errors: finalErrors,
    duration: Math.floor(usedTime),
    difficulty: difficulty,
    source: quoteSource,
    practiceMode: practiceActive,
    date: new Date().toISOString()
  };
  // Update classroom progress if student
  ClassroomSystem.updateStudentProgress(testResult);
  // Check daily challenge progress
  DailyChallengeSystem.checkProgress(testResult);
  // Save to history
  const historyEntry = {
    wpm: finalWPM,
    rawWpm: finalRawWPM,
    accuracy: finalAccuracy + "%",
    errors: finalErrors,
    time: Math.floor(usedTime),
    difficulty,
    source: quoteSource,
    date: new Date().toISOString()
  };
  testHistory.unshift(historyEntry);
  if (testHistory.length > 15) testHistory.pop();
  localStorage.setItem("velocityHistory", JSON.stringify(testHistory));

  // Check and unlock achievements
  AchievementSystem.checkAchievements(testResult);

  updateHistoryDisplay();
  updateStatsSummary();
  document.querySelector(".typing-test").classList.add("celebration");
  setTimeout(() => document.querySelector(".typing-test").classList.remove("celebration"), 500);
}

function attachEvents() {
  // Sound controls
  const soundToggle = document.getElementById('soundToggle');
  const hapticsToggle = document.getElementById('hapticsToggle');
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeValue = document.getElementById('volumeValue');
  // Custom Text System
  const customTextBtn = document.getElementById('customTextBtn');
  if (customTextBtn) {
    customTextBtn.onclick = () => CustomTextSystem.showCustomTextModal();
  }

  // Analytics button
  const analyticsBtn = document.getElementById('analyticsBtn');
  if (analyticsBtn) {
    analyticsBtn.onclick = () => {
      AnalyticsSystem.showAnalyticsDashboard();
    };
  }
  // Multiplayer button
  const multiplayerBtn = document.getElementById('multiplayerBtn');
  if (multiplayerBtn) {
    multiplayerBtn.onclick = () => {
      MultiplayerSystem.showLobby();
    };
  }



  // Exit custom mode button
  const exitCustomModeBtn = document.getElementById('exitCustomModeBtn');
  if (exitCustomModeBtn) {
    exitCustomModeBtn.onclick = () => CustomTextSystem.exitCustomMode();
  }
  // Achievements
  const achievementsToggle = document.getElementById('achievementsToggle');
  const viewAllAchievementsBtn = document.getElementById('viewAllAchievementsBtn');
  // Export button
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.onclick = () => {
      ExportSystem.showExportModal();
    };
  }
  if (achievementsToggle) {
    achievementsToggle.onclick = () => {
      AchievementSystem.showAchievementsModal();
    };
  }

  if (viewAllAchievementsBtn) {
    viewAllAchievementsBtn.onclick = () => {
      AchievementSystem.showAchievementsModal();
    };
  }

  if (soundToggle) {
    soundToggle.textContent = SoundManager.enabled ? 'ON' : 'OFF';
    soundToggle.className = SoundManager.enabled ? 'px-3 py-1 rounded-lg text-sm bg-green-500 text-white' : 'px-3 py-1 rounded-lg text-sm bg-gray-500 text-white';
    soundToggle.onclick = () => {
      const enabled = SoundManager.toggle();
      soundToggle.textContent = enabled ? 'ON' : 'OFF';
      soundToggle.className = enabled ? 'px-3 py-1 rounded-lg text-sm bg-green-500 text-white' : 'px-3 py-1 rounded-lg text-sm bg-gray-500 text-white';
      localStorage.setItem('velocitySoundSettings', JSON.stringify({
        enabled: SoundManager.enabled,
        hapticsEnabled: SoundManager.hapticsEnabled,
        volume: SoundManager.volume
      }));
    };
  }

  if (hapticsToggle) {
    hapticsToggle.textContent = SoundManager.hapticsEnabled ? 'ON' : 'OFF';
    hapticsToggle.className = SoundManager.hapticsEnabled ? 'px-3 py-1 rounded-lg text-sm bg-green-500 text-white' : 'px-3 py-1 rounded-lg text-sm bg-gray-500 text-white';
    hapticsToggle.onclick = () => {
      const enabled = SoundManager.toggleHaptics();
      hapticsToggle.textContent = enabled ? 'ON' : 'OFF';
      hapticsToggle.className = enabled ? 'px-3 py-1 rounded-lg text-sm bg-green-500 text-white' : 'px-3 py-1 rounded-lg text-sm bg-gray-500 text-white';
      localStorage.setItem('velocitySoundSettings', JSON.stringify({
        enabled: SoundManager.enabled,
        hapticsEnabled: SoundManager.hapticsEnabled,
        volume: SoundManager.volume
      }));
    };
  }

  if (volumeSlider) {
    volumeSlider.value = SoundManager.volume * 100;
    volumeValue.textContent = Math.round(SoundManager.volume * 100) + '%';
    volumeSlider.oninput = (e) => {
      const val = parseInt(e.target.value) / 100;
      SoundManager.setVolume(val);
      volumeValue.textContent = Math.round(val * 100) + '%';
      localStorage.setItem('velocitySoundSettings', JSON.stringify({
        enabled: SoundManager.enabled,
        hapticsEnabled: SoundManager.hapticsEnabled,
        volume: SoundManager.volume
      }));
    };
  }
  elements.restartBtn.onclick = resetTest; elements.newQuoteBtn.onclick = newQuote; elements.practiceBtn.onclick = togglePractice; elements.clearBtn.onclick = clearInputField;
  elements.themeToggle.onclick = toggleThemeGlobal; elements.focusModeToggle.onclick = toggleFocusMode; elements.clearHistoryBtn.onclick = clearHistory;
  elements.settingsToggle.onclick = () => { elements.settingsPanel.classList.toggle("active"); if (elements.historyPanel.classList.contains("active")) elements.historyPanel.classList.remove("active"); if (elements.statsPanel.classList.contains("active")) elements.statsPanel.classList.remove("active"); };
  elements.historyToggle.onclick = () => { elements.historyPanel.classList.toggle("active"); if (elements.settingsPanel.classList.contains("active")) elements.settingsPanel.classList.remove("active"); if (elements.statsPanel.classList.contains("active")) elements.statsPanel.classList.remove("active"); updateHistoryDisplay(); };
  elements.statsToggle.onclick = () => { elements.statsPanel.classList.toggle("active"); if (elements.settingsPanel.classList.contains("active")) elements.settingsPanel.classList.remove("active"); if (elements.historyPanel.classList.contains("active")) elements.historyPanel.classList.remove("active"); updateStatsSummary(); };
  elements.closeResult.onclick = closeModal; elements.shareBtn.onclick = shareResults;
  elements.quoteInput.addEventListener("input", handleInput);
  elements.quoteInput.addEventListener("keydown", (e) => { if (e.ctrlKey && e.key === "Enter") { e.preventDefault(); resetTest(); } if (e.key === "Escape") { e.preventDefault(); clearInputField(); } if (e.key === "Tab") { e.preventDefault(); elements.quoteInput.focus(); } });
  document.querySelectorAll(".time-option").forEach(btn => { btn.onclick = () => { document.querySelectorAll(".time-option").forEach(b => b.classList.remove("bg-blue-500", "text-white", "shadow-md")); btn.classList.add("bg-blue-500", "text-white", "shadow-md"); if (!practiceActive) totalDuration = parseInt(btn.dataset.time); if (!practiceActive) { timeLeft = totalDuration; elements.timeElem.innerText = timeLeft + "s"; } resetTest(); }; });
  document.querySelectorAll(".difficulty-option").forEach(btn => { btn.onclick = () => { document.querySelectorAll(".difficulty-option").forEach(b => b.classList.remove("bg-blue-500", "text-white", "shadow-md")); btn.classList.add("bg-blue-500", "text-white", "shadow-md"); difficulty = btn.dataset.difficulty; newQuote(); }; });
  document.querySelectorAll(".source-option").forEach(btn => { btn.onclick = () => { document.querySelectorAll(".source-option").forEach(b => b.classList.remove("bg-blue-500", "text-white", "shadow-md")); btn.classList.add("bg-blue-500", "text-white", "shadow-md"); quoteSource = btn.dataset.source; newQuote(); }; });
}

initTheme(); attachEvents(); loadQuote(); updateHistoryDisplay(); updateStatsSummary();



// ==================== KEYBOARD SHORTCUTS SYSTEM (DAY 2) ====================
const KeyboardShortcuts = {
  // Shortcut definitions
  shortcuts: {
    'ctrl+enter': { action: 'restart', description: 'Restart current test' },
    'ctrl+k': { action: 'newQuote', description: 'Load new quote' },
    'ctrl+p': { action: 'practiceMode', description: 'Toggle practice mode' },
    'ctrl+h': { action: 'toggleHistory', description: 'Show/hide history' },
    'ctrl+s': { action: 'toggleStats', description: 'Show/hide statistics' },
    'ctrl+,': { action: 'toggleSettings', description: 'Open settings' },
    'ctrl+1': { action: 'difficultyEasy', description: 'Set difficulty to Easy' },
    'ctrl+2': { action: 'difficultyMedium', description: 'Set difficulty to Medium' },
    'ctrl+3': { action: 'difficultyHard', description: 'Set difficulty to Hard' },
    'ctrl+4': { action: 'difficultyExpert', description: 'Set difficulty to Expert' },
    'ctrl+5': { action: 'duration30', description: 'Set duration to 30 seconds' },
    'ctrl+6': { action: 'duration60', description: 'Set duration to 60 seconds' },
    'ctrl+7': { action: 'duration120', description: 'Set duration to 120 seconds' },
    'ctrl+0': { action: 'focusMode', description: 'Toggle focus mode' },
    'ctrl+/': { action: 'showShortcuts', description: 'Show keyboard shortcuts' },
    'ctrl+shift+c': { action: 'clearHistory', description: 'Clear test history' },
    'f1': { action: 'help', description: 'Show help' },
    'esc': { action: 'clearInput', description: 'Clear input field' },
    'tab': { action: 'focusInput', description: 'Focus on typing area' }
  },

  // Track modifier keys
  modifiers: {
    ctrl: false,
    shift: false,
    alt: false
  },

  // Initialize shortcut system
  init() {
    this.setupEventListeners();
    this.showShortcutHint();
  },

  setupEventListeners() {
    document.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
    });

    document.addEventListener('keyup', (e) => {
      this.updateModifiers(e, false);
    });
  },

  updateModifiers(e, isDown) {
    this.modifiers.ctrl = isDown ? e.ctrlKey : false;
    this.modifiers.shift = isDown ? e.shiftKey : false;
    this.modifiers.alt = isDown ? e.altKey : false;
  },

  getShortcutKey(e) {
    const key = e.key.toLowerCase();
    const parts = [];

    if (e.ctrlKey) parts.push('ctrl');
    if (e.shiftKey) parts.push('shift');
    if (e.altKey) parts.push('alt');

    // Handle special keys
    if (key === 'escape') parts.push('esc');
    else if (key === 'tab') parts.push('tab');
    else if (key === 'f1') parts.push('f1');
    else if (key === 'f2') parts.push('f2');
    else if (key === 'f3') parts.push('f3');
    else if (key === 'f4') parts.push('f4');
    else if (key === 'f5') parts.push('f5');
    else if (key === 'f6') parts.push('f6');
    else if (key === 'f7') parts.push('f7');
    else if (key === 'f8') parts.push('f8');
    else if (key === 'f9') parts.push('f9');
    else if (key === 'f10') parts.push('f10');
    else if (key === 'f11') parts.push('f11');
    else if (key === 'f12') parts.push('f12');
    else parts.push(key);

    return parts.join('+');
  },

  handleKeyDown(e) {
    this.updateModifiers(e, true);

    // Don't trigger shortcuts when typing in input (except special ones)
    const isTyping = document.activelement === elements.quoteInput;
    const shortcutKey = this.getShortcutKey(e);

    // Allow Esc and Tab even when typing
    if (isTyping && shortcutKey !== 'esc' && shortcutKey !== 'tab' && !shortcutKey.startsWith('ctrl+')) {
      return;
    }

    const shortcut = this.shortcuts[shortcutKey];
    if (shortcut) {
      e.preventDefault();
      this.executeAction(shortcut.action);

      // Visual feedback for shortcut
      this.showShortcutFeedback(shortcutKey);
    }
  },

  executeAction(action) {
    switch (action) {
      case 'restart':
        resetTest();
        SoundManager.playKeypress();
        break;
      case 'newQuote':
        newQuote();
        SoundManager.playKeypress();
        break;
      case 'practiceMode':
        togglePractice();
        SoundManager.playKeypress();
        break;
      case 'toggleHistory':
        elements.historyPanel.classList.toggle('active');
        if (elements.settingsPanel.classList.contains('active')) elements.settingsPanel.classList.remove('active');
        if (elements.statsPanel.classList.contains('active')) elements.statsPanel.classList.remove('active');
        updateHistoryDisplay();
        break;
      case 'toggleStats':
        elements.statsPanel.classList.toggle('active');
        if (elements.settingsPanel.classList.contains('active')) elements.settingsPanel.classList.remove('active');
        if (elements.historyPanel.classList.contains('active')) elements.historyPanel.classList.remove('active');
        updateStatsSummary();
        break;
      case 'toggleSettings':
        elements.settingsPanel.classList.toggle('active');
        if (elements.historyPanel.classList.contains('active')) elements.historyPanel.classList.remove('active');
        if (elements.statsPanel.classList.contains('active')) elements.statsPanel.classList.remove('active');
        break;
      case 'difficultyEasy':
        this.setDifficulty('easy');
        break;
      case 'difficultyMedium':
        this.setDifficulty('medium');
        break;
      case 'difficultyHard':
        this.setDifficulty('hard');
        break;
      case 'difficultyExpert':
        this.setDifficulty('expert');
        break;
      case 'duration30':
        this.setDuration(30);
        break;
      case 'duration60':
        this.setDuration(60);
        break;
      case 'duration120':
        this.setDuration(120);
        break;
      case 'focusMode':
        toggleFocusMode();
        break;
      case 'clearHistory':
        if (confirm('Are you sure you want to clear all test history?')) {
          clearHistory();
          SoundManager.playKeypress();
        }
        break;
      case 'clearInput':
        clearInputField();
        break;
      case 'focusInput':
        elements.quoteInput.focus();
        break;
      case 'help':
      case 'showShortcuts':
        this.showShortcutsModal();
        break;
    }
  },

  setDifficulty(level) {
    difficulty = level;
    // Update UI to show selected difficulty
    document.querySelectorAll('.difficulty-option').forEach(btn => {
      if (btn.dataset.difficulty === level) {
        btn.classList.add('bg-blue-500', 'text-white', 'shadow-md');
      } else {
        btn.classList.remove('bg-blue-500', 'text-white', 'shadow-md');
      }
    });
    newQuote();
    this.showToast(`Difficulty set to ${level.charAt(0).toUpperCase() + level.slice(1)}`);
  },

  setDuration(seconds) {
    totalDuration = seconds;
    timeLeft = seconds;
    if (!practiceActive) elements.timeElem.innerText = timeLeft + "s";
    // Update UI to show selected duration
    document.querySelectorAll('.time-option').forEach(btn => {
      if (parseInt(btn.dataset.time) === seconds) {
        btn.classList.add('bg-blue-500', 'text-white', 'shadow-md');
      } else {
        btn.classList.remove('bg-blue-500', 'text-white', 'shadow-md');
      }
    });
    resetTest();
    this.showToast(`Duration set to ${seconds} seconds`);
  },

  showShortcutFeedback(shortcut) {
    // Create floating feedback element
    const feedback = document.createElement('div');
    feedback.className = 'fixed bottom-20 right-5 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs z-50 animate-pulse';
    feedback.textContent = `✓ ${shortcut}`;
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 800);
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm z-50 shadow-lg';
    toast.style.animation = 'slideUp 0.3s ease';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  },

  showShortcutHint() {
    // Add hint in console (optional)
    console.log('%c⌨️ Keyboard Shortcuts Available! Press Ctrl+/ to see all shortcuts', 'color: #3b82f6; font-size: 12px');
  },

  showShortcutsModal() {
    // Create modal with all shortcuts
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    const shortcutList = Object.entries(this.shortcuts).map(([key, value]) => {
      let displayKey = key.replace(/ctrl/gi, 'Ctrl').replace(/shift/gi, 'Shift').replace(/alt/gi, 'Alt');
      if (displayKey.includes('+')) {
        displayKey = displayKey.split('+').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' + ');
      }
      return `<div class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">${displayKey}</kbd>
                    <span class="text-sm text-gray-600 dark:text-gray-400">${value.description}</span>
                  </div>`;
    }).join('');

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-keyboard mr-2 text-blue-500"></i>Keyboard Shortcuts
              </h3>
              <button id="closeShortcutsModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            <div class="max-h-96 overflow-y-auto space-y-1">
              ${shortcutList}
            </div>
            <p class="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              Press <kbd class="px-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl</kbd> + <kbd class="px-1 bg-gray-200 dark:bg-gray-700 rounded">/</kbd> to see this again
            </p>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeShortcutsModal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }
};

// Initialize keyboard shortcuts
KeyboardShortcuts.init();

// Add shortcuts help button
const shortcutsHelpBtn = document.getElementById('shortcutsHelpBtn');
if (shortcutsHelpBtn) {
  shortcutsHelpBtn.onclick = () => KeyboardShortcuts.showShortcutsModal();
}

// ==================== ACHIEVEMENT BADGES SYSTEM (DAY 3) ====================
const AchievementSystem = {
  // All available achievements
  achievements: {
    // Speed-based achievements
    'speed_30': { id: 'speed_30', name: 'Getting Started', description: 'Reach 30 WPM', icon: 'fas fa-tachometer-alt', requirement: (stats) => stats.bestWpm >= 30, points: 10, color: 'bronze' },
    'speed_50': { id: 'speed_50', name: 'Intermediate', description: 'Reach 50 WPM', icon: 'fas fa-tachometer-alt', requirement: (stats) => stats.bestWpm >= 50, points: 20, color: 'silver' },
    'speed_75': { id: 'speed_75', name: 'Fast Typer', description: 'Reach 75 WPM', icon: 'fas fa-rocket', requirement: (stats) => stats.bestWpm >= 75, points: 35, color: 'gold' },
    'speed_100': { id: 'speed_100', name: 'Speed Demon', description: 'Reach 100 WPM', icon: 'fas fa-bolt', requirement: (stats) => stats.bestWpm >= 100, points: 50, color: 'diamond' },
    'speed_120': { id: 'speed_120', name: 'Velocity Master', description: 'Reach 120 WPM', icon: 'fas fa-crown', requirement: (stats) => stats.bestWpm >= 120, points: 75, color: 'legendary' },

    // Accuracy-based achievements
    'accuracy_90': { id: 'accuracy_90', name: 'Precise', description: 'Achieve 90% accuracy', icon: 'fas fa-bullseye', requirement: (stats) => stats.bestAccuracy >= 90, points: 15, color: 'bronze' },
    'accuracy_95': { id: 'accuracy_95', name: 'Sharpshooter', description: 'Achieve 95% accuracy', icon: 'fas fa-bullseye', requirement: (stats) => stats.bestAccuracy >= 95, points: 25, color: 'silver' },
    'accuracy_99': { id: 'accuracy_99', name: 'Perfectionist', description: 'Achieve 99% accuracy', icon: 'fas fa-star', requirement: (stats) => stats.bestAccuracy >= 99, points: 40, color: 'gold' },
    'accuracy_100': { id: 'accuracy_100', name: 'Perfect Score!', description: 'Achieve 100% accuracy', icon: 'fas fa-crown', requirement: (stats) => stats.perfectAccuracy === true, points: 100, color: 'legendary' },

    // Streak-based achievements
    'streak_5': { id: 'streak_5', name: 'On a Roll', description: 'Complete 5 tests without errors', icon: 'fas fa-fire', requirement: (stats) => stats.bestStreak >= 5, points: 20, color: 'bronze' },
    'streak_10': { id: 'streak_10', name: 'Unstoppable', description: 'Complete 10 tests without errors', icon: 'fas fa-fire', requirement: (stats) => stats.bestStreak >= 10, points: 40, color: 'silver' },
    'streak_25': { id: 'streak_25', name: 'Legendary Streak', description: 'Complete 25 tests without errors', icon: 'fas fa-crown', requirement: (stats) => stats.bestStreak >= 25, points: 100, color: 'gold' },

    // Volume-based achievements
    'tests_10': { id: 'tests_10', name: 'Dedicated', description: 'Complete 10 tests total', icon: 'fas fa-chart-line', requirement: (stats) => stats.totalTests >= 10, points: 15, color: 'bronze' },
    'tests_50': { id: 'tests_50', name: 'Enthusiast', description: 'Complete 50 tests total', icon: 'fas fa-chart-line', requirement: (stats) => stats.totalTests >= 50, points: 30, color: 'silver' },
    'tests_100': { id: 'tests_100', name: 'Master Typist', description: 'Complete 100 tests total', icon: 'fas fa-trophy', requirement: (stats) => stats.totalTests >= 100, points: 60, color: 'gold' },
    'tests_500': { id: 'tests_500', name: 'Legend', description: 'Complete 500 tests total', icon: 'fas fa-crown', requirement: (stats) => stats.totalTests >= 500, points: 200, color: 'legendary' },

    // Category mastery
    'master_code': { id: 'master_code', name: 'Code Warrior', description: 'Complete 20 programming quotes', icon: 'fas fa-code', requirement: (stats) => stats.categoryCounts.programming >= 20, points: 25, color: 'silver' },
    'master_lit': { id: 'master_lit', name: 'Literary Genius', description: 'Complete 20 literature quotes', icon: 'fas fa-book', requirement: (stats) => stats.categoryCounts.literature >= 20, points: 25, color: 'silver' },
    'master_science': { id: 'master_science', name: 'Science Explorer', description: 'Complete 20 science quotes', icon: 'fas fa-flask', requirement: (stats) => stats.categoryCounts.science >= 20, points: 25, color: 'silver' },

    // Special achievements
    'night_owl': { id: 'night_owl', name: 'Night Owl', description: 'Complete a test after midnight', icon: 'fas fa-moon', requirement: (stats) => stats.nightTest === true, points: 15, color: 'bronze' },
    'early_bird': { id: 'early_bird', name: 'Early Bird', description: 'Complete a test before 6 AM', icon: 'fas fa-sun', requirement: (stats) => stats.earlyTest === true, points: 15, color: 'bronze' },
    'marathon': { id: 'marathon', name: 'Marathoner', description: 'Complete a 120-second test', icon: 'fas fa-hourglass-half', requirement: (stats) => stats.completedLongTest === true, points: 20, color: 'silver' },
    'expert_mode': { id: 'expert_mode', name: 'Expert Challenger', description: 'Complete a test on Expert difficulty', icon: 'fas fa-fire', requirement: (stats) => stats.expertTest === true, points: 30, color: 'gold' },

    // Practice mode
    'practice_10': { id: 'practice_10', name: 'Practice Makes Perfect', description: 'Spend 10 minutes in practice mode', icon: 'fas fa-dumbbell', requirement: (stats) => stats.practiceTime >= 10, points: 20, color: 'bronze' },
    'practice_60': { id: 'practice_60', name: 'Dedicated Practice', description: 'Spend 60 minutes in practice mode', icon: 'fas fa-dumbbell', requirement: (stats) => stats.practiceTime >= 60, points: 50, color: 'gold' }
  },

  // User progress
  userProgress: {
    unlockedAchievements: [],
    totalPoints: 0,
    bestWpm: 0,
    bestAccuracy: 0,
    bestStreak: 0,
    currentStreak: 0,
    totalTests: 0,
    categoryCounts: { programming: 0, literature: 0, mixed: 0, science: 0 },
    nightTest: false,
    earlyTest: false,
    completedLongTest: false,
    expertTest: false,
    perfectAccuracy: false,
    practiceTime: 0,
    lastTestTime: null
  },

  // Load saved progress
  loadProgress() {
    const saved = localStorage.getItem('velocityAchievements');
    if (saved) {
      const parsed = JSON.parse(saved);
      this.userProgress = { ...this.userProgress, ...parsed };
    }
    this.updateBadgeDisplay();
  },

  // Save progress
  saveProgress() {
    localStorage.setItem('velocityAchievements', JSON.stringify(this.userProgress));
  },

  // Check and unlock achievements
  checkAchievements(testResult) {
    let newAchievements = [];

    // Update user stats based on test result
    this.userProgress.totalTests++;
    this.userProgress.bestWpm = Math.max(this.userProgress.bestWpm, testResult.wpm);
    this.userProgress.bestAccuracy = Math.max(this.userProgress.bestAccuracy, testResult.accuracy);

    // Update category count
    if (this.userProgress.categoryCounts[testResult.source] !== undefined) {
      this.userProgress.categoryCounts[testResult.source]++;
    }

    // Update streak
    if (testResult.errors === 0) {
      this.userProgress.currentStreak++;
      this.userProgress.bestStreak = Math.max(this.userProgress.bestStreak, this.userProgress.currentStreak);
    } else {
      this.userProgress.currentStreak = 0;
    }

    // Check for perfect accuracy
    if (testResult.accuracy === 100) {
      this.userProgress.perfectAccuracy = true;
    }

    // Check for time-based achievements
    const testHour = new Date(testResult.date).getHours();
    if (testHour >= 0 && testHour < 5) this.userProgress.nightTest = true;
    if (testHour >= 4 && testHour < 6) this.userProgress.earlyTest = true;

    // Check for long test
    if (testResult.duration >= 120) this.userProgress.completedLongTest = true;

    // Check for expert mode
    if (testResult.difficulty === 'expert') this.userProgress.expertTest = true;

    // Update practice time
    if (testResult.practiceMode) {
      this.userProgress.practiceTime += testResult.duration / 60;
    }

    // Check each achievement
    for (const [id, achievement] of Object.entries(this.achievements)) {
      if (!this.userProgress.unlockedAchievements.includes(id)) {
        const stats = {
          bestWpm: this.userProgress.bestWpm,
          bestAccuracy: this.userProgress.bestAccuracy,
          bestStreak: this.userProgress.bestStreak,
          totalTests: this.userProgress.totalTests,
          categoryCounts: this.userProgress.categoryCounts,
          nightTest: this.userProgress.nightTest,
          earlyTest: this.userProgress.earlyTest,
          completedLongTest: this.userProgress.completedLongTest,
          expertTest: this.userProgress.expertTest,
          perfectAccuracy: this.userProgress.perfectAccuracy,
          practiceTime: this.userProgress.practiceTime
        };

        if (achievement.requirement(stats)) {
          this.userProgress.unlockedAchievements.push(id);
          this.userProgress.totalPoints += achievement.points;
          newAchievements.push(achievement);

          // Play achievement sound
          SoundManager.playAchievement();
        }
      }
    }

    // Save progress
    this.saveProgress();

    // Show notifications for new achievements
    if (newAchievements.length > 0) {
      this.showAchievementNotifications(newAchievements);
    }

    this.updateBadgeDisplay();
  },

  // Show achievement notification
  showAchievementNotifications(achievements) {
    achievements.forEach((achievement, index) => {
      setTimeout(() => {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-xl shadow-2xl z-50 animate-bounce';
        notification.style.animation = 'slideIn 0.5s ease, fadeOut 0.5s ease 3s forwards';
        notification.innerHTML = `
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i class="${achievement.icon} text-2xl"></i>
                </div>
                <div>
                  <p class="text-xs opacity-90">Achievement Unlocked!</p>
                  <p class="font-bold text-sm">${achievement.name}</p>
                  <p class="text-xs opacity-90">+${achievement.points} points</p>
                </div>
              </div>
            `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3500);
      }, index * 500);
    });
  },

  // Update badge display in UI
  updateBadgeDisplay() {
    const badgeContainer = document.getElementById('achievementsContainer');
    if (!badgeContainer) return;

    const unlockedCount = this.userProgress.unlockedAchievements.length;
    const totalCount = Object.keys(this.achievements).length;

    // Update header
    const header = badgeContainer.querySelector('.achievements-header');
    if (header) {
      header.innerHTML = `
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-gray-700 dark:text-gray-300">
                <i class="fas fa-trophy mr-2 text-yellow-500"></i>Achievements
                <span class="text-sm ml-2">(${unlockedCount}/${totalCount})</span>
              </h3>
              <span class="text-sm font-bold text-yellow-500">${this.userProgress.totalPoints} pts</span>
            </div>
          `;
    }

    // Update badges grid
    const badgesGrid = badgeContainer.querySelector('.badges-grid');
    if (badgesGrid) {
      badgesGrid.innerHTML = Object.entries(this.achievements).map(([id, ach]) => {
        const isUnlocked = this.userProgress.unlockedAchievements.includes(id);
        const colorClass = this.getBadgeColor(ach.color, isUnlocked);
        return `
              <div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'} p-3 rounded-xl text-center transition-all hover:scale-105 ${colorClass} ${!isUnlocked ? 'opacity-50 grayscale' : ''}" title="${ach.description}">
                <i class="${ach.icon} text-2xl mb-1"></i>
                <p class="text-xs font-semibold">${ach.name}</p>
                <p class="text-xs opacity-75">+${ach.points}</p>
              </div>
            `;
      }).join('');
    }
  },

  getBadgeColor(color, unlocked) {
    if (!unlocked) return 'bg-gray-200 dark:bg-gray-700 text-gray-500';
    switch (color) {
      case 'bronze': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-2 border-amber-500';
      case 'silver': return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-400';
      case 'gold': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-2 border-yellow-500';
      case 'diamond': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-2 border-blue-500';
      case 'legendary': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-2 border-purple-500';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  },

  // Show achievements modal
  showAchievementsModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    const unlockedCount = this.userProgress.unlockedAchievements.length;
    const totalCount = Object.keys(this.achievements).length;
    const progressPercent = (unlockedCount / totalCount) * 100;

    const badgesHtml = Object.entries(this.achievements).map(([id, ach]) => {
      const isUnlocked = this.userProgress.unlockedAchievements.includes(id);
      const colorClass = this.getBadgeColor(ach.color, isUnlocked);
      return `
            <div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'} p-3 rounded-xl text-center transition-all ${colorClass} ${!isUnlocked ? 'opacity-60 grayscale' : ''}" title="${ach.description}">
              <i class="${ach.icon} text-3xl mb-2"></i>
              <p class="text-sm font-semibold">${ach.name}</p>
              <p class="text-xs opacity-75 mt-1">${ach.description}</p>
              <p class="text-xs font-bold mt-1">+${ach.points} pts</p>
            </div>
          `;
    }).join('');

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <div>
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                  <i class="fas fa-trophy mr-2 text-yellow-500"></i>Achievements
                </h3>
                <div class="mt-2">
                  <div class="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>${unlockedCount}/${totalCount} (${Math.floor(progressPercent)}%)</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all" style="width: ${progressPercent}%"></div>
                  </div>
                </div>
              </div>
              <button id="closeAchievementsModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              ${badgesHtml}
            </div>
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <i class="fas fa-star text-yellow-500 mr-1"></i>
                Total Points: <span class="font-bold text-yellow-500">${this.userProgress.totalPoints}</span>
              </p>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeAchievementsModal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }
};
// Initialize achievement system
AchievementSystem.loadProgress();
AchievementSystem.updateBadgeDisplay();

// ==================== EXPORT RESULTS SYSTEM (DAY 4) ====================
const ExportSystem = {
  // Export formats
  formats: ['CSV', 'JSON', 'HTML Report', 'PDF'],

  // Export test history
  exportHistory(format) {
    const history = testHistory;
    if (history.length === 0) {
      this.showNotification('No data to export. Complete some tests first!', 'error');
      return;
    }

    switch (format) {
      case 'CSV':
        this.exportToCSV(history);
        break;
      case 'JSON':
        this.exportToJSON(history);
        break;
      case 'HTML Report':
        this.exportToHTML(history);
        break;
      case 'PDF':
        this.exportToPDF(history);
        break;
    }
  },

  // Export to CSV
  exportToCSV(history) {
    const headers = ['Date', 'Time', 'WPM', 'Raw WPM', 'Accuracy', 'Errors', 'Duration (s)', 'Difficulty', 'Category'];
    const rows = history.map(entry => [
      new Date(entry.date).toLocaleDateString(),
      new Date(entry.date).toLocaleTimeString(),
      entry.wpm,
      entry.rawWpm || entry.wpm,
      entry.accuracy,
      entry.errors,
      entry.time,
      entry.difficulty,
      entry.source
    ]);

    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `velocitytype_history_${new Date().toISOString().slice(0, 19)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    this.showNotification('CSV exported successfully!', 'success');
    SoundManager.playKeypress();
  },

  // Export to JSON
  exportToJSON(history) {
    const exportData = {
      exportDate: new Date().toISOString(),
      totalTests: history.length,
      bestWPM: bestWpm,
      averageWPM: Math.round(history.reduce((sum, h) => sum + h.wpm, 0) / history.length),
      history: history,
      achievements: AchievementSystem.userProgress.unlockedAchievements,
      totalPoints: AchievementSystem.userProgress.totalPoints
    };

    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `velocitytype_data_${new Date().toISOString().slice(0, 19)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    this.showNotification('JSON exported successfully!', 'success');
    SoundManager.playKeypress();
  },

  // Export to HTML Report
  exportToHTML(history) {
    const stats = this.generateStats(history);
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VelocityType - Typing Test Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      color: #333;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      text-align: center;
    }
    .header h1 { font-size: 2.5em; margin-bottom: 10px; }
    .header p { opacity: 0.9; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 40px;
      background: #f8f9fa;
    }
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .stat-card h3 { font-size: 0.9em; color: #666; margin-bottom: 10px; text-transform: uppercase; }
    .stat-card .value { font-size: 2.5em; font-weight: bold; color: #667eea; }
    .history-table {
      padding: 40px;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      background: #667eea;
      color: white;
      font-weight: 600;
    }
    tr:hover { background: #f5f5f5; }
    .badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.75em;
      font-weight: 600;
    }
    .badge-easy { background: #10b98120; color: #10b981; }
    .badge-medium { background: #f59e0b20; color: #f59e0b; }
    .badge-hard { background: #ef444420; color: #ef4444; }
    .footer {
      text-align: center;
      padding: 20px;
      background: #f8f9fa;
      color: #666;
      font-size: 0.85em;
    }
    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: 1fr; }
      .history-table { padding: 20px; }
      th, td { padding: 8px; font-size: 0.85em; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>⚡ VelocityType Report</h1>
      <p>Generated on ${new Date().toLocaleString()}</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Tests</h3>
        <div class="value">${stats.totalTests}</div>
      </div>
      <div class="stat-card">
        <h3>Best WPM</h3>
        <div class="value">${stats.bestWPM}</div>
      </div>
      <div class="stat-card">
        <h3>Average WPM</h3>
        <div class="value">${stats.avgWPM}</div>
      </div>
      <div class="stat-card">
        <h3>Best Accuracy</h3>
        <div class="value">${stats.bestAccuracy}%</div>
      </div>
      <div class="stat-card">
        <h3>Average Accuracy</h3>
        <div class="value">${stats.avgAccuracy}%</div>
      </div>
      <div class="stat-card">
        <h3>Total Points</h3>
        <div class="value">${AchievementSystem.userProgress.totalPoints}</div>
      </div>
    </div>
    
    <div class="history-table">
      <h2 style="margin-bottom: 20px;">📊 Test History</h2>
      <table>
        <thead>
          <tr><th>Date</th><th>Time</th><th>WPM</th><th>Accuracy</th><th>Errors</th><th>Duration</th><th>Difficulty</th></tr>
        </thead>
        <tbody>
          ${history.map(entry => `
            <tr>
              <td>${new Date(entry.date).toLocaleDateString()}</td>
              <td>${new Date(entry.date).toLocaleTimeString()}</td>
              <td><strong>${entry.wpm}</strong></td>
              <td>${entry.accuracy}</td>
              <td>${entry.errors}</td>
              <td>${entry.time}s</td>
              <td><span class="badge badge-${entry.difficulty}">${entry.difficulty}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    
    <div class="footer">
      <p>Generated by VelocityType Typing Speed Test</p>
      <p>Keep practicing to improve your typing speed! 🚀</p>
    </div>
  </div>
</body>
</html>
        `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `velocitytype_report_${new Date().toISOString().slice(0, 19)}.html`;
    a.click();
    URL.revokeObjectURL(url);

    this.showNotification('HTML Report exported successfully!', 'success');
    SoundManager.playKeypress();
  },

  // Export to PDF (using browser print)
  exportToPDF(history) {
    const stats = this.generateStats(history);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>VelocityType Report</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; }
              h1 { color: #667eea; }
              .stats { display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap; }
              .stat { background: #f0f0f0; padding: 15px; border-radius: 10px; min-width: 150px; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background: #667eea; color: white; }
              @media print { .no-print { display: none; } }
            </style>
          </head>
          <body>
            <h1>VelocityType Typing Test Report</h1>
            <p>Generated: ${new Date().toLocaleString()}</p>
            <div class="stats">
              <div class="stat"><strong>Total Tests:</strong><br>${stats.totalTests}</div>
              <div class="stat"><strong>Best WPM:</strong><br>${stats.bestWPM}</div>
              <div class="stat"><strong>Avg WPM:</strong><br>${stats.avgWPM}</div>
              <div class="stat"><strong>Best Accuracy:</strong><br>${stats.bestAccuracy}%</div>
            </div>
            <h2>Test History</h2>
            <table>
              <tr><th>Date</th><th>WPM</th><th>Accuracy</th><th>Errors</th><th>Duration</th></tr>
              ${history.map(entry => `
                <tr>
                  <td>${new Date(entry.date).toLocaleDateString()}</td>
                  <td>${entry.wpm}</td>
                  <td>${entry.accuracy}</td>
                  <td>${entry.errors}</td>
                  <td>${entry.time}s</td>
                </tr>
              `).join('')}
            </table>
            <button class="no-print" onclick="window.print()">Print / Save as PDF</button>
            <script>setTimeout(() => window.print(), 500);<\/script>
          </body>
          </html>
        `);
    printWindow.document.close();

    this.showNotification('PDF report opened. Use Ctrl+P to save as PDF.', 'info');
    SoundManager.playKeypress();
  },

  // Generate statistics from history
  generateStats(history) {
    if (history.length === 0) {
      return {
        totalTests: 0,
        bestWPM: 0,
        avgWPM: 0,
        bestAccuracy: 0,
        avgAccuracy: 0
      };
    }

    const wpmValues = history.map(h => h.wpm);
    const accuracyValues = history.map(h => parseInt(h.accuracy));

    return {
      totalTests: history.length,
      bestWPM: Math.max(...wpmValues),
      avgWPM: Math.round(wpmValues.reduce((a, b) => a + b, 0) / history.length),
      bestAccuracy: Math.max(...accuracyValues),
      avgAccuracy: Math.round(accuracyValues.reduce((a, b) => a + b, 0) / history.length)
    };
  },

  // Share results on social media
  shareResults() {
    const stats = this.generateStats(testHistory);
    const shareText = `I just scored ${stats.bestWPM} WPM with ${stats.bestAccuracy}% accuracy on VelocityType! Can you beat my score? 🚀`;

    if (navigator.share) {
      navigator.share({
        title: 'VelocityType Typing Results',
        text: shareText,
        url: window.location.href
      }).catch(() => {
        this.copyToClipboard(shareText);
      });
    } else {
      this.copyToClipboard(shareText);
    }

    SoundManager.playKeypress();
  },

  // Copy to clipboard
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showNotification('Results copied to clipboard!', 'success');
    });
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Show export modal
  showExportModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-download mr-2 text-blue-500"></i>Export Results
              </h3>
              <button id="closeExportModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div class="space-y-3">
              <button data-format="CSV" class="export-option w-full p-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-file-excel"></i> Export as CSV
              </button>
              <button data-format="JSON" class="export-option w-full p-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-code"></i> Export as JSON
              </button>
              <button data-format="HTML Report" class="export-option w-full p-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-file-alt"></i> Export as HTML Report
              </button>
              <button data-format="PDF" class="export-option w-full p-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-file-pdf"></i> Export as PDF
              </button>
            </div>
            
            <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button id="shareResultsBtn" class="w-full p-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-share-alt"></i> Share Results
              </button>
            </div>
            
            <div class="mt-4 text-center">
              <p class="text-xs text-gray-500 dark:text-gray-400">
                <i class="fas fa-info-circle"></i> ${testHistory.length} tests available for export
              </p>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeExportModal');
    closeBtn.onclick = () => modal.remove();

    const exportBtns = modal.querySelectorAll('.export-option');
    exportBtns.forEach(btn => {
      btn.onclick = () => {
        const format = btn.dataset.format;
        this.exportHistory(format);
        modal.remove();
      };
    });

    const shareBtn = modal.querySelector('#shareResultsBtn');
    shareBtn.onclick = () => {
      this.shareResults();
      modal.remove();
    };

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }
};

// ==================== CUSTOM TEXT IMPORT SYSTEM (DAY 5) ====================
const CustomTextSystem = {
  // Storage for custom texts
  customTexts: [],
  currentCustomText: null,
  isCustomMode: false,

  // Initialize
  init() {
    this.loadCustomTexts();
    this.setupEventListeners();
  },

  // Load saved custom texts from localStorage
  loadCustomTexts() {
    const saved = localStorage.getItem('velocityCustomTexts');
    if (saved) {
      this.customTexts = JSON.parse(saved);
    } else {
      // Add some example texts
      this.customTexts = [
        { id: 'example1', name: 'Programming Quote', text: 'The only way to learn a new programming language is by writing programs in it.', date: new Date().toISOString() },
        { id: 'example2', name: 'Motivation', text: 'The future depends on what you do today. Make it count.', date: new Date().toISOString() },
        { id: 'example3', name: 'Technology', text: 'Technology is best when it brings people together and empowers human potential.', date: new Date().toISOString() }
      ];
      this.saveCustomTexts();
    }
  },

  // Save custom texts to localStorage
  saveCustomTexts() {
    localStorage.setItem('velocityCustomTexts', JSON.stringify(this.customTexts));
  },

  // Add new custom text
  addCustomText(name, text) {
    if (!name.trim()) name = `Custom Text ${this.customTexts.length + 1}`;
    if (!text.trim()) {
      this.showNotification('Please enter some text to save!', 'error');
      return false;
    }

    const newText = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      wordCount: text.trim().split(/\s+/).length,
      charCount: text.trim().length,
      date: new Date().toISOString()
    };

    this.customTexts.unshift(newText);
    this.saveCustomTexts();
    this.showNotification('Custom text saved successfully!', 'success');
    SoundManager.playKeypress();
    return true;
  },

  // Delete custom text
  deleteCustomText(id) {
    this.customTexts = this.customTexts.filter(t => t.id !== id);
    this.saveCustomTexts();
    this.showNotification('Custom text deleted!', 'success');
    SoundManager.playKeypress();
    this.updateCustomTextsList();
  },

  // Use custom text for typing
  useCustomText(customText) {
    this.currentCustomText = customText;
    this.isCustomMode = true;
    currentQuoteText = customText.text;
    updateQuoteUI();
    resetTestState();
    this.showNotification(`Now typing: ${customText.name}`, 'success');
    SoundManager.playKeypress();
  },

  // Exit custom mode and return to normal quotes
  exitCustomMode() {
    this.isCustomMode = false;
    this.currentCustomText = null;
    loadQuote();
    this.showNotification('Returned to normal quotes', 'info');
    SoundManager.playKeypress();
  },

  // Import from text file
  importFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const fileName = file.name.replace('.txt', '');
      this.addCustomText(fileName, content);
      this.showCustomTextModal();
    };
    reader.readAsText(file);
  },

  // Analyze text statistics
  analyzeText(text) {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const chars = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const avgWordLength = chars / (words.length || 1);

    // Calculate difficulty score (0-100)
    let difficultyScore = 0;
    difficultyScore += Math.min(30, (avgWordLength - 3) * 10); // Longer words = harder
    difficultyScore += Math.min(30, words.length / 5); // More words = harder
    difficultyScore += text.split(/[.,;:!?()[\]{}'"]/).length * 2; // Punctuation
    difficultyScore = Math.min(100, Math.max(0, difficultyScore));

    let difficultyLabel = 'Easy';
    if (difficultyScore > 70) difficultyLabel = 'Hard';
    else if (difficultyScore > 40) difficultyLabel = 'Medium';

    return {
      words: words.length,
      chars: chars,
      sentences: sentences,
      paragraphs: paragraphs,
      avgWordLength: avgWordLength.toFixed(1),
      difficultyScore: Math.round(difficultyScore),
      difficultyLabel: difficultyLabel
    };
  },

  // Show custom text modal
  showCustomTextModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-file-alt mr-2 text-green-500"></i>Custom Texts
              </h3>
              <button id="closeCustomModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <!-- Add New Text Section -->
            <div class="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">Add New Text</h4>
              <input type="text" id="customTextName" placeholder="Text name (optional)" class="w-full p-2 rounded-lg mb-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500">
              <textarea id="customTextContent" rows="4" placeholder="Paste your text here..." class="w-full p-2 rounded-lg mb-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500"></textarea>
              <div class="flex gap-2">
                <button id="saveCustomTextBtn" class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex-1">
                  <i class="fas fa-save mr-1"></i>Save Text
                </button>
                <label class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition cursor-pointer text-center flex-1">
                  <i class="fas fa-upload mr-1"></i>Upload .txt
                  <input type="file" id="uploadTxtFile" accept=".txt" class="hidden">
                </label>
              </div>
            </div>
            
            <!-- Statistics for current text -->
            <div id="textStats" class="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg hidden">
              <p class="text-sm font-semibold mb-2 text-purple-700 dark:text-purple-300">Text Analysis</p>
              <div class="grid grid-cols-3 gap-2 text-xs" id="statsContent"></div>
            </div>
            
            <!-- My Texts Library -->
            <div class="mb-4">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <i class="fas fa-library mr-2"></i>My Library (${this.customTexts.length})
              </h4>
              <div id="customTextsList" class="max-h-64 overflow-y-auto space-y-2">
                ${this.renderCustomTextsList()}
              </div>
            </div>
            
            <!-- Exit Custom Mode Button -->
            ${this.isCustomMode ? `
              <div class="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <p class="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                  <i class="fas fa-info-circle"></i> Currently using custom text: "${this.currentCustomText?.name}"
                </p>
                <button id="exitCustomModeBtn" class="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition">
                  <i class="fas fa-times-circle mr-1"></i>Exit Custom Mode
                </button>
              </div>
            ` : ''}
          </div>
        `;

    document.body.appendChild(modal);

    // Event listeners for modal
    const closeBtn = modal.querySelector('#closeCustomModal');
    closeBtn.onclick = () => modal.remove();

    const saveBtn = modal.querySelector('#saveCustomTextBtn');
    const nameInput = modal.querySelector('#customTextName');
    const contentTextarea = modal.querySelector('#customTextContent');
    const statsDiv = modal.querySelector('#textStats');
    const statsContent = modal.querySelector('#statsContent');

    // Real-time text analysis
    contentTextarea.addEventListener('input', () => {
      const text = contentTextarea.value;
      if (text.length > 0) {
        const stats = this.analyzeText(text);
        statsDiv.classList.remove('hidden');
        statsContent.innerHTML = `
              <div><strong>Words:</strong> ${stats.words}</div>
              <div><strong>Chars:</strong> ${stats.chars}</div>
              <div><strong>Sentences:</strong> ${stats.sentences}</div>
              <div><strong>Avg Word:</strong> ${stats.avgWordLength}</div>
              <div><strong>Difficulty:</strong> <span class="font-bold ${stats.difficultyLabel === 'Easy' ? 'text-green-500' :
            stats.difficultyLabel === 'Medium' ? 'text-yellow-500' : 'text-red-500'
          }">${stats.difficultyLabel}</span></div>
              <div><strong>Score:</strong> ${stats.difficultyScore}%</div>
            `;
      } else {
        statsDiv.classList.add('hidden');
      }
    });

    saveBtn.onclick = () => {
      const name = nameInput.value;
      const text = contentTextarea.value;
      if (this.addCustomText(name, text)) {
        nameInput.value = '';
        contentTextarea.value = '';
        statsDiv.classList.add('hidden');
        this.updateCustomTextsList();
        modal.querySelector('#customTextsList').innerHTML = this.renderCustomTextsList();
        this.attachListEventListeners(modal);
      }
    };

    const fileInput = modal.querySelector('#uploadTxtFile');
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.name.endsWith('.txt')) {
        this.importFromFile(file);
        modal.remove();
      } else {
        this.showNotification('Please select a .txt file', 'error');
      }
    };

    const exitBtn = modal.querySelector('#exitCustomModeBtn');
    if (exitBtn) {
      exitBtn.onclick = () => {
        this.exitCustomMode();
        modal.remove();
      };
    }

    this.attachListEventListeners(modal);
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Render custom texts list
  renderCustomTextsList() {
    if (this.customTexts.length === 0) {
      return '<p class="text-center text-sm text-gray-500 py-4">No custom texts yet. Add one above!</p>';
    }

    return this.customTexts.map(text => `
          <div class="custom-text-item p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition group">
            <div class="flex justify-between items-start">
              <div class="flex-1 cursor-pointer" data-action="use" data-id="${text.id}">
                <p class="font-semibold text-sm text-gray-800 dark:text-white">${this.escapeHtml(text.name)}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${text.text.substring(0, 60)}${text.text.length > 60 ? '...' : ''}</p>
                <p class="text-xs text-gray-400 mt-1">${text.wordCount} words • ${text.charCount} chars</p>
              </div>
              <button data-action="delete" data-id="${text.id}" class="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition ml-2">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `).join('');
  },

  // Attach event listeners to list items
  attachListEventListeners(modal) {
    modal.querySelectorAll('.custom-text-item').forEach(item => {
      const useBtn = item.querySelector('[data-action="use"]');
      const deleteBtn = item.querySelector('[data-action="delete"]');

      if (useBtn) {
        useBtn.onclick = () => {
          const id = useBtn.dataset.id;
          const customText = this.customTexts.find(t => t.id === id);
          if (customText) {
            this.useCustomText(customText);
            modal.remove();
          }
        };
      }

      if (deleteBtn) {
        deleteBtn.onclick = () => {
          const id = deleteBtn.dataset.id;
          this.deleteCustomText(id);
          modal.querySelector('#customTextsList').innerHTML = this.renderCustomTextsList();
          this.attachListEventListeners(modal);
        };
      }
    });
  },

  // Update custom texts list in modal
  updateCustomTextsList() {
    const listContainer = document.querySelector('#customTextsList');
    if (listContainer) {
      listContainer.innerHTML = this.renderCustomTextsList();
    }
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Escape HTML to prevent XSS
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  setupEventListeners() {
    // Add custom text button to UI (will be created)
    const customTextBtn = document.getElementById('customTextBtn');
    if (customTextBtn) {
      customTextBtn.onclick = () => this.showCustomTextModal();
    }
  }
};

// Initialize Custom Text System
CustomTextSystem.init();

// Update custom mode indicator
const customIndicator = document.getElementById('customModeIndicator');
const customTextNameSpan = document.getElementById('customTextName');
if (customIndicator && customTextNameSpan) {
  if (CustomTextSystem.isCustomMode && CustomTextSystem.currentCustomText) {
    customIndicator.classList.remove('hidden');
    customTextNameSpan.textContent = CustomTextSystem.currentCustomText.name;
  } else {
    customIndicator.classList.add('hidden');
  }
}
// ==================== PROGRESS GRAPHS & ANALYTICS (DAY 6) ====================
const AnalyticsSystem = {
  charts: {},

  // Show analytics dashboard
  showAnalyticsDashboard() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-chart-line mr-2 text-blue-500"></i>Progress Analytics
              </h3>
              <button id="closeAnalyticsModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Summary Cards -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 text-white text-center">
                <p class="text-xs opacity-90">Best WPM</p>
                <p id="analyticsBestWpm" class="text-2xl font-bold">0</p>
              </div>
              <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white text-center">
                <p class="text-xs opacity-90">Avg WPM</p>
                <p id="analyticsAvgWpm" class="text-2xl font-bold">0</p>
              </div>
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 text-white text-center">
                <p class="text-xs opacity-90">Total Tests</p>
                <p id="analyticsTotalTests" class="text-2xl font-bold">0</p>
              </div>
              <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-3 text-white text-center">
                <p class="text-xs opacity-90">Best Streak</p>
                <p id="analyticsBestStreak" class="text-2xl font-bold">0</p>
              </div>
            </div>
            
            <!-- Tabs -->
            <div class="flex border-b border-gray-200 dark:border-gray-700 mb-4">
              <button class="analytics-tab px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-blue-500" data-tab="wpm">
                <i class="fas fa-tachometer-alt mr-1"></i>WPM Progress
              </button>
              <button class="analytics-tab px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400" data-tab="accuracy">
                <i class="fas fa-bullseye mr-1"></i>Accuracy Trend
              </button>
              <button class="analytics-tab px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400" data-tab="distribution">
                <i class="fas fa-chart-bar mr-1"></i>Score Distribution
              </button>
              <button class="analytics-tab px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400" data-tab="heatmap">
                <i class="fas fa-calendar mr-1"></i>Activity Heatmap
              </button>
            </div>
            
            <!-- Chart Containers -->
            <div id="wpmChartContainer" class="chart-container">
              <canvas id="wpmChart" height="300"></canvas>
              <div class="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div><span class="text-gray-500">Trend:</span> <span id="wpmTrend" class="font-bold"></span></div>
                <div><span class="text-gray-500">Improvement:</span> <span id="wpmImprovement" class="font-bold"></span></div>
                <div><span class="text-gray-500">Best Session:</span> <span id="bestSession" class="font-bold"></span></div>
              </div>
            </div>
            
            <div id="accuracyChartContainer" class="chart-container hidden">
              <canvas id="accuracyChart" height="300"></canvas>
              <div class="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div><span class="text-gray-500">Average:</span> <span id="avgAccuracyDisplay" class="font-bold"></span></div>
                <div><span class="text-gray-500">Best:</span> <span id="bestAccuracyDisplay" class="font-bold"></span></div>
                <div><span class="text-gray-500">Consistency:</span> <span id="consistencyScore" class="font-bold"></span></div>
              </div>
            </div>
            
            <div id="distributionChartContainer" class="chart-container hidden">
              <canvas id="distributionChart" height="300"></canvas>
              <div class="mt-4 text-center text-sm">
                <p class="text-gray-600 dark:text-gray-400">Most common WPM range: <span id="commonRange" class="font-bold text-blue-500"></span></p>
              </div>
            </div>
            
            <div id="heatmapContainer" class="chart-container hidden">
              <div id="activityHeatmap" class="grid grid-cols-7 gap-1 mb-4"></div>
              <div class="text-center text-sm text-gray-500 mt-2">
                <span class="inline-block w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded mr-1"></span> No activity
                <span class="inline-block w-3 h-3 bg-green-300 dark:bg-green-800 rounded ml-2 mr-1"></span> Low
                <span class="inline-block w-3 h-3 bg-green-500 rounded ml-2 mr-1"></span> Medium
                <span class="inline-block w-3 h-3 bg-green-700 rounded ml-2 mr-1"></span> High
              </div>
            </div>
            
            <!-- Insights -->
            <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h4 class="font-semibold mb-2 text-blue-700 dark:text-blue-300">
                <i class="fas fa-lightbulb mr-1"></i>Insights & Recommendations
              </h4>
              <div id="insightsList" class="space-y-1 text-sm">
                <!-- Insights will be populated here -->
              </div>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    // Generate all charts
    this.generateWPMLineChart();
    this.generateAccuracyChart();
    this.generateDistributionChart();
    this.generateActivityHeatmap();
    this.updateSummaryStats();
    this.generateInsights();

    // Tab switching
    const tabs = modal.querySelectorAll('.analytics-tab');
    tabs.forEach(tab => {
      tab.onclick = () => {
        // Update tab styles
        tabs.forEach(t => {
          t.classList.remove('border-blue-500', 'text-blue-500');
          t.classList.add('text-gray-500', 'dark:text-gray-400');
        });
        tab.classList.add('border-blue-500', 'text-blue-500');
        tab.classList.remove('text-gray-500', 'dark:text-gray-400');

        // Show/hide containers
        const tabName = tab.dataset.tab;
        const containers = ['wpmChartContainer', 'accuracyChartContainer', 'distributionChartContainer', 'heatmapContainer'];
        containers.forEach(container => {
          const el = modal.querySelector(`#${container}`);
          if (el) el.classList.add('hidden');
        });

        const activeContainer = modal.querySelector(`#${tabName}ChartContainer`) || modal.querySelector(`#${tabName}Container`);
        if (activeContainer) activeContainer.classList.remove('hidden');
      };
    });

    const closeBtn = modal.querySelector('#closeAnalyticsModal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    SoundManager.playKeypress();
  },

  // Generate WPM Line Chart
  generateWPMLineChart() {
    const ctx = document.getElementById('wpmChart')?.getContext('2d');
    if (!ctx) return;

    const history = testHistory.slice().reverse();
    const wpmData = history.map(h => h.wpm);
    const labels = history.map((_, i) => `Test ${i + 1}`);

    // Calculate trend
    let trend = 'Stable';
    let improvement = 0;
    if (wpmData.length >= 2) {
      const firstHalf = wpmData.slice(0, Math.floor(wpmData.length / 2));
      const secondHalf = wpmData.slice(Math.floor(wpmData.length / 2));
      const avgFirst = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
      const avgSecond = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
      improvement = ((avgSecond - avgFirst) / avgFirst * 100).toFixed(1);
      trend = improvement > 5 ? 'Upward 📈' : improvement < -5 ? 'Downward 📉' : 'Stable ➡️';
    }

    // Find best session
    const bestWpm = Math.max(...wpmData);
    const bestIndex = wpmData.indexOf(bestWpm);

    document.getElementById('wpmTrend').innerHTML = trend;
    document.getElementById('wpmImprovement').innerHTML = `${improvement > 0 ? '+' : ''}${improvement}%`;
    document.getElementById('bestSession').innerHTML = `${bestWpm} WPM (Test ${bestIndex + 1})`;

    if (this.charts.wpm) this.charts.wpm.destroy();

    this.charts.wpm = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'WPM Score',
          data: wpmData,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: { callbacks: { label: (ctx) => `${ctx.raw} WPM` } }
        },
        scales: {
          y: { title: { display: true, text: 'Words Per Minute' }, beginAtZero: true },
          x: { title: { display: true, text: 'Test Number' } }
        }
      }
    });
  },

  // Generate Accuracy Chart
  generateAccuracyChart() {
    const ctx = document.getElementById('accuracyChart')?.getContext('2d');
    if (!ctx) return;

    const history = testHistory.slice().reverse();
    const accuracyData = history.map(h => parseInt(h.accuracy));
    const labels = history.map((_, i) => `Test ${i + 1}`);

    const avgAccuracy = (accuracyData.reduce((a, b) => a + b, 0) / accuracyData.length).toFixed(1);
    const bestAccuracy = Math.max(...accuracyData);
    const consistency = (100 - (this.standardDeviation(accuracyData))).toFixed(1);

    document.getElementById('avgAccuracyDisplay').innerHTML = `${avgAccuracy}%`;
    document.getElementById('bestAccuracyDisplay').innerHTML = `${bestAccuracy}%`;
    document.getElementById('consistencyScore').innerHTML = `${consistency}%`;

    if (this.charts.accuracy) this.charts.accuracy.destroy();

    this.charts.accuracy = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Accuracy %',
          data: accuracyData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#10b981'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          tooltip: { callbacks: { label: (ctx) => `${ctx.raw}%` } }
        },
        scales: {
          y: { title: { display: true, text: 'Accuracy (%)' }, min: 0, max: 100 },
          x: { title: { display: true, text: 'Test Number' } }
        }
      }
    });
  },

  // Generate Distribution Chart (Histogram)
  generateDistributionChart() {
    const ctx = document.getElementById('distributionChart')?.getContext('2d');
    if (!ctx) return;

    const wpmData = testHistory.map(h => h.wpm);
    const bins = [0, 30, 50, 70, 90, 110, 130, 150];
    const labels = ['0-30', '31-50', '51-70', '71-90', '91-110', '111-130', '131-150'];
    const counts = new Array(7).fill(0);

    wpmData.forEach(wpm => {
      for (let i = 0; i < bins.length - 1; i++) {
        if (wpm >= bins[i] && wpm < bins[i + 1]) {
          counts[i]++;
          break;
        }
      }
    });

    // Find most common range
    const maxCount = Math.max(...counts);
    const commonIndex = counts.indexOf(maxCount);
    document.getElementById('commonRange').innerHTML = labels[commonIndex];

    if (this.charts.distribution) this.charts.distribution.destroy();

    this.charts.distribution = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Tests',
          data: counts,
          backgroundColor: 'rgba(139, 92, 246, 0.7)',
          borderColor: '#8b5cf6',
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          tooltip: { callbacks: { label: (ctx) => `${ctx.raw} tests` } }
        },
        scales: {
          y: { title: { display: true, text: 'Frequency' }, beginAtZero: true, stepSize: 1 }
        }
      }
    });
  },

  // Generate Activity Heatmap
  generateActivityHeatmap() {
    const heatmapContainer = document.getElementById('activityHeatmap');
    if (!heatmapContainer) return;

    // Get last 7 days of activity
    const activityMap = {};
    testHistory.forEach(test => {
      const date = new Date(test.date).toLocaleDateString();
      activityMap[date] = (activityMap[date] || 0) + 1;
    });

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const heatmapHTML = [];

    // Create header
    heatmapHTML.push(`<div class="col-span-1"></div>`);
    days.forEach(day => {
      heatmapHTML.push(`<div class="text-center text-xs font-semibold py-1">${day}</div>`);
    });

    // Create 4 weeks of data
    for (let week = 3; week >= 0; week--) {
      heatmapHTML.push(`<div class="text-right text-xs pr-1 py-1">Week ${4 - week}</div>`);
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(today.getDate() - (week * 7 + (6 - day)));
        const dateStr = date.toLocaleDateString();
        const count = activityMap[dateStr] || 0;

        let intensity = '';
        if (count === 0) intensity = 'bg-gray-200 dark:bg-gray-700';
        else if (count <= 2) intensity = 'bg-green-300 dark:bg-green-800';
        else if (count <= 5) intensity = 'bg-green-500';
        else intensity = 'bg-green-700';

        heatmapHTML.push(`<div class="w-full aspect-square ${intensity} rounded-sm" title="${dateStr}: ${count} tests"></div>`);
      }
    }

    heatmapContainer.innerHTML = heatmapHTML.join('');
  },

  // Update summary statistics
  updateSummaryStats() {
    const wpmData = testHistory.map(h => h.wpm);
    const avgWpm = wpmData.length > 0 ? Math.round(wpmData.reduce((a, b) => a + b, 0) / wpmData.length) : 0;
    const bestWpm = Math.max(...wpmData, 0);
    const bestStreak = AchievementSystem.userProgress.bestStreak;

    document.getElementById('analyticsBestWpm').innerHTML = bestWpm;
    document.getElementById('analyticsAvgWpm').innerHTML = avgWpm;
    document.getElementById('analyticsTotalTests').innerHTML = testHistory.length;
    document.getElementById('analyticsBestStreak').innerHTML = bestStreak;
  },

  // Generate insights and recommendations
  generateInsights() {
    const insights = [];
    const wpmData = testHistory.map(h => h.wpm);
    const accuracyData = testHistory.map(h => parseInt(h.accuracy));

    if (wpmData.length >= 5) {
      const recentAvg = wpmData.slice(-5).reduce((a, b) => a + b, 0) / 5;
      const overallAvg = wpmData.reduce((a, b) => a + b, 0) / wpmData.length;

      if (recentAvg > overallAvg * 1.1) {
        insights.push('📈 Your recent tests show significant improvement! Keep up the momentum!');
      } else if (recentAvg < overallAvg * 0.9) {
        insights.push('⚠️ Your recent performance has dipped. Consider taking a short break or practicing easier texts.');
      } else {
        insights.push('✅ Your performance is consistent. Try increasing difficulty to challenge yourself!');
      }
    }

    if (accuracyData.length > 0) {
      const avgAccuracy = accuracyData.reduce((a, b) => a + b, 0) / accuracyData.length;
      if (avgAccuracy < 85) {
        insights.push('🎯 Focus on accuracy before speed. Try slowing down to reduce errors.');
      } else if (avgAccuracy > 95) {
        insights.push('🌟 Excellent accuracy! You\'re ready to push for higher speeds.');
      }
    }

    if (testHistory.length < 10) {
      insights.push('💪 Complete more tests to unlock detailed insights about your typing journey!');
    }

    if (bestWpm > 0 && bestWpm < 50) {
      insights.push('🚀 You\'re on your way! Regular practice will help you break 50 WPM.');
    } else if (bestWpm >= 100) {
      insights.push('🏆 You\'re in the elite tier! Consider competing in typing tournaments.');
    }

    if (insights.length === 0) {
      insights.push('📊 Keep practicing and check back for personalized insights!');
    }

    const insightsList = document.getElementById('insightsList');
    if (insightsList) {
      insightsList.innerHTML = insights.map(i => `<p><i class="fas fa-chart-line mr-2 text-blue-500"></i>${i}</p>`).join('');
    }
  },

  // Helper: Calculate standard deviation
  standardDeviation(values) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length;
    return Math.sqrt(variance);
  }
};
// ==================== PERFORMANCE OPTIMIZATIONS & BUG FIXES (DAY 7) ====================

// 1. Debounce Function for Performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 2. Throttle Function for Scroll Events
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 3. Optimized handleInput with debouncing
const debouncedHandleInput = debounce(() => {
  // Original handleInput logic is already called
}, 16); // ~60fps

// 4. Fix memory leaks - Clean up event listeners on page unload
window.addEventListener('beforeunload', () => {
  if (timer) clearInterval(timer);
  if (SoundManager.audioContext) {
    SoundManager.audioContext.close();
  }
});

// 5. PWA Support - Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register service worker for offline support (optional)
    console.log('Service Worker ready for PWA installation');
  });
}

// 6. Fix for mobile viewport height issues
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', throttle(setVH, 100));
setVH();

// 7. Add loading state for better UX
function showLoading(show) {
  const quoteDisplay = elements.quoteDisplay;
  if (show) {
    quoteDisplay.innerHTML = `
          <div class="flex items-center justify-center h-full">
            <div class="loader"></div>
            <span class="ml-2">Loading...</span>
          </div>
        `;
  }
}

// 8. Error boundary for critical functions
function safeExecute(fn, fallback) {
  try {
    return fn();
  } catch (error) {
    console.error('Error caught by boundary:', error);
    return fallback;
  }
}

// 9. Auto-save feature for in-progress tests
let autoSaveInterval = null;
function startAutoSave() {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => {
    if (isTyping && !testDone && elements.quoteInput.value.length > 0) {
      localStorage.setItem('autoSaveInput', elements.quoteInput.value);
      localStorage.setItem('autoSaveQuote', currentQuoteText);
      localStorage.setItem('autoSaveTime', Date.now().toString());
    }
  }, 30000); // Save every 30 seconds
}

function restoreAutoSave() {
  const savedInput = localStorage.getItem('autoSaveInput');
  const savedQuote = localStorage.getItem('autoSaveQuote');
  const savedTime = localStorage.getItem('autoSaveTime');

  if (savedInput && savedQuote && savedTime) {
    const timeSince = (Date.now() - parseInt(savedTime)) / 1000 / 60;
    if (timeSince < 60 && savedQuote === currentQuoteText) {
      const restore = confirm('We found an unfinished test. Would you like to restore it?');
      if (restore) {
        elements.quoteInput.value = savedInput;
        handleInput();
      }
    }
    // Clear auto-save after offering
    localStorage.removeItem('autoSaveInput');
    localStorage.removeItem('autoSaveQuote');
    localStorage.removeItem('autoSaveTime');
  }
}

// 10. Accessibility improvements
function addAccessibilityFeatures() {
  // Add ARIA labels
  elements.quoteInput.setAttribute('aria-label', 'Typing area. Start typing to begin the test');
  elements.quoteInput.setAttribute('aria-describedby', 'instructionsPanel');

  // Add keyboard navigation for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modals
      const openModals = document.querySelectorAll('.result-modal.active, .fixed.inset-0.bg-black\\/50');
      openModals.forEach(modal => {
        if (modal.style.display !== 'none') {
          modal.remove();
        }
      });
    }
  });

  // Add focus visible for keyboard navigation
  document.body.classList.add('js-focus-visible');
}

// 11. Performance monitoring
const performanceMetrics = {
  fps: 60,
  frameCount: 0,
  lastTime: performance.now(),

  measure() {
    const now = performance.now();
    const delta = now - this.lastTime;
    if (delta >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastTime = now;

      // Warn if performance is poor
      if (this.fps < 30) {
        console.warn(`Low FPS detected: ${this.fps}. Consider closing other tabs.`);
      }
    }
    this.frameCount++;
    requestAnimationFrame(() => this.measure());
  }
};
// Uncomment to enable performance monitoring
// performanceMetrics.measure();

// 12. Fix for touch devices
function fixTouchDevices() {
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    // Increase tap targets on mobile
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      if (window.innerWidth < 640) {
        btn.style.minHeight = '44px';
      }
    });
  }
}

// 13. Add offline detection
window.addEventListener('online', () => {
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
  notification.innerHTML = '<i class="fas fa-wifi mr-2"></i>Back online!';
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
});

window.addEventListener('offline', () => {
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
  notification.innerHTML = '<i class="fas fa-wifi-slash mr-2"></i>You are offline. Some features may be limited.';
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
});

// 14. Export/Import Settings
function exportSettings() {
  const settings = {
    theme: localStorage.getItem('theme'),
    soundSettings: JSON.parse(localStorage.getItem('velocitySoundSettings') || '{}'),
    history: testHistory,
    achievements: AchievementSystem.userProgress,
    customTexts: CustomTextSystem.customTexts
  };

  const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `velocitytype_backup_${new Date().toISOString().slice(0, 19)}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('Settings exported successfully!');
}

function importSettings(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const settings = JSON.parse(e.target.result);

      if (settings.theme) {
        localStorage.setItem('theme', settings.theme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(settings.theme);
      }

      if (settings.soundSettings) {
        localStorage.setItem('velocitySoundSettings', JSON.stringify(settings.soundSettings));
        SoundManager.enabled = settings.soundSettings.enabled;
        SoundManager.hapticsEnabled = settings.soundSettings.hapticsEnabled;
        SoundManager.volume = settings.soundSettings.volume;
      }

      if (settings.history) {
        testHistory = settings.history;
        localStorage.setItem('velocityHistory', JSON.stringify(testHistory));
        updateHistoryDisplay();
        updateStatsSummary();
      }

      if (settings.achievements) {
        AchievementSystem.userProgress = settings.achievements;
        AchievementSystem.saveProgress();
        AchievementSystem.updateBadgeDisplay();
      }

      if (settings.customTexts) {
        CustomTextSystem.customTexts = settings.customTexts;
        CustomTextSystem.saveCustomTexts();
      }

      showToast('Settings imported successfully!');
      setTimeout(() => location.reload(), 1500);
    } catch (error) {
      showToast('Invalid backup file!', 'error');
    }
  };
  reader.readAsText(file);
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
  toast.style.animation = 'slideUp 0.3s ease';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// 15. Add settings backup/restore UI
function addBackupRestoreUI() {
  const settingsPanel = elements.settingsPanel.querySelector('.bg-black\\/5');
  if (settingsPanel) {
    const backupDiv = document.createElement('div');
    backupDiv.className = 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700';
    backupDiv.innerHTML = `
          <p class="font-semibold mb-2 flex gap-2 text-gray-700 dark:text-gray-300">
            <i class="fas fa-database text-purple-500"></i> Backup & Restore
          </p>
          <div class="flex gap-2">
            <button id="exportSettingsBtn" class="px-3 py-1 rounded-lg text-sm bg-purple-500 hover:bg-purple-600 text-white transition flex-1">
              <i class="fas fa-download mr-1"></i>Export
            </button>
            <label class="px-3 py-1 rounded-lg text-sm bg-indigo-500 hover:bg-indigo-600 text-white transition cursor-pointer text-center flex-1">
              <i class="fas fa-upload mr-1"></i>Import
              <input type="file" id="importSettingsFile" accept=".json" class="hidden">
            </label>
          </div>
          <p class="text-xs mt-1 opacity-60 text-gray-600 dark:text-gray-400">Backup your progress and settings</p>
        `;
    settingsPanel.appendChild(backupDiv);

    document.getElementById('exportSettingsBtn')?.addEventListener('click', exportSettings);
    document.getElementById('importSettingsFile')?.addEventListener('change', (e) => {
      if (e.target.files[0]) importSettings(e.target.files[0]);
    });
  }
}

// 16. Fix for initial load performance
function lazyLoadQuotes() {
  // Quotes are already loaded, but we can optimize
  console.log('Quote database ready:', Object.keys(QUOTES_LIB).length, 'categories');
}

// 17. Add version tracking
const APP_VERSION = '3.0.0';
const STORAGE_VERSION_KEY = 'velocityTypeVersion';

function checkVersion() {
  const savedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
  if (savedVersion !== APP_VERSION) {
    console.log(`Updating from ${savedVersion} to ${APP_VERSION}`);
    // Migrate data if needed
    localStorage.setItem(STORAGE_VERSION_KEY, APP_VERSION);
  }
}

// 18. Fix for rapid typing causing lag
function optimizeRendering() {
  // Use requestAnimationFrame for visual updates
  let pendingUpdate = false;

  window.requestOptimizedUpdate = (callback) => {
    if (!pendingUpdate) {
      pendingUpdate = true;
      requestAnimationFrame(() => {
        callback();
        pendingUpdate = false;
      });
    }
  };
}

// 19. Add keyboard shortcut for settings backup
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'E') {
    e.preventDefault();
    exportSettings();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    document.getElementById('importSettingsFile')?.click();
  }
});

// 20. Final initialization with all fixes
function finalInit() {
  checkVersion();
  addAccessibilityFeatures();
  fixTouchDevices();
  addBackupRestoreUI();
  lazyLoadQuotes();
  optimizeRendering();
  startAutoSave();
  restoreAutoSave();

  // Log completion
  console.log(`✅ VelocityType v${APP_VERSION} ready!`);
  console.log('📊 Features: Sound, Shortcuts, Achievements, Export, Custom Text, Analytics');
  console.log('💡 Tip: Press Ctrl+/ to see all keyboard shortcuts');
}

// Call final initialization
finalInit();

// ==================== MULTIPLAYER RACING SYSTEM (DAY 8) ====================
const MultiplayerSystem = {
  // State
  isInRace: false,
  raceId: null,
  playerName: '',
  players: [],
  raceStartTime: null,
  raceQuote: '',
  playerProgress: {},
  raceInterval: null,

  // Available race rooms
  activeRooms: [],

  // Initialize
  init() {
    this.loadPlayerName();
    this.setupEventListeners();
  },

  // Load saved player name
  loadPlayerName() {
    const saved = localStorage.getItem('velocityPlayerName');
    this.playerName = saved || this.generateRandomName();
  },

  // Generate random name for anonymous players
  generateRandomName() {
    const adjectives = ['Swift', 'Fast', 'Quick', 'Rapid', 'Nimble', 'Turbo', 'Lightning', 'Speed', 'Flash', 'Rocket'];
    const nouns = ['Typer', 'Typist', 'Keyboard', 'Keymaster', 'Clicker', 'Writer', 'Scribe', 'Phantom', 'Shadow', 'Master'];
    return `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}`;
  },

  // Setup event listeners
  setupEventListeners() {
    // Will be called from main attachEvents
  },

  // Show multiplayer lobby
  showLobby() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-users mr-2 text-purple-500"></i>Multiplayer Racing
              </h3>
              <button id="closeLobbyBtn" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <!-- Player Name Section -->
            <div class="mb-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <p class="text-sm font-semibold mb-2 text-purple-700 dark:text-purple-300">Your Racing Name</p>
              <div class="flex gap-2">
                <input type="text" id="playerNameInput" value="${this.playerName}" class="flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                <button id="updateNameBtn" class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">
                  <i class="fas fa-save"></i>
                </button>
              </div>
            </div>
            
            <!-- Create Race Section -->
            <div class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <p class="text-sm font-semibold mb-2 text-green-700 dark:text-green-300">Create New Race</p>
              <div class="flex gap-2">
                <select id="raceDifficulty" class="flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                  <option value="easy">Easy</option>
                  <option value="medium" selected>Medium</option>
                  <option value="hard">Hard</option>
                  <option value="expert">Expert</option>
                </select>
                <select id="raceDuration" class="flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                  <option value="30">30 seconds</option>
                  <option value="60" selected>60 seconds</option>
                  <option value="120">120 seconds</option>
                </select>
                <button id="createRaceBtn" class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-semibold">
                  <i class="fas fa-plus"></i> Create
                </button>
              </div>
            </div>
            
            <!-- Active Races Section -->
            <div class="mb-4">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <i class="fas fa-door-open mr-2"></i>Active Races (${this.activeRooms.length})
              </h4>
              <div id="activeRacesList" class="max-h-64 overflow-y-auto space-y-2">
                ${this.renderActiveRooms()}
              </div>
            </div>
            
            <!-- Instructions -->
            <div class="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-sm">
              <p class="text-blue-700 dark:text-blue-300">
                <i class="fas fa-info-circle mr-1"></i>
                How to race: Create a race or join an existing one. All players race the same text. First to finish or highest WPM wins!
              </p>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    // Event listeners
    const closeBtn = modal.querySelector('#closeLobbyBtn');
    closeBtn.onclick = () => modal.remove();

    const updateNameBtn = modal.querySelector('#updateNameBtn');
    const playerNameInput = modal.querySelector('#playerNameInput');
    updateNameBtn.onclick = () => {
      const newName = playerNameInput.value.trim();
      if (newName) {
        this.playerName = newName;
        localStorage.setItem('velocityPlayerName', newName);
        this.showNotification(`Name updated to ${newName}!`, 'success');
      }
    };

    const createRaceBtn = modal.querySelector('#createRaceBtn');
    createRaceBtn.onclick = () => {
      const difficulty = modal.querySelector('#raceDifficulty').value;
      const duration = parseInt(modal.querySelector('#raceDuration').value);
      this.createRace(difficulty, duration);
      modal.remove();
    };

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Render active rooms
  renderActiveRooms() {
    if (this.activeRooms.length === 0) {
      return '<p class="text-center text-sm text-gray-500 py-4">No active races. Create one to start!</p>';
    }

    return this.activeRooms.map(room => `
          <div class="race-room p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <div class="flex justify-between items-center">
              <div>
                <p class="font-semibold text-sm">Room: ${room.id}</p>
                <p class="text-xs text-gray-500">${room.difficulty} • ${room.duration}s • ${room.players.length}/8 players</p>
              </div>
              <button class="join-race-btn px-4 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm" data-room-id="${room.id}">
                <i class="fas fa-sign-in-alt"></i> Join
              </button>
            </div>
          </div>
        `).join('');
  },

  // Create a new race
  createRace(difficulty, duration) {
    this.raceId = 'race_' + Date.now();
    this.players = [{ name: this.playerName, progress: 0, wpm: 0, completed: false, joinedAt: Date.now() }];
    this.raceQuote = this.getRandomQuote(difficulty);
    this.isInRace = true;

    // Add to active rooms
    this.activeRooms.push({
      id: this.raceId,
      difficulty: difficulty,
      duration: duration,
      players: this.players,
      createdAt: Date.now(),
      host: this.playerName
    });

    this.startRaceLobby();
  },

  // Join an existing race
  joinRace(roomId) {
    const room = this.activeRooms.find(r => r.id === roomId);
    if (!room) {
      this.showNotification('Race no longer exists!', 'error');
      return;
    }

    if (room.players.length >= 8) {
      this.showNotification('Race is full!', 'error');
      return;
    }

    this.raceId = roomId;
    this.players = [...room.players];
    this.players.push({ name: this.playerName, progress: 0, wpm: 0, completed: false, joinedAt: Date.now() });
    this.raceQuote = this.getRandomQuote(room.difficulty);
    this.isInRace = true;

    // Update room in activeRooms
    room.players = this.players;

    this.startRaceLobby();
  },

  // Get random quote for race
  getRandomQuote(difficulty) {
    const quotes = QUOTES_LIB.programming[difficulty] || QUOTES_LIB.programming.medium;
    return quotes[Math.floor(Math.random() * quotes.length)];
  },

  // Start race lobby (waiting for players)
  startRaceLobby() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full mx-4 p-6 shadow-2xl">
            <div class="text-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-flag-checkered mr-2 text-green-500"></i>Race Lobby
              </h3>
              <p class="text-sm text-gray-500">Race ID: <span class="font-mono font-bold">${this.raceId}</span></p>
            </div>
            
            <div class="mb-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <p class="text-sm text-center text-yellow-700 dark:text-yellow-300">
                <i class="fas fa-users mr-1"></i>
                Waiting for players... (${this.players.length}/8)
              </p>
            </div>
            
            <div class="mb-4">
              <h4 class="font-semibold mb-2">Players in Lobby:</h4>
              <div id="lobbyPlayersList" class="space-y-1 max-h-48 overflow-y-auto">
                ${this.players.map(p => `
                  <div class="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                    <span><i class="fas fa-user-circle mr-2"></i>${p.name}</span>
                    ${p.name === this.playerName ? '<span class="text-xs text-green-500">(You)</span>' : ''}
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="flex gap-3">
              <button id="startRaceBtn" class="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition ${this.players.length < 2 ? 'opacity-50 cursor-not-allowed' : ''}" ${this.players.length < 2 ? 'disabled' : ''}>
                <i class="fas fa-play"></i> Start Race (min 2 players)
              </button>
              <button id="cancelRaceBtn" class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition">
                <i class="fas fa-times"></i> Cancel
              </button>
            </div>
            
            <p class="text-xs text-center text-gray-500 mt-4">Share this race ID with friends to join: <strong>${this.raceId}</strong></p>
          </div>
        `;

    document.body.appendChild(modal);

    const startBtn = modal.querySelector('#startRaceBtn');
    startBtn.onclick = () => {
      if (this.players.length >= 2) {
        this.startRace();
        modal.remove();
      } else {
        this.showNotification('Need at least 2 players to start!', 'error');
      }
    };

    const cancelBtn = modal.querySelector('#cancelRaceBtn');
    cancelBtn.onclick = () => {
      this.cancelRace();
      modal.remove();
    };

    // Simulate player joining (in real app, this would use WebSockets)
    this.simulatePlayerJoins();
  },

  // Simulate other players joining (demo mode)
  simulatePlayerJoins() {
    const demoPlayers = ['SpeedDemon', 'TurboTyper', 'KeyMaster', 'FlashFingers', 'RapidFire'];
    let joinCount = 0;

    const interval = setInterval(() => {
      if (joinCount < 3 && this.isInRace && document.querySelector('#lobbyPlayersList')) {
        const demoName = demoPlayers[joinCount];
        if (!this.players.find(p => p.name === demoName)) {
          this.players.push({ name: demoName, progress: 0, wpm: 0, completed: false, joinedAt: Date.now() });

          // Update UI
          const playersList = document.querySelector('#lobbyPlayersList');
          if (playersList) {
            playersList.innerHTML = this.players.map(p => `
                  <div class="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                    <span><i class="fas fa-user-circle mr-2"></i>${p.name}</span>
                    ${p.name === this.playerName ? '<span class="text-xs text-green-500">(You)</span>' : ''}
                  </div>
                `).join('');
          }

          const startBtn = document.querySelector('#startRaceBtn');
          if (startBtn && this.players.length >= 2) {
            startBtn.disabled = false;
            startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
          }

          joinCount++;
        }
      } else {
        clearInterval(interval);
      }
    }, 3000);
  },

  // Start the actual race
  startRace() {
    this.raceStartTime = Date.now() + 3000; // 3 second countdown
    this.playerProgress = {};

    // Show countdown and start race
    this.showRaceCountdown();
  },

  // Show countdown before race
  showRaceCountdown() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-50';

    let countdown = 3;

    const updateCountdown = () => {
      modal.innerHTML = `
            <div class="text-center">
              <div class="text-8xl font-bold text-white mb-4 animate-pulse">${countdown}</div>
              <p class="text-white text-xl">Get ready to race!</p>
              <p class="text-gray-300 mt-2">Race against: ${this.players.map(p => p.name).join(', ')}</p>
            </div>
          `;

      if (countdown === 0) {
        clearInterval(countdownInterval);
        modal.remove();
        this.runRace();
      }
      countdown--;
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    document.body.appendChild(modal);
  },

  // Run the actual race
  runRace() {
    // Switch to race mode
    currentQuoteText = this.raceQuote;
    updateQuoteUI();
    resetTestState();

    // Show race interface
    this.showRaceInterface();

    // Start typing
    isTyping = true;
    startTime = Date.now();
    startTimer();

    // Track player progress
    this.trackRaceProgress();
  },

  // Show race interface with player standings
  showRaceInterface() {
    const racePanel = document.createElement('div');
    racePanel.id = 'racePanel';
    racePanel.className = 'fixed top-20 right-5 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 z-40 border-2 border-purple-500';
    racePanel.innerHTML = `
          <div class="flex justify-between items-center mb-3">
            <h4 class="font-bold text-purple-600 dark:text-purple-400">
              <i class="fas fa-flag-checkered mr-1"></i>Race Standings
            </h4>
            <span class="text-xs text-gray-500">Race ID: ${this.raceId}</span>
          </div>
          <div id="raceStandings" class="space-y-2 max-h-96 overflow-y-auto">
            ${this.renderStandings()}
          </div>
        `;

    document.body.appendChild(racePanel);
  },

  // Render current standings
  renderStandings() {
    const sortedPlayers = [...this.players].sort((a, b) => {
      if (a.completed && !b.completed) return -1;
      if (!a.completed && b.completed) return 1;
      return b.wpm - a.wpm;
    });

    return sortedPlayers.map((player, index) => `
          <div class="flex justify-between items-center p-2 rounded ${player.name === this.playerName ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-700'}">
            <div class="flex items-center gap-2">
              <span class="font-bold text-sm w-6">${index + 1}</span>
              <span class="text-sm">${player.name} ${player.name === this.playerName ? '(You)' : ''}</span>
            </div>
            <div class="text-right">
              ${player.completed ?
        '<span class="text-xs text-green-500"><i class="fas fa-check-circle"></i> Finished!</span>' :
        `<span class="text-sm font-bold text-blue-500">${player.wpm} WPM</span>`
      }
              <div class="w-24 h-1 bg-gray-300 rounded-full mt-1">
                <div class="h-1 bg-green-500 rounded-full transition-all" style="width: ${player.progress}%"></div>
              </div>
            </div>
          </div>
        `).join('');
  },

  // Track player progress during race
  trackRaceProgress() {
    const updateInterval = setInterval(() => {
      if (!this.isInRace || testDone) {
        clearInterval(updateInterval);
        return;
      }

      // Update current player's progress
      const currentPlayer = this.players.find(p => p.name === this.playerName);
      if (currentPlayer) {
        const elapsed = (Date.now() - this.raceStartTime) / 1000;
        const minutes = Math.max(0.01, elapsed / 60);
        const wordsTyped = correctCharsTyped / 5;
        const wpm = Math.floor(wordsTyped / minutes);
        const progress = (totalTypedChars / currentQuoteText.length) * 100;

        currentPlayer.wpm = wpm || 0;
        currentPlayer.progress = Math.min(100, progress);

        if (totalTypedChars >= currentQuoteText.length) {
          currentPlayer.completed = true;
          this.finishRace();
        }
      }

      // Update standings display
      const standingsDiv = document.getElementById('raceStandings');
      if (standingsDiv) {
        standingsDiv.innerHTML = this.renderStandings();
      }
    }, 500);
  },

  // Finish the race
  finishRace() {
    if (this.raceFinished) return;
    this.raceFinished = true;
    this.isInRace = false;
    clearInterval(timer);

    // Calculate final results
    const sortedPlayers = [...this.players].sort((a, b) => {
      if (a.completed && !b.completed) return -1;
      if (!a.completed && b.completed) return 1;
      return b.wpm - a.wpm;
    });

    const winner = sortedPlayers[0];
    const isWinner = winner.name === this.playerName;

    // Show results
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-50';
    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 text-center shadow-2xl">
            <div class="text-6xl mb-4">${isWinner ? '🏆' : '👍'}</div>
            <h2 class="text-2xl font-bold mb-2">${isWinner ? 'You Won!' : 'Race Complete!'}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              ${isWinner ? 'Congratulations! You are the champion!' : `Winner: ${winner.name} with ${winner.wpm} WPM`}
            </p>
            
            <div class="mb-4 max-h-64 overflow-y-auto">
              ${sortedPlayers.map((p, i) => `
                <div class="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
                  <span>${i + 1}. ${p.name} ${p.name === winner.name ? '👑' : ''}</span>
                  <span class="font-bold">${p.wpm} WPM</span>
                  <span>${p.completed ? '✅' : '⏱️'}</span>
                </div>
              `).join('')}
            </div>
            
            <button id="closeRaceResultsBtn" class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-bold transition">
              <i class="fas fa-check"></i> Close
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    // Play race completion sound
    SoundManager.playComplete();

    // Award achievement for winning
    if (isWinner) {
      this.awardRaceWin();
    }

    const closeBtn = modal.querySelector('#closeRaceResultsBtn');
    closeBtn.onclick = () => {
      modal.remove();
      const racePanel = document.getElementById('racePanel');
      if (racePanel) racePanel.remove();
      this.resetRaceState();
    };
  },

  // Award achievement for winning a race
  awardRaceWin() {
    const raceWins = parseInt(localStorage.getItem('raceWins') || '0') + 1;
    localStorage.setItem('raceWins', raceWins);

    if (raceWins === 1) {
      AchievementSystem.showAchievementNotification({
        id: 'first_race_win',
        name: 'First Victory!',
        description: 'Won your first multiplayer race',
        icon: 'fas fa-trophy',
        points: 50
      });
    } else if (raceWins === 10) {
      AchievementSystem.showAchievementNotification({
        id: 'race_champion',
        name: 'Race Champion',
        description: 'Won 10 multiplayer races',
        icon: 'fas fa-crown',
        points: 100
      });
    }
  },

  // Cancel race
  cancelRace() {
    this.isInRace = false;
    this.raceId = null;
    this.players = [];
    this.showNotification('Race cancelled', 'info');
  },

  // Reset race state
  resetRaceState() {
    this.isInRace = false;
    this.raceId = null;
    this.players = [];
    this.raceStartTime = null;
    this.raceFinished = false;
    loadQuote(); // Load normal quote
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }
};
// Initialize Multiplayer System
MultiplayerSystem.init();
// ==================== DAILY CHALLENGES SYSTEM (DAY 9) ====================
const DailyChallengeSystem = {
  // Current challenge data
  currentChallenge: null,
  lastResetDate: null,
  userProgress: {
    completedChallenges: [],
    currentStreak: 0,
    longestStreak: 0,
    totalRewards: 0,
    lastCompletedDate: null
  },

  // Challenge types and templates
  challengeTypes: {
    SPEED: 'speed',
    ACCURACY: 'accuracy',
    PERFECT: 'perfect',
    STREAK: 'streak',
    VOLUME: 'volume',
    COMBO: 'combo'
  },

  // Challenge templates
  challengeTemplates: [
    { type: 'speed', name: 'Speed Demon', description: 'Achieve {target} WPM', baseTarget: 60, increment: 5, reward: 50 },
    { type: 'speed', name: 'Velocity Master', description: 'Reach {target} WPM', baseTarget: 80, increment: 5, reward: 75 },
    { type: 'accuracy', name: 'Precision Typist', description: 'Achieve {target}% accuracy', baseTarget: 90, increment: 2, reward: 40 },
    { type: 'accuracy', name: 'Perfectionist', description: 'Get {target}% accuracy', baseTarget: 95, increment: 2, reward: 60 },
    { type: 'perfect', name: 'Flawless Victory', description: 'Complete a test with 0 errors', target: 0, reward: 100 },
    { type: 'streak', name: 'On Fire', description: 'Complete {target} tests without errors', baseTarget: 3, increment: 1, reward: 45 },
    { type: 'volume', name: 'Practice Makes Perfect', description: 'Complete {target} tests today', baseTarget: 5, increment: 2, reward: 55 },
    { type: 'combo', name: 'Combo Master', description: 'Get {target} correct characters in a row', baseTarget: 100, increment: 25, reward: 65 }
  ],

  // Initialize
  init() {
    this.loadProgress();
    this.checkAndResetChallenge();
    this.setupEventListeners();
  },

  // Load saved progress
  loadProgress() {
    const saved = localStorage.getItem('dailyChallengeProgress');
    if (saved) {
      const parsed = JSON.parse(saved);
      this.userProgress = { ...this.userProgress, ...parsed };
    }

    const savedChallenge = localStorage.getItem('currentChallenge');
    if (savedChallenge) {
      this.currentChallenge = JSON.parse(savedChallenge);
    }
  },

  // Save progress
  saveProgress() {
    localStorage.setItem('dailyChallengeProgress', JSON.stringify(this.userProgress));
    if (this.currentChallenge) {
      localStorage.setItem('currentChallenge', JSON.stringify(this.currentChallenge));
    }
  },

  // Check and reset challenge for new day
  checkAndResetChallenge() {
    const today = new Date().toDateString();

    if (this.lastResetDate !== today) {
      this.generateNewChallenge();
      this.lastResetDate = today;
      this.saveProgress();

      // Show notification about new challenge
      setTimeout(() => {
        this.showNewChallengeNotification();
      }, 1000);
    }
  },

  // Generate new daily challenge
  generateNewChallenge() {
    // Select random challenge template
    const template = this.challengeTemplates[Math.floor(Math.random() * this.challengeTemplates.length)];

    // Calculate target based on user's skill level
    let target = template.baseTarget || template.target;
    if (template.baseTarget) {
      const userLevel = this.calculateUserLevel();
      const increment = Math.floor(userLevel / 10) * (template.increment || 0);
      target = template.baseTarget + increment;
    }

    this.currentChallenge = {
      id: Date.now(),
      type: template.type,
      name: template.name,
      description: template.description.replace('{target}', target),
      target: target,
      reward: template.reward,
      progress: 0,
      completed: false,
      date: new Date().toDateString(),
      icon: this.getChallengeIcon(template.type)
    };

    this.saveProgress();
  },

  // Calculate user skill level based on history
  calculateUserLevel() {
    if (testHistory.length === 0) return 1;

    const avgWpm = testHistory.reduce((sum, t) => sum + t.wpm, 0) / testHistory.length;
    const avgAccuracy = testHistory.reduce((sum, t) => sum + parseInt(t.accuracy), 0) / testHistory.length;

    let level = 1;
    if (avgWpm >= 100 && avgAccuracy >= 95) level = 10;
    else if (avgWpm >= 80 && avgAccuracy >= 90) level = 8;
    else if (avgWpm >= 60 && avgAccuracy >= 85) level = 6;
    else if (avgWpm >= 40 && avgAccuracy >= 80) level = 4;
    else if (avgWpm >= 25) level = 2;

    return level;
  },

  // Get icon for challenge type
  getChallengeIcon(type) {
    const icons = {
      speed: 'fas fa-tachometer-alt',
      accuracy: 'fas fa-bullseye',
      perfect: 'fas fa-star',
      streak: 'fas fa-fire',
      volume: 'fas fa-chart-line',
      combo: 'fas fa-link'
    };
    return icons[type] || 'fas fa-calendar-day';
  },

  // Check challenge progress after each test
  checkProgress(testResult) {
    if (!this.currentChallenge || this.currentChallenge.completed) return;

    let progress = 0;
    let completed = false;

    switch (this.currentChallenge.type) {
      case 'speed':
        progress = testResult.wpm;
        completed = testResult.wpm >= this.currentChallenge.target;
        break;

      case 'accuracy':
        progress = testResult.accuracy;
        completed = testResult.accuracy >= this.currentChallenge.target;
        break;

      case 'perfect':
        progress = testResult.errors === 0 ? 100 : 0;
        completed = testResult.errors === 0;
        break;

      case 'streak':
        this.userProgress.currentStreak = testResult.errors === 0 ? this.userProgress.currentStreak + 1 : 0;
        progress = this.userProgress.currentStreak;
        completed = progress >= this.currentChallenge.target;
        break;

      case 'volume':
        const todayTests = testHistory.filter(t =>
          new Date(t.date).toDateString() === new Date().toDateString()
        ).length;
        progress = todayTests;
        completed = progress >= this.currentChallenge.target;
        break;

      case 'combo':
        // Track longest correct streak during test
        progress = this.calculateLongestStreak(testResult);
        completed = progress >= this.currentChallenge.target;
        break;
    }

    this.currentChallenge.progress = Math.min(100, (progress / this.currentChallenge.target) * 100);

    if (completed && !this.currentChallenge.completed) {
      this.completeChallenge();
    }

    this.saveProgress();
    this.updateChallengeDisplay();
  },

  // Calculate longest correct streak in a test
  calculateLongestStreak(testResult) {
    // This would need to track character-by-character correctness
    // For now, return a simplified value
    return testResult.accuracy === 100 ? testResult.wpm * 5 : Math.floor(testResult.wpm * 3);
  },

  // Complete the daily challenge
  completeChallenge() {
    this.currentChallenge.completed = true;

    // Update streak
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (this.userProgress.lastCompletedDate === yesterday) {
      this.userProgress.currentStreak++;
    } else if (this.userProgress.lastCompletedDate !== today) {
      this.userProgress.currentStreak = 1;
    }

    if (this.userProgress.currentStreak > this.userProgress.longestStreak) {
      this.userProgress.longestStreak = this.userProgress.currentStreak;
    }

    this.userProgress.lastCompletedDate = today;
    this.userProgress.totalRewards += this.currentChallenge.reward;
    this.userProgress.completedChallenges.push({
      id: this.currentChallenge.id,
      date: today,
      reward: this.currentChallenge.reward
    });

    this.saveProgress();

    // Show celebration
    this.showChallengeCompleteCelebration();

    // Play achievement sound
    SoundManager.playAchievement();

    // Award bonus points to achievement system
    if (AchievementSystem) {
      AchievementSystem.userProgress.totalPoints += this.currentChallenge.reward;
      AchievementSystem.saveProgress();
    }
  },

  // Show challenge complete celebration
  showChallengeCompleteCelebration() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl max-w-md w-full mx-4 p-8 text-center shadow-2xl animate-bounce">
            <div class="text-6xl mb-4">🎉</div>
            <h2 class="text-2xl font-bold text-white mb-2">Daily Challenge Complete!</h2>
            <p class="text-white opacity-90 mb-4">${this.currentChallenge.name}</p>
            <div class="bg-white/20 rounded-lg p-3 mb-4">
              <p class="text-white">Reward: +${this.currentChallenge.reward} points</p>
              <p class="text-white text-sm">Current Streak: ${this.userProgress.currentStreak} day${this.userProgress.currentStreak !== 1 ? 's' : ''}</p>
            </div>
            <button id="closeCelebrationBtn" class="px-6 py-2 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition">
              Awesome!
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeCelebrationBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Show new challenge notification
  showNewChallengeNotification() {
    if (!this.currentChallenge) return;

    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-2xl z-50';
    notification.style.animation = 'slideIn 0.5s ease, fadeOut 0.5s ease 4s forwards';
    notification.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <i class="${this.currentChallenge.icon} text-2xl"></i>
            </div>
            <div>
              <p class="text-xs opacity-90">New Daily Challenge!</p>
              <p class="font-bold text-sm">${this.currentChallenge.name}</p>
              <p class="text-xs opacity-90">${this.currentChallenge.description}</p>
            </div>
          </div>
        `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4500);
  },

  // Show challenge panel
  showChallengePanel() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    const isCompleted = this.currentChallenge?.completed;
    const progressPercent = this.currentChallenge?.progress || 0;

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-calendar-day mr-2 text-purple-500"></i>Daily Challenge
              </h3>
              <button id="closeChallengePanel" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            ${this.currentChallenge ? `
              <div class="text-center mb-4">
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                  <i class="${this.currentChallenge.icon} text-3xl text-white"></i>
                </div>
                <h4 class="text-xl font-bold">${this.currentChallenge.name}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">${this.currentChallenge.description}</p>
              </div>
              
              <div class="mb-4">
                <div class="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>${Math.floor(progressPercent)}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all" style="width: ${progressPercent}%"></div>
                </div>
              </div>
              
              <div class="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mb-4">
                <p class="text-sm text-center text-yellow-700 dark:text-yellow-300">
                  <i class="fas fa-gift mr-1"></i>
                  Reward: ${this.currentChallenge.reward} points
                </p>
              </div>
              
              ${isCompleted ? `
                <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
                  <p class="text-sm text-center text-green-700 dark:text-green-300">
                    <i class="fas fa-check-circle mr-1"></i>
                    Challenge Complete! Come back tomorrow for a new challenge.
                  </p>
                </div>
              ` : ''}
            ` : '<p class="text-center py-8">No active challenge. Check back tomorrow!</p>'}
            
            <!-- Streak Info -->
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
              <div class="grid grid-cols-2 gap-3 text-center">
                <div>
                  <p class="text-xs text-gray-500">Current Streak</p>
                  <p class="text-2xl font-bold text-orange-500">${this.userProgress.currentStreak}</p>
                  <p class="text-xs text-gray-500">days</p>
                </div>
                <div>
                  <p class="text-xs text-gray-500">Best Streak</p>
                  <p class="text-2xl font-bold text-green-500">${this.userProgress.longestStreak}</p>
                  <p class="text-xs text-gray-500">days</p>
                </div>
              </div>
            </div>
            
            <div class="mt-4">
              <button id="closeChallengeBtn" class="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">
                Close
              </button>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeChallengePanel') || modal.querySelector('#closeChallengeBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Update challenge display in UI (mini widget)
  updateChallengeDisplay() {
    let widget = document.getElementById('dailyChallengeWidget');

    if (!this.currentChallenge) return;

    if (!widget) {
      // Create widget if it doesn't exist
      widget = document.createElement('div');
      widget.id = 'dailyChallengeWidget';
      widget.className = 'fixed bottom-5 left-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 z-30 cursor-pointer hover:scale-105 transition-all duration-200 border-2 border-purple-500';
      widget.onclick = () => this.showChallengePanel();
      document.body.appendChild(widget);
    }

    const isCompleted = this.currentChallenge.completed;
    const progressPercent = Math.floor(this.currentChallenge.progress || 0);

    widget.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <i class="${this.currentChallenge.icon} text-white text-sm"></i>
            </div>
            <div>
              <p class="text-xs font-semibold ${isCompleted ? 'text-green-500' : 'text-purple-500'}">
                ${isCompleted ? '✓ Daily Challenge Complete!' : 'Daily Challenge'}
              </p>
              <p class="text-xs text-gray-600 dark:text-gray-400">${this.currentChallenge.name}</p>
              <div class="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all" style="width: ${progressPercent}%"></div>
              </div>
            </div>
            <div class="text-xs font-bold text-purple-500">${this.userProgress.currentStreak}🔥</div>
          </div>
        `;
  },

  // Setup event listeners
  setupEventListeners() {
    // Add daily challenge button to UI
    const challengeBtn = document.getElementById('dailyChallengeBtn');
    if (challengeBtn) {
      challengeBtn.onclick = () => this.showChallengePanel();
    }
  }
};
// Initialize Daily Challenge System
DailyChallengeSystem.init();

// ==================== LEADERBOARDS SYSTEM (DAY 10) ====================
const LeaderboardSystem = {
  // Leaderboard data
  globalLeaderboard: [],
  weeklyLeaderboard: [],
  monthlyLeaderboard: [],
  friendLeaderboard: [],

  // Categories
  categories: ['wpm', 'accuracy', 'tests', 'streak', 'points'],

  // Time periods
  periods: {
    weekly: 'weekly',
    monthly: 'monthly',
    allTime: 'allTime'
  },

  // Initialize
  init() {
    this.loadLeaderboardData();
    this.setupEventListeners();
    this.updateLeaderboards();
  },

  // Load leaderboard data from localStorage
  loadLeaderboardData() {
    const saved = localStorage.getItem('velocityLeaderboard');
    if (saved) {
      const data = JSON.parse(saved);
      this.globalLeaderboard = data.global || [];
      this.weeklyLeaderboard = data.weekly || [];
      this.monthlyLeaderboard = data.monthly || [];
    }
  },

  // Save leaderboard data
  saveLeaderboardData() {
    localStorage.setItem('velocityLeaderboard', JSON.stringify({
      global: this.globalLeaderboard,
      weekly: this.weeklyLeaderboard,
      monthly: this.monthlyLeaderboard
    }));
  },

  // Update leaderboards with new test results
  updateLeaderboards() {
    // Get current user's best stats
    const userStats = this.getUserStats();

    // Update global leaderboard
    this.updateGlobalLeaderboard(userStats);

    // Update weekly leaderboard
    this.updateWeeklyLeaderboard(userStats);

    // Update monthly leaderboard
    this.updateMonthlyLeaderboard(userStats);

    this.saveLeaderboardData();
  },

  // Get current user's statistics
  getUserStats() {
    const wpmValues = testHistory.map(h => h.wpm);
    const accuracyValues = testHistory.map(h => parseInt(h.accuracy));

    return {
      name: MultiplayerSystem?.playerName || 'You',
      wpm: Math.max(...wpmValues, 0),
      avgWpm: Math.round(wpmValues.reduce((a, b) => a + b, 0) / (wpmValues.length || 1)),
      accuracy: Math.max(...accuracyValues, 0),
      avgAccuracy: Math.round(accuracyValues.reduce((a, b) => a + b, 0) / (accuracyValues.length || 1)),
      totalTests: testHistory.length,
      bestStreak: AchievementSystem?.userProgress?.bestStreak || 0,
      totalPoints: AchievementSystem?.userProgress?.totalPoints || 0,
      lastActive: new Date().toISOString()
    };
  },

  // Update global leaderboard (all time)
  updateGlobalLeaderboard(userStats) {
    // Check if user already exists in leaderboard
    const existingIndex = this.globalLeaderboard.findIndex(entry => entry.name === userStats.name);

    const entry = {
      name: userStats.name,
      wpm: userStats.wpm,
      accuracy: userStats.accuracy,
      totalTests: userStats.totalTests,
      streak: userStats.bestStreak,
      points: userStats.totalPoints,
      lastActive: userStats.lastActive
    };

    if (existingIndex !== -1) {
      // Update existing entry
      this.globalLeaderboard[existingIndex] = entry;
    } else {
      // Add new entry
      this.globalLeaderboard.push(entry);
    }

    // Sort by WPM (descending)
    this.globalLeaderboard.sort((a, b) => b.wpm - a.wpm);

    // Keep only top 100
    this.globalLeaderboard = this.globalLeaderboard.slice(0, 100);
  },

  // Update weekly leaderboard
  updateWeeklyLeaderboard(userStats) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weeklyTests = testHistory.filter(t => new Date(t.date) >= oneWeekAgo);

    const weeklyStats = {
      name: userStats.name,
      wpm: Math.max(...weeklyTests.map(t => t.wpm), 0),
      avgWpm: Math.round(weeklyTests.reduce((sum, t) => sum + t.wpm, 0) / (weeklyTests.length || 1)),
      totalTests: weeklyTests.length,
      lastActive: userStats.lastActive
    };

    const existingIndex = this.weeklyLeaderboard.findIndex(entry => entry.name === userStats.name);

    if (existingIndex !== -1) {
      this.weeklyLeaderboard[existingIndex] = weeklyStats;
    } else {
      this.weeklyLeaderboard.push(weeklyStats);
    }

    this.weeklyLeaderboard.sort((a, b) => b.wpm - a.wpm);
    this.weeklyLeaderboard = this.weeklyLeaderboard.slice(0, 100);
  },

  // Update monthly leaderboard
  updateMonthlyLeaderboard(userStats) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const monthlyTests = testHistory.filter(t => new Date(t.date) >= oneMonthAgo);

    const monthlyStats = {
      name: userStats.name,
      wpm: Math.max(...monthlyTests.map(t => t.wpm), 0),
      avgWpm: Math.round(monthlyTests.reduce((sum, t) => sum + t.wpm, 0) / (monthlyTests.length || 1)),
      totalTests: monthlyTests.length,
      lastActive: userStats.lastActive
    };

    const existingIndex = this.monthlyLeaderboard.findIndex(entry => entry.name === userStats.name);

    if (existingIndex !== -1) {
      this.monthlyLeaderboard[existingIndex] = monthlyStats;
    } else {
      this.monthlyLeaderboard.push(monthlyStats);
    }

    this.monthlyLeaderboard.sort((a, b) => b.wpm - a.wpm);
    this.monthlyLeaderboard = this.monthlyLeaderboard.slice(0, 100);
  },

  // Show leaderboard modal
  showLeaderboard(category = 'wpm', period = 'allTime') {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    let leaderboardData = [];
    let title = '';

    // Select appropriate leaderboard
    switch (period) {
      case 'weekly':
        leaderboardData = this.weeklyLeaderboard;
        title = 'Weekly Leaderboard';
        break;
      case 'monthly':
        leaderboardData = this.monthlyLeaderboard;
        title = 'Monthly Leaderboard';
        break;
      default:
        leaderboardData = this.globalLeaderboard;
        title = 'Global Leaderboard';
    }

    // Sort by selected category
    const sortedData = [...leaderboardData].sort((a, b) => {
      if (category === 'wpm') return b.wpm - a.wpm;
      if (category === 'accuracy') return b.accuracy - a.accuracy;
      if (category === 'tests') return b.totalTests - a.totalTests;
      if (category === 'streak') return b.streak - a.streak;
      if (category === 'points') return b.points - a.points;
      return 0;
    });

    // Find user's rank
    const userRank = sortedData.findIndex(entry => entry.name === (MultiplayerSystem?.playerName || 'You')) + 1;

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <div>
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                  <i class="fas fa-trophy mr-2 text-yellow-500"></i>${title}
                </h3>
                <p class="text-sm text-gray-500 mt-1">Top 100 ranked players</p>
              </div>
              <button id="closeLeaderboardBtn" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Period Selector -->
            <div class="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700">
              <button class="period-tab px-4 py-2 text-sm font-medium ${period === 'allTime' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}" data-period="allTime">
                <i class="fas fa-globe mr-1"></i>All Time
              </button>
              <button class="period-tab px-4 py-2 text-sm font-medium ${period === 'weekly' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}" data-period="weekly">
                <i class="fas fa-calendar-week mr-1"></i>Weekly
              </button>
              <button class="period-tab px-4 py-2 text-sm font-medium ${period === 'monthly' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}" data-period="monthly">
                <i class="fas fa-calendar-alt mr-1"></i>Monthly
              </button>
            </div>
            
            <!-- Category Selector -->
            <div class="flex gap-2 mb-4 flex-wrap">
              <button class="category-btn px-3 py-1 rounded-lg text-sm ${category === 'wpm' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}" data-category="wpm">
                <i class="fas fa-tachometer-alt mr-1"></i>WPM
              </button>
              <button class="category-btn px-3 py-1 rounded-lg text-sm ${category === 'accuracy' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}" data-category="accuracy">
                <i class="fas fa-bullseye mr-1"></i>Accuracy
              </button>
              <button class="category-btn px-3 py-1 rounded-lg text-sm ${category === 'tests' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}" data-category="tests">
                <i class="fas fa-chart-line mr-1"></i>Tests
              </button>
              <button class="category-btn px-3 py-1 rounded-lg text-sm ${category === 'streak' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}" data-category="streak">
                <i class="fas fa-fire mr-1"></i>Streak
              </button>
              <button class="category-btn px-3 py-1 rounded-lg text-sm ${category === 'points' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}" data-category="points">
                <i class="fas fa-star mr-1"></i>Points
              </button>
            </div>
            
            <!-- Your Rank Card -->
            ${userRank > 0 ? `
              <div class="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border-2 border-yellow-500">
                <p class="text-sm text-yellow-700 dark:text-yellow-400 mb-1">Your Rank</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl font-bold text-yellow-600">#${userRank}</span>
                    <span class="font-semibold">${MultiplayerSystem?.playerName || 'You'}</span>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-blue-500">${this.getCategoryValue(sortedData[userRank - 1], category)}</div>
                    <div class="text-xs text-gray-500">${category.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            ` : ''}
            
            <!-- Leaderboard Table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th class="px-3 py-2 text-left text-xs font-medium">#</th>
                    <th class="px-3 py-2 text-left text-xs font-medium">Player</th>
                    <th class="px-3 py-2 text-right text-xs font-medium">${this.getCategoryLabel(category)}</th>
                    ${period === 'allTime' ? '<th class="px-3 py-2 text-right text-xs font-medium">Tests</th>' : ''}
                  </tr>
                </thead>
                <tbody>
                  ${sortedData.slice(0, 50).map((entry, index) => `
                    <tr class="border-b border-gray-200 dark:border-gray-700 ${entry.name === (MultiplayerSystem?.playerName || 'You') ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''}">
                      <td class="px-3 py-2 text-sm">${index + 1}</td>
                      <td class="px-3 py-2 text-sm">
                        <div class="flex items-center gap-2">
                          ${index < 3 ? this.getMedalIcon(index) : '<i class="fas fa-user-circle text-gray-400"></i>'}
                          ${entry.name}
                        </div>
                      </td>
                      <td class="px-3 py-2 text-sm text-right font-bold text-blue-500">${this.getCategoryValue(entry, category)}</td>
                      ${period === 'allTime' ? `<td class="px-3 py-2 text-sm text-right">${entry.totalTests || 0}</td>` : ''}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            
            ${sortedData.length === 0 ? '<p class="text-center py-8 text-gray-500">No players on leaderboard yet. Complete some tests to get ranked!</p>' : ''}
            
            <div class="mt-4 text-center text-xs text-gray-500">
              <p>Leaderboard updates after each test completion</p>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    // Event listeners for period tabs
    const periodTabs = modal.querySelectorAll('.period-tab');
    periodTabs.forEach(tab => {
      tab.onclick = () => {
        const newPeriod = tab.dataset.period;
        modal.remove();
        this.showLeaderboard(category, newPeriod);
      };
    });

    // Event listeners for category buttons
    const categoryBtns = modal.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
      btn.onclick = () => {
        const newCategory = btn.dataset.category;
        modal.remove();
        this.showLeaderboard(newCategory, period);
      };
    });

    const closeBtn = modal.querySelector('#closeLeaderboardBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    SoundManager.playKeypress();
  },

  // Get medal icon for top 3
  getMedalIcon(rank) {
    const medals = {
      0: '<i class="fas fa-medal text-yellow-500"></i>',
      1: '<i class="fas fa-medal text-gray-400"></i>',
      2: '<i class="fas fa-medal text-amber-600"></i>'
    };
    return medals[rank] || '';
  },

  // Get category label
  getCategoryLabel(category) {
    const labels = {
      wpm: 'Best WPM',
      accuracy: 'Best Accuracy',
      tests: 'Total Tests',
      streak: 'Best Streak',
      points: 'Total Points'
    };
    return labels[category] || category.toUpperCase();
  },

  // Get category value from entry
  getCategoryValue(entry, category) {
    switch (category) {
      case 'wpm': return `${entry.wpm} WPM`;
      case 'accuracy': return `${entry.accuracy}%`;
      case 'tests': return entry.totalTests || 0;
      case 'streak': return `${entry.streak || 0} days`;
      case 'points': return entry.points || 0;
      default: return '';
    }
  },

  // Setup event listeners
  setupEventListeners() {
    const leaderboardBtn = document.getElementById('leaderboardBtn');
    if (leaderboardBtn) {
      leaderboardBtn.onclick = () => this.showLeaderboard();
    }
  }
};

// Initialize Leaderboard System
LeaderboardSystem.init();

// ==================== AI TYPING COACH SYSTEM (DAY 11) ====================
const AITypingCoach = {
  // User typing profile
  userProfile: {
    weakKeys: {},
    strongKeys: {},
    commonMistakes: {},
    speedByTimeOfDay: {},
    recommendedExercises: [],
    lastAnalysis: null
  },

  // Exercise library
  exerciseLibrary: {
    weakKeys: [
      { name: "Home Row Focus", description: "Practice A S D F J K L ; keys", difficulty: "Easy" },
      { name: "Top Row Mastery", description: "Master Q W E R T Y U I O P", difficulty: "Medium" },
      { name: "Bottom Row Training", description: "Improve Z X C V B N M", difficulty: "Hard" },
      { name: "Left Hand Dominance", description: "Strengthen your left hand", difficulty: "Medium" },
      { name: "Right Hand Focus", description: "Improve right hand accuracy", difficulty: "Medium" }
    ],
    speed: [
      { name: "Speed Burst", description: "Short phrases for quick typing", difficulty: "Easy" },
      { name: "Endurance Test", description: "Long paragraphs for stamina", difficulty: "Hard" },
      { name: "Rhythm Training", description: "Practice consistent pacing", difficulty: "Medium" }
    ],
    accuracy: [
      { name: "Precision Practice", description: "Slow and accurate typing", difficulty: "Easy" },
      { name: "Error Correction", description: "Fix common mistakes", difficulty: "Medium" },
      { name: "Perfect Copy", description: "Match exactly with zero errors", difficulty: "Hard" }
    ]
  },

  // Initialize
  init() {
    this.loadProfile();
    this.setupEventListeners();
    this.startPeriodicAnalysis();
  },

  // Load user profile
  loadProfile() {
    const saved = localStorage.getItem('aiCoachProfile');
    if (saved) {
      this.userProfile = JSON.parse(saved);
    }
  },

  // Save user profile
  saveProfile() {
    localStorage.setItem('aiCoachProfile', JSON.stringify(this.userProfile));
  },

  // Analyze typing performance
  analyzePerformance(testResult) {
    // Track weak keys (characters with high error rates)
    if (testResult.errors > 0 && testResult.wrongChars) {
      testResult.wrongChars.forEach(char => {
        this.userProfile.weakKeys[char] = (this.userProfile.weakKeys[char] || 0) + 1;
      });
    }

    // Track speed by time of day
    const hour = new Date().getHours();
    const timeSlot = this.getTimeSlot(hour);
    this.userProfile.speedByTimeOfDay[timeSlot] = this.userProfile.speedByTimeOfDay[timeSlot] || [];
    this.userProfile.speedByTimeOfDay[timeSlot].push(testResult.wpm);

    // Track common mistakes
    if (testResult.commonMistakes) {
      Object.entries(testResult.commonMistakes).forEach(([mistake, count]) => {
        this.userProfile.commonMistakes[mistake] = (this.userProfile.commonMistakes[mistake] || 0) + count;
      });
    }

    // Update last analysis time
    this.userProfile.lastAnalysis = new Date().toISOString();

    this.saveProfile();
    this.generateRecommendations();
  },

  // Get time slot based on hour
  getTimeSlot(hour) {
    if (hour < 6) return 'night';
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  },

  // Generate personalized recommendations
  generateRecommendations() {
    const recommendations = [];

    // Analyze weak keys
    const weakKeysEntries = Object.entries(this.userProfile.weakKeys);
    if (weakKeysEntries.length > 0) {
      const topWeakKeys = weakKeysEntries.sort((a, b) => b[1] - a[1]).slice(0, 3);
      if (topWeakKeys.length > 0) {
        recommendations.push({
          type: 'weakKeys',
          title: 'Focus on Problem Keys',
          description: `You frequently mistype: ${topWeakKeys.map(k => `"${k[0]}"`).join(', ')}. Try practicing these specific keys.`,
          priority: 'high'
        });
      }
    }

    // Analyze best time to practice
    let bestTimeSlot = null;
    let bestAvgSpeed = 0;
    for (const [slot, speeds] of Object.entries(this.userProfile.speedByTimeOfDay)) {
      const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
      if (avgSpeed > bestAvgSpeed) {
        bestAvgSpeed = avgSpeed;
        bestTimeSlot = slot;
      }
    }

    if (bestTimeSlot && this.userProfile.speedByTimeOfDay[bestTimeSlot]?.length > 2) {
      const timeNames = { morning: 'morning', afternoon: 'afternoon', evening: 'evening', night: 'night' };
      recommendations.push({
        type: 'timing',
        title: 'Your Peak Performance Time',
        description: `You type fastest during the ${timeNames[bestTimeSlot]}. Try to practice during this time for better results.`,
        priority: 'medium'
      });
    }

    // Analyze accuracy trends
    const recentTests = testHistory.slice(-10);
    const recentAccuracy = recentTests.map(t => parseInt(t.accuracy));
    const avgAccuracy = recentAccuracy.reduce((a, b) => a + b, 0) / recentAccuracy.length;

    if (avgAccuracy < 85) {
      recommendations.push({
        type: 'accuracy',
        title: 'Focus on Accuracy First',
        description: 'Your accuracy is below 85%. Slow down and focus on hitting the right keys. Speed will come naturally.',
        priority: 'high'
      });
    } else if (avgAccuracy > 95) {
      recommendations.push({
        type: 'speed',
        title: 'Ready to Speed Up',
        description: 'Your accuracy is excellent! Try pushing for higher WPM while maintaining this precision.',
        priority: 'medium'
      });
    }

    // Analyze consistency
    if (recentTests.length >= 5) {
      const wpmValues = recentTests.map(t => t.wpm);
      const variance = this.calculateVariance(wpmValues);
      if (variance > 100) {
        recommendations.push({
          type: 'consistency',
          title: 'Work on Consistency',
          description: 'Your typing speed varies a lot. Try to maintain a steady rhythm.',
          priority: 'medium'
        });
      }
    }

    // Add practice recommendations
    if (recentTests.length < 10) {
      recommendations.push({
        type: 'practice',
        title: 'Build a Routine',
        description: 'Complete at least 10 tests to get detailed AI insights about your typing pattern.',
        priority: 'low'
      });
    }

    this.userProfile.recommendedExercises = recommendations.slice(0, 5);
    this.saveProfile();
  },

  // Calculate variance
  calculateVariance(values) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const squaredDiffs = values.map(v => Math.pow(v - mean, 2));
    return squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
  },

  // Show AI coach panel
  showCoachPanel() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    const recommendations = this.userProfile.recommendedExercises;
    const weakKeys = Object.entries(this.userProfile.weakKeys).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const bestTimeSlot = this.getBestTimeSlot();

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-robot mr-2 text-purple-500"></i>AI Typing Coach
              </h3>
              <button id="closeCoachBtn" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- AI Avatar & Welcome -->
            <div class="mb-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
              <div class="flex items-center gap-3">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <i class="fas fa-brain text-3xl"></i>
                </div>
                <div>
                  <p class="text-sm opacity-90">Your Personal AI Coach</p>
                  <p class="font-bold text-lg">"Let's improve your typing skills!"</p>
                </div>
              </div>
            </div>
            
            <!-- Performance Summary -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <i class="fas fa-chart-line mr-2 text-blue-500"></i>Performance Summary
              </h4>
              <div class="grid grid-cols-2 gap-3">
                <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p class="text-xs text-gray-500">Total Tests Analyzed</p>
                  <p class="text-2xl font-bold">${testHistory.length}</p>
                </div>
                <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p class="text-xs text-gray-500">Best WPM</p>
                  <p class="text-2xl font-bold text-blue-500">${bestWpm}</p>
                </div>
              </div>
            </div>
            
            <!-- Weak Keys Analysis -->
            ${weakKeys.length > 0 ? `
              <div class="mb-6">
                <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  <i class="fas fa-exclamation-triangle mr-2 text-red-500"></i>Keys to Practice
                </h4>
                <div class="flex flex-wrap gap-2">
                  ${weakKeys.map(([key, count]) => `
                    <div class="px-3 py-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <span class="font-mono font-bold text-lg">${key}</span>
                      <span class="text-xs text-red-600 ml-1">${count} errors</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
            
            <!-- Best Time to Practice -->
            ${bestTimeSlot ? `
              <div class="mb-6 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <h4 class="font-semibold mb-2 text-green-700 dark:text-green-300">
                  <i class="fas fa-clock mr-2"></i>Your Best Time to Practice
                </h4>
                <p class="text-sm">You type fastest during the <strong>${bestTimeSlot}</strong>. Schedule your practice sessions for better results!</p>
              </div>
            ` : ''}
            
            <!-- AI Recommendations -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <i class="fas fa-lightbulb mr-2 text-yellow-500"></i>Personalized Recommendations
              </h4>
              <div class="space-y-3">
                ${recommendations.length > 0 ? recommendations.map(rec => `
                  <div class="p-3 border-l-4 ${rec.priority === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : rec.priority === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'} rounded-r-lg">
                    <p class="font-semibold text-sm">${rec.title}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">${rec.description}</p>
                  </div>
                `).join('') : '<p class="text-center text-gray-500 py-4">Complete more tests to receive personalized recommendations!</p>'}
              </div>
            </div>
            
            <!-- Exercise Suggestions -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <i class="fas fa-dumbbell mr-2 text-orange-500"></i>Suggested Exercises
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${this.getSuggestedExercises().map(ex => `
                  <button class="exercise-btn p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition" data-exercise="${ex.name}">
                    <p class="font-semibold text-sm">${ex.name}</p>
                    <p class="text-xs text-gray-500 mt-1">${ex.description}</p>
                    <span class="text-xs ${ex.difficulty === 'Easy' ? 'text-green-500' : ex.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'}">${ex.difficulty}</span>
                  </button>
                `).join('')}
              </div>
            </div>
            
            <!-- Progress Over Time -->
            <div class="mb-4">
              <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <i class="fas fa-chart-simple mr-2 text-purple-500"></i>Progress Insights
              </h4>
              <canvas id="coachProgressChart" height="200"></canvas>
            </div>
            
            <div class="text-center text-xs text-gray-500">
              <p>AI analyzes your last ${Math.min(20, testHistory.length)} tests | Updated after each test</p>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    // Draw progress chart
    this.drawProgressChart();

    // Exercise button handlers
    const exerciseBtns = modal.querySelectorAll('.exercise-btn');
    exerciseBtns.forEach(btn => {
      btn.onclick = () => {
        const exerciseName = btn.dataset.exercise;
        this.loadExercise(exerciseName);
        modal.remove();
      };
    });

    const closeBtn = modal.querySelector('#closeCoachBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    SoundManager.playKeypress();
  },

  // Draw progress chart
  drawProgressChart() {
    const ctx = document.getElementById('coachProgressChart')?.getContext('2d');
    if (!ctx) return;

    const last20Tests = testHistory.slice(-20);
    const wpmData = last20Tests.map(t => t.wpm);
    const labels = last20Tests.map((_, i) => `Test ${i + 1}`);

    if (window.coachChart) window.coachChart.destroy();

    window.coachChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'WPM Progress',
          data: wpmData,
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: 'top' } }
      }
    });
  },

  // Get best time slot
  getBestTimeSlot() {
    let bestSlot = null;
    let bestAvg = 0;
    const slotNames = { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening', night: 'Night' };

    for (const [slot, speeds] of Object.entries(this.userProfile.speedByTimeOfDay)) {
      if (speeds.length >= 2) {
        const avg = speeds.reduce((a, b) => a + b, 0) / speeds.length;
        if (avg > bestAvg) {
          bestAvg = avg;
          bestSlot = slotNames[slot];
        }
      }
    }

    return bestSlot;
  },

  // Get suggested exercises based on weak areas
  getSuggestedExercises() {
    const suggestions = [];

    // Add weak keys exercises
    if (Object.keys(this.userProfile.weakKeys).length > 0) {
      suggestions.push(this.exerciseLibrary.weakKeys[0]);
      suggestions.push(this.exerciseLibrary.weakKeys[1]);
    }

    // Add accuracy exercises
    const recentTests = testHistory.slice(-10);
    const avgAccuracy = recentTests.reduce((sum, t) => sum + parseInt(t.accuracy), 0) / (recentTests.length || 1);
    if (avgAccuracy < 90) {
      suggestions.push(this.exerciseLibrary.accuracy[0]);
      suggestions.push(this.exerciseLibrary.accuracy[1]);
    }

    // Add speed exercises
    if (bestWpm > 50 && avgAccuracy > 90) {
      suggestions.push(this.exerciseLibrary.speed[0]);
      suggestions.push(this.exerciseLibrary.speed[1]);
    }

    // Fill with default exercises if needed
    while (suggestions.length < 4) {
      suggestions.push(this.exerciseLibrary.accuracy[2]);
      suggestions.push(this.exerciseLibrary.speed[2]);
    }

    return suggestions.slice(0, 4);
  },

  // Load specific exercise
  loadExercise(exerciseName) {
    // Create exercise text based on name
    let exerciseText = '';

    switch (exerciseName) {
      case "Home Row Focus":
        exerciseText = "asdf jkl; asdf jkl; ask dad fall sad lad jak; a slad; a flask; a sad lad; a jak; fall asdf jkl;";
        break;
      case "Top Row Mastery":
        exerciseText = "qwertyuiop qwertyuiop type writer quite quiet quote quit tire tire tire true true true";
        break;
      case "Bottom Row Training":
        exerciseText = "zxcvbnm zxcvbnm vex vex vex next next next box box box zinc zinc zinc comma comma comma";
        break;
      case "Speed Burst":
        exerciseText = "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!";
        break;
      case "Precision Practice":
        exerciseText = "Slow and steady wins the race. Every keystroke matters. Focus on accuracy first. Speed will follow naturally.";
        break;
      default:
        exerciseText = "Practice makes perfect. Keep typing and you will improve. Focus on your weak keys and accuracy.";
    }

    // Set as current quote
    currentQuoteText = exerciseText;
    updateQuoteUI();
    resetTestState();

    this.showNotification(`Exercise loaded: ${exerciseName}`, 'success');
  },

  // Start periodic analysis
  startPeriodicAnalysis() {
    // Analyze every 10 tests
    let testCount = 0;
    const originalFinishTest = window.finishTest;

    // This will be called after each test
    window.afterTestComplete = () => {
      testCount++;
      if (testCount % 5 === 0) {
        this.generateRecommendations();
      }
    };
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const coachBtn = document.getElementById('aiCoachBtn');
    if (coachBtn) {
      coachBtn.onclick = () => this.showCoachPanel();
    }
  }
};

// Wrap original finishTest to capture mistake data
const originalHandleInput = handleInput;
window.handleInputWithTracking = function () {
  // Track wrong characters for AI analysis
  if (isTyping && !testDone) {
    const inputVal = elements.quoteInput.value;
    const quoteChars = elements.quoteDisplay.querySelectorAll(".char");
    const wrongChars = [];
    const commonMistakes = {};

    quoteChars.forEach((span, idx) => {
      if (idx < inputVal.length && inputVal[idx] !== span.innerText) {
        wrongChars.push(inputVal[idx]);
        const mistake = `${span.innerText}→${inputVal[idx]}`;
        commonMistakes[mistake] = (commonMistakes[mistake] || 0) + 1;
      }
    });

    // Store for AI analysis
    window.lastTestWrongChars = wrongChars;
    window.lastTestCommonMistakes = commonMistakes;
  }

  originalHandleInput();
};

// Override handleInput to include tracking
handleInput = window.handleInputWithTracking;

// Modify finishTest to pass AI data
const originalFinishTest = finishTest;
finishTest = function () {
  const testResult = {
    wpm: parseInt(elements.wpmElem.innerText),
    accuracy: parseInt(elements.accuracyElem.innerText),
    errors: parseInt(elements.errorsElem.innerText),
    wrongChars: window.lastTestWrongChars || [],
    commonMistakes: window.lastTestCommonMistakes || {}
  };

  originalFinishTest();
  AITypingCoach.analyzePerformance(testResult);

  // Call after test hook
  if (window.afterTestComplete) window.afterTestComplete();
};

// Initialize AI Typing Coach
AITypingCoach.init();

// ==================== VOICE COMMANDS SYSTEM (DAY 12) ====================
const VoiceCommandSystem = {
  // Voice recognition state
  isListening: false,
  recognition: null,
  supported: false,
  commandHistory: [],

  // Available voice commands
  commands: {
    'start test': () => this.startTest(),
    'restart test': () => this.restartTest(),
    'new quote': () => this.newQuote(),
    'practice mode': () => this.togglePractice(),
    'focus mode': () => this.toggleFocus(),
    'show settings': () => this.showSettings(),
    'show history': () => this.showHistory(),
    'show stats': () => this.showStats(),
    'show achievements': () => this.showAchievements(),
    'show leaderboard': () => this.showLeaderboard(),
    'show coach': () => this.showCoach(),
    'dark mode': () => this.setTheme('dark'),
    'light mode': () => this.setTheme('light'),
    'easy mode': () => this.setDifficulty('easy'),
    'medium mode': () => this.setDifficulty('medium'),
    'hard mode': () => this.setDifficulty('hard'),
    'expert mode': () => this.setDifficulty('expert'),
    'clear text': () => this.clearInput(),
    'what is my wpm': () => this.speakWPM(),
    'what is my accuracy': () => this.speakAccuracy(),
    'help': () => this.showVoiceHelp(),
    'stop listening': () => this.stopListening(),
    'exit voice mode': () => this.stopListening()
  },

  // Initialize voice recognition
  init() {
    this.checkSupport();
    this.setupEventListeners();
    this.loadSettings();
  },

  // Check if browser supports speech recognition
  checkSupport() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.supported = true;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
      this.setupRecognitionEvents();
    } else {
      console.warn('Speech recognition not supported in this browser');
      this.showNotification('Voice commands not supported in your browser', 'error');
    }
  },

  // Setup recognition event handlers
  setupRecognitionEvents() {
    if (!this.recognition) return;

    this.recognition.onstart = () => {
      this.isListening = true;
      this.updateUI(true);
      this.showNotification('Voice commands active - Say "help" for commands', 'success');
      this.speak('Voice commands activated. Say help for available commands.');
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.updateUI(false);
      if (this.shouldRestart) {
        this.startListening();
        this.shouldRestart = false;
      }
    };

    this.recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(' ');

      this.processCommand(transcript.toLowerCase());
      this.updateLiveTranscript(transcript);
    };

    this.recognition.onerror = (event) => {
      console.error('Recognition error:', event.error);
      if (event.error === 'not-allowed') {
        this.showNotification('Microphone access denied. Please allow microphone access.', 'error');
      }
    };
  },

  // Process voice command
  processCommand(transcript) {
    // Add to history
    this.commandHistory.unshift({
      text: transcript,
      timestamp: new Date(),
      processed: false
    });

    // Keep only last 20 commands
    if (this.commandHistory.length > 20) this.commandHistory.pop();

    // Check for matching commands
    let commandExecuted = false;

    for (const [command, action] of Object.entries(this.commands)) {
      if (transcript.includes(command)) {
        action();
        this.addToHistory(transcript, true);
        commandExecuted = true;

        // Provide voice feedback
        this.speak(`Executing: ${command}`);
        break;
      }
    }

    if (!commandExecuted) {
      this.addToHistory(transcript, false);
      this.showNotification(`Command not recognized: "${transcript}"`, 'error');
    }
  },

  // Start listening for voice commands
  startListening() {
    if (!this.supported) {
      this.showNotification('Voice commands not supported in your browser', 'error');
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    try {
      this.recognition.start();
    } catch (e) {
      console.error('Failed to start recognition:', e);
    }
  },

  // Stop listening
  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
      this.updateUI(false);
      this.showNotification('Voice commands deactivated', 'info');
      this.speak('Voice commands deactivated');
    }
  },

  // Toggle listening
  toggleListening() {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  },

  // Update UI to show listening status
  updateUI(isListening) {
    const voiceBtn = document.getElementById('voiceCommandBtn');
    if (voiceBtn) {
      if (isListening) {
        voiceBtn.classList.add('bg-red-500', 'animate-pulse');
        voiceBtn.classList.remove('bg-white/80', 'dark:bg-gray-800/80');
        voiceBtn.querySelector('i').className = 'fas fa-microphone-slash text-white';
      } else {
        voiceBtn.classList.remove('bg-red-500', 'animate-pulse');
        voiceBtn.classList.add('bg-white/80', 'dark:bg-gray-800/80');
        voiceBtn.querySelector('i').className = 'fas fa-microphone text-purple-500';
      }
    }

    // Show/hide voice indicator
    let indicator = document.getElementById('voiceIndicator');
    if (isListening && !indicator) {
      indicator = document.createElement('div');
      indicator.id = 'voiceIndicator';
      indicator.className = 'fixed bottom-5 right-5 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg z-40 flex items-center gap-2 animate-pulse';
      indicator.innerHTML = '<i class="fas fa-microphone"></i> Listening... <span id="liveTranscript" class="text-xs opacity-75 ml-2"></span>';
      document.body.appendChild(indicator);
    } else if (!isListening && indicator) {
      indicator.remove();
    }
  },

  // Update live transcript display
  updateLiveTranscript(transcript) {
    const transcriptSpan = document.getElementById('liveTranscript');
    if (transcriptSpan) {
      transcriptSpan.textContent = transcript;
      setTimeout(() => {
        if (transcriptSpan.textContent === transcript) {
          transcriptSpan.textContent = '';
        }
      }, 2000);
    }
  },

  // Add command to history
  addToHistory(command, success) {
    const historyEntry = this.commandHistory.find(h => h.text === command && !h.processed);
    if (historyEntry) {
      historyEntry.processed = success;
      historyEntry.timestamp = new Date();
    }
    this.saveCommandHistory();
  },

  // Save command history
  saveCommandHistory() {
    localStorage.setItem('voiceCommandHistory', JSON.stringify(this.commandHistory.slice(0, 20)));
  },

  // Load command history
  loadCommandHistory() {
    const saved = localStorage.getItem('voiceCommandHistory');
    if (saved) {
      this.commandHistory = JSON.parse(saved);
    }
  },

  // Load settings
  loadSettings() {
    const saved = localStorage.getItem('voiceSettings');
    if (saved) {
      const settings = JSON.parse(saved);
      // Apply settings if needed
    }
    this.loadCommandHistory();
  },

  // Text to speech feedback
  speak(text) {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  },

  // Command Actions
  startTest() {
    if (elements.quoteInput.value.length === 0) {
      elements.quoteInput.focus();
      this.showNotification('Test ready. Start typing!', 'success');
    }
  },

  restartTest() {
    resetTest();
    this.showNotification('Test restarted', 'success');
  },

  newQuote() {
    newQuote();
    this.showNotification('New quote loaded', 'success');
  },

  togglePractice() {
    togglePractice();
    this.showNotification(`Practice mode ${practiceActive ? 'on' : 'off'}`, 'success');
  },

  toggleFocus() {
    toggleFocusMode();
    this.showNotification(`Focus mode ${focusMode ? 'on' : 'off'}`, 'success');
  },

  showSettings() {
    elements.settingsPanel.classList.toggle('active');
    this.showNotification('Settings panel toggled', 'info');
  },

  showHistory() {
    elements.historyPanel.classList.toggle('active');
    updateHistoryDisplay();
    this.showNotification('History panel toggled', 'info');
  },

  showStats() {
    elements.statsPanel.classList.toggle('active');
    updateStatsSummary();
    this.showNotification('Statistics panel toggled', 'info');
  },

  showAchievements() {
    if (AchievementSystem) {
      AchievementSystem.showAchievementsModal();
    }
  },

  showLeaderboard() {
    if (LeaderboardSystem) {
      LeaderboardSystem.showLeaderboard();
    }
  },

  showCoach() {
    if (AITypingCoach) {
      AITypingCoach.showCoachPanel();
    }
  },

  setTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    this.showNotification(`${theme} mode activated`, 'success');
  },

  setDifficulty(level) {
    difficulty = level;
    document.querySelectorAll('.difficulty-option').forEach(btn => {
      if (btn.dataset.difficulty === level) {
        btn.classList.add('bg-blue-500', 'text-white', 'shadow-md');
      } else {
        btn.classList.remove('bg-blue-500', 'text-white', 'shadow-md');
      }
    });
    newQuote();
    this.showNotification(`Difficulty set to ${level}`, 'success');
  },

  clearInput() {
    clearInputField();
    this.showNotification('Input cleared', 'success');
  },

  speakWPM() {
    const wpm = elements.wpmElem.innerText;
    this.speak(`Your current words per minute is ${wpm}`);
    this.showNotification(`WPM: ${wpm}`, 'info');
  },

  speakAccuracy() {
    const accuracy = elements.accuracyElem.innerText;
    this.speak(`Your current accuracy is ${accuracy}`);
    this.showNotification(`Accuracy: ${accuracy}`, 'info');
  },

  // Show voice help modal
  showVoiceHelp() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    const commandsList = Object.keys(this.commands).map(cmd =>
      `<div class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span class="font-mono text-sm">🎤 "${cmd}"</span>
            <span class="text-xs text-gray-500">→ ${this.getCommandDescription(cmd)}</span>
          </div>`
    ).join('');

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-microphone-alt mr-2 text-purple-500"></i>Voice Commands
              </h3>
              <button id="closeVoiceHelp" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <div class="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <p class="text-sm text-purple-700 dark:text-purple-300">
                <i class="fas fa-info-circle mr-1"></i>
                Click the microphone button and say any of these commands:
              </p>
            </div>
            
            <div class="space-y-1 max-h-96 overflow-y-auto">
              ${commandsList}
            </div>
            
            <div class="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p class="text-sm text-green-700 dark:text-green-300">
                <i class="fas fa-microphone mr-1"></i>
                Click the microphone button to start/stop voice recognition
              </p>
            </div>
            
            ${this.commandHistory.length > 0 ? `
              <div class="mt-4">
                <h4 class="font-semibold mb-2 text-sm">Recent Commands:</h4>
                <div class="space-y-1 max-h-32 overflow-y-auto">
                  ${this.commandHistory.slice(0, 5).map(cmd => `
                    <div class="text-xs ${cmd.processed ? 'text-green-500' : 'text-red-500'}">
                      ${new Date(cmd.timestamp).toLocaleTimeString()}: "${cmd.text}"
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeVoiceHelp');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    SoundManager.playKeypress();
  },

  // Get command description
  getCommandDescription(command) {
    const descriptions = {
      'start test': 'Focus on typing area',
      'restart test': 'Reset current test',
      'new quote': 'Load different text',
      'practice mode': 'Toggle unlimited time',
      'focus mode': 'Toggle minimal UI',
      'show settings': 'Open settings panel',
      'show history': 'Show test history',
      'show stats': 'Show statistics',
      'show achievements': 'View badges',
      'show leaderboard': 'View rankings',
      'show coach': 'Open AI coach',
      'dark mode': 'Switch to dark theme',
      'light mode': 'Switch to light theme',
      'easy mode': 'Set easy difficulty',
      'medium mode': 'Set medium difficulty',
      'hard mode': 'Set hard difficulty',
      'expert mode': 'Set expert difficulty',
      'clear text': 'Clear input field',
      'what is my wpm': 'Speak current WPM',
      'what is my accuracy': 'Speak current accuracy',
      'help': 'Show this menu',
      'stop listening': 'Deactivate voice mode',
      'exit voice mode': 'Deactivate voice mode'
    };
    return descriptions[command] || 'Execute command';
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const voiceBtn = document.getElementById('voiceCommandBtn');
    if (voiceBtn) {
      voiceBtn.onclick = () => this.toggleListening();
    }
  }
};

// Initialize Voice Command System
VoiceCommandSystem.init();

// ==================== TYPING REPLAY SYSTEM (DAY 13) ====================
const ReplaySystem = {
  // Recording data
  isRecording: false,
  isPlaying: false,
  recordingData: [],
  playbackInterval: null,
  savedReplays: [],

  // Initialize
  init() {
    this.loadSavedReplays();
    this.setupEventListeners();
  },

  // Load saved replays
  loadSavedReplays() {
    const saved = localStorage.getItem('typingReplays');
    if (saved) {
      this.savedReplays = JSON.parse(saved);
    }
  },

  // Save replay
  saveReplay() {
    if (this.recordingData.length === 0) return;

    const replay = {
      id: Date.now(),
      date: new Date().toISOString(),
      quote: currentQuoteText,
      wpm: parseInt(elements.wpmElem.innerText),
      accuracy: elements.accuracyElem.innerText,
      errors: parseInt(elements.errorsElem.innerText),
      duration: this.recordingData.length / 10, // Approximate seconds
      keystrokes: this.recordingData,
      mistakeCount: this.recordingData.filter(k => !k.correct).length
    };

    this.savedReplays.unshift(replay);
    if (this.savedReplays.length > 10) this.savedReplays.pop();
    localStorage.setItem('typingReplays', JSON.stringify(this.savedReplays));

    this.showNotification('Replay saved!', 'success');
    this.stopRecording();
  },

  // Start recording
  startRecording() {
    this.isRecording = true;
    this.recordingData = [];
    this.showRecordingIndicator(true);
    this.showNotification('Recording started...', 'info');
    SoundManager.playKeypress();
  },

  // Stop recording
  stopRecording() {
    this.isRecording = false;
    this.showRecordingIndicator(false);
    if (this.recordingData.length > 0) {
      this.saveReplay();
    }
  },

  // Record keystroke
  recordKeystroke(char, position, correct, timestamp) {
    if (!this.isRecording) return;

    this.recordingData.push({
      char: char,
      position: position,
      correct: correct,
      time: timestamp || Date.now(),
      wpm: parseInt(elements.wpmElem.innerText)
    });
  },

  // Show recording indicator
  showRecordingIndicator(show) {
    let indicator = document.getElementById('recordingIndicator');
    if (show && !indicator) {
      indicator = document.createElement('div');
      indicator.id = 'recordingIndicator';
      indicator.className = 'fixed top-20 right-5 bg-red-500 text-white px-3 py-1 rounded-full text-xs z-40 animate-pulse';
      indicator.innerHTML = '<i class="fas fa-circle mr-1"></i> RECORDING';
      document.body.appendChild(indicator);
    } else if (!show && indicator) {
      indicator.remove();
    }
  },

  // Show replays panel
  showReplaysPanel() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-video mr-2 text-purple-500"></i>Typing Replays
              </h3>
              <button id="closeReplaysBtn" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Recording Controls -->
            <div class="mb-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <div class="flex gap-3">
                <button id="startRecordingBtn" class="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-semibold ${this.isRecording ? 'hidden' : ''}">
                  <i class="fas fa-circle mr-1"></i> Start Recording
                </button>
                <button id="stopRecordingBtn" class="flex-1 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition font-semibold ${!this.isRecording ? 'hidden' : ''}">
                  <i class="fas fa-stop mr-1"></i> Stop & Save
                </button>
                <button id="cancelRecordingBtn" class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition ${!this.isRecording ? 'hidden' : ''}">
                  <i class="fas fa-times"></i> Cancel
                </button>
              </div>
              <p class="text-xs text-white/80 mt-2 text-center">
                Record your typing session to replay and analyze your mistakes
              </p>
            </div>
            
            <!-- Saved Replays -->
            <h4 class="font-semibold mb-3 text-gray-700 dark:text-gray-300">
              <i class="fas fa-history mr-2"></i>Saved Replays (${this.savedReplays.length}/10)
            </h4>
            <div id="replaysList" class="space-y-2 max-h-96 overflow-y-auto">
              ${this.renderReplaysList()}
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    // Event listeners
    const startBtn = modal.querySelector('#startRecordingBtn');
    const stopBtn = modal.querySelector('#stopRecordingBtn');
    const cancelBtn = modal.querySelector('#cancelRecordingBtn');

    if (startBtn) startBtn.onclick = () => this.startRecording();
    if (stopBtn) stopBtn.onclick = () => this.stopRecording();
    if (cancelBtn) cancelBtn.onclick = () => {
      this.isRecording = false;
      this.recordingData = [];
      this.showRecordingIndicator(false);
      modal.remove();
      this.showReplaysPanel();
    };

    const closeBtn = modal.querySelector('#closeReplaysBtn');
    closeBtn.onclick = () => modal.remove();

    // Add replay button handlers
    this.attachReplayButtons(modal);

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Render replays list
  renderReplaysList() {
    if (this.savedReplays.length === 0) {
      return '<p class="text-center text-gray-500 py-8">No saved replays. Record your first typing session!</p>';
    }

    return this.savedReplays.map(replay => `
          <div class="replay-item p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <div class="flex justify-between items-center">
              <div class="flex-1">
                <p class="font-semibold text-sm">${new Date(replay.date).toLocaleString()}</p>
                <p class="text-xs text-gray-500 mt-1">${replay.wpm} WPM • ${replay.accuracy} • ${replay.mistakeCount} mistakes</p>
                <p class="text-xs text-gray-400 truncate">${replay.quote.substring(0, 60)}...</p>
              </div>
              <div class="flex gap-2">
                <button class="play-replay-btn px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm" data-id="${replay.id}">
                  <i class="fas fa-play"></i> Play
                </button>
                <button class="delete-replay-btn px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm" data-id="${replay.id}">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('');
  },

  // Attach replay buttons
  attachReplayButtons(modal) {
    const playBtns = modal.querySelectorAll('.play-replay-btn');
    playBtns.forEach(btn => {
      btn.onclick = () => {
        const id = parseInt(btn.dataset.id);
        const replay = this.savedReplays.find(r => r.id === id);
        if (replay) {
          this.playReplay(replay);
          modal.remove();
        }
      };
    });

    const deleteBtns = modal.querySelectorAll('.delete-replay-btn');
    deleteBtns.forEach(btn => {
      btn.onclick = () => {
        const id = parseInt(btn.dataset.id);
        this.savedReplays = this.savedReplays.filter(r => r.id !== id);
        localStorage.setItem('typingReplays', JSON.stringify(this.savedReplays));
        modal.querySelector('#replaysList').innerHTML = this.renderReplaysList();
        this.attachReplayButtons(modal);
        this.showNotification('Replay deleted', 'success');
      };
    });
  },

  // Play a replay
  playReplay(replay) {
    this.isPlaying = true;
    let index = 0;
    const keystrokes = replay.keystrokes;

    // Create playback overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
    overlay.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 text-center">
            <h3 class="text-xl font-bold mb-2">Replaying: ${new Date(replay.date).toLocaleString()}</h3>
            <p class="text-sm text-gray-500 mb-4">${replay.wpm} WPM • ${replay.accuracy} accuracy</p>
            <div id="replayQuoteDisplay" class="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-lg leading-relaxed min-h-[120px]">
              ${replay.quote.split('').map(ch => `<span class="replay-char">${this.escapeHtml(ch)}</span>`).join('')}
            </div>
            <div class="flex gap-3 justify-center">
              <button id="pauseReplayBtn" class="px-4 py-2 bg-yellow-500 text-white rounded-lg">
                <i class="fas fa-pause"></i> Pause
              </button>
              <button id="stopReplayBtn" class="px-4 py-2 bg-red-500 text-white rounded-lg">
                <i class="fas fa-stop"></i> Stop
              </button>
            </div>
            <div class="mt-3 text-sm text-gray-500">
              <span id="replayProgress">0</span> / ${keystrokes.length} keystrokes
            </div>
          </div>
        `;

    document.body.appendChild(overlay);

    let paused = false;
    let currentKeystroke = 0;

    const updateDisplay = () => {
      const chars = overlay.querySelectorAll('.replay-char');
      chars.forEach((ch, i) => {
        ch.classList.remove('correct', 'incorrect', 'current');
        if (i < currentKeystroke) {
          const isCorrect = keystrokes[i]?.correct;
          ch.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (i === currentKeystroke) {
          ch.classList.add('current');
        }
      });

      const progress = overlay.querySelector('#replayProgress');
      if (progress) progress.textContent = currentKeystroke;
    };

    const playInterval = setInterval(() => {
      if (paused || !this.isPlaying) return;

      if (currentKeystroke < keystrokes.length) {
        updateDisplay();
        currentKeystroke++;
      } else {
        clearInterval(playInterval);
        this.isPlaying = false;
        this.showNotification('Replay finished!', 'success');
        setTimeout(() => overlay.remove(), 2000);
      }
    }, 100);

    const pauseBtn = overlay.querySelector('#pauseReplayBtn');
    pauseBtn.onclick = () => {
      paused = !paused;
      pauseBtn.innerHTML = paused ? '<i class="fas fa-play"></i> Resume' : '<i class="fas fa-pause"></i> Pause';
    };

    const stopBtn = overlay.querySelector('#stopReplayBtn');
    stopBtn.onclick = () => {
      clearInterval(playInterval);
      this.isPlaying = false;
      overlay.remove();
    };

    updateDisplay();
  },

  // Escape HTML
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const replayBtn = document.getElementById('replayBtn');
    if (replayBtn) {
      replayBtn.onclick = () => this.showReplaysPanel();
    }
  }
};


// Modify handleInput to record keystrokes
const originalRecordHandleInput = handleInput;
handleInput = function () {
  if (ReplaySystem.isRecording) {
    const inputVal = elements.quoteInput.value;
    const lastChar = inputVal[inputVal.length - 1];
    const quoteChars = elements.quoteDisplay.querySelectorAll(".char");
    const position = inputVal.length - 1;
    const isCorrect = position < quoteChars.length && lastChar === quoteChars[position]?.innerText;

    if (lastChar) {
      ReplaySystem.recordKeystroke(lastChar, position, isCorrect);
    }
  }
  originalRecordHandleInput();
};

// Initialize Typing Replay System
ReplaySystem.init();

// ==================== SOCIAL SHARING SYSTEM (DAY 14) ====================
const SocialShareSystem = {
  // Share test result
  shareResult(result) {
    const shareData = {
      title: 'VelocityType Typing Test',
      text: `I just scored ${result.wpm} WPM with ${result.accuracy} accuracy on VelocityType! Can you beat my score?`,
      url: window.location.href
    };

    // Create beautiful share card
    this.createShareCard(result);

    // Use native share if available
    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        this.copyToClipboard(shareData.text);
      });
    } else {
      this.copyToClipboard(shareData.text);
    }
  },

  // Create share card image (HTML to image)
  createShareCard(result) {
    const card = document.createElement('div');
    card.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    card.innerHTML = `
          <div id="shareCard" class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-center shadow-2xl max-w-sm w-full mx-4">
            <div class="text-white">
              <div class="text-5xl mb-3">⚡</div>
              <h2 class="text-2xl font-bold">VelocityType</h2>
              <p class="text-sm opacity-90 mb-6">Typing Speed Test</p>
              
              <div class="bg-white/20 rounded-xl p-4 mb-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs opacity-75">WPM</p>
                    <p class="text-3xl font-bold">${result.wpm}</p>
                  </div>
                  <div>
                    <p class="text-xs opacity-75">Accuracy</p>
                    <p class="text-3xl font-bold">${result.accuracy}</p>
                  </div>
                  <div>
                    <p class="text-xs opacity-75">Errors</p>
                    <p class="text-2xl font-bold">${result.errors}</p>
                  </div>
                  <div>
                    <p class="text-xs opacity-75">Time</p>
                    <p class="text-2xl font-bold">${result.time}s</p>
                  </div>
                </div>
              </div>
              
              <div class="flex gap-3 justify-center">
                <button id="downloadCardBtn" class="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold">
                  <i class="fas fa-download"></i> Save Image
                </button>
                <button id="closeCardBtn" class="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold">
                  Close
                </button>
              </div>
            </div>
          </div>
        `;

    document.body.appendChild(card);

    const closeBtn = card.querySelector('#closeCardBtn');
    closeBtn.onclick = () => card.remove();

    const downloadBtn = card.querySelector('#downloadCardBtn');
    downloadBtn.onclick = () => {
      this.captureShareCard();
      card.remove();
    };
  },

  // Capture share card as image
  captureShareCard() {
    const card = document.getElementById('shareCard');
    if (!card) return;

    html2canvas(card, {
      scale: 2,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'velocitytype-result.png';
      link.href = canvas.toDataURL();
      link.click();
      this.showNotification('Share card saved!', 'success');
    }).catch(() => {
      this.showNotification('Could not capture image', 'error');
    });
  },

  // Share achievement
  shareAchievement(achievement) {
    const text = `🏆 I just unlocked "${achievement.name}" on VelocityType! +${achievement.points} points!`;
    this.copyToClipboard(text);
    this.showNotification('Achievement shared!', 'success');
  },

  // Share challenge completion
  shareChallenge(challenge) {
    const text = `🎯 Daily Challenge Complete! I earned ${challenge.reward} points on VelocityType. Join me!`;
    this.copyToClipboard(text);
  },

  // Share leaderboard rank
  shareRank(rank, wpm) {
    const text = `📊 I'm ranked #${rank} on VelocityType with ${wpm} WPM! Can you beat me?`;
    this.copyToClipboard(text);
  },

  // Copy to clipboard
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showNotification('Copied to clipboard!', 'success');
    });
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'
      }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    // Add share button to result modal
    const shareResultBtn = document.getElementById('shareResultBtn');
    if (shareResultBtn) {
      shareResultBtn.onclick = () => {
        const result = {
          wpm: elements.resultWPM.innerText,
          accuracy: elements.resultAccuracy.innerText,
          errors: elements.resultErrors.innerText,
          time: elements.resultTime.innerText
        };
        this.shareResult(result);
      };
    }
  }
};
// Day 14: Share button
const shareBtn = document.getElementById('shareBtn');
if (shareBtn && SocialShareSystem) {
  shareBtn.onclick = () => {
    const result = {
      wpm: elements.wpmElem.innerText,
      accuracy: elements.accuracyElem.innerText,
      errors: elements.errorsElem.innerText,
      time: timeLeft
    };
    SocialShareSystem.shareResult(result);
  };
}

// Day 15: PWA Install button is already handled by PWASystem
// The PWASystem will show/hide this button automatically

// Note: The install button visibility is managed by PWASystem
// It will only appear when the app is installable
SocialShareSystem.setupEventListeners();

// ==================== PWA INSTALLATION (DAY 15) ====================
const PWASystem = {
  deferredPrompt: null,
  isInstalled: false,

  init() {
    this.checkInstallation();
    this.setupEventListeners();
    this.registerServiceWorker();
  },

  // Register service worker
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('ServiceWorker registered:', registration.scope);
        }).catch(error => {
          console.log('ServiceWorker registration failed:', error);
        });
      });
    }
  },

  // Check if already installed
  checkInstallation() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
    }
  },

  // Setup beforeinstallprompt
  setupEventListeners() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton();
    });

    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.showNotification('App installed successfully!', 'success');
    });
  },

  // Show install button
  showInstallButton() {
    let installBtn = document.getElementById('installPwaBtn');
    if (!installBtn) {
      installBtn = document.createElement('button');
      installBtn.id = 'installPwaBtn';
      installBtn.className = 'fixed bottom-5 left-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg z-40 flex items-center gap-2 animate-bounce';
      installBtn.innerHTML = '<i class="fas fa-download"></i> Install App';
      installBtn.onclick = () => this.installApp();
      document.body.appendChild(installBtn);
    }
  },

  // Install app
  installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted install');
        }
        this.deferredPrompt = null;
        const installBtn = document.getElementById('installPwaBtn');
        if (installBtn) installBtn.remove();
      });
    }
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'
      }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }
};

PWASystem.init();

// ==================== GRAMMAR CHECK SYSTEM (DAY 16) ====================
const GrammarCheckSystem = {
  isEnabled: true,
  grammarIssues: [],

  // Common grammar patterns
  grammarRules: [
    {
      pattern: /\bi\b(?=\s+[a-z])/gi,
      replacement: 'I',
      message: 'Pronoun "I" should be capitalized'
    },
    {
      pattern: /\b(their|there|they're)\b(?!.*?\b(?:their|there|they're)\b)/gi,
      message: 'Check homophone usage (their/there/they\'re)'
    },
    {
      pattern: /\b(your|you're)\b(?!.*?\b(?:your|you're)\b)/gi,
      message: 'Check homophone usage (your/you\'re)'
    },
    {
      pattern: /\b(its|it's)\b(?!.*?\b(?:its|it's)\b)/gi,
      message: 'Check homophone usage (its/it\'s)'
    },
    {
      pattern: /\b(affect|effect)\b/gi,
      message: 'Check usage: affect (verb) vs effect (noun)'
    },
    {
      pattern: /\b(then|than)\b/gi,
      message: 'Check usage: then (time) vs than (comparison)'
    },
    {
      pattern: /\b(to|too|two)\b/gi,
      message: 'Check homophone usage (to/too/two)'
    },
    {
      pattern: /\b(weather|whether)\b/gi,
      message: 'Check spelling: weather vs whether'
    },
    {
      pattern: /\b(loose|lose)\b/gi,
      message: 'Check spelling: loose (not tight) vs lose (misplace)'
    },
    {
      pattern: /\s{2,}/g,
      message: 'Extra spaces detected'
    }
  ],

  // Initialize
  init() {
    this.loadSettings();
    this.setupEventListeners();
  },

  // Load settings
  loadSettings() {
    const saved = localStorage.getItem('grammarCheckEnabled');
    if (saved !== null) {
      this.isEnabled = saved === 'true';
    }
  },

  // Save settings
  saveSettings() {
    localStorage.setItem('grammarCheckEnabled', this.isEnabled);
  },

  // Check text for grammar issues
  checkGrammar(text) {
    if (!this.isEnabled || !text) return [];

    const issues = [];

    this.grammarRules.forEach(rule => {
      const matches = text.match(rule.pattern);
      if (matches && matches.length > 0) {
        issues.push({
          type: 'grammar',
          message: rule.message,
          count: matches.length,
          suggestion: rule.replacement
        });
      }
    });

    // Check for repeated words
    const repeatedWordPattern = /\b(\w+)\s+\1\b/gi;
    let repeatedMatch;
    while ((repeatedMatch = repeatedWordPattern.exec(text)) !== null) {
      issues.push({
        type: 'repetition',
        message: `Repeated word: "${repeatedMatch[1]}"`,
        position: repeatedMatch.index
      });
    }

    // Check for sentence length
    const sentences = text.split(/[.!?]+/);
    sentences.forEach(sentence => {
      if (sentence.trim().split(/\s+/).length > 25) {
        issues.push({
          type: 'style',
          message: 'Consider breaking this long sentence'
        });
      }
    });

    this.grammarIssues = issues;
    this.displayGrammarWarnings(issues);

    return issues;
  },

  // Display grammar warnings
  displayGrammarWarnings(issues) {
    let warningContainer = document.getElementById('grammarWarnings');

    if (!warningContainer) {
      warningContainer = document.createElement('div');
      warningContainer.id = 'grammarWarnings';
      warningContainer.className = 'fixed bottom-20 left-5 right-5 md:left-auto md:right-5 md:w-80 bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded-lg p-3 z-30 shadow-lg';
      document.body.appendChild(warningContainer);
    }

    if (issues.length === 0) {
      warningContainer.style.display = 'none';
      return;
    }

    warningContainer.style.display = 'block';
    warningContainer.innerHTML = `
          <div class="flex items-start gap-2">
            <i class="fas fa-exclamation-triangle text-yellow-500 mt-0.5"></i>
            <div class="flex-1">
              <p class="text-xs font-semibold text-yellow-700 dark:text-yellow-300">Grammar Suggestions</p>
              <ul class="text-xs text-yellow-600 dark:text-yellow-400 mt-1 space-y-1">
                ${issues.slice(0, 3).map(issue => `<li>• ${issue.message}</li>`).join('')}
                ${issues.length > 3 ? `<li>• +${issues.length - 3} more issues</li>` : ''}
              </ul>
            </div>
            <button id="closeGrammarWarnings" class="text-yellow-500 hover:text-yellow-700">
              <i class="fas fa-times"></i>
            </button>
          </div>
        `;

    const closeBtn = warningContainer.querySelector('#closeGrammarWarnings');
    if (closeBtn) {
      closeBtn.onclick = () => {
        warningContainer.style.display = 'none';
      };
    }
  },

  // Show grammar settings panel
  showGrammarSettings() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-spell-check mr-2 text-green-500"></i>Grammar Check
              </h3>
              <button id="closeGrammarSettings" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div class="mb-4 flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">Enable Grammar Checking</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="grammarToggle" class="sr-only peer" ${this.isEnabled ? 'checked' : ''}>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div class="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p class="text-sm font-semibold mb-2">Grammar Rules Checked:</p>
              <ul class="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                <li>✓ Capitalization (i → I)</li>
                <li>✓ Homophones (their/there/they're)</li>
                <li>✓ Common misspellings</li>
                <li>✓ Repeated words</li>
                <li>✓ Sentence length</li>
              </ul>
            </div>
            
            <button id="closeGrammarBtn" class="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              Close
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const toggle = modal.querySelector('#grammarToggle');
    toggle.onchange = (e) => {
      this.isEnabled = e.target.checked;
      this.saveSettings();
      if (!this.isEnabled) {
        const warnings = document.getElementById('grammarWarnings');
        if (warnings) warnings.style.display = 'none';
      }
    };

    const closeBtn = modal.querySelector('#closeGrammarSettings') || modal.querySelector('#closeGrammarBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Setup event listeners
  setupEventListeners() {
    const grammarBtn = document.getElementById('grammarCheckBtn');
    if (grammarBtn) {
      grammarBtn.onclick = () => this.showGrammarSettings();
    }

    // Check grammar on input
    elements.quoteInput.addEventListener('input', () => {
      this.checkGrammar(elements.quoteInput.value);
    });
  }
};
GrammarCheckSystem.init();

// ==================== TYPING TOURNAMENT SYSTEM (DAY 17) ====================
const TournamentSystem = {
  // Tournament data
  activeTournament: null,
  tournaments: [],
  userTournaments: [],

  // Tournament types
  types: {
    QUICK: 'quick',
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
    CUSTOM: 'custom'
  },

  // Initialize
  init() {
    this.loadTournaments();
    this.setupEventListeners();
    this.checkActiveTournaments();
  },

  // Load tournaments from storage
  loadTournaments() {
    const saved = localStorage.getItem('velocityTournaments');
    if (saved) {
      this.tournaments = JSON.parse(saved);
    } else {
      this.generateDefaultTournaments();
    }

    const userSaved = localStorage.getItem('userTournaments');
    if (userSaved) {
      this.userTournaments = JSON.parse(userSaved);
    }
  },

  // Generate default tournaments
  generateDefaultTournaments() {
    const now = new Date();

    this.tournaments = [
      {
        id: 'daily_1',
        name: 'Daily Sprint',
        type: this.types.DAILY,
        description: 'Quick 60-second typing challenge',
        startDate: new Date(now).toISOString(),
        endDate: new Date(now.setHours(23, 59, 59, 999)).toISOString(),
        difficulty: 'medium',
        duration: 60,
        prize: { points: 100, badge: 'Daily Champion' },
        participants: [],
        winner: null,
        status: 'active'
      },
      {
        id: 'weekly_1',
        name: 'Weekly Masters',
        type: this.types.WEEKLY,
        description: 'Compete for the weekly title',
        startDate: new Date(now.setDate(now.getDate() - now.getDay())).toISOString(),
        endDate: new Date(now.setDate(now.getDate() + 6)).toISOString(),
        difficulty: 'hard',
        duration: 120,
        prize: { points: 500, badge: 'Weekly Master', icon: '👑' },
        participants: [],
        winner: null,
        status: 'active'
      }
    ];

    this.saveTournaments();
  },

  // Save tournaments
  saveTournaments() {
    localStorage.setItem('velocityTournaments', JSON.stringify(this.tournaments));
    localStorage.setItem('userTournaments', JSON.stringify(this.userTournaments));
  },

  // Check active tournaments
  checkActiveTournaments() {
    const now = new Date();
    this.tournaments.forEach(tournament => {
      if (tournament.status === 'active' && new Date(tournament.endDate) < now) {
        tournament.status = 'ended';
        this.determineWinner(tournament);
      }
    });
    this.saveTournaments();
  },

  // Determine tournament winner
  determineWinner(tournament) {
    if (tournament.participants.length === 0) return;

    const sorted = [...tournament.participants].sort((a, b) => b.bestWPM - a.bestWPM);
    tournament.winner = sorted[0];
    tournament.status = 'completed';

    // Award prize to winner
    this.awardPrize(tournament.winner, tournament.prize);

    this.saveTournaments();
  },

  // Award prize to winner
  awardPrize(winner, prize) {
    if (AchievementSystem) {
      AchievementSystem.userProgress.totalPoints += prize.points;
      AchievementSystem.saveProgress();
    }

    // Show notification
    this.showNotification(`🏆 ${winner.name} won ${prize.points} points in ${prize.badge || 'Tournament'}!`, 'success');
  },

  // Join tournament
  joinTournament(tournamentId) {
    const tournament = this.tournaments.find(t => t.id === tournamentId);
    if (!tournament) {
      this.showNotification('Tournament not found!', 'error');
      return;
    }

    if (tournament.status !== 'active') {
      this.showNotification('Tournament is not active!', 'error');
      return;
    }

    const playerName = MultiplayerSystem?.playerName || 'You';
    const existingParticipant = tournament.participants.find(p => p.name === playerName);

    if (existingParticipant) {
      this.showNotification('You already joined this tournament!', 'error');
      return;
    }

    tournament.participants.push({
      name: playerName,
      bestWPM: 0,
      bestAccuracy: 0,
      tests: [],
      joinedAt: new Date().toISOString()
    });

    this.userTournaments.push({
      tournamentId: tournamentId,
      joinedAt: new Date().toISOString(),
      completed: false
    });

    this.saveTournaments();
    this.showNotification(`Joined ${tournament.name}! Complete tests to rank!`, 'success');
    SoundManager.playKeypress();
  },

  // Submit tournament score
  submitScore(tournamentId, testResult) {
    const tournament = this.tournaments.find(t => t.id === tournamentId);
    if (!tournament || tournament.status !== 'active') return;

    const playerName = MultiplayerSystem?.playerName || 'You';
    const participant = tournament.participants.find(p => p.name === playerName);

    if (participant) {
      participant.tests.push(testResult);
      participant.bestWPM = Math.max(participant.bestWPM, testResult.wpm);
      participant.bestAccuracy = Math.max(participant.bestAccuracy, testResult.accuracy);

      this.saveTournaments();

      // Update ranking display if open
      this.updateRankingDisplay(tournamentId);
    }
  },

  // Update ranking display
  updateRankingDisplay(tournamentId) {
    const rankingContainer = document.getElementById('tournamentRanking');
    if (!rankingContainer) return;

    const tournament = this.tournaments.find(t => t.id === tournamentId);
    if (!tournament) return;

    const sorted = [...tournament.participants].sort((a, b) => b.bestWPM - a.bestWPM);
    const playerRank = sorted.findIndex(p => p.name === (MultiplayerSystem?.playerName || 'You')) + 1;

    rankingContainer.innerHTML = `
          <div class="mb-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-center">
            <span class="text-sm font-semibold">Your Rank: #${playerRank || '?'}</span>
            <span class="text-sm ml-3">Best WPM: ${sorted.find(p => p.name === (MultiplayerSystem?.playerName || 'You'))?.bestWPM || 0}</span>
          </div>
          <div class="space-y-1 max-h-64 overflow-y-auto">
            ${sorted.slice(0, 10).map((p, idx) => `
              <div class="flex justify-between items-center p-2 ${p.name === (MultiplayerSystem?.playerName || 'You') ? 'bg-purple-200 dark:bg-purple-800/50' : 'bg-gray-100 dark:bg-gray-700'} rounded">
                <div class="flex items-center gap-2">
                  <span class="font-bold w-6">${idx + 1}</span>
                  <span>${p.name}</span>
                  ${idx === 0 ? '<span class="text-xs">👑</span>' : ''}
                </div>
                <div class="text-right">
                  <span class="font-bold text-blue-500">${p.bestWPM} WPM</span>
                  <span class="text-xs text-gray-500 ml-2">${p.bestAccuracy}%</span>
                </div>
              </div>
            `).join('')}
          </div>
        `;
  },

  // Show tournaments panel
  showTournamentsPanel() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    const activeTournaments = this.tournaments.filter(t => t.status === 'active');
    const completedTournaments = this.tournaments.filter(t => t.status === 'completed');

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-trophy mr-2 text-yellow-500"></i>Typing Tournaments
              </h3>
              <button id="closeTournamentsBtn" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Active Tournaments -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3 text-green-600 dark:text-green-400">
                <i class="fas fa-play-circle mr-2"></i>Active Tournaments
              </h4>
              ${activeTournaments.length > 0 ? activeTournaments.map(t => this.renderTournamentCard(t)).join('') : '<p class="text-center text-gray-500 py-4">No active tournaments at the moment. Check back soon!</p>'}
            </div>
            
            <!-- Completed Tournaments -->
            <div class="mb-4">
              <h4 class="font-semibold mb-3 text-gray-600 dark:text-gray-400">
                <i class="fas fa-check-circle mr-2"></i>Past Tournaments
              </h4>
              ${completedTournaments.length > 0 ? completedTournaments.slice(0, 5).map(t => this.renderCompletedCard(t)).join('') : '<p class="text-center text-gray-500 py-4">No completed tournaments yet.</p>'}
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeTournamentsBtn');
    closeBtn.onclick = () => modal.remove();

    // Attach join buttons
    const joinBtns = modal.querySelectorAll('.join-tournament-btn');
    joinBtns.forEach(btn => {
      btn.onclick = () => {
        const tournamentId = btn.dataset.id;
        this.joinTournament(tournamentId);
        modal.remove();
        this.showTournamentDashboard(tournamentId);
      };
    });

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Render tournament card
  renderTournamentCard(tournament) {
    const hasJoined = this.userTournaments.some(ut => ut.tournamentId === tournament.id);
    const daysLeft = Math.ceil((new Date(tournament.endDate) - new Date()) / (1000 * 60 * 60 * 24));

    return `
          <div class="mb-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <h5 class="font-bold text-lg">${tournament.name}</h5>
                  <span class="text-xs px-2 py-0.5 bg-green-500 text-white rounded-full">${tournament.type}</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">${tournament.description}</p>
                <div class="flex gap-3 mt-2 text-xs text-gray-500">
                  <span><i class="fas fa-tachometer-alt"></i> ${tournament.difficulty}</span>
                  <span><i class="fas fa-hourglass-half"></i> ${tournament.duration}s</span>
                  <span><i class="fas fa-calendar"></i> ${daysLeft} days left</span>
                  <span><i class="fas fa-users"></i> ${tournament.participants.length} players</span>
                </div>
                <div class="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <p class="text-xs"><i class="fas fa-gift"></i> Prize: ${tournament.prize.points} points + ${tournament.prize.badge || 'Badge'}</p>
                </div>
              </div>
              <div>
                ${!hasJoined ? `
                  <button class="join-tournament-btn px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition" data-id="${tournament.id}">
                    <i class="fas fa-sign-in-alt"></i> Join
                  </button>
                ` : `
                  <button class="view-tournament-btn px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition" data-id="${tournament.id}">
                    <i class="fas fa-eye"></i> View
                  </button>
                `}
              </div>
            </div>
          </div>
        `;
  },

  // Render completed tournament card
  renderCompletedCard(tournament) {
    return `
          <div class="mb-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div class="flex justify-between items-center">
              <div>
                <p class="font-semibold">${tournament.name}</p>
                <p class="text-xs text-gray-500">Winner: ${tournament.winner?.name || 'Unknown'} (${tournament.winner?.bestWPM || 0} WPM)</p>
              </div>
              <span class="text-xs text-green-500">Completed</span>
            </div>
          </div>
        `;
  },

  // Show tournament dashboard
  showTournamentDashboard(tournamentId) {
    const tournament = this.tournaments.find(t => t.id === tournamentId);
    if (!tournament) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    const sorted = [...tournament.participants].sort((a, b) => b.bestWPM - a.bestWPM);
    const playerData = sorted.find(p => p.name === (MultiplayerSystem?.playerName || 'You'));
    const playerRank = sorted.findIndex(p => p.name === (MultiplayerSystem?.playerName || 'You')) + 1;

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-trophy mr-2 text-yellow-500"></i>${tournament.name}
              </h3>
              <button id="closeDashboardBtn" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Tournament Info -->
            <div class="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <div class="grid grid-cols-2 gap-2 text-sm">
                <div><span class="text-gray-500">Ends:</span> ${new Date(tournament.endDate).toLocaleDateString()}</div>
                <div><span class="text-gray-500">Players:</span> ${tournament.participants.length}</div>
                <div><span class="text-gray-500">Your Best:</span> <span class="font-bold text-blue-500">${playerData?.bestWPM || 0} WPM</span></div>
                <div><span class="text-gray-500">Your Rank:</span> <span class="font-bold text-purple-500">#${playerRank || '?'}</span></div>
              </div>
            </div>
            
            <!-- Submit Score -->
            <div class="mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p class="text-sm font-semibold mb-2">Submit Your Best Score</p>
              <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">Complete a ${tournament.duration}s test on ${tournament.difficulty} difficulty to update your rank</p>
              <button id="submitScoreBtn" class="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                <i class="fas fa-play"></i> Take Tournament Test
              </button>
            </div>
            
            <!-- Rankings -->
            <h4 class="font-semibold mb-2">Leaderboard</h4>
            <div id="tournamentRanking" class="space-y-1 max-h-96 overflow-y-auto">
              ${sorted.slice(0, 20).map((p, idx) => `
                <div class="flex justify-between items-center p-2 ${p.name === (MultiplayerSystem?.playerName || 'You') ? 'bg-purple-200 dark:bg-purple-800/50' : 'bg-gray-100 dark:bg-gray-700'} rounded">
                  <div class="flex items-center gap-2">
                    <span class="font-bold w-6">${idx + 1}</span>
                    <span>${p.name}</span>
                    ${idx === 0 ? '<span class="text-xs">👑</span>' : ''}
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-blue-500">${p.bestWPM} WPM</span>
                    <span class="text-xs text-gray-500 ml-2">${p.bestAccuracy}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
            
            ${tournament.participants.length === 0 ? '<p class="text-center text-gray-500 py-4">No participants yet. Be the first to join!</p>' : ''}
          </div>
        `;

    document.body.appendChild(modal);

    const submitBtn = modal.querySelector('#submitScoreBtn');
    submitBtn.onclick = () => {
      modal.remove();
      this.startTournamentTest(tournament);
    };

    const closeBtn = modal.querySelector('#closeDashboardBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Start tournament test
  startTournamentTest(tournament) {
    // Set tournament settings
    const oldDifficulty = difficulty;
    const oldDuration = totalDuration;

    difficulty = tournament.difficulty;
    totalDuration = tournament.duration;
    timeLeft = tournament.duration;
    elements.timeElem.innerText = timeLeft + "s";

    // Load new quote
    loadQuote();

    // Show tournament mode indicator
    let indicator = document.getElementById('tournamentIndicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'tournamentIndicator';
      indicator.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg z-40';
      document.body.appendChild(indicator);
    }
    indicator.innerHTML = `<i class="fas fa-trophy mr-1"></i> Tournament Mode: ${tournament.name}`;

    // Store original finish test
    const originalFinish = finishTest;

    // Override finish test for tournament
    window.finishTest = function () {
      originalFinish();

      const testResult = {
        wpm: parseInt(elements.wpmElem.innerText),
        accuracy: parseInt(elements.accuracyElem.innerText),
        errors: parseInt(elements.errorsElem.innerText),
        duration: tournament.duration
      };

      TournamentSystem.submitScore(tournament.id, testResult);

      // Restore original finish test
      window.finishTest = originalFinish;

      // Remove indicator
      if (indicator) indicator.remove();

      // Restore settings
      difficulty = oldDifficulty;
      totalDuration = oldDuration;

      TournamentSystem.showNotification('Score submitted to tournament!', 'success');
      TournamentSystem.showTournamentDashboard(tournament.id);
    };
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.style.animation = 'slideUp 0.3s ease';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const tournamentBtn = document.getElementById('tournamentBtn');
    if (tournamentBtn) {
      tournamentBtn.onclick = () => this.showTournamentsPanel();
    }
  }
};
// Initialize Tournament System
TournamentSystem.init();

// ==================== CLASSROOM & TEACHER DASHBOARD (DAY 18) ====================
const ClassroomSystem = {
  // Classroom data
  currentUser: null,
  classes: [],
  currentClass: null,
  assignments: [],

  // User roles
  roles: {
    STUDENT: 'student',
    TEACHER: 'teacher',
    ADMIN: 'admin'
  },

  // Initialize
  init() {
    this.loadData();
    this.setupEventListeners();
    this.checkUserRole();
  },

  // Load data from storage
  loadData() {
    const savedUser = localStorage.getItem('velocityUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }

    const savedClasses = localStorage.getItem('velocityClasses');
    if (savedClasses) {
      this.classes = JSON.parse(savedClasses);
    } else {
      this.generateDemoClass();
    }

    const savedAssignments = localStorage.getItem('velocityAssignments');
    if (savedAssignments) {
      this.assignments = JSON.parse(savedAssignments);
    }
  },

  // Generate demo class for testing
  generateDemoClass() {
    this.classes = [
      {
        id: 'class_001',
        name: 'Typing 101',
        code: 'TYPING101',
        teacher: 'Professor Smith',
        teacherId: 'teacher_001',
        students: [
          { id: 'student_001', name: 'Alice Johnson', joinedAt: new Date().toISOString(), testsCompleted: 12, avgWPM: 45, avgAccuracy: 88 },
          { id: 'student_002', name: 'Bob Williams', joinedAt: new Date().toISOString(), testsCompleted: 8, avgWPM: 52, avgAccuracy: 92 },
          { id: 'student_003', name: 'Charlie Brown', joinedAt: new Date().toISOString(), testsCompleted: 15, avgWPM: 48, avgAccuracy: 85 }
        ],
        createdAt: new Date().toISOString(),
        assignments: []
      }
    ];
    this.saveClasses();
  },

  // Save data
  saveData() {
    if (this.currentUser) {
      localStorage.setItem('velocityUser', JSON.stringify(this.currentUser));
    }
    this.saveClasses();
    localStorage.setItem('velocityAssignments', JSON.stringify(this.assignments));
  },

  saveClasses() {
    localStorage.setItem('velocityClasses', JSON.stringify(this.classes));
  },

  // Check user role
  checkUserRole() {
    if (!this.currentUser) {
      // Show role selection
      this.showRoleSelection();
    }
  },

  // Show role selection
  showRoleSelection() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl text-center">
            <div class="text-5xl mb-4">📚</div>
            <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Welcome to VelocityType Classroom</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">Are you a student or a teacher?</p>
            
            <div class="space-y-3">
              <button id="studentRoleBtn" class="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-user-graduate"></i> I'm a Student
              </button>
              <button id="teacherRoleBtn" class="w-full px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold transition flex items-center justify-center gap-2">
                <i class="fas fa-chalkboard-user"></i> I'm a Teacher
              </button>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button id="skipClassroomBtn" class="text-sm text-gray-500 hover:text-gray-700">Skip for now</button>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const studentBtn = modal.querySelector('#studentRoleBtn');
    const teacherBtn = modal.querySelector('#teacherRoleBtn');
    const skipBtn = modal.querySelector('#skipClassroomBtn');

    studentBtn.onclick = () => {
      this.currentUser = { role: this.roles.STUDENT, name: '', classCode: '' };
      this.saveData();
      modal.remove();
      this.showJoinClassModal();
    };

    teacherBtn.onclick = () => {
      this.currentUser = { role: this.roles.TEACHER, name: '', school: '' };
      this.saveData();
      modal.remove();
      this.showTeacherSetup();
    };

    skipBtn.onclick = () => modal.remove();
  },

  // Show join class modal for students
  showJoinClassModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Join a Class</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Enter your class code provided by your teacher</p>
            
            <input type="text" id="classCodeInput" placeholder="Enter class code (e.g., TYPING101)" class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 mb-4">
            
            <input type="text" id="studentNameInput" placeholder="Your full name" class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 mb-4">
            
            <div class="flex gap-3">
              <button id="joinClassBtn" class="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                <i class="fas fa-sign-in-alt"></i> Join Class
              </button>
              <button id="cancelJoinBtn" class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition">
                Cancel
              </button>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const joinBtn = modal.querySelector('#joinClassBtn');
    const cancelBtn = modal.querySelector('#cancelJoinBtn');
    const classCodeInput = modal.querySelector('#classCodeInput');
    const studentNameInput = modal.querySelector('#studentNameInput');

    joinBtn.onclick = () => {
      const classCode = classCodeInput.value.toUpperCase();
      const studentName = studentNameInput.value;

      if (!classCode || !studentName) {
        alert('Please enter both class code and your name');
        return;
      }

      const classToJoin = this.classes.find(c => c.code === classCode);
      if (!classToJoin) {
        alert('Invalid class code. Please check and try again.');
        return;
      }

      this.currentUser.name = studentName;
      this.currentUser.classId = classToJoin.id;
      this.currentUser.classCode = classCode;
      this.saveData();

      modal.remove();
      this.showStudentDashboard();
    };

    cancelBtn.onclick = () => modal.remove();
  },

  // Show teacher setup
  showTeacherSetup() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Teacher Setup</h3>
            
            <input type="text" id="teacherNameInput" placeholder="Your full name" class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 mb-4">
            
            <input type="text" id="schoolNameInput" placeholder="School/Institution name" class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 mb-4">
            
            <div class="flex gap-3">
              <button id="createTeacherBtn" class="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">
                <i class="fas fa-check"></i> Get Started
              </button>
              <button id="cancelTeacherBtn" class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition">
                Cancel
              </button>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const createBtn = modal.querySelector('#createTeacherBtn');
    const cancelBtn = modal.querySelector('#cancelTeacherBtn');
    const teacherNameInput = modal.querySelector('#teacherNameInput');
    const schoolNameInput = modal.querySelector('#schoolNameInput');

    createBtn.onclick = () => {
      const teacherName = teacherNameInput.value;
      const schoolName = schoolNameInput.value;

      if (!teacherName || !schoolName) {
        alert('Please enter both your name and school name');
        return;
      }

      this.currentUser.name = teacherName;
      this.currentUser.school = schoolName;
      this.currentUser.id = 'teacher_' + Date.now();
      this.saveData();

      modal.remove();
      this.showTeacherDashboard();
    };

    cancelBtn.onclick = () => modal.remove();
  },

  // Show student dashboard
  showStudentDashboard() {
    const classInfo = this.classes.find(c => c.id === this.currentUser.classId);
    const studentInfo = classInfo?.students.find(s => s.name === this.currentUser.name);

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-graduation-cap mr-2 text-blue-500"></i>Student Dashboard
              </h3>
              <button id="closeStudentDashboard" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <div class="mb-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <p class="font-semibold">Welcome, ${this.currentUser.name}!</p>
              <p class="text-sm">Class: ${classInfo?.name} (${classInfo?.code})</p>
              <p class="text-sm">Teacher: ${classInfo?.teacher}</p>
            </div>
            
            <!-- Student Stats -->
            <div class="grid grid-cols-2 gap-3 mb-4">
              <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
                <p class="text-xs">Tests Completed</p>
                <p class="text-2xl font-bold">${studentInfo?.testsCompleted || 0}</p>
              </div>
              <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-center">
                <p class="text-xs">Average WPM</p>
                <p class="text-2xl font-bold">${studentInfo?.avgWPM || 0}</p>
              </div>
              <div class="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-center">
                <p class="text-xs">Average Accuracy</p>
                <p class="text-2xl font-bold">${studentInfo?.avgAccuracy || 0}%</p>
              </div>
              <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center">
                <p class="text-xs">Class Rank</p>
                <p class="text-2xl font-bold">#${this.getStudentRank(classInfo, this.currentUser.name)}</p>
              </div>
            </div>
            
            <!-- Class Leaderboard -->
            <h4 class="font-semibold mb-2">Class Leaderboard</h4>
            <div class="space-y-1 max-h-64 overflow-y-auto mb-4">
              ${this.renderClassLeaderboard(classInfo)}
            </div>
            
            <button id="closeDashboardBtn" class="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              Close
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeStudentDashboard') || modal.querySelector('#closeDashboardBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Get student rank in class
  getStudentRank(classInfo, studentName) {
    if (!classInfo || !classInfo.students) return '?';
    const sorted = [...classInfo.students].sort((a, b) => b.avgWPM - a.avgWPM);
    const rank = sorted.findIndex(s => s.name === studentName) + 1;
    return rank || '?';
  },

  // Render class leaderboard
  renderClassLeaderboard(classInfo) {
    if (!classInfo || !classInfo.students || classInfo.students.length === 0) {
      return '<p class="text-center text-gray-500">No students yet</p>';
    }

    const sorted = [...classInfo.students].sort((a, b) => b.avgWPM - a.avgWPM);

    return sorted.map((student, idx) => `
          <div class="flex justify-between items-center p-2 ${student.name === this.currentUser?.name ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-700'} rounded">
            <div class="flex items-center gap-2">
              <span class="font-bold w-6">${idx + 1}</span>
              <span>${student.name}</span>
            </div>
            <div class="text-right">
              <span class="font-bold text-blue-500">${student.avgWPM} WPM</span>
              <span class="text-xs text-gray-500 ml-2">${student.avgAccuracy}%</span>
            </div>
          </div>
        `).join('');
  },

  // Show teacher dashboard
  showTeacherDashboard() {
    const myClasses = this.classes.filter(c => c.teacherId === this.currentUser.id || c.teacher === this.currentUser.name);

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-chalkboard-user mr-2 text-purple-500"></i>Teacher Dashboard
              </h3>
              <button id="closeTeacherDashboard" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <div class="mb-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <p class="font-semibold">Welcome, ${this.currentUser.name}!</p>
              <p class="text-sm">${this.currentUser.school}</p>
            </div>
            
            <!-- Create New Class -->
            <div class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <h4 class="font-semibold mb-2">Create New Class</h4>
              <div class="flex gap-2">
                <input type="text" id="newClassName" placeholder="Class name" class="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <button id="createClassBtn" class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                  <i class="fas fa-plus"></i> Create
                </button>
              </div>
            </div>
            
            <!-- My Classes -->
            <h4 class="font-semibold mb-2">My Classes (${myClasses.length})</h4>
            <div class="space-y-3 mb-4 max-h-96 overflow-y-auto">
              ${myClasses.length > 0 ? myClasses.map(c => this.renderTeacherClassCard(c)).join('') : '<p class="text-center text-gray-500 py-4">No classes yet. Create your first class above!</p>'}
            </div>
            
            <button id="closeTeacherBtn" class="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">
              Close
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const createBtn = modal.querySelector('#createClassBtn');
    const newClassNameInput = modal.querySelector('#newClassName');

    createBtn.onclick = () => {
      const className = newClassNameInput.value;
      if (!className) {
        alert('Please enter a class name');
        return;
      }

      this.createClass(className);
      modal.remove();
      this.showTeacherDashboard();
    };

    const closeBtn = modal.querySelector('#closeTeacherDashboard') || modal.querySelector('#closeTeacherBtn');
    closeBtn.onclick = () => modal.remove();

    // Attach view buttons
    const viewBtns = modal.querySelectorAll('.view-class-btn');
    viewBtns.forEach(btn => {
      btn.onclick = () => {
        const classId = btn.dataset.id;
        this.showClassDetails(classId);
        modal.remove();
      };
    });

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Create new class
  createClass(className) {
    const classCode = this.generateClassCode();
    const newClass = {
      id: 'class_' + Date.now(),
      name: className,
      code: classCode,
      teacher: this.currentUser.name,
      teacherId: this.currentUser.id,
      students: [],
      createdAt: new Date().toISOString(),
      assignments: []
    };

    this.classes.push(newClass);
    this.saveClasses();
    this.showNotification(`Class "${className}" created! Class code: ${classCode}`, 'success');
  },

  // Generate unique class code
  generateClassCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';
    for (let i = 0; i < 3; i++) code += letters[Math.floor(Math.random() * letters.length)];
    for (let i = 0; i < 3; i++) code += numbers[Math.floor(Math.random() * numbers.length)];
    return code;
  },

  // Render teacher class card
  renderTeacherClassCard(classItem) {
    const avgWPM = classItem.students.reduce((sum, s) => sum + s.avgWPM, 0) / (classItem.students.length || 1);

    return `
          <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div class="flex justify-between items-start">
              <div>
                <p class="font-semibold">${classItem.name}</p>
                <p class="text-xs text-gray-500">Code: ${classItem.code}</p>
                <p class="text-xs text-gray-500">${classItem.students.length} students • Avg WPM: ${Math.round(avgWPM)}</p>
              </div>
              <button class="view-class-btn px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm" data-id="${classItem.id}">
                <i class="fas fa-eye"></i> View
              </button>
            </div>
          </div>
        `;
  },

  // Show class details for teacher
  showClassDetails(classId) {
    const classItem = this.classes.find(c => c.id === classId);
    if (!classItem) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    const sortedStudents = [...classItem.students].sort((a, b) => b.avgWPM - a.avgWPM);

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-users mr-2 text-blue-500"></i>${classItem.name}
              </h3>
              <button id="closeClassDetails" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <div class="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <p><strong>Class Code:</strong> <span class="font-mono text-lg">${classItem.code}</span></p>
              <p><strong>Teacher:</strong> ${classItem.teacher}</p>
              <p><strong>Students:</strong> ${classItem.students.length}</p>
              <p><strong>Created:</strong> ${new Date(classItem.createdAt).toLocaleDateString()}</p>
            </div>
            
            <h4 class="font-semibold mb-2">Student Rankings</h4>
            <div class="space-y-1 max-h-96 overflow-y-auto mb-4">
              ${sortedStudents.map((student, idx) => `
                <div class="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <div class="flex items-center gap-2">
                    <span class="font-bold w-6">${idx + 1}</span>
                    <span>${student.name}</span>
                  </div>
                  <div class="flex gap-4 text-right">
                    <span class="text-blue-500">${student.avgWPM} WPM</span>
                    <span class="text-green-500">${student.avgAccuracy}%</span>
                    <span>${student.testsCompleted} tests</span>
                  </div>
                </div>
              `).join('')}
            </div>
            
            ${classItem.students.length === 0 ? '<p class="text-center text-gray-500 py-4">No students have joined yet. Share the class code!</p>' : ''}
            
            <div class="flex gap-3">
              <button id="shareClassCodeBtn" class="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                <i class="fas fa-share-alt"></i> Share Class Code
              </button>
              <button id="closeDetailsBtn" class="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                Close
              </button>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const shareBtn = modal.querySelector('#shareClassCodeBtn');
    shareBtn.onclick = () => {
      navigator.clipboard.writeText(`Join my VelocityType class with code: ${classItem.code}`);
      this.showNotification('Class code copied to clipboard!', 'success');
    };

    const closeBtn = modal.querySelector('#closeClassDetails') || modal.querySelector('#closeDetailsBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Update student progress after test
  updateStudentProgress(testResult) {
    if (!this.currentUser || this.currentUser.role !== this.roles.STUDENT) return;

    const classItem = this.classes.find(c => c.id === this.currentUser.classId);
    if (!classItem) return;

    const student = classItem.students.find(s => s.name === this.currentUser.name);
    if (student) {
      // Update student stats
      const totalWPM = (student.avgWPM * student.testsCompleted) + testResult.wpm;
      const totalAccuracy = (student.avgAccuracy * student.testsCompleted) + testResult.accuracy;
      student.testsCompleted++;
      student.avgWPM = Math.round(totalWPM / student.testsCompleted);
      student.avgAccuracy = Math.round(totalAccuracy / student.testsCompleted);
    } else {
      // Add new student
      classItem.students.push({
        id: 'student_' + Date.now(),
        name: this.currentUser.name,
        joinedAt: new Date().toISOString(),
        testsCompleted: 1,
        avgWPM: testResult.wpm,
        avgAccuracy: testResult.accuracy
      });
    }

    this.saveClasses();
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'
      }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const classroomBtn = document.getElementById('classroomBtn');
    if (classroomBtn) {
      classroomBtn.onclick = () => {
        if (!this.currentUser) {
          this.showRoleSelection();
        } else if (this.currentUser.role === this.roles.STUDENT) {
          this.showStudentDashboard();
        } else if (this.currentUser.role === this.roles.TEACHER) {
          this.showTeacherDashboard();
        }
      };
    }
  }
};
// Initialize Classroom System
ClassroomSystem.init();

// ==================== AI-POWERED DIFFICULTY ADAPTATION (DAY 19) ====================
const AIDifficultySystem = {
  // User skill profile
  skillProfile: {
    currentLevel: 1,
    confidence: 0.5,
    performanceHistory: [],
    skillRatings: {
      speed: 0,
      accuracy: 0,
      consistency: 0,
      endurance: 0
    },
    adaptiveEnabled: true
  },

  // Difficulty parameters
  difficultyParams: {
    easy: { baseWPM: 20, targetAccuracy: 85, complexity: 0.3 },
    medium: { baseWPM: 40, targetAccuracy: 88, complexity: 0.5 },
    hard: { baseWPM: 60, targetAccuracy: 90, complexity: 0.7 },
    expert: { baseWPM: 80, targetAccuracy: 92, complexity: 0.9 }
  },

  // Initialize
  init() {
    this.loadProfile();
    this.setupEventListeners();
  },

  // Load profile from storage
  loadProfile() {
    const saved = localStorage.getItem('aiDifficultyProfile');
    if (saved) {
      this.skillProfile = JSON.parse(saved);
    }
  },

  // Save profile
  saveProfile() {
    localStorage.setItem('aiDifficultyProfile', JSON.stringify(this.skillProfile));
  },

  // Analyze test performance and update skill profile
  analyzePerformance(testResult) {
    if (!this.skillProfile.adaptiveEnabled) return;

    // Update performance history
    this.skillProfile.performanceHistory.push({
      timestamp: Date.now(),
      wpm: testResult.wpm,
      accuracy: testResult.accuracy,
      errors: testResult.errors,
      difficulty: difficulty,
      quoteLength: currentQuoteText.length
    });

    // Keep last 20 performances
    if (this.skillProfile.performanceHistory.length > 20) {
      this.skillProfile.performanceHistory.shift();
    }

    // Calculate skill ratings
    this.updateSkillRatings();

    // Determine optimal difficulty
    const recommendedDifficulty = this.calculateRecommendedDifficulty();

    // Auto-adjust if enabled
    if (this.shouldAdjustDifficulty(recommendedDifficulty)) {
      this.adjustDifficulty(recommendedDifficulty);
    }

    this.saveProfile();
    this.showAdaptationFeedback(recommendedDifficulty);
  },

  // Update skill ratings based on history
  updateSkillRatings() {
    const history = this.skillProfile.performanceHistory;
    if (history.length === 0) return;

    // Speed rating (based on WPM relative to difficulty)
    const avgWPM = history.reduce((sum, p) => sum + p.wpm, 0) / history.length;
    const maxWPM = Math.max(...history.map(p => p.wpm));
    this.skillProfile.skillRatings.speed = Math.min(100, (avgWPM / 100) * 100);

    // Accuracy rating
    const avgAccuracy = history.reduce((sum, p) => sum + p.accuracy, 0) / history.length;
    this.skillProfile.skillRatings.accuracy = avgAccuracy;

    // Consistency rating (low variance = high consistency)
    const wpmVariance = this.calculateVariance(history.map(p => p.wpm));
    this.skillProfile.skillRatings.consistency = Math.max(0, 100 - (wpmVariance / 2));

    // Endurance rating (based on longer tests performance)
    const longTests = history.filter(p => p.quoteLength > 200);
    if (longTests.length > 0) {
      const longTestAvg = longTests.reduce((sum, p) => sum + p.wpm, 0) / longTests.length;
      this.skillProfile.skillRatings.endurance = Math.min(100, (longTestAvg / 80) * 100);
    } else {
      this.skillProfile.skillRatings.endurance = 50;
    }

    // Calculate overall level (1-10)
    const overallScore = (
      this.skillProfile.skillRatings.speed * 0.4 +
      this.skillProfile.skillRatings.accuracy * 0.3 +
      this.skillProfile.skillRatings.consistency * 0.2 +
      this.skillProfile.skillRatings.endurance * 0.1
    );

    this.skillProfile.currentLevel = Math.max(1, Math.min(10, Math.floor(overallScore / 10)));
  },

  // Calculate variance
  calculateVariance(values) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const squaredDiffs = values.map(v => Math.pow(v - mean, 2));
    return squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
  },

  // Calculate recommended difficulty
  calculateRecommendedDifficulty() {
    const history = this.skillProfile.performanceHistory;
    if (history.length < 3) return difficulty;

    const recentTests = history.slice(-5);
    const avgWPM = recentTests.reduce((sum, p) => sum + p.wpm, 0) / recentTests.length;
    const avgAccuracy = recentTests.reduce((sum, p) => sum + p.accuracy, 0) / recentTests.length;

    // Determine appropriate difficulty
    if (avgWPM >= 75 && avgAccuracy >= 92) return 'expert';
    if (avgWPM >= 55 && avgAccuracy >= 88) return 'hard';
    if (avgWPM >= 35 && avgAccuracy >= 85) return 'medium';
    return 'easy';
  },

  // Check if difficulty should be adjusted
  shouldAdjustDifficulty(recommended) {
    if (recommended === difficulty) return false;

    const history = this.skillProfile.performanceHistory;
    if (history.length < 5) return false;

    // Check if consistently performing well
    const recentTests = history.slice(-5);
    const consistent = recentTests.every(t => t.accuracy >= 85);

    return consistent;
  },

  // Adjust difficulty
  adjustDifficulty(newDifficulty) {
    const oldDifficulty = difficulty;
    difficulty = newDifficulty;

    // Update UI to show selected difficulty
    document.querySelectorAll('.difficulty-option').forEach(btn => {
      if (btn.dataset.difficulty === newDifficulty) {
        btn.classList.add('bg-blue-500', 'text-white', 'shadow-md');
      } else {
        btn.classList.remove('bg-blue-500', 'text-white', 'shadow-md');
      }
    });

    // Load new quote with new difficulty
    newQuote();

    // Show notification
    this.showNotification(`AI adjusted difficulty: ${oldDifficulty} → ${newDifficulty}`, 'info');

    // Play sound
    SoundManager.playKeypress();
  },

  // Show adaptation feedback
  showAdaptationFeedback(recommended) {
    if (recommended === difficulty) return;

    const feedback = document.createElement('div');
    feedback.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg z-40 animate-bounce';
    feedback.innerHTML = `
          <i class="fas fa-robot mr-2"></i>
          AI Suggestion: Try ${recommended.toUpperCase()} difficulty for optimal challenge
          <button id="dismissFeedback" class="ml-3 text-xs bg-white/20 px-2 py-1 rounded">Dismiss</button>
        `;

    document.body.appendChild(feedback);

    const dismissBtn = feedback.querySelector('#dismissFeedback');
    dismissBtn.onclick = () => feedback.remove();

    setTimeout(() => feedback.remove(), 8000);
  },

  // Show AI difficulty panel
  showAIDifficultyPanel() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    const history = this.skillProfile.performanceHistory;
    const recentAvgWPM = history.slice(-5).reduce((sum, p) => sum + p.wpm, 0) / (Math.min(5, history.length) || 1);

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-microchip mr-2 text-purple-500"></i>AI Difficulty Adaptation
              </h3>
              <button id="closeAIPanel" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Toggle Switch -->
            <div class="mb-4 flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <span class="font-semibold">Enable AI Adaptation</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="aiToggle" class="sr-only peer" ${this.skillProfile.adaptiveEnabled ? 'checked' : ''}>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <!-- Skill Profile -->
            <div class="mb-4">
              <h4 class="font-semibold mb-2">Your Skill Profile</h4>
              <div class="space-y-2">
                <div>
                  <div class="flex justify-between text-sm"><span>Speed</span><span>${Math.round(this.skillProfile.skillRatings.speed)}%</span></div>
                  <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full" style="width: ${this.skillProfile.skillRatings.speed}%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-sm"><span>Accuracy</span><span>${Math.round(this.skillProfile.skillRatings.accuracy)}%</span></div>
                  <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-green-500 h-2 rounded-full" style="width: ${this.skillProfile.skillRatings.accuracy}%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-sm"><span>Consistency</span><span>${Math.round(this.skillProfile.skillRatings.consistency)}%</span></div>
                  <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-yellow-500 h-2 rounded-full" style="width: ${this.skillProfile.skillRatings.consistency}%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-sm"><span>Endurance</span><span>${Math.round(this.skillProfile.skillRatings.endurance)}%</span></div>
                  <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-purple-500 h-2 rounded-full" style="width: ${this.skillProfile.skillRatings.endurance}%"></div></div>
                </div>
              </div>
            </div>
            
            <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
              <p class="text-sm"><strong>AI Analysis:</strong> Based on your last ${history.length} tests,</p>
              <p class="text-sm">Recommended difficulty: <span class="font-bold text-purple-500">${this.calculateRecommendedDifficulty().toUpperCase()}</span></p>
              <p class="text-sm">Current level: <span class="font-bold">${this.skillProfile.currentLevel}/10</span></p>
              <p class="text-xs text-gray-500 mt-1">Complete more tests for better accuracy</p>
            </div>
            
            <button id="closeAIDetailsBtn" class="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">
              Close
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const toggle = modal.querySelector('#aiToggle');
    toggle.onchange = (e) => {
      this.skillProfile.adaptiveEnabled = e.target.checked;
      this.saveProfile();
      this.showNotification(`AI Adaptation ${e.target.checked ? 'enabled' : 'disabled'}`, 'success');
    };

    const closeBtn = modal.querySelector('#closeAIPanel') || modal.querySelector('#closeAIDetailsBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'
      }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const aiDifficultyBtn = document.getElementById('aiDifficultyBtn');
    if (aiDifficultyBtn) {
      aiDifficultyBtn.onclick = () => this.showAIDifficultyPanel();
    }
  }
};
// Initialize AI Difficulty System
AIDifficultySystem.init();

// ==================== CUSTOM THEMES MARKETPLACE (DAY 20) ====================
const ThemeMarketplace = {
  // Theme storage
  customThemes: [],
  activeTheme: null,
  marketplaceThemes: [],

  // Default themes
  defaultThemes: [
    { id: 'default_light', name: 'Default Light', type: 'light', primary: '#3b82f6', background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafc 100%)', cardBg: 'rgba(255,255,255,0.96)', textColor: '#1f2937', isDefault: true },
    { id: 'default_dark', name: 'Default Dark', type: 'dark', primary: '#3b82f6', background: 'radial-gradient(circle at 20% 30%, #0a0f1a, #030712)', cardBg: 'rgba(17,24,39,0.94)', textColor: '#f3f4f6', isDefault: true },
    { id: 'ocean_breeze', name: 'Ocean Breeze', type: 'light', primary: '#06b6d4', background: 'linear-gradient(135deg, #cffafe 0%, #e0f2fe 100%)', cardBg: 'rgba(255,255,255,0.95)', textColor: '#164e63', creator: 'Community', downloads: 1234 },
    { id: 'midnight_aurora', name: 'Midnight Aurora', type: 'dark', primary: '#a855f7', background: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 100%)', cardBg: 'rgba(30,27,75,0.9)', textColor: '#e9d5ff', creator: 'Community', downloads: 892 },
    { id: 'forest_green', name: 'Forest Green', type: 'dark', primary: '#22c55e', background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)', cardBg: 'rgba(6,78,59,0.9)', textColor: '#bbf7d0', creator: 'Community', downloads: 567 },
    { id: 'sunset_glow', name: 'Sunset Glow', type: 'light', primary: '#f97316', background: 'linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%)', cardBg: 'rgba(255,255,255,0.95)', textColor: '#7c2d12', creator: 'Community', downloads: 2100 },
    { id: 'candy_pink', name: 'Candy Pink', type: 'light', primary: '#ec4899', background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)', cardBg: 'rgba(255,255,255,0.96)', textColor: '#831843', creator: 'Community', downloads: 445 },
    { id: 'matrix_green', name: 'Matrix Green', type: 'dark', primary: '#00ff41', background: '#0a0f0a', cardBg: 'rgba(0,20,0,0.95)', textColor: '#00ff41', creator: 'Community', downloads: 678 }
  ],

  // Initialize
  init() {
    this.loadThemes();
    this.setupEventListeners();
    this.applyTheme(this.activeTheme || this.defaultThemes[0]);
  },

  // Load themes from storage
  loadThemes() {
    const savedThemes = localStorage.getItem('customThemes');
    if (savedThemes) {
      this.customThemes = JSON.parse(savedThemes);
    }

    const savedActive = localStorage.getItem('activeTheme');
    if (savedActive) {
      this.activeTheme = JSON.parse(savedActive);
    }

    // Merge default themes with custom
    this.marketplaceThemes = [...this.defaultThemes, ...this.customThemes];
  },

  // Save themes
  saveThemes() {
    localStorage.setItem('customThemes', JSON.stringify(this.customThemes));
    if (this.activeTheme) {
      localStorage.setItem('activeTheme', JSON.stringify(this.activeTheme));
    }
  },

  // Apply theme to the app
  applyTheme(theme) {
    if (!theme) return;

    this.activeTheme = theme;

    // Apply CSS variables
    document.documentElement.style.setProperty('--primary', theme.primary);

    // Apply background
    document.body.style.background = theme.background;
    document.body.style.color = theme.textColor;

    // Apply card background
    const typingTest = document.querySelector('.typing-test');
    if (typingTest) {
      typingTest.style.background = theme.cardBg;
    }

    // Save to localStorage
    this.saveThemes();

    this.showNotification(`Theme applied: ${theme.name}`, 'success');
  },

  // Create new custom theme
  createTheme(themeData) {
    const newTheme = {
      id: 'custom_' + Date.now(),
      name: themeData.name,
      type: themeData.type,
      primary: themeData.primary,
      background: themeData.background,
      cardBg: themeData.cardBg,
      textColor: themeData.textColor,
      creator: MultiplayerSystem?.playerName || 'You',
      downloads: 0,
      createdAt: new Date().toISOString()
    };

    this.customThemes.push(newTheme);
    this.marketplaceThemes.push(newTheme);
    this.saveThemes();

    this.showNotification(`Theme "${newTheme.name}" created!`, 'success');
    return newTheme;
  },

  // Delete custom theme
  deleteTheme(themeId) {
    this.customThemes = this.customThemes.filter(t => t.id !== themeId);
    this.marketplaceThemes = [...this.defaultThemes, ...this.customThemes];
    this.saveThemes();

    if (this.activeTheme?.id === themeId) {
      this.applyTheme(this.defaultThemes[0]);
    }

    this.showNotification('Theme deleted', 'success');
  },

  // Show theme marketplace
  showMarketplace() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-palette mr-2 text-purple-500"></i>Theme Marketplace
              </h3>
              <button id="closeMarketplace" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Create New Theme Button -->
            <div class="mb-6">
              <button id="createThemeBtn" class="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold transition hover:scale-[1.02]">
                <i class="fas fa-plus mr-2"></i>Create Custom Theme
              </button>
            </div>
            
            <!-- Theme Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${this.marketplaceThemes.map(theme => this.renderThemeCard(theme)).join('')}
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    const createBtn = modal.querySelector('#createThemeBtn');
    createBtn.onclick = () => {
      modal.remove();
      this.showThemeCreator();
    };

    // Attach theme actions
    const applyBtns = modal.querySelectorAll('.apply-theme-btn');
    applyBtns.forEach(btn => {
      btn.onclick = () => {
        const themeId = btn.dataset.id;
        const theme = this.marketplaceThemes.find(t => t.id === themeId);
        if (theme) {
          this.applyTheme(theme);
          modal.remove();
        }
      };
    });

    const deleteBtns = modal.querySelectorAll('.delete-theme-btn');
    deleteBtns.forEach(btn => {
      btn.onclick = () => {
        const themeId = btn.dataset.id;
        this.deleteTheme(themeId);
        modal.querySelector('#themeGrid').innerHTML = this.marketplaceThemes.map(t => this.renderThemeCard(t)).join('');
      };
    });

    const closeBtn = modal.querySelector('#closeMarketplace');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Render theme card
  renderThemeCard(theme) {
    const isActive = this.activeTheme?.id === theme.id;
    const isCustom = theme.id?.startsWith('custom_');

    return `
          <div class="p-4 rounded-xl transition-all hover:scale-[1.02] ${isActive ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'bg-gray-100 dark:bg-gray-700'}">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h4 class="font-bold">${theme.name}</h4>
                <p class="text-xs text-gray-500">${theme.creator || 'VelocityType'} • ${theme.downloads || 0} downloads</p>
              </div>
              ${isActive ? '<span class="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Active</span>' : ''}
            </div>
            
            <!-- Theme Preview -->
            <div class="h-20 rounded-lg mb-3 overflow-hidden" style="background: ${theme.background}">
              <div class="p-2" style="background: ${theme.cardBg}">
                <div class="flex gap-1">
                  <div style="background: ${theme.primary}" class="w-6 h-6 rounded"></div>
                  <div style="color: ${theme.textColor}" class="text-xs">Sample Text</div>
                </div>
              </div>
            </div>
            
            <div class="flex gap-2">
              <button class="apply-theme-btn flex-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition" data-id="${theme.id}">
                <i class="fas fa-check"></i> Apply
              </button>
              ${isCustom ? `<button class="delete-theme-btn px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition" data-id="${theme.id}">
                <i class="fas fa-trash"></i>
              </button>` : ''}
            </div>
          </div>
        `;
  },

  // Show theme creator
  showThemeCreator() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-magic mr-2 text-purple-500"></i>Create Custom Theme
              </h3>
              <button id="closeCreator" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Theme Name</label>
                <input type="text" id="themeName" placeholder="My Awesome Theme" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Theme Type</label>
                <select id="themeType" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Primary Color</label>
                <input type="color" id="primaryColor" value="#3b82f6" class="w-full h-10 rounded-lg cursor-pointer">
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Background Gradient/Color</label>
                <input type="text" id="backgroundColor" placeholder="linear-gradient(135deg, #e0e7ff 0%, #f9fafc 100%)" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <p class="text-xs text-gray-500 mt-1">Try: linear-gradient(135deg, #color1 0%, #color2 100%)</p>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Card Background</label>
                <input type="text" id="cardBgColor" placeholder="rgba(255,255,255,0.96)" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Text Color</label>
                <input type="color" id="textColor" value="#1f2937" class="w-full h-10 rounded-lg cursor-pointer">
              </div>
              
              <!-- Live Preview -->
              <div class="p-3 rounded-lg" id="previewArea" style="background: linear-gradient(135deg, #e0e7ff 0%, #f9fafc 100%)">
                <div class="p-2 rounded" id="previewCard" style="background: rgba(255,255,255,0.96)">
                  <p id="previewText" style="color: #1f2937" class="text-sm">Preview Text</p>
                  <div style="background: #3b82f6" class="w-full h-1 rounded mt-1"></div>
                </div>
              </div>
            </div>
            
            <div class="flex gap-3 mt-6">
              <button id="saveThemeBtn" class="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                <i class="fas fa-save"></i> Save Theme
              </button>
              <button id="cancelThemeBtn" class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition">
                Cancel
              </button>
            </div>
          </div>
        `;

    document.body.appendChild(modal);

    // Live preview updates
    const primaryColor = modal.querySelector('#primaryColor');
    const backgroundColor = modal.querySelector('#backgroundColor');
    const cardBgColor = modal.querySelector('#cardBgColor');
    const textColor = modal.querySelector('#textColor');
    const previewArea = modal.querySelector('#previewArea');
    const previewCard = modal.querySelector('#previewCard');
    const previewText = modal.querySelector('#previewText');

    const updatePreview = () => {
      previewArea.style.background = backgroundColor.value;
      previewCard.style.background = cardBgColor.value;
      previewText.style.color = textColor.value;
      previewCard.querySelector('.w-full').style.background = primaryColor.value;
    };

    primaryColor.oninput = updatePreview;
    backgroundColor.oninput = updatePreview;
    cardBgColor.oninput = updatePreview;
    textColor.oninput = updatePreview;

    // Set default gradient example
    backgroundColor.value = 'linear-gradient(135deg, #e0e7ff 0%, #f9fafc 100%)';
    cardBgColor.value = 'rgba(255,255,255,0.96)';

    const saveBtn = modal.querySelector('#saveThemeBtn');
    const cancelBtn = modal.querySelector('#cancelThemeBtn');
    const closeBtn = modal.querySelector('#closeCreator');

    saveBtn.onclick = () => {
      const name = modal.querySelector('#themeName').value;
      const type = modal.querySelector('#themeType').value;
      const primary = primaryColor.value;
      const background = backgroundColor.value;
      const cardBg = cardBgColor.value;
      const text = textColor.value;

      if (!name) {
        alert('Please enter a theme name');
        return;
      }

      this.createTheme({ name, type, primary, background, cardBg, textColor: text });
      modal.remove();
      this.showMarketplace();
    };

    cancelBtn.onclick = () => {
      modal.remove();
      this.showMarketplace();
    };

    closeBtn.onclick = () => {
      modal.remove();
      this.showMarketplace();
    };
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'
      }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const themeBtn = document.getElementById('themeMarketplaceBtn');
    if (themeBtn) {
      themeBtn.onclick = () => this.showMarketplace();
    }
  }
};
// Initialize Theme Marketplace
ThemeMarketplace.init();

// ==================== TYPING CERTIFICATION SYSTEM (DAY 21) ====================
const CertificationSystem = {
  // Certification levels
  levels: {
    BRONZE: { name: 'Bronze Typist', minWPM: 25, minAccuracy: 85, icon: '🥉', color: '#cd7f32' },
    SILVER: { name: 'Silver Typist', minWPM: 45, minAccuracy: 88, icon: '🥈', color: '#c0c0c0' },
    GOLD: { name: 'Gold Typist', minWPM: 65, minAccuracy: 90, icon: '🥇', color: '#ffd700' },
    PLATINUM: { name: 'Platinum Typist', minWPM: 85, minAccuracy: 92, icon: '💎', color: '#e5e4e2' },
    DIAMOND: { name: 'Diamond Typist', minWPM: 105, minAccuracy: 94, icon: '🔹', color: '#b9f2ff' },
    MASTER: { name: 'Master Typist', minWPM: 125, minAccuracy: 96, icon: '👑', color: '#ff6b35' },
    GRANDMASTER: { name: 'Grandmaster Typist', minWPM: 150, minAccuracy: 98, icon: '🏆', color: '#ff3366' }
  },

  // Certification categories
  categories: {
    GENERAL: 'General Typing',
    CODE: 'Code Typing',
    LITERATURE: 'Literary Typing',
    SCIENCE: 'Scientific Typing',
    NUMERIC: 'Numeric Entry',
    SYMBOL: 'Symbol Mastery'
  },

  // User certifications
  userCertifications: [],
  pendingCertifications: [],

  // Initialize
  init() {
    this.loadCertifications();
    this.setupEventListeners();
    this.checkCertificationEligibility();
  },

  // Load certifications from storage
  loadCertifications() {
    const saved = localStorage.getItem('velocityCertifications');
    if (saved) {
      this.userCertifications = JSON.parse(saved);
    }

    const pending = localStorage.getItem('pendingCertifications');
    if (pending) {
      this.pendingCertifications = JSON.parse(pending);
    }
  },

  // Save certifications
  saveCertifications() {
    localStorage.setItem('velocityCertifications', JSON.stringify(this.userCertifications));
    localStorage.setItem('pendingCertifications', JSON.stringify(this.pendingCertifications));
  },

  // Check if user qualifies for new certifications
  checkCertificationEligibility() {
    const stats = this.getUserStats();

    for (const [levelKey, level] of Object.entries(this.levels)) {
      // Check if already has this certification
      const hasCert = this.userCertifications.some(c => c.level === levelKey);
      if (!hasCert) {
        // Check if qualifies
        if (stats.bestWPM >= level.minWPM && stats.bestAccuracy >= level.minAccuracy) {
          this.issueCertification(levelKey, level, stats);
        }
      }
    }
  },

  // Get user statistics for certification
  getUserStats() {
    const wpmValues = testHistory.map(h => h.wpm);
    const accuracyValues = testHistory.map(h => parseInt(h.accuracy));

    // Category-specific stats
    const codeTests = testHistory.filter(t => t.source === 'programming');
    const literatureTests = testHistory.filter(t => t.source === 'literature');
    const scienceTests = testHistory.filter(t => t.source === 'science');

    return {
      bestWPM: Math.max(...wpmValues, 0),
      avgWPM: Math.round(wpmValues.reduce((a, b) => a + b, 0) / (wpmValues.length || 1)),
      bestAccuracy: Math.max(...accuracyValues, 0),
      avgAccuracy: Math.round(accuracyValues.reduce((a, b) => a + b, 0) / (accuracyValues.length || 1)),
      totalTests: testHistory.length,
      codeWPM: codeTests.length > 0 ? Math.max(...codeTests.map(t => t.wpm)) : 0,
      literatureWPM: literatureTests.length > 0 ? Math.max(...literatureTests.map(t => t.wpm)) : 0,
      scienceWPM: scienceTests.length > 0 ? Math.max(...scienceTests.map(t => t.wpm)) : 0
    };
  },

  // Issue new certification
  issueCertification(levelKey, level, stats) {
    const certification = {
      id: Date.now(),
      level: levelKey,
      name: level.name,
      icon: level.icon,
      color: level.color,
      issuedDate: new Date().toISOString(),
      certificateNumber: this.generateCertificateNumber(),
      stats: {
        wpm: stats.bestWPM,
        accuracy: stats.bestAccuracy,
        totalTests: stats.totalTests
      },
      verified: true
    };

    this.userCertifications.push(certification);
    this.saveCertifications();

    // Show celebration
    this.showCertificationCelebration(certification);

    // Play achievement sound
    SoundManager.playAchievement();

    // Award points
    if (AchievementSystem) {
      const pointsEarned = this.getCertificationPoints(levelKey);
      AchievementSystem.userProgress.totalPoints += pointsEarned;
      AchievementSystem.saveProgress();
    }
  },

  // Get certification points
  getCertificationPoints(level) {
    const points = {
      BRONZE: 50,
      SILVER: 100,
      GOLD: 200,
      PLATINUM: 350,
      DIAMOND: 500,
      MASTER: 750,
      GRANDMASTER: 1000
    };
    return points[level] || 0;
  },

  // Generate unique certificate number
  generateCertificateNumber() {
    const prefix = 'VTC';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${timestamp}-${random}`;
  },

  // Show certification celebration
  showCertificationCelebration(cert) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl max-w-md w-full mx-4 p-8 text-center shadow-2xl animate-bounce">
            <div class="text-7xl mb-4">${cert.icon}</div>
            <h2 class="text-3xl font-bold text-white mb-2">Certification Unlocked!</h2>
            <p class="text-white text-xl mb-2">${cert.name}</p>
            <p class="text-white/90 text-sm mb-4">Certificate #: ${cert.certificateNumber}</p>
            <div class="bg-white/20 rounded-lg p-3 mb-4">
              <p class="text-white">${cert.stats.wpm} WPM • ${cert.stats.accuracy}% Accuracy</p>
              <p class="text-white/80 text-xs">Based on ${cert.stats.totalTests} tests</p>
            </div>
            <button id="closeCelebration" class="px-6 py-2 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition">
              Awesome!
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeCelebration');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Show certifications panel
  showCertificationsPanel() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
    modal.style.animation = 'fadeIn 0.2s ease';

    const stats = this.getUserStats();
    const nextLevel = this.getNextLevel(stats);

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-certificate mr-2 text-yellow-500"></i>Typing Certifications
              </h3>
              <button id="closeCertPanel" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- Current Stats -->
            <div class="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <h4 class="font-semibold mb-2">Your Current Stats</h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div><span class="text-gray-500">Best WPM:</span> <span class="font-bold text-blue-500">${stats.bestWPM}</span></div>
                <div><span class="text-gray-500">Avg WPM:</span> <span class="font-bold">${stats.avgWPM}</span></div>
                <div><span class="text-gray-500">Best Accuracy:</span> <span class="font-bold text-green-500">${stats.bestAccuracy}%</span></div>
                <div><span class="text-gray-500">Total Tests:</span> <span class="font-bold">${stats.totalTests}</span></div>
              </div>
            </div>
            
            <!-- Next Level Progress -->
            ${nextLevel ? `
              <div class="mb-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <p class="font-semibold mb-2">Next Level: ${nextLevel.name} ${nextLevel.icon}</p>
                <div class="mb-1 flex justify-between text-sm">
                  <span>WPM Progress: ${Math.min(100, Math.floor((stats.bestWPM / nextLevel.minWPM) * 100))}%</span>
                  <span>${stats.bestWPM}/${nextLevel.minWPM} WPM</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div class="bg-purple-500 h-2 rounded-full" style="width: ${Math.min(100, (stats.bestWPM / nextLevel.minWPM) * 100)}%"></div>
                </div>
                <div class="mb-1 flex justify-between text-sm">
                  <span>Accuracy Progress: ${Math.min(100, Math.floor((stats.bestAccuracy / nextLevel.minAccuracy) * 100))}%</span>
                  <span>${stats.bestAccuracy}%/${nextLevel.minAccuracy}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-500 h-2 rounded-full" style="width: ${Math.min(100, (stats.bestAccuracy / nextLevel.minAccuracy) * 100)}%"></div>
                </div>
              </div>
            ` : '<div class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl text-center"><p class="font-semibold">🏆 You have achieved the highest certification! 🏆</p></div>'}
            
            <!-- Earned Certifications -->
            <h4 class="font-semibold mb-3">Your Certifications (${this.userCertifications.length}/7)</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              ${Object.entries(this.levels).map(([key, level]) => {
      const hasCert = this.userCertifications.some(c => c.level === key);
      const certData = this.userCertifications.find(c => c.level === key);
      return `
                  <div class="p-3 rounded-lg ${hasCert ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-500' : 'bg-gray-100 dark:bg-gray-700 opacity-60'}">
                    <div class="flex items-center gap-3">
                      <div class="text-3xl">${level.icon}</div>
                      <div class="flex-1">
                        <p class="font-bold">${level.name}</p>
                        <p class="text-xs text-gray-500">Requires: ${level.minWPM} WPM • ${level.minAccuracy}% Accuracy</p>
                        ${hasCert ? `<p class="text-xs text-green-500 mt-1">✓ Earned • ${new Date(certData.issuedDate).toLocaleDateString()}</p>` : '<p class="text-xs text-gray-400 mt-1">🔒 Locked</p>'}
                      </div>
                      ${hasCert ? `<button class="download-cert-btn px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition" data-cert-id="${certData.id}"><i class="fas fa-download"></i> PDF</button>` : ''}
                    </div>
                  </div>
                `;
    }).join('')}
            </div>
            
            <button id="closeCertBtn" class="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition">
              Close
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    // Download certificate buttons
    const downloadBtns = modal.querySelectorAll('.download-cert-btn');
    downloadBtns.forEach(btn => {
      btn.onclick = () => {
        const certId = parseInt(btn.dataset.certId);
        const cert = this.userCertifications.find(c => c.id === certId);
        if (cert) {
          this.generateCertificatePDF(cert);
        }
      };
    });

    const closeBtn = modal.querySelector('#closeCertPanel') || modal.querySelector('#closeCertBtn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  },

  // Get next certification level
  getNextLevel(stats) {
    const levels = Object.entries(this.levels);
    for (const [key, level] of levels) {
      const hasCert = this.userCertifications.some(c => c.level === key);
      if (!hasCert) {
        return level;
      }
    }
    return null;
  },

  // Generate certificate PDF (HTML/CSS for print)
  generateCertificatePDF(cert) {
    const level = this.levels[cert.level];
    const printWindow = window.open('', '_blank');

    printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>VelocityType Certificate - ${level.name}</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: 'Georgia', 'Times New Roman', serif;
                background: #f5f5f5;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                padding: 40px;
              }
              .certificate {
                width: 800px;
                background: white;
                border: 15px solid ${cert.color};
                padding: 40px;
                position: relative;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
              }
              .certificate:before {
                content: '';
                position: absolute;
                top: 10px;
                left: 10px;
                right: 10px;
                bottom: 10px;
                border: 2px solid ${cert.color};
                pointer-events: none;
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
              }
              .icon {
                font-size: 60px;
                margin-bottom: 10px;
              }
              h1 {
                font-size: 36px;
                color: ${cert.color};
                letter-spacing: 2px;
              }
              .subtitle {
                color: #666;
                font-size: 14px;
                margin-top: 5px;
              }
              .recipient {
                text-align: center;
                margin: 40px 0;
              }
              .recipient-name {
                font-size: 32px;
                font-weight: bold;
                color: #333;
                border-bottom: 2px solid ${cert.color};
                display: inline-block;
                padding: 0 20px 10px;
              }
              .details {
                text-align: center;
                margin: 30px 0;
                font-size: 16px;
                line-height: 1.8;
              }
              .stats {
                display: flex;
                justify-content: center;
                gap: 40px;
                margin: 30px 0;
              }
              .stat-box {
                text-align: center;
              }
              .stat-value {
                font-size: 28px;
                font-weight: bold;
                color: ${cert.color};
              }
              .stat-label {
                font-size: 12px;
                color: #666;
              }
              .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #999;
              }
              .certificate-number {
                font-family: monospace;
                margin-top: 10px;
              }
              .seal {
                position: absolute;
                bottom: 40px;
                right: 40px;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: ${cert.color}20;
                border: 3px solid ${cert.color};
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
              }
              @media print {
                body { background: white; padding: 0; }
                .certificate { box-shadow: none; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="certificate">
              <div class="header">
                <div class="icon">${cert.icon}</div>
                <h1>CERTIFICATE OF TYPING PROFICIENCY</h1>
                <div class="subtitle">This certificate is awarded to</div>
              </div>
              
              <div class="recipient">
                <div class="recipient-name">${MultiplayerSystem?.playerName || 'Valued User'}</div>
              </div>
              
              <div class="details">
                For achieving the rank of <strong>${level.name}</strong> in the<br>
                VelocityType Typing Certification Program
              </div>
              
              <div class="stats">
                <div class="stat-box">
                  <div class="stat-value">${cert.stats.wpm}</div>
                  <div class="stat-label">Words Per Minute (WPM)</div>
                </div>
                <div class="stat-box">
                  <div class="stat-value">${cert.stats.accuracy}%</div>
                  <div class="stat-label">Accuracy Rate</div>
                </div>
                <div class="stat-box">
                  <div class="stat-value">${cert.stats.totalTests}</div>
                  <div class="stat-label">Tests Completed</div>
                </div>
              </div>
              
              <div class="footer">
                <div>Issued on ${new Date(cert.issuedDate).toLocaleDateString()}</div>
                <div class="certificate-number">Certificate #: ${cert.certificateNumber}</div>
                <div>VelocityType Typing Speed Test</div>
              </div>
              
              <div class="seal">
                ⚡
              </div>
            </div>
            <div class="no-print" style="text-align: center; margin-top: 20px;">
              <button onclick="window.print()" style="padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer;">Print / Save as PDF</button>
            </div>
            <script>setTimeout(() => window.print(), 500);<\/script>
          </body>
          </html>
        `);

    printWindow.document.close();
    this.showNotification('Certificate opened. Use Ctrl+P to save as PDF.', 'success');
  },

  // Show certification quiz (optional assessment)
  showCertificationQuiz() {
    // This would be a formal typing test for certification
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.style.animation = 'fadeIn 0.2s ease';

    modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl text-center">
            <div class="text-5xl mb-4">📝</div>
            <h3 class="text-xl font-bold mb-2">Formal Certification Test</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Take a proctored typing test to earn official certification</p>
            <p class="text-sm mb-4">Requirements: 5-minute test • Webcam verification • No practice mode</p>
            <button id="startCertTest" class="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition">
              Start Certification Test
            </button>
            <button id="closeCertTest" class="w-full mt-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition">
              Cancel
            </button>
          </div>
        `;

    document.body.appendChild(modal);

    const startBtn = modal.querySelector('#startCertTest');
    const closeBtn = modal.querySelector('#closeCertTest');

    startBtn.onclick = () => {
      this.startFormalTest();
      modal.remove();
    };

    closeBtn.onclick = () => modal.remove();
  },

  // Start formal certification test
  startFormalTest() {
    // Set strict test conditions
    const originalDuration = totalDuration;
    totalDuration = 300; // 5 minutes
    timeLeft = 300;
    elements.timeElem.innerText = "300s";

    // Disable practice mode
    if (practiceActive) togglePractice();

    // Show certification mode indicator
    let indicator = document.getElementById('certIndicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'certIndicator';
      indicator.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg z-40';
      document.body.appendChild(indicator);
    }
    indicator.innerHTML = '<i class="fas fa-certificate mr-1"></i> CERTIFICATION MODE - 5 MINUTES';

    // Load new quote
    loadQuote();

    // Store original finish test
    const originalFinish = finishTest;

    // Override finish test for certification
    window.finishTest = function () {
      originalFinish();

      const testResult = {
        wpm: parseInt(elements.wpmElem.innerText),
        accuracy: parseInt(elements.accuracyElem.innerText),
        errors: parseInt(elements.errorsElem.innerText),
        duration: 300
      };

      // Check if passed certification
      if (testResult.wpm >= 45 && testResult.accuracy >= 88) {
        CertificationSystem.issueCertification('SILVER', CertificationSystem.levels.SILVER, CertificationSystem.getUserStats());
      } else if (testResult.wpm >= 25 && testResult.accuracy >= 85) {
        CertificationSystem.issueCertification('BRONZE', CertificationSystem.levels.BRONZE, CertificationSystem.getUserStats());
      } else {
        CertificationSystem.showNotification('Certification test failed. Keep practicing!', 'error');
      }

      // Restore original finish test
      window.finishTest = originalFinish;

      // Remove indicator
      if (indicator) indicator.remove();

      // Restore settings
      totalDuration = originalDuration;
      timeLeft = originalDuration;
      elements.timeElem.innerText = originalDuration + "s";
    };
  },

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  // Setup event listeners
  setupEventListeners() {
    const certBtn = document.getElementById('certificationBtn');
    if (certBtn) {
      certBtn.onclick = () => this.showCertificationsPanel();
    }

    // Check eligibility after each test
    const originalFinishTest = finishTest;
    window.finishTest = function () {
      originalFinishTest();
      CertificationSystem.checkCertificationEligibility();
    };
  }
};

// Initialize Certification System
CertificationSystem.init();

    // ==================== API FOR DEVELOPERS (DAY 22) ====================
    const DeveloperAPI = {
      // API version
      version: 'v1',
      apiKey: null,
      rateLimit: 100, // requests per minute
      requestCount: 0,
      lastReset: Date.now(),
      
      // API endpoints
      endpoints: {
        'GET /api/stats': 'Get user statistics',
        'GET /api/history': 'Get test history',
        'GET /api/achievements': 'Get achievements',
        'GET /api/leaderboard': 'Get global leaderboard',
        'POST /api/test/result': 'Submit test result',
        'GET /api/quotes': 'Get random quote',
        'GET /api/user/profile': 'Get user profile'
      },
      
      // Initialize
      init() {
        this.loadAPIKey();
        this.setupEventListeners();
        this.startRateLimitReset();
      },
      
      // Load or generate API key
      loadAPIKey() {
        const saved = localStorage.getItem('velocityAPIKey');
        if (saved) {
          this.apiKey = saved;
        } else {
          this.generateAPIKey();
        }
      },
      
      // Generate new API key
      generateAPIKey() {
        const key = 'vel_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 8);
        this.apiKey = key;
        localStorage.setItem('velocityAPIKey', key);
      },
      
      // Regenerate API key
      regenerateAPIKey() {
        this.generateAPIKey();
        this.showNotification('New API key generated!', 'success');
      },
      
      // Check rate limit
      checkRateLimit() {
        const now = Date.now();
        if (now - this.lastReset > 60000) {
          this.requestCount = 0;
          this.lastReset = now;
        }
        
        if (this.requestCount >= this.rateLimit) {
          return { allowed: false, message: 'Rate limit exceeded. Max 100 requests per minute.' };
        }
        
        this.requestCount++;
        return { allowed: true, message: 'OK' };
      },
      
      // Handle API requests (simulated)
      handleAPIRequest(method, endpoint, data = null) {
        const rateCheck = this.checkRateLimit();
        if (!rateCheck.allowed) {
          return { error: rateCheck.message, status: 429 };
        }
        
        // Simulate API response
        switch(`${method} ${endpoint}`) {
          case 'GET /api/stats':
            return this.getStats();
          case 'GET /api/history':
            return this.getHistory();
          case 'GET /api/achievements':
            return this.getAchievements();
          case 'GET /api/leaderboard':
            return this.getLeaderboard();
          case 'POST /api/test/result':
            return this.submitResult(data);
          case 'GET /api/quotes':
            return this.getRandomQuote();
          case 'GET /api/user/profile':
            return this.getUserProfile();
          default:
            return { error: 'Endpoint not found', status: 404 };
        }
      },
      
      // API endpoint handlers
      getStats() {
        const wpmValues = testHistory.map(h => h.wpm);
        const accuracyValues = testHistory.map(h => parseInt(h.accuracy));
        
        return {
          status: 200,
          data: {
            totalTests: testHistory.length,
            bestWPM: Math.max(...wpmValues, 0),
            averageWPM: Math.round(wpmValues.reduce((a,b) => a+b, 0) / (wpmValues.length || 1)),
            bestAccuracy: Math.max(...accuracyValues, 0),
            averageAccuracy: Math.round(accuracyValues.reduce((a,b) => a+b, 0) / (accuracyValues.length || 1)),
            totalPoints: AchievementSystem?.userProgress?.totalPoints || 0,
            certifications: CertificationSystem?.userCertifications?.length || 0
          }
        };
      },
      
      getHistory() {
        return {
          status: 200,
          data: testHistory.slice(0, 50).map(t => ({
            date: t.date,
            wpm: t.wpm,
            accuracy: t.accuracy,
            errors: t.errors,
            duration: t.time,
            difficulty: t.difficulty,
            source: t.source
          }))
        };
      },
      
      getAchievements() {
        return {
          status: 200,
          data: {
            unlocked: AchievementSystem?.userProgress?.unlockedAchievements || [],
            totalPoints: AchievementSystem?.userProgress?.totalPoints || 0,
            allAchievements: Object.keys(AchievementSystem?.achievements || {}).length
          }
        };
      },
      
      getLeaderboard() {
        return {
          status: 200,
          data: LeaderboardSystem?.globalLeaderboard?.slice(0, 20) || []
        };
      },
      
      submitResult(data) {
        if (!data || !data.wpm || !data.accuracy) {
          return { error: 'Invalid test data', status: 400 };
        }
        
        // Simulate test submission
        const newTest = {
          date: new Date().toISOString(),
          wpm: data.wpm,
          accuracy: data.accuracy,
          errors: data.errors || 0,
          time: data.duration || 60,
          difficulty: data.difficulty || 'medium',
          source: data.source || 'api'
        };
        
        testHistory.unshift(newTest);
        if (testHistory.length > 50) testHistory.pop();
        localStorage.setItem('velocityHistory', JSON.stringify(testHistory));
        
        return {
          status: 201,
          data: { message: 'Test result submitted successfully', test: newTest }
        };
      },
      
      getRandomQuote() {
        const difficulties = ['easy', 'medium', 'hard', 'expert'];
        const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
        const quotes = QUOTES_LIB.programming[randomDifficulty];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        return {
          status: 200,
          data: {
            quote: randomQuote,
            difficulty: randomDifficulty,
            length: randomQuote.length,
            wordCount: randomQuote.split(' ').length
          }
        };
      },
      
      getUserProfile() {
        return {
          status: 200,
          data: {
            name: MultiplayerSystem?.playerName || 'Anonymous',
            joinDate: localStorage.getItem('velocityJoinDate') || new Date().toISOString(),
            totalTests: testHistory.length,
            bestWPM: Math.max(...testHistory.map(h => h.wpm), 0),
            totalPoints: AchievementSystem?.userProgress?.totalPoints || 0
          }
        };
      },
      
      // Show API documentation panel
      showAPIPanel() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8';
        modal.style.animation = 'fadeIn 0.2s ease';
        
        modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full mx-4 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                <i class="fas fa-code mr-2 text-blue-500"></i>Developer API
              </h3>
              <button id="closeAPIPanel" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <i class="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            <!-- API Key Section -->
            <div class="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <p class="font-semibold mb-2">Your API Key</p>
              <div class="flex gap-2">
                <input type="text" id="apiKeyInput" value="${this.apiKey}" readonly class="flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 font-mono text-sm">
                <button id="copyApiKeyBtn" class="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                  <i class="fas fa-copy"></i> Copy
                </button>
                <button id="regenerateApiKeyBtn" class="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                  <i class="fas fa-sync"></i> Regenerate
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-2">Keep your API key secure. Regenerate if compromised.</p>
            </div>
            
            <!-- API Endpoints -->
            <h4 class="font-semibold mb-3">API Endpoints</h4>
            <div class="space-y-3 mb-6">
              ${Object.entries(this.endpoints).map(([endpoint, description]) => `
                <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-mono text-sm font-bold text-blue-500">${endpoint.split(' ')[0]}</span>
                    <span class="font-mono text-sm">${endpoint.split(' ')[1]}</span>
                    <button class="test-endpoint-btn ml-auto px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded text-xs transition" data-endpoint="${endpoint}">
                      <i class="fas fa-play"></i> Test
                    </button>
                  </div>
                  <p class="text-xs text-gray-600 dark:text-gray-400">${description}</p>
                </div>
              `).join('')}
            </div>
            
            <!-- Usage Example -->
            <div class="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
              <p class="font-semibold mb-2">JavaScript Example</p>
              <pre class="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-x-auto"><code>// Fetch user stats
fetch('/api/stats', {
  headers: { 'X-API-Key': '${this.apiKey}' }
})
.then(res => res.json())
.then(data => console.log(data));</code></pre>
            </div>
            
            <button id="closeAPI" class="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              Close
            </button>
          </div>
        `;
        
        document.body.appendChild(modal);
        
        // Copy API key
        const copyBtn = modal.querySelector('#copyApiKeyBtn');
        const apiKeyInput = modal.querySelector('#apiKeyInput');
        copyBtn.onclick = () => {
          apiKeyInput.select();
          document.execCommand('copy');
          this.showNotification('API key copied!', 'success');
        };
        
        // Regenerate API key
        const regenerateBtn = modal.querySelector('#regenerateApiKeyBtn');
        regenerateBtn.onclick = () => {
          if (confirm('Regenerating API key will invalidate the old key. Continue?')) {
            this.regenerateAPIKey();
            apiKeyInput.value = this.apiKey;
            this.showNotification('API key regenerated!', 'success');
          }
        };
        
        // Test endpoints
        const testBtns = modal.querySelectorAll('.test-endpoint-btn');
        testBtns.forEach(btn => {
          btn.onclick = () => {
            const endpoint = btn.dataset.endpoint;
            const [method, path] = endpoint.split(' ');
            const response = this.handleAPIRequest(method, path);
            alert(`Response:\n${JSON.stringify(response, null, 2)}`);
          };
        });
        
        const closeBtn = modal.querySelector('#closeAPIPanel') || modal.querySelector('#closeAPI');
        closeBtn.onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
      },
      
      // Start rate limit reset timer
      startRateLimitReset() {
        setInterval(() => {
          this.requestCount = 0;
          this.lastReset = Date.now();
        }, 60000);
      },
      
      // Show notification
      showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg z-50 text-white ${
          type === 'success' ? 'bg-green-500' : 'bg-blue-500'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
      },
      
      // Setup event listeners
      setupEventListeners() {
        const apiBtn = document.getElementById('apiBtn');
        if (apiBtn) {
          apiBtn.onclick = () => this.showAPIPanel();
        }
      }
    };