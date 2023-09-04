function getLanguage() {
    var lang = localStorage.getItem('lang');
    return lang || "en";
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
}

window.addEventListener("DOMContentLoaded", () => {
    // get all nav links
    const navLinks = document.querySelectorAll(".nav-link");

    // get current path
    const path = window.location.pathname;
});