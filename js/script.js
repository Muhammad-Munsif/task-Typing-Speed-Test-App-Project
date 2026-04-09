
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
function resetTestState() { clearInterval(timer); isTyping = false; testDone = false; errors = 0; totalTypedChars = 0; correctCharsTyped = 0; elements.quoteInput.value = ""; elements.quoteInput.disabled = false; timeLeft = practiceActive ? 9999 : totalDuration; if (!practiceActive) elements.timeElem.innerText = timeLeft + "s"; else elements.timeElem.innerText = "∞"; elements.wpmElem.innerText = "0"; elements.rawWpmElem.innerText = "0"; elements.accuracyElem.innerText = "0%"; elements.errorsElem.innerText = "0"; elements.charPerSecElem.innerText = "0"; elements.timeElapsedElem.innerText = "0"; elements.charCountSpan.innerText = `0/${currentQuoteText.length}`; elements.progressFill.style.width = "0%"; startTime = null; const quoteChars = elements.quoteDisplay.querySelectorAll(".char"); quoteChars.forEach(c => c.classList.remove("correct", "incorrect", "current", "extra")); if (currentQuoteText.length) quoteChars[0]?.classList.add("current"); elements.quoteInput.focus(); }
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
        // Achievements
      const achievementsToggle = document.getElementById('achievementsToggle');
      const viewAllAchievementsBtn = document.getElementById('viewAllAchievementsBtn');
      
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
        switch(color) {
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