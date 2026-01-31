const textElement = document.getElementById('text-overlay');
const charStage = document.getElementById('character-stage');
const blush = document.getElementById('blush-heart');
const replayBtn = document.getElementById('replay-btn');

// Helper to wait for a specific time
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function updateScene(text, showChar = true, blushDeep = false) {
    // Fade out
    textElement.style.opacity = 0;
    await wait(1000);

    // Update state
    textElement.innerText = text;
    if (showChar) charStage.classList.add('visible');
    else charStage.classList.remove('visible');
    
    if (blushDeep) blush.classList.add('deepen');
    else blush.classList.remove('deepen');

    // Fade in
    textElement.style.opacity = 1;
}

async function startExperience() {
    replayBtn.classList.add('hidden');
    
    // Scene 1: 0-3s
    await updateScene("Hey Beautiful 🌸", true, false);
    await wait(2500);

    // Scene 2: 3-7s
    await updateScene("I hope you’re having a kind day.", true, true);
    await wait(3500);

    // Scene 3: 7-11s
    await updateScene("Even quiet moments matter.", true, true);
    await wait(3500);

    // Scene 4: 11-15s
    await updateScene("A quiet moment for you, with no expectations.", false, false);
    await wait(4000);

    // Final state
    textElement.style.opacity = 0;
    await wait(1500);
    replayBtn.classList.remove('hidden');
}

// Start on load
window.addEventListener('DOMContentLoaded', startExperience);
