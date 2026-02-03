let screens = document.querySelectorAll(".screen");
let index = 0;
const music = document.getElementById("bgMusic");

function next(){
  screens[index].classList.remove("active");
  index++;
  screens[index].classList.add("active");

  if(index === 1){
    music.volume = 0.25;
    music.play();
  }
}

/* Falling hearts */
for(let i=0;i<35;i++){
  const h=document.createElement("span");
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDuration=5+Math.random()*5+"s";
  document.getElementById("background").appendChild(h);
}

/* No button dodge */
document.addEventListener("mouseover",e=>{
  if(e.target.classList.contains("no-btn")){
    e.target.style.transform=`translate(${Math.random()*60-30}px,${Math.random()*30-15}px)`;
  }
});
