
        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Get input values
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Check if the username and password are correct (for demonstration purposes)
            if (username === "user" && password === "password") {
                alert("Login successful!");
                // Redirect to the dashboard or another page
                // window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });
    