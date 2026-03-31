
    // ==================== HUGE QUOTE DATABASE ====================
    // Easy: 20+ | Medium: 35+ | Hard: 50+ per category
    const QUOTES_LIB = {
      programming: {
        easy: [
          "HTML structures the web like bones.", "CSS paints the web with style.", "JavaScript makes pages come alive.", "Python emphasizes readability and fun.", "Git helps teams collaborate smoothly.", "React components build interactive UIs.", "APIs connect services like magic.", "Algorithms are recipes for computers.", "Debugging is like detective work.", "Open source fuels innovation.", "Code is poetry in logic.", "Functions are the building blocks.", "Arrays store collections elegantly.", "Loops repeat tasks efficiently.", "Variables hold data like containers.", "console.log() is a developer's best friend.", "Version control saves history.", "DRY: don't repeat yourself.", "KISS: keep it simple.", "Refactoring improves structure.", "Clean code is readable code."
        ],
        medium: [
          "Programming is the art of algorithmically expressing intent.", "Any fool can write code a computer understands; good programmers write human-readable code.", "First solve the problem, then craft the code.", "The best error message is the one never shown.", "Code is like humor: when you explain it, it's bad.", "Simplicity is the ultimate sophistication in software.", "Make it work, make it right, make it fast.", "Premature optimization is root of all evil.", "Software entropy increases without refactoring.", "Design patterns are reusable solutions to common problems.", "Testing ensures reliability and confidence.", "Code reviews spread knowledge and catch bugs.", "Technical debt slows future development.", "Documentation is love letter to future maintainers.", "Consistency beats cleverness in teams.", "YAGNI: You aren't gonna need it.", "Functional programming reduces side effects.", "Modular code enables reuse and clarity.", "Security must be built-in, not bolted-on.", "Performance is a feature, not an afterthought.", "The cloud enables scaling at will.", "Containers simplify deployment environments.", "CI/CD pipelines deliver value rapidly.", "Agile embraces change and iteration.", "Legacy code teaches humility and patience.", "Abstraction hides complexity wisely.", "Recursion can be elegant but risky.", "Big O notation measures efficiency.", "Concurrency demands careful coordination.", "AI and ML are reshaping our world.", "Edge computing brings power closer.", "Quantum computing unlocks new paradigms.", "Open source communities build amazing things.", "Version control is time travel for code.", "Pair programming boosts collaboration."
        ],
        hard: [
          "The process of preparing programs for digital computers is a meticulous art requiring systematic precision and creative problem-solving synergy.",
          "Programs must be written for people to read, and only incidentally for machines to execute — this is the fundamental truth of software craftsmanship.",
          "Simplicity is a prerequisite for reliability; complex systems often fail in unforeseen, chaotic ways that defy simple diagnosis.",
          "There are two ways of constructing a software design: make it so simple there are obviously no deficiencies, or so complex there are no obvious deficiencies.",
          "The computing scientist's main challenge is not to get confused by the complexities of his own making.",
          "Measuring programming progress by lines of code is like measuring aircraft building by weight.",
          "Software is a gas; it expands to fill its container with ever more complexity and features.",
          "The most important property of a program is whether it accomplishes the intention of its user.",
          "Object-oriented programming offers a powerful way to model real-world entities but requires disciplined design.",
          "Functional languages emphasize immutability, leading to fewer side effects and more predictable concurrency.",
          "Microservices architectures enable independent deployability at the cost of distributed system complexity.",
          "Event-driven systems excel at loose coupling but demand robust monitoring and idempotency strategies.",
          "Machine learning models are shaped by data quality more than algorithm sophistication.",
          "Low-level optimization requires deep understanding of CPU caches, branch prediction, and memory latency.",
          "High-level architecture decisions influence productivity more than language choices over the long term.",
          "A type system can prevent entire categories of runtime errors when used expressively and rigorously.",
          "Code maintainability hinges on naming, structure, and the principle of least astonishment.",
          "Refactoring legacy systems is a delicate art requiring comprehensive test coverage and incremental change.",
          "Distributed consensus algorithms like Raft and Paxos enable reliable coordination in unreliable networks.",
          "Database indexing strategies separate efficient queries from full-table scan nightmares.",
          "Security by design means threat modeling from day one, not as an afterthought during audits.",
          "The UNIX philosophy: write programs that do one thing well and work together via text streams.",
          "Reactive programming shifts focus to data flows and propagation of change, simplifying UI state.",
          "Compilers translate human-friendly syntax into optimized machine code, bridging abstraction gaps.",
          "Interpreters offer flexibility and rapid iteration at the cost of raw execution speed.",
          "Garbage collection trades throughput for developer productivity in memory management.",
          "Concurrency primitives like goroutines or async/await reshape how we structure I/O-bound tasks.",
          "The actor model encapsulates state and behavior, scaling across cores and networks naturally.",
          "WebAssembly brings near-native performance to web browsers, unlocking new application categories.",
          "Blockchain provides decentralized trust through cryptographic consensus, albeit with energy trade-offs.",
          "DevOps culture blurs the line between development and operations, emphasizing automation and observability.",
          "Site reliability engineering applies software principles to infrastructure management.",
          "Chaos engineering proactively tests system resilience by injecting failures in production.",
          "Quantum algorithms like Shor's and Grover's demonstrate exponential speedups for specific problems.",
          "Neural networks approximate any function given sufficient depth, data, and compute.",
          "Embedded systems programming demands resource frugality and real-time guarantees.",
          "Game development marries physics, graphics, AI, and interactive storytelling into a cohesive experience.",
          "Compiler optimizations like loop unrolling and inlining can yield order-of-magnitude speedups.",
          "The CAP theorem reminds us that distributed systems must choose between consistency, availability, and partition tolerance.",
          "Serverless architectures abstract infrastructure entirely, letting developers focus purely on business logic.",
          "Kernel development requires meticulous attention to concurrency, memory ordering, and hardware interfaces.",
          "Formal verification can mathematically prove correctness for critical software components.",
          "Parser combinators offer a declarative way to build language processors that mirror grammar structure.",
          "Metaprogramming blurs the line between code and data, enabling powerful abstractions.",
          "Domain-driven design aligns software models with complex business domains through ubiquitous language.",
          "Hexagonal architecture isolates core logic from external dependencies, improving testability.",
          "Event sourcing persists state as a sequence of immutable events, enabling temporal queries and replay.",
          "CQRS separates read and write models to optimize for complex query requirements.",
          "Message brokers like Kafka provide durable, ordered event streams for microservice communication.",
          "GraphQL empowers clients to request exactly the data they need, reducing over-fetching and under-fetching."
        ]
      },
      literature: {
        easy: ["The sun rises with hope each day.", "Dreams are whispers of the soul.", "Stories connect hearts across time.", "A book is a door to infinite worlds.", "Courage is not the absence of fear.", "Kindness costs nothing but means everything.", "Laughter echoes in memory.", "Friendship multiplies joy.", "Autumn leaves teach us about letting go.", "The sea speaks in ancient rhythms.", "Stars remind us of vast possibilities.", "Music is the language of emotion.", "Home is where the heart belongs.", "Patience ripens sweetest fruits.", "Curiosity lights the way forward.", "Imagination paints reality anew.", "Gratitude transforms ordinary moments.", "Silence holds its own wisdom.", "Truth stands tall over time.", "Love weaves invisible threads."],
        medium: ["It was the best of times, it was the worst of times – a season of light and darkness.", "All that we see or seem is but a dream within a dream, woven by perception.", "The only way to get rid of temptation is to yield to it gracefully.", "True places are not found on any map; they live within.", "The world is full of obvious things which nobody observes until pointed out.", "There is no greater agony than bearing an untold story inside you.", "What is to give light must endure burning.", "The past is never dead; it's not even past.", "We accept the love we think we deserve.", "Not all those who wander are lost; some seek unseen horizons.", "Happiness can be found even in the darkest times if one remembers to turn on the light.", "You have power over your mind, not outside events; realize this, and you will find strength.", "It does not do to dwell on dreams and forget to live.", "There are darknesses in life and there are lights; you are one of the lights.", "The soul becomes dyed with the color of its thoughts.", "We are what we repeatedly do; excellence becomes habit.", "The wound is the place where the light enters you.", "To live is the rarest thing; most people merely exist.", "And still, I rise with the dawn of courage.", "Books are a uniquely portable magic.", "Words are the voice of the heart.", "Hope is the thing with feathers."],
        hard: ["Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show the unfolding truth.", "There are years that ask questions and years that answer, yet the answers seldom satisfy the yearning heart.", "The universe is made of stories, not atoms, and every story births a thousand questions.", "We live in a world where information overflows, but meaning remains scarce and precious.", "The boundaries which divide Life from Death are shadowy and vague; who shall say where one ends and the other begins?", "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to than I have ever known.", "I am no bird; and no net ensnares me: I am a free human being with an independent will.", "All animals are equal, but some animals are more equal than others in the theater of power.", "Who controls the past controls the future; who controls the present controls the past.", "The man who does not read has no advantage over the man who cannot read.", "In the midst of winter, I found there was within me an invincible summer.", "For what is it to die but to stand naked in the wind and melt into the sun?", "Memory is a cruel mistress, weaving both torment and tenderness.", "There is no exquisite beauty without some strangeness in the proportion.", "The fool doth think he is wise, but the wise man knows himself to be a fool.", "It is not in the stars to hold our destiny but in ourselves.", "What we call the beginning is often the end, and to make an end is to make a beginning.", "Time present and time past are both perhaps present in time future.", "Human speech is like a cracked kettle on which we tap crude rhythms for bears to dance to.", "Art washes away from the soul the dust of everyday life."]
      },
      mixed: {
        easy: ["Breathe deep and begin.", "Small steps lead to great distances.", "Clarity comes from action.", "Mistakes are proof you are trying.", "Rise after every fall.", "Today is a gift.", "Focus on the present.", "Discipline equals freedom.", "Progress over perfection.", "Create without fear.", "Every master was once a beginner.", "Consistency beats intensity.", "Embrace the challenge.", "Wisdom grows with patience.", "Strength is forged in struggle.", "Innovation starts with curiosity.", "Balance brings harmony.", "Simplify to amplify.", "Gratitude shifts perspective.", "Kindness multiplies."],
        medium: ["The only limit to our realization of tomorrow will be our doubts of today.", "Life is what happens while you're busy making other plans.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Do what you can, with what you have, where you are.", "Happiness is not something ready made; it comes from your own actions.", "Turn your wounds into wisdom.", "What you get by achieving your goals is not as important as what you become.", "It does not matter how slowly you go as long as you do not stop.", "The secret of getting ahead is getting started.", "Believe you can and you're halfway there.", "Act as if what you do makes a difference; it does.", "The future depends on what you do today.", "Dream it. Believe it. Build it.", "Great things never come from comfort zones.", "Start where you are. Use what you have.", "Perseverance is not a long race; it is many short races one after another.", "You are braver than you believe, stronger than you seem.", "Make each day your masterpiece.", "The harder you work for something, the greater you'll feel when you achieve it.", "Don't watch the clock; do what it does. Keep going.", "Your time is limited, don't waste it living someone else's life."],
        hard: ["The intuitive mind is a sacred gift, and the rational mind is a faithful servant; we have created a society that honors the servant and has forgotten the gift.", "We are what we repeatedly do; excellence, then, is not an act but a habit carved by consistent effort.", "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.", "It is not enough to have a good mind; the main thing is to use it well, with discipline and imagination.", "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.", "To know what you know and what you do not know, that is true wisdom.", "He who has a why to live can bear almost any how, finding meaning in struggle.", "The journey of a thousand miles begins beneath one's feet, but only if one takes the first step.", "Watch your thoughts, for they become words; watch your words, for they become actions; watch your actions, for they become destiny.", "In the end, it's not the years in your life that count; it's the life in your years, the depth you lived.", "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", "The man who moves a mountain begins by carrying away small stones; persistence triumphs over magnitude.", "We suffer more often in imagination than in reality, yet freedom lies in mastering the mind.", "It is better to be feared than loved, if you cannot be both, but wisdom blends both arts.", "The greatest glory in living lies not in never falling, but in rising every time we fall.", "Our life is what our thoughts make it; the architecture of the mind shapes reality.", "Do not pray for an easy life; pray for the strength to endure a difficult one.", "The unexamined life is not worth living; reflection births wisdom.", "Courage is resistance to fear, mastery of fear — not absence of fear.", "The secret of change is to focus all energy not on fighting the old, but on building the new."]
      }
    };

    // DOM Elements and App State
    let timer = null, timeLeft = 60, totalDuration = 60, isTyping = false, testDone = false;
    let currentQuoteText = "", errors = 0, totalTypedChars = 0, correctCharsTyped = 0, startTime = null;
    let difficulty = "medium", quoteSource = "programming", practiceActive = false;
    
    // DOM refs
    const elements = {
      quoteDisplay: document.getElementById("quoteDisplay"),
      quoteInput: document.getElementById("quoteInput"),
      timeElem: document.getElementById("time"),
      wpmElem: document.getElementById("wpm"),
      accuracyElem: document.getElementById("accuracy"),
      errorsElem: document.getElementById("errors"),
      restartBtn: document.getElementById("restartBtn"),
      newQuoteBtn: document.getElementById("newQuoteBtn"),
      practiceBtn: document.getElementById("practiceBtn"),
      clearBtn: document.getElementById("clearBtn"),
      themeToggle: document.getElementById("themeToggle"),
      settingsToggle: document.getElementById("settingsToggle"),
      settingsPanel: document.getElementById("settingsPanel"),
      charCountSpan: document.getElementById("charCount"),
      quoteLengthSpan: document.getElementById("quoteLength"),
      wordsCountSpan: document.getElementById("wordsCount"),
      difficultyBadge: document.getElementById("difficultyBadge"),
      progressFill: document.getElementById("progressFill"),
      resultModal: document.getElementById("resultModal"),
      closeResult: document.getElementById("closeResultBtn"),
      shareBtn: document.getElementById("shareResultBtn"),
      resultWPM: document.getElementById("resultWPM"),
      resultAccuracy: document.getElementById("resultAccuracy"),
      resultErrors: document.getElementById("resultErrors"),
      resultTime: document.getElementById("resultTime"),
      quoteCountBadge: document.getElementById("quoteCountBadge")
    };

    function updateQuoteCountDisplay() {
      const count = QUOTES_LIB[quoteSource][difficulty].length;
      elements.quoteCountBadge.innerHTML = `📚 ${count} quotes`;
    }

    function updateQuoteUI() {
      elements.quoteDisplay.innerHTML = "";
      [...currentQuoteText].forEach(ch => {
        let span = document.createElement("span");
        span.className = "char";
        span.innerText = ch;
        elements.quoteDisplay.appendChild(span);
      });
      const wordCount = currentQuoteText.split(/\s+/).filter(w => w).length;
      elements.wordsCountSpan.innerText = wordCount;
      elements.quoteLengthSpan.innerText = currentQuoteText.length;
      elements.difficultyBadge.innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
      elements.difficultyBadge.className = `difficulty-badge difficulty-${difficulty}`;
      updateQuoteCountDisplay();
    }

    function loadQuote() {
      const arr = QUOTES_LIB[quoteSource]?.[difficulty] || QUOTES_LIB.programming.medium;
      currentQuoteText = arr[Math.floor(Math.random() * arr.length)];
      updateQuoteUI();
      resetTestState();
    }

    function resetTestState() {
      clearInterval(timer);
      isTyping = false;
      testDone = false;
      errors = 0;
      totalTypedChars = 0;
      correctCharsTyped = 0;
      elements.quoteInput.value = "";
      elements.quoteInput.disabled = false;
      timeLeft = practiceActive ? 9999 : totalDuration;
      if (!practiceActive) elements.timeElem.innerText = timeLeft + "s";
      else elements.timeElem.innerText = "∞";
      elements.wpmElem.innerText = "0";
      elements.accuracyElem.innerText = "0%";
      elements.errorsElem.innerText = "0";
      elements.charCountSpan.innerText = `0/${currentQuoteText.length}`;
      elements.progressFill.style.width = "0%";
      startTime = null;
      const quoteChars = elements.quoteDisplay.querySelectorAll(".char");
      quoteChars.forEach(c => c.classList.remove("correct", "incorrect", "current", "extra"));
      if (currentQuoteText.length) quoteChars[0]?.classList.add("current");
      elements.quoteInput.focus();
    }

    function computeAndUpdateMetrics() {
      const elapsed = startTime ? (Date.now() - startTime) / 1000 : 0;
      const minutes = Math.max(0.01, elapsed / 60);
      const wordsTyped = correctCharsTyped / 5;
      const wpm = Math.floor(wordsTyped / minutes);
      const accuracy = totalTypedChars ? Math.floor((correctCharsTyped / totalTypedChars) * 100) : 0;
      elements.wpmElem.innerText = wpm || 0;
      elements.accuracyElem.innerText = accuracy + "%";
      elements.errorsElem.innerText = errors;
    }

    function handleInput() {
      if (!isTyping && elements.quoteInput.value.length > 0 && !testDone) {
        startTime = Date.now();
        isTyping = true;
        startTimer();
      }
      const inputVal = elements.quoteInput.value;
      const quoteChars = elements.quoteDisplay.querySelectorAll(".char");
      let correctCount = 0, errCount = 0;
      totalTypedChars = inputVal.length;
      
      quoteChars.forEach((span, idx) => {
        span.classList.remove("correct", "incorrect", "current", "extra");
        if (idx < inputVal.length) {
          if (inputVal[idx] === span.innerText) {
            span.classList.add("correct");
            correctCount++;
          } else {
            span.classList.add("incorrect");
            errCount++;
          }
        }
      });
      
      // Handle extra chars
      if (inputVal.length > quoteChars.length) {
        for (let i = quoteChars.length; i < inputVal.length; i++) {
          let extra = document.createElement("span");
          extra.className = "char extra";
          extra.innerText = inputVal[i];
          elements.quoteDisplay.appendChild(extra);
          errCount++;
        }
      }
      
      if (inputVal.length < quoteChars.length) {
        quoteChars[inputVal.length]?.classList.add("current");
      }
      
      correctCharsTyped = correctCount;
      errors = errCount;
      const progress = Math.min(100, (inputVal.length / currentQuoteText.length) * 100);
      elements.progressFill.style.width = `${progress}%`;
      elements.charCountSpan.innerText = `${inputVal.length}/${currentQuoteText.length}`;
      computeAndUpdateMetrics();
      
      if (inputVal.length >= currentQuoteText.length && !testDone) finishTest();
    }

    function startTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (practiceActive) return;
        if (timeLeft <= 1) {
          finishTest();
        } else {
          timeLeft--;
          elements.timeElem.innerText = timeLeft + "s";
          if (!testDone) {
            const timeProgress = ((totalDuration - timeLeft) / totalDuration) * 100;
            elements.progressFill.style.width = `${Math.max(timeProgress, parseFloat(elements.progressFill.style.width) || 0)}%`;
          }
        }
      }, 1000);
    }

    function finishTest() {
      if (testDone) return;
      testDone = true;
      isTyping = false;
      clearInterval(timer);
      elements.quoteInput.disabled = true;
      const usedTime = practiceActive ? (startTime ? (Date.now() - startTime) / 1000 : totalDuration) : totalDuration - timeLeft;
      elements.resultWPM.innerText = elements.wpmElem.innerText;
      elements.resultAccuracy.innerText = elements.accuracyElem.innerText;
      elements.resultErrors.innerText = elements.errorsElem.innerText;
      elements.resultTime.innerText = Math.floor(usedTime) + "s";
      elements.resultModal.classList.add("active", "flex");
      elements.resultModal.classList.remove("hidden");
    }

    function resetTest() { resetTestState(); testDone = false; }
    function newQuote() { loadQuote(); resetTestState(); testDone = false; clearInterval(timer); isTyping = false; startTime = null; }
    function togglePractice() {
      practiceActive = !practiceActive;
      elements.practiceBtn.innerHTML = practiceActive ? '<i class="fas fa-check-circle"></i> Practice ON' : '<i class="fas fa-infinity"></i> Practice Mode';
      if (practiceActive) { totalDuration = 9999; timeLeft = 9999; elements.timeElem.innerText = "∞"; }
      else { totalDuration = parseInt(document.querySelector(".time-option.bg-blue-500")?.dataset.time || "60"); timeLeft = totalDuration; elements.timeElem.innerText = timeLeft + "s"; }
      resetTest();
    }
    function clearInputField() { elements.quoteInput.value = ""; handleInput(); elements.quoteInput.focus(); }
    function shareResults() { 
      const text = `🔥 VelocityType: ${elements.resultWPM.innerText} WPM · ${elements.resultAccuracy.innerText} accuracy! Can you beat me?`;
      navigator.clipboard?.writeText(text);
      alert("📋 Results copied to clipboard!");
    }
    function closeModal() { elements.resultModal.classList.remove("active", "flex"); elements.resultModal.classList.add("hidden"); resetTest(); }
    
    function initTheme() {
      let saved = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.body.classList.add(saved);
      const icon = elements.themeToggle.querySelector("i");
      icon.className = saved === "dark" ? "fas fa-moon" : "fas fa-sun";
    }
    function toggleThemeGlobal() {
      let isDark = document.body.classList.contains("dark");
      document.body.classList.remove("light", "dark");
      document.body.classList.add(isDark ? "light" : "dark");
      localStorage.setItem("theme", isDark ? "light" : "dark");
      let icon = elements.themeToggle.querySelector("i");
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }

    function attachEvents() {
      elements.restartBtn.onclick = resetTest;
      elements.newQuoteBtn.onclick = newQuote;
      elements.practiceBtn.onclick = togglePractice;
      elements.clearBtn.onclick = clearInputField;
      elements.themeToggle.onclick = toggleThemeGlobal;
      elements.settingsToggle.onclick = () => {
        elements.settingsPanel.classList.toggle("active");
      };
      elements.closeResult.onclick = closeModal;
      elements.shareBtn.onclick = shareResults;
      elements.quoteInput.addEventListener("input", handleInput);
      elements.quoteInput.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "Enter") { e.preventDefault(); resetTest(); }
        if (e.key === "Escape") { e.preventDefault(); clearInputField(); }
      });
      
      document.querySelectorAll(".time-option").forEach(btn => {
        btn.onclick = () => {
          document.querySelectorAll(".time-option").forEach(b => b.classList.remove("bg-blue-500", "text-white", "shadow-md"));
          btn.classList.add("bg-blue-500", "text-white", "shadow-md");
          if (!practiceActive) totalDuration = parseInt(btn.dataset.time);
          if (!practiceActive) { timeLeft = totalDuration; elements.timeElem.innerText = timeLeft + "s"; }
          resetTest();
        };
      });
      
      document.querySelectorAll(".difficulty-option").forEach(btn => {
        btn.onclick = () => {
          document.querySelectorAll(".difficulty-option").forEach(b => b.classList.remove("bg-blue-500", "text-white", "shadow-md"));
          btn.classList.add("bg-blue-500", "text-white", "shadow-md");
          difficulty = btn.dataset.difficulty;
          newQuote();
        };
      });
      
      document.querySelectorAll(".source-option").forEach(btn => {
        btn.onclick = () => {
          document.querySelectorAll(".source-option").forEach(b => b.classList.remove("bg-blue-500", "text-white", "shadow-md"));
          btn.classList.add("bg-blue-500", "text-white", "shadow-md");
          quoteSource = btn.dataset.source;
          newQuote();
        };
      });
    }
    
    initTheme();
    attachEvents();
    loadQuote();
