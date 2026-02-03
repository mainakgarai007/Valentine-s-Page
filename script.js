let current = 1;
const music = document.getElementById("bgMusic");

function nextScreen() {
  document.getElementById("screen" + current).classList.remove("active");
  current++;
  document.getElementById("screen" + current).classList.add("active");

  if (current === 2) {
    music.volume = 0.25;
    music.play();
  }
}

// falling hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.getElementById("background").appendChild(heart);
}

// no button dodge
document.addEventListener("mouseover", e => {
  if (e.target.classList.contains("no-btn")) {
    e.target.style.left = Math.random() * 100 - 50 + "px";
  }
});
