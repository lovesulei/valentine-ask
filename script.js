// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

let currentX = 0;
let currentY = 0;

function moveButton() {
    const btn = noBtn;

    const btnRect = btn.getBoundingClientRect();

    const padding = 20;

    const maxX = window.innerWidth - btnRect.width - padding;
    const maxY = window.innerHeight - btnRect.height - padding;

    const minX = padding;
    const minY = padding;

    // Target position (absolute screen)
    const targetX = Math.random() * (maxX - minX) + minX;
    const targetY = Math.random() * (maxY - minY) + minY;

    // Convert to relative movement (delta)
    const deltaX = targetX - btnRect.left;
    const deltaY = targetY - btnRect.top;

    currentX += deltaX;
    currentY += deltaY;

    btn.style.transition = "transform 0.3s ease";
    btn.style.transform = `translate(${currentX}px, ${currentY}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// Click fallback
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});

// Logic to make YES btn to grow

let yesScale = 1;

 yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
 yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
     yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";      
        yesBtn.style.left = "50%";
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }else{
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }
 });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
