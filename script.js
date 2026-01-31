document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "I hope you're having a kind day.",
        "You deserve to feel peaceful and safe.",
        "Take a moment to just... breathe.",
        "Your presence makes the world a softer place.",
        "You are enough, exactly as you are.",
        "Sending you a little warmth for your journey."
    ];

    let messageIndex = 0;
    const tapArea = document.getElementById('tap-area');
    const display = document.getElementById('message-display');
    const instruction = document.getElementById('instruction');

    tapArea.addEventListener('click', () => {
        // Fade out current message if it exists
        display.classList.remove('reveal');

        // Small delay to allow fade out before changing text
        setTimeout(() => {
            display.textContent = messages[messageIndex];
            display.classList.add('reveal');
            
            // Fade the instruction text to keep focus on the message
            instruction.style.opacity = "0.2";
            
            // Increment index and loop back to start
            messageIndex = (messageIndex + 1) % messages.length;
        }, 300);
    });
});

