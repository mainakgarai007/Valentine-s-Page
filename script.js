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

  // Add background heart particles
  const particles = document.createElement('div');
  particles.className = 'heart-particles';
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.textContent = '♥';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.fontSize = (Math.random() * 8 + 8) + 'px';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particles.appendChild(particle);
  }
  document.body.appendChild(particles);
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
      <div class="balloon" id="balloon1">
        <span id="text1">I</span>
        <div class="balloon-string"></div>
      </div>
      <div class="balloon" id="balloon2">
        <span id="text2">Love</span>
        <div class="balloon-string"></div>
      </div>
      <div class="balloon" id="balloon3">
        <span id="text3">You</span>
        <div class="balloon-string"></div>
      </div>
    </div>
    <div id="finalMessage" style="opacity: 0; margin-top: 30px; transition: opacity 1s;">
      <p style="margin-top:30px">There's more I want to show you…</p>
      <button class="btn" onclick="s5()">Continue →</button>
    </div>
  `);
  
  // Start the sequential balloon animation
  animateBalloonSequence();
}

function animateBalloonSequence() {
  const balloon1 = document.getElementById('balloon1');
  const balloon2 = document.getElementById('balloon2');
  const balloon3 = document.getElementById('balloon3');
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const finalMessage = document.getElementById('finalMessage');
  
  // Balloon 1: Float up → pause → blast → show "I"
  setTimeout(() => {
    balloon1.style.animation = 'balloonFloatUp 1.5s ease-out forwards';
  }, 300);
  
  setTimeout(() => {
    balloon1.style.animation = 'balloonHover 2s ease-in-out infinite';
  }, 1800);
  
  setTimeout(() => {
    balloon1.style.animation = 'balloonBlast 0.5s ease-out forwards';
    // Add sparkle effect
    createSparkles(balloon1);
  }, 3300);
  
  setTimeout(() => {
    text1.style.animation = 'textAppear 0.6s ease-out forwards';
  }, 3800);
  
  // Balloon 2: Float up → pause → blast → show "Love"
  setTimeout(() => {
    balloon2.style.animation = 'balloonFloatUp 1.5s ease-out forwards';
  }, 4400);
  
  setTimeout(() => {
    balloon2.style.animation = 'balloonHover 2s ease-in-out infinite';
  }, 5900);
  
  setTimeout(() => {
    balloon2.style.animation = 'balloonBlast 0.5s ease-out forwards';
    createSparkles(balloon2);
  }, 7400);
  
  setTimeout(() => {
    text2.style.animation = 'textAppear 0.6s ease-out forwards';
  }, 7900);
  
  // Balloon 3: Float up → pause → blast → show "You"
  setTimeout(() => {
    balloon3.style.animation = 'balloonFloatUp 1.5s ease-out forwards';
  }, 8500);
  
  setTimeout(() => {
    balloon3.style.animation = 'balloonHover 2s ease-in-out infinite';
  }, 10000);
  
  setTimeout(() => {
    balloon3.style.animation = 'balloonBlast 0.5s ease-out forwards';
    createSparkles(balloon3);
  }, 11500);
  
  setTimeout(() => {
    text3.style.animation = 'textAppear 0.6s ease-out forwards';
  }, 12000);
  
  // Show final message and button after all balloons are done
  setTimeout(() => {
    finalMessage.style.opacity = '1';
  }, 12800);
}

function createSparkles(balloon) {
  const rect = balloon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = centerX + 'px';
    sparkle.style.top = centerY + 'px';
    sparkle.style.fontSize = '16px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    
    const angle = (Math.PI * 2 * i) / 8;
    const distance = 40;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;
    
    document.body.appendChild(sparkle);
    
    sparkle.animate([
      { 
        left: centerX + 'px', 
        top: centerY + 'px', 
        opacity: 1,
        transform: 'scale(0.5)'
      },
      { 
        left: endX + 'px', 
        top: endY + 'px', 
        opacity: 0,
        transform: 'scale(1.2)'
      }
    ], {
      duration: 600,
      easing: 'ease-out'
    });
    
    setTimeout(() => sparkle.remove(), 600);
  }
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
  const fadeOut = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume -= 0.05;
    } else {
      music.volume = 0;
      clearInterval(fadeOut);
    }
  }, 200);
}

/* START */
initBackgroundAnimations();
s0();
