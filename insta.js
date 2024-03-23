// Assuming you have an insta.js file linked in your HTML

document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var loginForm = document.querySelector("form");

  // Add an event listener for the form submission
  loginForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered in the username and password fields
    var usernameInput = document.querySelector('input[type="text"]');
    var passwordInput = document.querySelector('input[type="password"]');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // You can now use the 'username' and 'password' variables for further processing
    console.log("Username:", username);
    console.log("Password:", password);

    // Add your login logic here, for example, you might send the data to a server for authentication
  });
});
