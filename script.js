"use strict";

/* ═══════════════════════════════════════════════════════════
   ✏️  EDIT THIS PART — everything personal lives here
   ═══════════════════════════════════════════════════════════ */
const CONFIG = {
  // Which mode the page uses when the link has no ?mode=…  ("love" or "friend")
  defaultMode: "love",

  // Your name, shown in the footer. Override from the link: ?from=Name
  yourName: "Maninder",

  // Diwali date (YYYY-MM-DD). Used for the little "Diwali in N days" line.
  diwaliDate: "2026-11-08",

  // Optional: drop an mp3 next to index.html and name it here. Leave "" for no music.
  music: "",

  // One block of text per mode. Pick a mode from the link: ?mode=love or ?mode=friend
  // {name} becomes their name (from ?to=Name, or defaultName below).
  modes: {

    /* ───── for her ───── */
    love: {
      defaultName: "Jaan",
      footerHeart: "❤️",

      // The letter. One line per paragraph.
      letter: [
        "Dear {name},",
        "Every Diwali, people light diyas to welcome light into their homes.",
        "This year I didn't have to. You walked in, and it's been bright ever since.",
        "Thank you for being my calm, my chaos, and my favourite person to come home to.",
        "This Diwali, I wish you everything your heart has been quietly wishing for…",
        "…and a little extra, because you'd never ask for it yourself.",
        "Happy Diwali, my love. 🪔",
      ],

      // Heading above the six diyas, and the line once all are lit.
      reasonsTitle: "Every diya here is a reason you light up my life",
      allLit: "You lit them all. Just like you lit me up. 💛",

      // One diya per reason. Keep it to 6 for the nicest layout.
      reasons: [
        "You tell me long stories about people I've never met, and I don't follow half of it. I just like hearing your voice.",
        "Even when you say nothing at all, having you next to me is enough.",
        "The whole day feels unfinished until I've heard from you.",
        "Your good-morning texts beat every alarm I've ever owned.",
        "You remember the tiny things I say and bring them back as surprises.",
        "Because home isn't a place anymore. It's you.",
      ],

      // The big question.
      question: "Will you be my Diwali, this year and every year after? 🪔",

      // What the "No" button says each time she tries to press it.
      noTexts: [
        "No",
        "Are you sure? 🥺",
        "Really sure?",
        "Think again…",
        "The diyas are watching 👀",
        "Pretty please?",
        "Last chance!",
        "Fine, I'll keep asking 😤",
        "This button is tired now",
        "Just press Yes 💛",
      ],

      // After she says yes.
      bigYes: "YESSS! 🎆",
      finalLine1: "You just made this the best Diwali ever.",
      finalLine2: "Happy Diwali, {name}. You're my favourite light.",
    },

    /* ───── for best friends (works for anyone, no he/she anywhere) ───── */
    friend: {
      defaultName: "dost",
      footerHeart: "🪔",

      letter: [
        "Dear {name},",
        "Every Diwali, people light diyas to chase the darkness away. I just text you. Same result, zero effort.",
        "Thank you for putting up with me all year. Nobody asked you to. You did it anyway. Questionable judgement, honestly.",
        "This Diwali, I wish you more mithai than your doctor would approve of, and at least one plan that actually happens.",
        "And if you set anything on fire tonight, I was never there. Love you. Delete this.",
        "Happy Diwali, you absolute menace. 🪔",
      ],

      reasonsTitle: "Every diya here is a reason I keep you around (there's a list, obviously)",
      allLit: "All lit. Same thing you do to every room, and occasionally to the kitchen. 💛",

      reasons: [
        "You show up every single time. Uninvited, mostly, but you show up.",
        "Your laugh is louder than an aloo bamb and about as legal.",
        "You never call anymore. You've changed. It's fine. I'm fine. Everyone's fine.",
        "You call me your best friend, then leave me on seen for two days. Bold strategy. Respect.",
        "I've saved every \"let's meet this weekend\" text you've sent. Zero have happened. No pressure though.",
        "You still haven't given me that party. I'm not asking. I'm just stating facts.",
      ],

      question: "Best friends for one more year? Terms unchanged. Non-negotiable. 🪔",

      noTexts: [
        "No",
        "Excuse me? 👀",
        "After all those chai runs?",
        "I have screenshots",
        "I know where you live",
        "Your mom likes me more anyway",
        "Last chance before I regift you soan papdi",
        "Fine, I'll keep asking 😤",
        "This button has given up",
        "Just press Yes, you drama 💛",
      ],

      bigYes: "KNEW IT! 🎆",
      finalLine1: "Best friends. Every Diwali. Screenshot this, it's legally binding now.",
      finalLine2: "Happy Diwali, {name}. Don't reply to this. I'll know you saw it anyway.",
    },
  },
};
/* ═══════════════════════════════════════════════════════════ */


