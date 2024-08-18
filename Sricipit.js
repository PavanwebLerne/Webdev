function enroll() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var enrollmentMessage = document.getElementById("enrollmentMessage");
    
    // You can implement further validation here
    
    enrollmentMessage.innerHTML = "Thanks for enrolling, " + name + "! Our team will contact you with course details.";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");

    // Simulated login process
    if (username === "admin" && password === "password") {
        loginMessage.innerHTML = "Login successful. Welcome, " + username + "!";
    } else {
        loginMessage.innerHTML = "Invalid username or password. Please try again.";
    }
}