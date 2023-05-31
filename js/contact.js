document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.querySelector("button");
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        var messageInput = document.getElementById("message");
        var emailInput = document.querySelector("input[type='email']");
        alert("Message received: " + messageInput.value);
        messageInput.value = "";

        // Check if email is valid
        var isValidEmail = isValidEmailAddress(emailInput.value);
        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message received: " + messageInput.value);

        // Clear input fields
        emailInput.value = "";
        messageInput.value = "";
    });
    var form = document.getElementById("myForm");
    form.reset();
});

function isValidEmailAddress(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
