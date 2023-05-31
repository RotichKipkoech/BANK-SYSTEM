function attemptLogin() {
    var inputLoginId = document.getElementsByClassName("loginId")[0].value;
    var inputPassword = document.getElementsByClassName("password")[0].value;

    // login logic
    var storedLoginId = "123456789";
    var storedPassword = "SecureBank";

    var loginResult = document.createElement("p");
    var loginResultText = "";

    if (inputLoginId === storedLoginId && inputPassword === storedPassword) {
        loginResultText = "Login successful!";
        {
            window.location.href="dashboard.html"; //Redirect to dashboard page
        }
        // Grant access or perform 
    } else {
        alert("Login failed , invalid credentials")
    }

    loginResult.textContent = loginResultText;
    loginResult.className = "login-result";
    
    var loginPage = document.getElementsByClassName("loginpage")[0];
    loginPage.appendChild(loginResult);
}
