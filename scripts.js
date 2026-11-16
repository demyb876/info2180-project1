document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const email = document.querySelector("#email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailAddress = email.value.trim();

        if (emailAddress === "") {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =
            "Thank you! Your email address " +
            emailAddress +
            " has been added to our mailing list.";

        email.value = "";
    });
});