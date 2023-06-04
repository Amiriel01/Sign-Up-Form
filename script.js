function passwordConfirmation() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password2").value;
   
    if (password === "") {
        alert("Error: The password field is Empty.");
    } else if (password === confirmPassword) {
        alert("Logged In");
    } else {
        alert("Please make sure your passwords match.")
    }
}