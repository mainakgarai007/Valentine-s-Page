const screens = document.querySelectorAll(".screen");
let current = 0;

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  music.play().catch(()=>{});
}, { once: true });

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");

  if (screens[current].id === "heart") {
    setTimeout(() => {
      nextScreen();
    }, 4500);
  }
}

/* Rain */
for (let i = 0; i < 50; i++) {
  let drop = document.createElement("div");
  drop.className = "rain-drop";
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = 1 + Math.random() * 2 + "s";
  document.getElementById("rain").appendChild(drop);
}

/* Hearts */
for (let i = 0; i < 20; i++) {
  let heart = document.createElement("div");
  heart.className = "heart-fall";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.getElementById("hearts").appendChild(heart);
}