const params = new URLSearchParams(location.search);
const wantedMode = (params.get("mode") || CONFIG.defaultMode).toLowerCase();
const MODE_KEY = CONFIG.modes[wantedMode] ? wantedMode : CONFIG.defaultMode;
const MODE = CONFIG.modes[MODE_KEY];
const HER = (params.get("to") || MODE.defaultName).trim();   // the person the page is for
const HIM = (params.get("from") || CONFIG.yourName).trim();  // the sender
const fill = (s) => s.replace(/\{name\}|\{her\}/g, HER);
document.documentElement.dataset.mode = MODE_KEY;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const rand = (a, b) => a + Math.random() * (b - a);
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ───────────────── Diya SVG ───────────────── */

function diyaSVG() {
  return `
  <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
    <circle class="glow" cx="100" cy="78" r="78" fill="url(#g-glow)"/>
    <path d="M28 104 Q100 90 172 104 L160 130 Q100 152 40 130 Z" fill="url(#g-clay)"/>
    <ellipse cx="100" cy="104" rx="72" ry="10" fill="#e07c3c"/>
    <ellipse cx="100" cy="104" rx="56" ry="6" fill="#f5ad66" opacity="0.75"/>
    <rect x="98" y="90" width="4" height="12" rx="1.5" fill="#3b1d10"/>
    <g class="flame">
      <path d="M100 28 C113 50 119 62 119 77 C119 91 110 101 100 101 C90 101 81 91 81 77 C81 62 87 50 100 28 Z" fill="url(#g-flame)"/>
      <path d="M100 58 C106 68 109 74 109 82 C109 90 105 95 100 95 C95 95 91 90 91 82 C91 74 94 68 100 58 Z" fill="#fff9df" opacity="0.9"/>
    </g>
  </svg>`;
}

$$(".diya").forEach((el) => (el.innerHTML = diyaSVG()));

/* ───────────────── Canvas: stars, sparkles, embers, fireworks ───────────────── */

const canvas = $("#sky");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, DPR = 1;
const stars = [];
const particles = [];
const rockets = [];
let lit = false;
let autoFireworks = false;
let lastAuto = 0;
// phones and tablets get fewer, cheaper particles so the page stays smooth
const LOW = matchMedia("(pointer: coarse)").matches || Math.min(window.innerWidth, window.innerHeight) < 600;
const Q = reducedMotion ? 0.3 : LOW ? 0.55 : 1;            // particle count multiplier
const MAX_PARTICLES = Math.round(1400 * Q);
const COLORS = ["#ffcc66", "#ff8c42", "#ffe3a3", "#ff6b8b", "#ffffff", "#7fe7ff", "#c58bff"];

function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, LOW ? 1.25 : 1.5);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  makeStars();
}

function makeStars() {
  stars.length = 0;
  const n = Math.floor((W * H) / (LOW ? 10000 : 7000));
  for (let i = 0; i < n; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: rand(0.4, 1.6),
      phase: Math.random() * Math.PI * 2,
      speed: rand(0.6, 1.8),
    });
  }
}

function spawn(p) {
  if (particles.length >= MAX_PARTICLES) particles.shift();
  particles.push(p);
}

/** golden sparkle trail under the finger / cursor */
function sparkle(x, y) {
  for (let i = 0; i < 2; i++) {
    spawn({
      x, y,
      vx: rand(-0.8, 0.8),
      vy: rand(-1.2, 0.2),
      life: 0, max: rand(25, 50),
      size: rand(1, 2.4),
      color: Math.random() < 0.7 ? "#ffcc66" : "#fff4dc",
      gravity: 0.02, friction: 0.96, glow: true,
    });
  }
}

