const scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.opacity = 0.8;
    } else {
        document.getElementById("myBtn").style.opacity = 0;
    }
};

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = () => scrollFunction();

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const hamburgerFunction = (x) => {
    let grid = document.querySelector(".grid");
    let boxMenu = document.querySelector(".box-menu");
    let hamburgerMenu = document.querySelector(".hamburger-menu");

    x.classList.toggle("change");

    if (x.classList.length === 2) {
        grid.style.gridTemplateColumns = "200px";
        boxMenu.style.display = "inline-block";
        hamburgerMenu.style.left = "12em";
    } else {
        grid.style.gridTemplateColumns = "0";
        boxMenu.style.display = "none";
        hamburgerMenu.style.left = "1em";
    }
};