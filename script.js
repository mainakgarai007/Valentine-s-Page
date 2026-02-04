const music=document.getElementById("bgMusic");
music.volume=0.25;
music.play();

function go(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// auto S0.5 → S1
setTimeout(()=>go("s1"),2000);
