

/* SECRET PASSWORD */
const secretPassword = "forever"; // Change this to your secret!

function enterWebsite() {
  const enteredPassword = document
    .getElementById("secret-password")
    .value.trim()
    .toLowerCase();

  const feedback = document.getElementById("password-feedback");

  if (enteredPassword === secretPassword.toLowerCase()) {
    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("main-content").classList.remove("hidden");

    feedback.textContent = "";

    window.scrollTo(0, 0);

    startFloatingHearts();
  } else {
    feedback.textContent = "Hmm... try again, my love! ♡";
  }
}

/* ALLOW ENTER KEY */
document.getElementById("secret-password").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    enterWebsite();
  }
});

/* FLOATING HEARTS */
function startFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.classList.add("floating-animation-heart");

    heart.innerHTML = ["♡", "♥", "💕", "💗", "❤"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 700);
}


/* REASONS I LOVE YOU */
const reasons = [
  "I love how you make me smile even when I don't feel like smiling.",
  "I love your laugh.",
  "I love how you make ordinary moments special.",
  "I love having you as my person.",
  "I love how you care about me.",
  "I love your little habits, even the annoying ones.",
  "I love how I can be myself around you.",
  "I love the way you make me feel.",
  "I love talking to you, even when we have nothing to talk about.",
  "I love that you're you.",
  "I love your face. I could stare at you forever.",
  "I love making memories with you.",
  "I love that I get to call you mine.",
  "I love you for so many reasons that I could never fit them all here."
];

let reasonIndex = 0;

function showReason() {
  const text = document.getElementById("reason-text");

  text.textContent = reasons[reasonIndex];

  reasonIndex++;

  if (reasonIndex >= reasons.length) {
    reasonIndex = 0;
  }
}

/* QUIZ */
const questions = [
  {
    question: "What is my favourite thing about us?",
    options: ["Our laughter", "Our arguments", "Nothing at all"],
    answer: 0
  },
  {
    question: "What would I choose to do with you?",
    options: ["Ignore you", "Spend quality time", "Fight all day"],
    answer: 1
  },
  {
    question: "Who is the luckiest person in this relationship?",
    options: ["You", "Me", "Obviously both of us"],
    answer: 2
  },
  {
    question: "How much do I love you?",
    options: ["A little", "Quite a bit", "More than words can explain"],
    answer: 2
  }
];

let questionIndex = 0;
let quizScore = 0;
let answered = false;

function loadQuestion() {
  answered = false;

  const question = questions[questionIndex];

  document.getElementById("quiz-question").textContent =
    question.question;

  document.getElementById("quiz-feedback").textContent = "";

  document.getElementById("next-question").classList.add("hidden");

  const optionsContainer = document.getElementById("quiz-options");

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;

    button.onclick = () => checkAnswer(index);

    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const correctAnswer = questions[questionIndex].answer;

  const feedback = document.getElementById("quiz-feedback");

  if (selectedIndex === correctAnswer) {
    quizScore++;

    feedback.textContent = "Correct! You know us so well ♡";
  } else {
    feedback.textContent = "Oops! But I love you anyway ♡";
  }

  document.getElementById("next-question").classList.remove("hidden");
}

function nextQuestion() {
  questionIndex++;

  if (questionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-question").textContent =
      "You finished our little quiz! ♡";

    document.getElementById("quiz-options").innerHTML = "";

    document.getElementById("quiz-feedback").textContent =
      `You got ${quizScore} out of ${questions.length}. Regardless of the score, you still have my heart!`;

    document.getElementById("next-question").classList.add("hidden");

    questionIndex = 0;
    quizScore = 0;
  }
}

loadQuestion();

/* OPEN THE LETTER */
function openLetter() {
  document.getElementById("love-letter").classList.remove("hidden");

  document.getElementById("envelope-icon").textContent = "💗";

  document.getElementById("envelope-text").textContent =
    "Your letter is open ♡";

  document.getElementById("love-letter").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

/* FINAL SURPRISE */
function finalSurprise() {
  const message = document.getElementById("final-message");

  message.innerHTML = `
    <span>♡</span><br>
    You are my favourite love story.<br>
    My favourite person.<br>
    My favourite everything.<br><br>
    Happy Anniversary, baby.<br>
    I love you endlessly. ♡<br><br>
    <span style="font-size: 3rem;">💗💗💗</span>
  `;

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

/* FLIP POLAROID */
function flipCard(card) {
  card.classList.toggle("flipped");
}

