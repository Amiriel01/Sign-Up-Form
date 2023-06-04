function passwordConfirmation() {

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password2").value;

    if (password == "") {
        document.getElementById("message").innerHTML = "**Error: The password field is Empty.";
    } else if (password == confirmPassword) {
        document.getElementById("message").innerHTML = "**Account Created";
        //return true; (When I want it to actually work)//
    } else {
        document.getElementById("message").innerHTML = "**Please make sure your passwords match.";
    }
    return false;
}

