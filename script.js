let text = "Hey... I made something special for you 💖";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

function nextPage() {
    window.location.href = "page2.html";
}