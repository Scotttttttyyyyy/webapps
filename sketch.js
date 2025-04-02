
let carImg;
let x = 0;
let speed = 0;
let velocity = 0;
let braking = false;
let phase = 'thinking';
let reactionDistance = 0;
let brakingDistance = 0;
let totalDistance = 0;
let decel = 0;

function preload() {
  carImg = loadImage('assets/car.png');
}

function setup() {
  let canvas = createCanvas(800, 200);
  canvas.parent('simulator');
}

function draw() {
  background(230);
  fill(100);
  rect(0, 150, width, 20);
  image(carImg, x, 100, 80, 40);

  if (phase === 'thinking') {
    x += velocity;
    if (x >= reactionDistance) {
      phase = 'braking';
    }
  } else if (phase === 'braking') {
    if (velocity > 0) {
      velocity -= decel;
      x += max(velocity, 0);
    } else {
      velocity = 0;
      phase = 'stopped';
      showResults();
    }
  }
}

function startSimulation() {
  // Reset state
  x = 0;
  phase = 'thinking';
  document.getElementById('feedback').textContent = "";

  // Inputs
  const speedInput = parseFloat(document.getElementById('speed').value);
  const weather = document.getElementById('weather').value;
  const surface = document.getElementById('surface').value;
  const tires = document.getElementById('tires').value;
  const distraction = parseFloat(document.getElementById('distraction').value);

  // Calculations
  let speedMS = speedInput / 3.6;
  velocity = speedMS;
  const reactionTime = distraction;
  reactionDistance = speedMS * reactionTime * 10;

  let decelBase = {
    dry: 7.5,
    wet: 5.0,
    icy: 2.5
  }[weather];

  let surfaceFactor = surface === 'gravel' ? 0.7 : 1.0;
  let tireFactor = tires === 'worn' ? 0.8 : 1.0;
  decel = (decelBase * surfaceFactor * tireFactor) / 60;

  brakingDistance = (speedMS ** 2) / (2 * (decelBase * surfaceFactor * tireFactor));
  totalDistance = reactionDistance / 10 + brakingDistance;

  document.getElementById('thinkingOut').textContent = (reactionDistance / 10).toFixed(1);
  document.getElementById('brakingOut').textContent = brakingDistance.toFixed(1);
  document.getElementById('totalOut').textContent = totalDistance.toFixed(1);
}

function showResults() {
  const guess = parseFloat(document.getElementById('guess').value);
  const feedback = document.getElementById('feedback');
  if (!isNaN(guess)) {
    const diff = Math.abs(guess - totalDistance);
    if (diff < 2) {
      feedback.textContent = "Great guess! You were within 2 meters.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Close! You were off by ${diff.toFixed(1)} meters.`;
      feedback.style.color = "orange";
    }
  } else {
    feedback.textContent = "Enter a guess above to compare your estimate.";
    feedback.style.color = "black";
  }
}
