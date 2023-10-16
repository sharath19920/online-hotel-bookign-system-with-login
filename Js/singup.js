// Function to create a new user account
function signupUser() {
    // Get the input values from the form
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (you can add more validation logic here)
  
    // Check if all fields are filled
    if (!fullName || !email || !username || !password) {
      alert("Please fill in all the fields.");
      return;
    }
  
    // You can add more complex validation here (e.g., check email format)
  
    // Create a new user account (you can replace this with your backend logic)
    // For this example, we'll just display a success message
    alert("Account created successfully!");
  
    // Redirect to the login page or another page
    window.location.href = "login.html";
  }
  
  // Function to handle the signup button click
  function signupButtonClick() {
    // Call the signupUser function when the signup button is clicked
    signupUser();
  }
  
  // Attach an event listener to the signup button
  var signupButton = document.getElementById("signupButton");
  signupButton.addEventListener("click", signupButtonClick);
  