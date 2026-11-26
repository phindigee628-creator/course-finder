// =====================================================
// 1. THE DATA  (change the words here to suit any topic)
// =====================================================
const CAREERS = {
  tech: {
    name: "IT and Software",
    tagline: "You like logic, computers and solving puzzles.",
    description: "People in this area build websites, apps and systems, or keep technology running for businesses. It is a growing field and many people also learn it online.",
    study: ["Higher Certificate or Diploma in Information Technology", "Diploma in Software or Web Development", "Short courses in data, cybersecurity or cloud"],
    jobs: ["Web developer", "IT support technician", "Data analyst", "Software tester"],
  },
  business: {
    name: "Business and Finance",
    tagline: "You like planning, numbers and leading people.",
    description: "People in this area run businesses, look after money and sell products or services. These skills are useful in almost every workplace.",
    study: ["Higher Certificate in Business Management", "Diploma in Accounting or Finance", "Short courses in marketing, sales or bookkeeping"],
    jobs: ["Office administrator", "Bookkeeper", "Sales or marketing officer", "Business owner"],
  },
  health: {
    name: "Health and Care",
    tagline: "You like helping people feel better.",
    description: "People in this area look after the health and wellbeing of others in clinics, hospitals and communities. It needs patience, kindness and a love for science.",
    study: ["Nursing or auxiliary nursing programmes", "Community health or emergency care courses", "Pharmacy assistant or lab assistant courses"],
    jobs: ["Nurse", "Community health worker", "Pharmacy assistant", "Emergency care assistant"],
  },
  trades: {
    name: "Engineering and Technical Trades",
    tagline: "You like building, fixing and seeing real results.",
    description: "People in this area make, repair and install the things we use every day. Skilled trades are always needed, and you can often earn while you learn.",
    study: ["National certificates at a TVET college", "Apprenticeships (electrician, plumber, mechanic, welder)", "Diploma in Engineering"],
    jobs: ["Electrician", "Plumber", "Motor mechanic", "Engineering technician"],
  },
  creative: {
    name: "Creative and Media",
    tagline: "You like ideas, design and self-expression.",
    description: "People in this area create designs, photos, videos, content and stories. You can work for a company or build your own client list.",
    study: ["Diploma in Graphic Design", "Photography, film or video courses", "Short courses in social media and content creation"],
    jobs: ["Graphic designer", "Photographer or videographer", "Content creator", "Fashion or interior designer"],
  },
  education: {
    name: "Education and Community Service",
    tagline: "You like teaching, guiding and making a difference.",
    description: "People in this area help others learn and grow, in classrooms, communities and families. It needs good listening and communication skills.",
    study: ["Early Childhood Development certificate", "Teaching degree or diploma", "Social work or community development programmes"],
    jobs: ["Teacher or tutor", "Early childhood practitioner", "Social auxiliary worker", "Student support or career guidance officer"],
  },
};

const NEXT_STEPS = [
  "Write down the entry requirements for the courses you like (subjects and marks).",
  "Visit college and university websites, or go to an open day, and compare your options.",
  "Talk to a career guidance teacher, a counsellor or someone who works in that field.",
];

const QUESTIONS = [
  {
    text: "Which school subject do you enjoy most?",
    answers: [
      { text: "Maths or Physical Science", scores: { tech: 2, trades: 2 } },
      { text: "Business Studies or Accounting", scores: { business: 3 } },
      { text: "Life Sciences", scores: { health: 3 } },
      { text: "Languages, History or Art", scores: { creative: 2, education: 2 } },
    ],
  },
  {
    text: "What do you like doing in your free time?",
    answers: [
      { text: "Building or fixing things", scores: { trades: 3, tech: 1 } },
      { text: "Using computers, phones or games", scores: { tech: 3 } },
      { text: "Drawing, filming, music or posting content", scores: { creative: 3 } },
      { text: "Helping friends and family with their problems", scores: { health: 2, education: 2 } },
      { text: "Selling things or saving and planning money", scores: { business: 3 } },
    ],
  },
  {
    text: "Which place would you like to work in?",
    answers: [
      { text: "An office with a computer and a team", scores: { business: 2, tech: 1 } },
      { text: "A hospital or clinic", scores: { health: 3 } },
      { text: "A workshop, building site or factory", scores: { trades: 3 } },
      { text: "A classroom or community centre", scores: { education: 3 } },
      { text: "A studio or out on location", scores: { creative: 3 } },
    ],
  },
  {
    text: "How do you like to solve problems?",
    answers: [
      { text: "Step by step, with logic", scores: { tech: 2, trades: 1 } },
      { text: "By talking to people and listening", scores: { education: 2, health: 1, business: 1 } },
      { text: "By coming up with new ideas", scores: { creative: 3 } },
      { text: "By planning and counting the cost", scores: { business: 3 } },
    ],
  },
  {
    text: "Which of these would make you proudest?",
    answers: [
      { text: "Building an app or website that people use", scores: { tech: 3 } },
      { text: "Starting my own business", scores: { business: 3 } },
      { text: "Helping someone get well again", scores: { health: 3 } },
      { text: "Making something with my own hands", scores: { trades: 2, creative: 1 } },
      { text: "Teaching someone something new", scores: { education: 3 } },
    ],
  },
  {
    text: "Which words sound most like you?",
    answers: [
      { text: "Calm and caring", scores: { health: 2, education: 1 } },
      { text: "Curious and logical", scores: { tech: 2, trades: 1 } },
      { text: "Confident and a leader", scores: { business: 2, education: 1 } },
      { text: "Imaginative and expressive", scores: { creative: 3 } },
      { text: "Practical and hands-on", scores: { trades: 2 } },
    ],
  },
  {
    text: "Which school task did you enjoy most?",
    answers: [
      { text: "A group presentation", scores: { business: 1, education: 2 } },
      { text: "A science experiment", scores: { health: 1, tech: 1, trades: 1 } },
      { text: "Making a poster, video or story", scores: { creative: 3 } },
      { text: "Solving a hard maths or logic problem", scores: { tech: 3 } },
      { text: "Making a budget or business plan", scores: { business: 3 } },
    ],
  },
  {
    text: "What matters most to you in a job?",
    answers: [
      { text: "Always learning new technology", scores: { tech: 2 } },
      { text: "Helping people every day", scores: { health: 2, education: 2 } },
      { text: "Good pay and a chance to grow", scores: { business: 2, tech: 1 } },
      { text: "Being creative", scores: { creative: 3 } },
      { text: "Seeing the real results of my work", scores: { trades: 3 } },
    ],
  },
];

