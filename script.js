
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Köszönjük, ${name}! Az űrlap tesztje sikeres.`;

    form.reset();
});