/** slow warm embers rising from the bottom once the diya is lit */
function ember() {
  spawn({
    x: rand(0, W), y: H + 10,
    vx: rand(-0.15, 0.15), vy: rand(-0.45, -0.2),
    life: 0, max: rand(240, 420),
    size: rand(0.8, 2),
    color: Math.random() < 0.5 ? "#ffcc66" : "#ff8c42",
    gravity: -0.0004, friction: 1, glow: true, sway: rand(0, Math.PI * 2),
  });
}

/** a rocket that climbs then bursts */
function launch(x, targetY) {
  rockets.push({
    x, y: H + 4,
    vx: rand(-0.4, 0.4), vy: -rand(9, 12.5),
    targetY: targetY ?? rand(H * 0.15, H * 0.45),
    color: COLORS[(Math.random() * COLORS.length) | 0],
  });
}

function burst(x, y, color) {
  const n = Math.round((70 + ((Math.random() * 40) | 0)) * Q);
  const shape = Math.random();
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rand(-0.1, 0.1);
    const sp = shape < 0.5 ? rand(1.2, 4.2) : rand(2.8, 4.2); // scatter vs. ring
    spawn({
      x, y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 0, max: rand(55, 95),
      size: rand(1.4, 2.8),
      color: Math.random() < 0.85 ? color : "#ffffff",
      gravity: 0.045, friction: 0.975, glow: true, trail: true,
    });
  }
}

function fireworkAt(x, y) {
  launch(x, y);
}

/** a firecracker right where she taps: a bright pop, then a few crackles */
function cracker(x, y) {
  const color = COLORS[(Math.random() * COLORS.length) | 0];
  // flash
  const n = Math.round(45 * Q);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = rand(0.8, 3.6);
    spawn({
      x, y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 0.6,
      life: 0, max: rand(35, 70),
      size: rand(1.2, 2.6),
      color: Math.random() < 0.8 ? color : "#ffffff",
      gravity: 0.05, friction: 0.97, glow: true,
    });
  }
  // crackles: small delayed pops around the first one
  const pops = reducedMotion ? 1 : LOW ? 2 + ((Math.random() * 2) | 0) : 3 + ((Math.random() * 3) | 0);
  for (let k = 0; k < pops; k++) {
    setTimeout(() => {
      const px = x + rand(-40, 40), py = y + rand(-50, 10);
      for (let i = 0; i < 14; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = rand(0.5, 2.2);
        spawn({
          x: px, y: py,
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
          life: 0, max: rand(18, 36),
          size: rand(0.9, 1.8),
          color: Math.random() < 0.5 ? "#ffcc66" : "#ffffff",
          gravity: 0.05, friction: 0.96, glow: true,
        });
      }
    }, 120 + k * rand(90, 180));
  }
}

