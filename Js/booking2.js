// script.js
document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Perform AJAX request to submit data to the server
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "pay.html", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Redirect to payment page
            window.location.href = "pay.html";
        }
    };

    xhr.send(formData);
});
