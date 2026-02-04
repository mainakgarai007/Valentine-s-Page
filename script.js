const app = document.getElementById("app");
const music = document.getElementById("bgMusic");
music.volume = 0.5;

function show(html){
  app.innerHTML = html;
}

function startMusic(){
  if(music.paused) music.play();
}

/* Create floating hearts background */
function createFloatingHearts(){
  setInterval(()=>{
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 15000);
  }, 2000);
}

/* Create sparkle effect */
function createSparkles(x, y, count = 20){
  for(let i = 0; i < count; i++){
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    const angle = (Math.PI * 2 * i) / count;
    const velocity = 50 + Math.random() * 50;
    sparkle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
    sparkle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
    sparkle.style.background = ['#fff','#ff4fb9','#ff86e0','#ffd700'][Math.floor(Math.random()*4)];
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
}

/* Create confetti effect */
function createConfetti(count = 50){
  for(let i = 0; i < count; i++){
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.background = ['#ff4fb9','#ff86e0','#ffd700','#4fbfff','#6fff4f'][Math.floor(Math.random()*5)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

/* S0.5 Panda Intro */
function s0(){
  startMusic();
  createFloatingHearts();
  show(`
    <img src="assets/characters/panda_intro.png" class="char bounce-in">
    <h1 class="fade" style="animation-delay:0.3s">Let's make it worth it…</h1>
    <h2 class="slide-up" style="animation-delay:0.6s">Forever ✨</h2>
  `);
  app.onclick = s1;
  setTimeout(s1,5000);
}

/* S1 Bear */
function s1(){
  app.onclick=null;
  show(`
    <img src="assets/characters/bear_flower.png" class="char scale-in">
    <h2 class="slide-up">I have something special to tell you…</h2>
    <p class="fade" style="animation-delay:0.3s">Something that could change everything ✨</p>
    <button class="btn fade" style="animation-delay:0.5s" onclick="s2()">Tap to Begin</button>
  `);
}

/* S2 Surprise */
function s2(){
  createSparkles(window.innerWidth/2, window.innerHeight/2, 30);
  show(`
    <h2 class="bounce-in">Do you like surprises?</h2>
    <button class="btn scale-in" style="animation-delay:0.3s" onclick="s3()">Yes ❤️</button>
    <button class="btn scale-in" style="animation-delay:0.5s" onclick="s3()">No 😌</button>
  `);
}

/* S3 Like me */
function s3(){
  show(`
    <h2 class="pulse">Do you like me?</h2>
    <button class="btn bounce-in" style="animation-delay:0.2s" onclick="balloons()">Yes 🌸</button>
    <button class="btn bounce-in" style="animation-delay:0.4s" onclick="sad()">No 😔</button>
  `);
}

/* S3.5 Sad */
function sad(){
  show(`
    <img src="assets/characters/panda_sad.png" class="char bounce-in">
    <h2 class="slide-up">Please say yes…</h2>
    <p class="fade" style="animation-delay:0.3s">I really hope you do 🤍</p>
    <button class="btn pulse" onclick="balloons()">Yes ❤️</button>
  `);
}

/* S4 Balloons */
function balloons(){
  createConfetti(50);
  show(`
    <h2 class="bounce-in">This is what I wanted to say for so long…</h2>
    <p class="fade" style="animation-delay:0.3s">Watch the balloons carry my message to you</p>
    <div class="balloons">
      <div class="balloon" style="animation-delay:0s">I</div>
      <div class="balloon" style="animation-delay:0.3s">Love</div>
      <div class="balloon" style="animation-delay:0.6s">You</div>
    </div>
    <p class="slide-up" style="margin-top:30px;animation-delay:1s">There's more I want to show you…</p>
    <button class="btn scale-in" style="animation-delay:1.5s" onclick="envelope()">Continue →</button>
  `);
}

/* S5 Envelope */
function envelope(){
  show(`
    <h2 class="pulse">This is just for you…</h2>
    <button class="btn bounce-in" style="animation-delay:0.3s" onclick="preLetter()">❤️ Tap to see what's inside</button>
  `);
}

/* Pre Letter */
function preLetter(){
  show(`
    <h2 class="fade">Before you read this…</h2>
    <p class="slide-up" style="animation-delay:0.5s">This comes straight from my heart 🤍</p>
  `);
  setTimeout(letter,3000);
}

/* Letter */
function letter(){
  createSparkles(window.innerWidth/2, window.innerHeight/2, 25);
  show(`
    <p class="slide-up" style="max-width:500px;line-height:1.8">
      Every challenge feels easier when I imagine you by my side.<br><br>
      You're not just my friend, you're the most special part of my life.<br><br>
      I don't know what the future holds,<br>
      but I want that future with you.
    </p>
    <h3 class="pulse" style="margin-top:25px">So, will you be mine forever?</h3>
    <button class="btn bounce-in" style="animation-delay:0.5s" onclick="heart()">Yes, forever 💖</button>
  `);
}

/* Heart connect */
function heart(){
  createSparkles(window.innerWidth/2, window.innerHeight/2, 40);
  show(`
    <img src="assets/icons/broken_heart.png" class="char scale-in">
  `);
  setTimeout(()=>{
    createConfetti(30);
    show(`<img src="assets/icons/heart.png" class="char bounce-in pulse">`);
    setTimeout(memories,2500);
  },2000);
}

/* Memories */
function memories(){
  show(`
    <h2 class="bounce-in">Some memories…</h2>
    <div class="memories fade" style="animation-delay:0.3s">
      <img src="assets/memories/img1.jpg">
      <img src="assets/memories/img2.jpg">
      <img src="assets/memories/img3.jpg">
      <img src="assets/memories/img4.jpg">
    </div>
    <button class="btn scale-in" style="animation-delay:0.6s" onclick="end()">Continue</button>
  `);
}

/* End */
function end(){
  createConfetti(100);
  document.querySelector(".email").style.display="none";
  show(`<h1 class="bounce-in pulse">Forever starts now ✨</h1>`);
  music.volume = 0.2;
}

/* START */
s0();