let last = performance.now();
function frame(now) {
  const dt = Math.min((now - last) / 16.67, 2); // normalise to ~60fps
  last = now;

  ctx.clearRect(0, 0, W, H);

  // stars (squares instead of arcs: same look at this size, much cheaper)
  const t = now / 1000;
  ctx.fillStyle = "#fff6d8";
  for (const s of stars) {
    const a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
    ctx.globalAlpha = a * (lit ? 0.85 : 1);
    ctx.fillRect(s.x - s.r, s.y - s.r, s.r * 2, s.r * 2);
  }
  ctx.globalAlpha = 1;

  // embers
  if (lit && !reducedMotion && Math.random() < (LOW ? 0.04 : 0.08) * dt) ember();

  // auto fireworks on the final screen
  if (autoFireworks && now - lastAuto > rand(550, 1000)) {
    lastAuto = now;
    launch(rand(W * 0.15, W * 0.85));
  }

  // rockets
  ctx.globalCompositeOperation = "lighter";
  for (let i = rockets.length - 1; i >= 0; i--) {
    const r = rockets[i];
    r.x += r.vx * dt;
    r.y += r.vy * dt;
    r.vy += 0.12 * dt;
    ctx.fillStyle = r.color;
    ctx.beginPath();
    ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
    ctx.fill();
    if (!LOW || Math.random() < 0.5) spawn({ x: r.x, y: r.y, vx: rand(-0.3, 0.3), vy: rand(0.5, 1.5), life: 0, max: 18, size: 1.2, color: "#ffe3a3", gravity: 0.02, friction: 0.95, glow: true });
    if (r.y <= r.targetY || r.vy >= 0) {
      rockets.splice(i, 1);
      burst(r.x, r.y, r.color);
    }
  }

  // particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life += dt;
    if (p.life >= p.max) { particles.splice(i, 1); continue; }
    if (p.sway !== undefined) { p.sway += 0.02 * dt; p.x += Math.sin(p.sway) * 0.3 * dt; }
    p.vx *= p.friction;
    p.vy = p.vy * p.friction + p.gravity * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    const k = 1 - p.life / p.max;
    const alpha = Math.max(0, Math.min(1, k * 1.2));
    const size = p.size * (0.6 + 0.4 * k);
    ctx.fillStyle = p.color;
    // glow: a soft, larger halo drawn additively (shadowBlur is far too slow on phones)
    if (p.glow) {
      ctx.globalAlpha = alpha * 0.28;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size * 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";

  requestAnimationFrame(frame);
}

window.addEventListener("resize", resize);
resize();
requestAnimationFrame(frame);

// sparkle trail + tap-to-firework
window.addEventListener("pointermove", (e) => {
  if (!reducedMotion) sparkle(e.clientX, e.clientY);
  if (currentStage === "question") fleeFrom(e.clientX, e.clientY);
}, { passive: true });
window.addEventListener("pointerdown", (e) => {
  // taps on buttons, cards, the letter or the diyas do their own thing
  if (e.target.closest("button, .reason, .letter, .diya")) return;
  if (currentStage === "yes") fireworkAt(e.clientX, e.clientY); // rockets on the final screen
  else cracker(e.clientX, e.clientY);                            // a firecracker anywhere else
}, { passive: true });

/* ───────────────── Stages ───────────────── */

let currentStage = "night";
const stageEls = $$(".stage");

function go(name) {
  currentStage = name;
  stageEls.forEach((s) => s.classList.toggle("active", s.dataset.stage === name));
  if (name === "letter") startLetter();
  if (name === "question") $(".q").textContent = fill(MODE.question);
  if (name === "yes") celebrate();
}

$$("[data-go]").forEach((b) => b.addEventListener("click", () => go(b.dataset.go)));

/* ───────────────── Stage 1: the night ───────────────── */

$$(".her-name").forEach((el) => (el.textContent = HER));
$$(".his-name").forEach((el) => (el.textContent = HIM));
$$(".footer-heart").forEach((el) => (el.textContent = MODE.footerHeart || "❤️"));

const row = $(".diya-row");
const ROW_COUNT = 7;
for (let i = 0; i < ROW_COUNT; i++) {
  const d = document.createElement("div");
  d.className = "diya";
  d.innerHTML = diyaSVG();
  row.appendChild(d);
}

function countdownText() {
  const [y, m, d] = CONFIG.diwaliDate.split("-").map(Number);
  if (!y || !m || !d) return "";
  const target = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((target - today) / 86400000);
  if (days === 0) return "It's Diwali today ✨";
  if (days === 1) return "Diwali is tomorrow ✨";
  if (days > 1 && days <= 30) return `Diwali in ${days} days ✨`;
  if (days < 0 && days >= -5) return "Diwali week ✨";
  return "";
}
$(".countdown").textContent = countdownText();

const mainDiya = $("#mainDiya");
function lightUp() {
  if (lit) return;
  lit = true;
  mainDiya.classList.add("lit");
  document.body.classList.add("lit");
  tryMusic();

  // a few sparks fly off the first flame
  const r = mainDiya.getBoundingClientRect();
  const fx = r.left + r.width / 2, fy = r.top + r.height * 0.45;
  for (let i = 0; i < 24; i++) {
    spawn({ x: fx, y: fy, vx: rand(-2, 2), vy: rand(-3.5, -0.5), life: 0, max: rand(30, 60), size: rand(1, 2.2), color: "#ffcc66", gravity: 0.06, friction: 0.97, glow: true });
  }

  // crackers go off on both sides of the screen, once, to celebrate the first flame
  const sideY = () => rand(H * 0.18, H * 0.4);
  setTimeout(() => launch(rand(W * 0.08, W * 0.22), sideY()), 350);
  setTimeout(() => launch(rand(W * 0.78, W * 0.92), sideY()), 550);
  setTimeout(() => launch(rand(W * 0.12, W * 0.28), sideY()), 950);
  setTimeout(() => launch(rand(W * 0.72, W * 0.88), sideY()), 1150);

  // then the little ones catch on, one by one, from the centre out
  const rowDiyas = $$(".diya", row);
  const mid = Math.floor(rowDiyas.length / 2);
  rowDiyas.forEach((d, i) => {
    const dist = Math.abs(i - mid);
    setTimeout(() => d.classList.add("lit"), 600 + dist * 260);
  });
}
mainDiya.addEventListener("click", lightUp);
mainDiya.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); lightUp(); } });

