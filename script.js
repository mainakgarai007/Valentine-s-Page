const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  if (music.paused) music.play().catch(()=>{});
}, { once: true });

function screen(html) {
  app.innerHTML = `<div class="screen">${html}</div>`;
}

/* 🌧 Rain + 💕 Hearts */
const rain = document.querySelector(".rain");
for (let i = 0; i < 60; i++) {
  const d = document.createElement("div");
  d.className = "drop";
  d.style.left = Math.random() * 100 + "vw";
  d.style.animationDuration = 0.6 + Math.random() + "s";
  rain.appendChild(d);
}

const hearts = document.querySelector(".hearts");
["💖","💗","💕"].forEach(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 4 + Math.random() * 4 + "s";
  hearts.appendChild(h);
});

/* FLOW START */
memories();

function memories() {
  screen(`
    <h2>Some memories…</h2>
    <div class="memories">
      <img src="assets/memories/img1.jpg">
      <img src="assets/memories/img2.jpg">
      <img src="assets/memories/img3.jpg">
      <img src="assets/memories/img4.jpg">
    </div>
    <button onclick="envelope()">Continue</button>
  `);
}

function envelope() {
  screen(`
    <h2>This is just for you…</h2>
    <button onclick="letter()">💌 Open</button>
  `);
}

function letter() {
  screen(`
    <p>
      Every challenge feels easier because I imagine you by my side.<br><br>
      You make my life brighter in ways I can't explain.
    </p>
    <button onclick="heartConnect()">Yes, forever ❤️</button>
  `);
}

function heartConnect() {
  screen(`
    <div class="heart-stage">
      <div class="broken">💔</div>
      <div class="full">❤️</div>
    </div>
  `);

  setTimeout(() => {
    document.querySelector(".screen").classList.add("connect");
  }, 300);

  setTimeout(finalCinematic, 2600);
}

function finalCinematic() {
  screen(`
    <h1 style="font-size:26px; text-shadow:0 0 20px hotpink;">
      Forever starts now ✨
    </h1>
  `);
}
