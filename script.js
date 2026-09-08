const form = document.getElementById("loginForm");
const card = document.querySelector(".card");
const education = document.getElementById("education");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Demonstração segura:
    // Os dados digitados não são armazenados, enviados ou registrados.

    form.reset();

    card.classList.add("hidden");
    education.classList.remove("hidden");
});
