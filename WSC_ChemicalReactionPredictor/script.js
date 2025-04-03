
let particles = [];
let products = [];
let state = 'idle';
let showCanvas = false;
let reactionType = '';
let energySymbol = '';

const particleMap = {
  HCl: 'red',
  NaOH: 'blue',
  AgNO3: 'purple',
  NaCl: 'green',
  BaCl2: 'orange'
};

const reactionDetails = {
  "HCl+NaOH": {
    occurs: true,
    equation: "HCl + NaOH → NaCl + H₂O",
    type: "exothermic"
  },
  "AgNO3+NaCl": {
    occurs: true,
    equation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
    type: "precipitation"
  },
  "BaCl2+NaOH": {
    occurs: true,
    equation: "BaCl₂ + 2NaOH → Ba(OH)₂ + 2NaCl",
    type: "exothermic"
  }
};

function setup() {
  let canvas = createCanvas(600, 200);
  canvas.parent('canvasContainer');
  noLoop();
  textAlign(CENTER, CENTER);
  textSize(12);
}

function draw() {
  background(240);
  if (!showCanvas) return;

  for (let p of particles) {
    fill(p.color);
    noStroke();
    ellipse(p.x, p.y, 12, 12);
    p.move();
  }

  if (state === 'done') {
    for (let p of products) {
      fill(p.color);
      ellipse(p.x, p.y, 14, 14);
      fill(255);
      text(p.label, p.x, p.y);
      p.move();
    }

    // Energy symbol
    textSize(24);
    text(energySymbol, width - 30, 30);
  }
}

class Particle {
  constructor(x, y, color, label = '') {
    this.x = x;
    this.y = y;
    this.color = color;
    this.label = label;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
}

function simulateReaction() {
  const a = document.getElementById("reactantA").value;
  const b = document.getElementById("reactantB").value;

  const key = a + "+" + b;
  const altKey = b + "+" + a;

  let reaction = reactionDetails[key] || reactionDetails[altKey] || { occurs: false };

  const resultText = document.getElementById("resultText");
  const balancedEq = document.getElementById("balancedEq");

  if (reaction.occurs) {
    resultText.textContent = "✅ A reaction occurs!";
    balancedEq.innerHTML = `${reaction.equation} <span style="font-size: 1.2em;">${
      reaction.type === 'exothermic' ? '🔥' : reaction.type === 'endothermic' ? '❄️' : '⚗️'
    }</span>`;
    reactionType = reaction.type;
    launchParticles(a, b);
  } else {
    resultText.textContent = "❌ No reaction under these conditions.";
    balancedEq.textContent = "";
    particles = [];
    products = [];
    state = 'idle';
    showCanvas = false;
    
  // Student prediction check
  const predictedReaction = document.getElementById("predictReaction").value;
  const predictedProducts = document.getElementById("predictProducts").value.trim().toLowerCase();
  const feedback = document.getElementById("predictionFeedback");

  const reactionOccurred = reaction.occurs;
  const actualProducts = reaction.equation ? reaction.equation.split("→")[1].trim().toLowerCase() : "";

  let feedbackMsg = "";

  if ((reactionOccurred && predictedReaction === "yes") || (!reactionOccurred && predictedReaction === "no")) {
    feedbackMsg += "✅ Your reaction prediction was correct. ";
  } else {
    feedbackMsg += "❌ Your reaction prediction was incorrect. ";
  }

  if (reactionOccurred && predictedProducts) {
    if (actualProducts.includes(predictedProducts) || predictedProducts.includes(actualProducts)) {
      feedbackMsg += "✅ Your product guess was close!";
    } else {
      feedbackMsg += "❌ Your product guess didn't match.";
    }
  }

  feedback.textContent = feedbackMsg;

  redraw();
  }
}

function launchParticles(reactA, reactB) {
  particles = [];
  products = [];
  state = 'reacting';
  showCanvas = true;

  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(random(width), random(height), particleMap[reactA] || 'gray'));
    particles.push(new Particle(random(width), random(height), particleMap[reactB] || 'gray'));
  }

  
  // Student prediction check
  const predictedReaction = document.getElementById("predictReaction").value;
  const predictedProducts = document.getElementById("predictProducts").value.trim().toLowerCase();
  const feedback = document.getElementById("predictionFeedback");

  const reactionOccurred = reaction.occurs;
  const actualProducts = reaction.equation ? reaction.equation.split("→")[1].trim().toLowerCase() : "";

  let feedbackMsg = "";

  if ((reactionOccurred && predictedReaction === "yes") || (!reactionOccurred && predictedReaction === "no")) {
    feedbackMsg += "✅ Your reaction prediction was correct. ";
  } else {
    feedbackMsg += "❌ Your reaction prediction was incorrect. ";
  }

  if (reactionOccurred && predictedProducts) {
    if (actualProducts.includes(predictedProducts) || predictedProducts.includes(actualProducts)) {
      feedbackMsg += "✅ Your product guess was close!";
    } else {
      feedbackMsg += "❌ Your product guess didn't match.";
    }
  }

  feedback.textContent = feedbackMsg;

  redraw();

  setTimeout(() => {
    state = 'done';
    particles = [];
    const productColor = reactionType === 'precipitation' ? 'black' : 'darkgreen';
    const label = reactionType === 'precipitation' ? 'ppt' : 'P';

    for (let i = 0; i < 15; i++) {
      products.push(new Particle(random(width), random(height), productColor, label));
    }

    energySymbol = reactionType === 'exothermic' ? '🔥' : reactionType === 'endothermic' ? '❄️' : '';
    
  // Student prediction check
  const predictedReaction = document.getElementById("predictReaction").value;
  const predictedProducts = document.getElementById("predictProducts").value.trim().toLowerCase();
  const feedback = document.getElementById("predictionFeedback");

  const reactionOccurred = reaction.occurs;
  const actualProducts = reaction.equation ? reaction.equation.split("→")[1].trim().toLowerCase() : "";

  let feedbackMsg = "";

  if ((reactionOccurred && predictedReaction === "yes") || (!reactionOccurred && predictedReaction === "no")) {
    feedbackMsg += "✅ Your reaction prediction was correct. ";
  } else {
    feedbackMsg += "❌ Your reaction prediction was incorrect. ";
  }

  if (reactionOccurred && predictedProducts) {
    if (actualProducts.includes(predictedProducts) || predictedProducts.includes(actualProducts)) {
      feedbackMsg += "✅ Your product guess was close!";
    } else {
      feedbackMsg += "❌ Your product guess didn't match.";
    }
  }

  feedback.textContent = feedbackMsg;

  redraw();
  }, 2000);
}
