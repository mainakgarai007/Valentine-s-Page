const app = document.getElementById("app");
const music = document.getElementById("bgMusic");
music.volume = 0.5;

function show(html){
  app.innerHTML = html;
}

function startMusic(){
  if(music.paused) music.play();
}

/* S0.5 Panda Intro */
function s0(){
  startMusic();
  show(`
    <img src="assets/characters/panda_intro.png" class="char fade">
    <h1 class="fade">Let’s make it worth it…</h1>
    <h2 class="fade">Forever ✨</h2>
  `);
  app.onclick = s1;
  setTimeout(s1,5000);
}

/* S1 Bear */
function s1(){
  app.onclick=null;
  show(`
    <img src="assets/characters/bear_flower.png" class="char fade">
    <h2>I have something special to tell you…</h2>
    <p>Something that could change everything ✨</p>
    <button class="btn" onclick="s2()">Tap to Begin</button>
  `);
}

/* S2 Surprise */
function s2(){
  show(`
    <h2>Do you like surprises?</h2>
    <button class="btn" onclick="s3()">Yes ❤️</button>
    <button class="btn" onclick="s3()">No 😌</button>
  `);
}

/* S3 Like me */
function s3(){
  show(`
    <h2>Do you like me?</h2>
    <button class="btn" onclick="balloons()">Yes 🌸</button>
    <button class="btn" onclick="sad()">No 😔</button>
  `);
}

/* S3.5 Sad */
function sad(){
  show(`
    <img src="assets/characters/panda_sad.png" class="char fade">
    <h2>Please say yes…</h2>
    <p>I really hope you do 🤍</p>
    <button class="btn" onclick="balloons()">Yes ❤️</button>
  `);
}

/* S4 Balloons */
function balloons(){
  show(`
    <h2>This is what I wanted to say for so long…</h2>
    <p>Watch the balloons carry my message to you</p>
    <div class="balloons">
      <div class="balloon">I</div>
      <div class="balloon">Love</div>
      <div class="balloon">You</div>
    </div>
    <p style="margin-top:30px">There’s more I want to show you…</p>
    <button class="btn" onclick="envelope()">Continue →</button>
  `);
}

/* S5 Envelope */
function envelope(){
  show(`
    <h2>This is just for you…</h2>
    <button class="btn" onclick="preLetter()">❤️ Tap to see what’s inside</button>
  `);
}

/* Pre Letter */
function preLetter(){
  show(`
    <h2>Before you read this…</h2>
    <p>This comes straight from my heart 🤍</p>
  `);
  setTimeout(letter,3000);
}

/* Letter */
function letter(){
  show(`
    <p>
      Every challenge feels easier when I imagine you by my side.<br><br>
      You’re not just my friend, you’re the most special part of my life.<br><br>
      I don’t know what the future holds,<br>
      but I want that future with you.
    </p>
    <h3>So, will you be mine forever?</h3>
    <button class="btn" onclick="heart()">Yes, forever 💖</button>
  `);
}

/* Heart connect */
function heart(){
  show(`
    <img src="assets/icons/broken_heart.png" class="char fade">
  `);
  setTimeout(()=>{
    show(`<img src="assets/icons/heart.png" class="char fade">`);
    setTimeout(memories,2500);
  },2000);
}

/* Memories */
function memories(){
  show(`
    <h2>Some memories…</h2>
    <div class="memories">
      <img src="assets/memories/img1.jpg">
      <img src="assets/memories/img2.jpg">
      <img src="assets/memories/img3.jpg">
      <img src="assets/memories/img4.jpg">
    </div>
    <button class="btn" onclick="end()">Continue</button>
  `);
}

/* End */
function end(){
  document.querySelector(".email").style.display="none";
  show(`<h1>Forever starts now ✨</h1>`);
  music.volume = 0.2;
}

/* START */
s0();
