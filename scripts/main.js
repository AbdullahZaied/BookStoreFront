const menu = document.querySelector(".menu");
menu.addEventListener('click', () => {
    const x = document.querySelector(".navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
});