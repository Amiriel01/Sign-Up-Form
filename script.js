function passwordConfirmation() {

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password2").value;
    
    if (password == confirmPassword) {
        document.getElementById("message").innerHTML = "**Success: Account Created!";
        //return true; (When I want it to actually submit the form on a website)//
    } else {
        document.getElementById("message").innerHTML = "**Error: Passwords do not match.";
    }
    return false;

}