/* ───────────────── Stage 2: the letter ───────────────── */

let letterStarted = false;
let letterDone = false;
let letterTimer = null;

function startLetter() {
  if (letterStarted) return;
  letterStarted = true;
  const body = $(".letter-body");
  const lines = MODE.letter.map(fill);
  const paras = lines.map(() => { const p = document.createElement("p"); body.appendChild(p); return p; });
  let li = 0, ci = 0;

  const finish = () => {
    clearTimeout(letterTimer);
    paras.forEach((p, i) => { p.textContent = lines[i]; p.classList.remove("caret"); });
    letterDone = true;
    $(".letter .hint.small").classList.add("hidden");
    $('[data-stage="letter"] .btn.next').classList.remove("hidden");
  };

  const tick = () => {
    if (li >= lines.length) { finish(); return; }
    const p = paras[li];
    p.classList.add("caret");
    ci++;
    p.textContent = lines[li].slice(0, ci);
    let delay = 38;
    if (ci >= lines[li].length) {
      p.classList.remove("caret");
      li++; ci = 0;
      delay = 520;
    } else {
      const ch = lines[li][ci - 1];
      if (",.…!?".includes(ch)) delay = 220;
    }
    letterTimer = setTimeout(tick, reducedMotion ? 4 : delay);
  };

  letterTimer = setTimeout(tick, 500);
  $("#letter").addEventListener("click", () => { if (!letterDone) finish(); });
}

/* ───────────────── Stage 3: the reasons ───────────────── */

const reasonsEl = $(".reasons");
let litCount = 0;
const reasonsTitle = $(".reasons-title"), allLitEl = $(".all-lit");
if (reasonsTitle) reasonsTitle.textContent = fill(MODE.reasonsTitle);
if (allLitEl) allLitEl.textContent = fill(MODE.allLit);
MODE.reasons.forEach((text) => {
  const card = document.createElement("div");
  card.className = "reason";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.innerHTML = `<div class="diya">${diyaSVG()}</div><span class="tap-hint">tap to light</span><div class="text">${fill(text)}</div>`;
  const light = () => {
    if (card.classList.contains("lit")) return;
    card.classList.add("lit");
    $(".diya", card).classList.add("lit");
    litCount++;
    const r = card.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
      spawn({ x: r.left + r.width / 2, y: r.top + 40, vx: rand(-1.5, 1.5), vy: rand(-2.5, -0.5), life: 0, max: rand(25, 45), size: rand(1, 2), color: "#ffcc66", gravity: 0.05, friction: 0.97, glow: true });
    }
    if (litCount === MODE.reasons.length) {
      setTimeout(() => {
        $(".all-lit").classList.remove("hidden");
        $('[data-stage="reasons"] .btn.next').classList.remove("hidden");
      }, 600);
    }
  };
  card.addEventListener("click", light);
  card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); light(); } });
  reasonsEl.appendChild(card);
});

/* ───────────────── Stage 4: the question ───────────────── */

const yesBtn = $("#yes");
const noBtn = $("#no");
let noTries = 0;

