const boom = document.getElementById("boom");

boom.addEventListener('click', () => {
    new Audio("./sounds/boom.wav").play();
})

clap.addEventListener('click', () => {
    new Audio("./sounds/clap.wav").play();
})