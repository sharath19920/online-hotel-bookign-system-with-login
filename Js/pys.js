document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("card-number");
    const expirationInput = document.getElementById("expiration");
    const cvvInput = document.getElementById("cvv");
    const confirmationMessage = document.getElementById("confirmation");
    const submitButton = document.getElementById("submit-button");

    // Regular expressions for validation
    const cardNumberRegex = /^\d{16}$/;
    const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;

    submitButton.addEventListener("click", function () {
        // Validate card number
        if (!cardNumberRegex.test(cardNumberInput.value)) {
            alert("Invalid card number. Please enter a 16-digit card number.");
            return;
        }

        // Validate expiration date
        if (!expirationRegex.test(expirationInput.value)) {
            alert("Invalid expiration date. Please enter a valid MM/YY format.");
            return;
        }

        // Validate CVV
        if (!cvvRegex.test(cvvInput.value)) {
            alert("Invalid CVV. Please enter a 3-digit CVV.");
            return;
        }

        // Display the confirmation message
        confirmationMessage.style.display = "block";
    });
});
