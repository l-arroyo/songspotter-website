function getLanguage() {
    var lang = localStorage.getItem('lang');
    return lang || "en";
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
}