function dodge() {
  noTries++;
  const texts = MODE.noTexts;
  noBtn.textContent = texts[Math.min(noTries, texts.length - 1)];

  // the "No" button runs away and shrinks; "Yes" grows
  const pad = 16;
  const bw = noBtn.offsetWidth, bh = noBtn.offsetHeight;
  const x = rand(pad, Math.max(pad, W - bw - pad));
  const y = rand(pad + 60, Math.max(pad + 60, H - bh - pad - 80));
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.zIndex = "5";
  const shrink = Math.max(0.55, 1 - noTries * 0.06);
  noBtn.style.transform = `scale(${shrink})`;
  yesBtn.style.transform = `scale(${Math.min(1.9, 1 + noTries * 0.12)})`;
}

noBtn.addEventListener("pointerenter", dodge);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); dodge(); }, { passive: false });
noBtn.addEventListener("click", (e) => { e.preventDefault(); dodge(); });
noBtn.addEventListener("focus", dodge);

// on a phone there is no hover, so the button runs when her finger gets close
let lastFlee = 0;
function fleeFrom(x, y) {
  if (!noBtn.isConnected) return;
  const now = performance.now();
  if (now - lastFlee < 350) return;
  const r = noBtn.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const reach = Math.max(r.width, r.height) / 2 + 60;
  if (Math.hypot(x - cx, y - cy) < reach) { lastFlee = now; dodge(); }
}

// a little wobble now and then, so she's tempted to try it
setInterval(() => {
  if (currentStage !== "question" || !noBtn.isConnected || noTries > 0) return;
  noBtn.classList.add("wobble");
  setTimeout(() => noBtn.classList.remove("wobble"), 700);
}, 3500);

yesBtn.addEventListener("click", () => go("yes"));

/* ───────────────── Stage 5: fireworks ───────────────── */

function rangoliSVG() {
  const parts = [];
  const petals = 16;
  for (let i = 0; i < petals; i++) {
    const a = (360 / petals) * i;
    parts.push(`<ellipse cx="200" cy="110" rx="18" ry="60" fill="none" stroke="#ffcc66" stroke-width="1.5" transform="rotate(${a} 200 200)"/>`);
    parts.push(`<ellipse cx="200" cy="60" rx="10" ry="26" fill="#ff8c42" opacity="0.6" transform="rotate(${a + 360 / petals / 2} 200 200)"/>`);
  }
  for (let i = 0; i < 8; i++) {
    const a = 45 * i;
    parts.push(`<path d="M200 200 L200 150 Q215 170 200 185 Q185 170 200 150Z" fill="#ffe3a3" opacity="0.8" transform="rotate(${a} 200 200)"/>`);
  }
  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="200" r="190" fill="none" stroke="#ffcc66" stroke-width="1" stroke-dasharray="6 10"/>
    <circle cx="200" cy="200" r="130" fill="none" stroke="#ff8c42" stroke-width="1"/>
    ${parts.join("")}
    <circle cx="200" cy="200" r="14" fill="#ffcc66"/>
  </svg>`;
}
$(".rangoli").innerHTML = rangoliSVG();

let celebrated = false;
function celebrate() {
  if (celebrated) return;
  celebrated = true;
  noBtn.remove();
  $(".big-yes").textContent = fill(MODE.bigYes);
  $(".line1").textContent = fill(MODE.finalLine1);
  $(".line2").textContent = fill(MODE.finalLine2);
  autoFireworks = true;
  // opening volley
  for (let i = 0; i < 5; i++) setTimeout(() => launch(rand(W * 0.2, W * 0.8)), i * 180);
}

/* ───────────────── Music (optional) ───────────────── */

const bgm = $("#bgm");
const musicBtn = $("#musicBtn");
let musicReady = false;

if (CONFIG.music) {
  bgm.src = CONFIG.music;
  bgm.volume = 0.5;
  bgm.addEventListener("canplay", () => { musicReady = true; musicBtn.classList.remove("hidden"); }, { once: true });
  bgm.addEventListener("error", () => { musicReady = false; musicBtn.classList.add("hidden"); });
  bgm.load();
}

function tryMusic() {
  if (!CONFIG.music) return;
  bgm.play().then(() => (musicBtn.textContent = "🔊")).catch(() => {});
}

musicBtn.addEventListener("click", () => {
  if (bgm.paused) { bgm.play().then(() => (musicBtn.textContent = "🔊")).catch(() => {}); }
  else { bgm.pause(); musicBtn.textContent = "🔈"; }
});
