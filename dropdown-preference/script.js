const languageSelect = document.getElementById("languageSelect");
const message = document.getElementById("message");

const messages = {
    en: "Welcome! Your language is saved.",
    es: "¡Bienvenida! Tu idioma se ha guardado.",
    fr: "Bienvenue ! Votre langue a été enregistrée.",
    de: "Willkommen! Ihre Sprache wurde gespeichert.",
    ja: "ようこそ！言語が保存されました。",
};

function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    languageSelect.value = lang;
    message.textContent = messages[lang] || messages.en;
}

const savedLang = localStorage.getItem("language");

const optionExists = !!languageSelect.querySelector(`option[value="${savedLang}]`);

const initialLang = optionExists ? savedLang : "en";

applyLang(initialLang);

languageSelect.addEventListener("change", () => {
    const chosen = languageSelect.value;
    applyLang(chosen);
})