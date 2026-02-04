const app = document.getElementById("app");
const music = document.getElementById("bgMusic");
music.volume = 0.3;

// Initialize rain and hearts animation
function initBackgroundAnimations() {
  const rain = document.createElement('div');
  rain.className = 'rain';
  for (let i = 0; i < 30; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    rain.appendChild(drop);
  }
  document.body.appendChild(rain);

  const hearts = document.createElement('div');
  hearts.className = 'hearts';
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💗';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    hearts.appendChild(heart);
  }
  document.body.appendChild(hearts);
}

function show(html) {
  app.innerHTML = html;
}

function startMusic() {
  if (music.paused) {
    music.play().catch(e => {
      // Auto-play might be blocked, will play on first user interaction
      document.addEventListener('click', () => music.play(), { once: true });
    });
  }
}

/* S0.5 - PANDA INTRO */
function s0() {
  startMusic();
  show(`
    <img src="assets/characters/panda_intro.png" class="char float blink fade">
    <h1 class="fade">Let's make it worth it…</h1>
    <h2 class="fade">Forever ✨</h2>
  `);
  app.onclick = s1;
  setTimeout(s1, 5000);
}

/* S1 - BEAR INTRO */
function s1() {
  app.onclick = null;
  show(`
    <img src="assets/characters/bear_flower.png" class="char float fade">
    <h2 class="fade">I have something special to tell you…</h2>
    <p class="fade">Something that could change everything ✨</p>
    <button class="btn" onclick="s2()">Tap to Begin</button>
  `);
}

/* S2 - QUESTION 1 */
function s2() {
  show(`
    <h2 class="fade">Do you like surprises?</h2>
    <p class="fade">Trust me on this…</p>
    <button class="btn" onclick="s3()">Yes ❤️</button>
    <button class="btn" onclick="s3()">No 😌</button>
  `);
}

/* S3 - QUESTION 2 */
function s3() {
  show(`
    <h2 class="fade">Do you like me?</h2>
    <p class="fade">Be honest with me…</p>
    <button class="btn" onclick="s4()">Yes 🌸</button>
    <button class="btn" onclick="s3_5()">No 😔</button>
  `);
}

/* S3.5 - IF NO CLICKED */
function s3_5() {
  show(`
    <img src="assets/characters/panda_sad.png" class="char float blink fade">
    <h2 class="fade">Please say yes…</h2>
    <p class="fade">I really hope you do 🤍</p>
    <button class="btn" onclick="s4()">Yes ❤️</button>
  `);
}

/* S4 - HEART BALLOON CONFESSION */
function s4() {
  show(`
    <h2 class="fade">This is what I wanted to say for so long…</h2>
    <p class="fade">Watch the balloons carry my message to you</p>
    <div class="balloons">
      <div class="balloon">I</div>
      <div class="balloon">Love</div>
      <div class="balloon">You</div>
    </div>
    <p class="fade" style="margin-top:30px">There's more I want to show you…</p>
    <button class="btn" onclick="s5()">Continue →</button>
  `);
}

/* S5 - ENVELOPE SCREEN */
function s5() {
  show(`
    <div class="envelope">💌</div>
    <h2 class="fade">This is just for you…</h2>
    <button class="btn" onclick="s5_5()">Tap to see what's inside</button>
  `);
}

/* S5.5 - PRE-LETTER CALM SCREEN */
function s5_5() {
  show(`
    <h2 class="line">Before you read this…</h2>
    <p class="line">I just want you to know something.</p>
    <p class="line">This comes straight from my heart 🤍</p>
  `);
  setTimeout(s6, 3500);
}

/* S6 - LETTER SCREEN */
function s6() {
  show(`
    <div class="letter-card">
      <p class="text-block">Every challenge feels easier<br>when I imagine you by my side.</p>
      <p class="text-block">You're not just my friend,<br>you're the most special part of my life.</p>
      <p class="text-block">I don't know what the future holds,<br>but I want that future with you.</p>
    </div>
    <h3 class="fade">So, will you be mine forever?</h3>
    <button class="btn" onclick="s7()">Yes, forever 💖</button>
  `);
}

/* S7 - HEART CONNECT ANIMATION */
function s7() {
  show(`<div class="heart-animate">💔</div>`);
  setTimeout(() => {
    show(`<div class="heart-animate">❤️</div>`);
    setTimeout(s8, 2500);
  }, 2000);
}

/* S8 - MEMORIES */
function s8() {
  show(`
    <h2 class="fade">Some memories…</h2>
    <div class="memories">
      <img src="assets/memories/img1.jpg" alt="Memory 1">
      <img src="assets/memories/img2.jpg" alt="Memory 2">
      <img src="assets/memories/img3.jpg" alt="Memory 3">
      <img src="assets/memories/img4.jpg" alt="Memory 4">
    </div>
    <button class="btn" onclick="s9()">Continue</button>
  `);
}

/* S9 - FINAL END SCREEN */
function s9() {
  document.querySelector(".email").style.display = "none";
  show(`<h1 class="fade">Forever starts now ✨</h1>`);
  
  // Fade out music
  let vol = music.volume;
  const fadeOut = setInterval(() => {
    if (vol > 0.05) {
      vol -= 0.05;
      music.volume = vol;
    } else {
      music.volume = 0;
      clearInterval(fadeOut);
    }
  }, 200);
}

/* START */
initBackgroundAnimations();
s0();
