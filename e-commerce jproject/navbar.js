var transnav = document.getElementById("navbar-transparent");

window.onscroll = function() {toggleOpaque()};

function toggleOpaque() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        transnav.classList.add("opaque");
    } else {
        transnav.classList.remove("opaque");
    }
}

