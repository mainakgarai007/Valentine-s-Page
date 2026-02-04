const app = document.getElementById("app");

function screen(html) {
  app.innerHTML = `<div class="screen">${html}</div>`;
}

/* S0.5 Panda Intro */
setTimeout(() => {
  screen(`
    <img class="character" src="assets/characters/panda_intro.png">
    <p>Something special is coming...</p>
  `);
}, 500);

/* S1 Bear Intro */
setTimeout(() => {
  screen(`
    <img class="character" src="assets/characters/bear_flower.png">
    <h2>I have something special to tell you…</h2>
    <p>Something that will change everything ✨</p>
    <button class="btn-main" onclick="question1()">💗 Tap to Begin</button>
  `);
}, 2500);

function question1() {
  screen(`
    <h2>Do you like surprises?</h2>
    <p>I promise it's worth it…</p>
    <button class="btn-yes" onclick="question2()">Yes 💕</button>
    <button class="btn-no" onclick="noScreen()">No 😔</button>
  `);
}

function question2() {
  screen(`
    <h2>Do you like me?</h2>
    <p>Be honest with me…</p>
    <button class="btn-yes" onclick="memories()">Yes 💖</button>
    <button class="btn-no" onclick="noScreen()">No 😢</button>
  `);
}

/* NO screen */
function noScreen() {
  screen(`
    <img class="character" src="assets/characters/cat_pleading.png">
    <h2>Please say yes!</h2>
    <p>I really hope you do…</p>
    <button class="btn-yes" onclick="question2()">Yes ❤️</button>
  `);
}

/* Memories */
function memories() {
  screen(`
    <h2>This is what I wanted to say for so long…</h2>
    <div class="memories">
      <img src="assets/memories/img1.jpg">
      <img src="assets/memories/img2.jpg">
      <img src="assets/memories/img3.jpg">
      <img src="assets/memories/img4.jpg">
    </div>
    <button class="btn-main" onclick="heartConnect()">Continue →</button>
  `);
}

/* Heart connect */
function heartConnect() {
  screen(`
    <img src="assets/icons/broken_heart.png" width="120">
    <p>💔</p>
    <button class="btn-main" onclick="finalScreen()">Fix it ❤️</button>
  `);
}

function finalScreen() {
  screen(`
    <img src="assets/icons/heart.png" width="140">
    <h2>Yes, forever 💖</h2>
    <p>Let’s make it worth it… Forever ✨</p>
  `);
}