// =====================================================
// 2. THE MATHS  (answers in, ranked matches out)
// =====================================================
function maxScores() {
  const max = {};
  Object.keys(CAREERS).forEach((key) => (max[key] = 0));
  QUESTIONS.forEach((question) => {
    Object.keys(CAREERS).forEach((key) => {
      const best = Math.max(...question.answers.map((answer) => answer.scores[key] || 0));
      max[key] += best;
    });
  });
  return max;
}

// chosen = a list with the answer number picked for each question, e.g. [0, 2, 1, ...]
function calculateResults(chosen) {
  const totals = {};
  Object.keys(CAREERS).forEach((key) => (totals[key] = 0));

  chosen.forEach((answerIndex, questionIndex) => {
    const scores = QUESTIONS[questionIndex].answers[answerIndex].scores;
    Object.keys(scores).forEach((key) => (totals[key] += scores[key]));
  });

  const max = maxScores();
  return Object.keys(CAREERS)
    .map((key) => ({ key, score: totals[key], percent: Math.round((totals[key] / max[key]) * 100) }))
    .sort((a, b) => b.percent - a.percent || b.score - a.score);
}

// --- DOM ---
// =====================================================
// 3. THE PAGE  (show screens, questions and results)
// =====================================================
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const restartBtn = document.getElementById("restart-btn");
const stepLabel = document.getElementById("step-label");
const progressBar = document.querySelector(".progress");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const answersBox = document.getElementById("answers");
const shareBtn = document.getElementById("share-btn");

let current = 0;
let chosen = []; // answer picked for each question

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  current = 0;
  chosen = [];
  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  const question = QUESTIONS[current];
  stepLabel.textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
  const percent = Math.round((current / QUESTIONS.length) * 100);
  progressFill.style.width = percent + "%";
  progressBar.setAttribute("aria-valuenow", percent);
  backBtn.disabled = current === 0;

  questionText.textContent = question.text;
  answersBox.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.textContent = answer.text;
    if (chosen[current] === index) button.classList.add("selected");
    button.addEventListener("click", () => pickAnswer(index, button));
    answersBox.appendChild(button);
  });

  questionText.focus({ preventScroll: true });
}

function pickAnswer(index, button) {
  chosen[current] = index;
  Array.from(answersBox.children).forEach((b) => b.classList.remove("selected"));
  button.classList.add("selected");

  setTimeout(() => {
    if (current < QUESTIONS.length - 1) {
      current++;
      showQuestion();
    } else {
      showResults();
    }
  }, 250);
}

function goBack() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

function fillList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  });
}

function showResults() {
  const ranked = calculateResults(chosen);
  const best = CAREERS[ranked[0].key];

  document.getElementById("result-title").textContent = best.name;
  document.getElementById("result-tagline").textContent = best.tagline;
  document.getElementById("result-desc").textContent = best.description;
  fillList("result-study", best.study);
  fillList("result-jobs", best.jobs);
  fillList("result-steps", NEXT_STEPS);

  const bars = document.getElementById("match-bars");
  bars.innerHTML = "";
  ranked.slice(0, 3).forEach((item) => {
    const row = document.createElement("div");
    row.className = "bar-row";

    const label = document.createElement("div");
    label.className = "bar-label";
    const name = document.createElement("span");
    name.textContent = CAREERS[item.key].name;
    const pct = document.createElement("span");
    pct.textContent = item.percent + "%";
    label.append(name, pct);

    const bar = document.createElement("div");
    bar.className = "bar";
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    bar.appendChild(fill);

    row.append(label, bar);
    bars.appendChild(row);
    setTimeout(() => (fill.style.width = item.percent + "%"), 100);
  });

  const message =
    `I took the Course Finder quiz and my best match is ${best.name}!\n` +
    `Top 3: ${ranked.slice(0, 3).map((r) => CAREERS[r.key].name).join(", ")}.`;
  shareBtn.href = "https://wa.me/?text=" + encodeURIComponent(message);

  progressFill.style.width = "100%";
  showScreen(resultScreen);
  document.getElementById("result-title").focus({ preventScroll: true });
}

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
restartBtn.addEventListener("click", () => showScreen(startScreen));
