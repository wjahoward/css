// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.opacity = 0.8;
    } else {
        document.getElementById("myBtn").style.opacity = 0;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}