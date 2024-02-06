<?php
include('dbconfig.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['user_signin'])) {
    $firstname = $_POST['first-name'];
    $lastname = $_POST['last-name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO user (firstName, lastName, email, password) VALUES ('$firstname', '$lastname', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        header('location: login.php');
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WattWise</title>
    <link rel="stylesheet" href="../html/css/signup.css">
</head>

<body>
    <header>
        <div>
            <img src="../html/images/logo.png" alt="Logo">
            <h1>WattWise</h1>
        </div>
        <a href="#">Log in</a>
    </header>
    <div class="container">
        <div class="left-container">
            Sign Up for a Sustainable Future
        </div>
        <div class="signup-container">
            <form class="signup-form" action="" method="POST">
                <h4>Sign Up</h4>
                <div class="name-inputs">
                    <div class="input-group">
                        <label for="first-name" class="name-label">First name</label>
                        <input type="text" class="name-input" name="first-name" required>
                    </div>
                    <div class="input-group">
                        <label for="last-name" class="name-label">Last name</label>
                        <input type="text" class="name-input" name="last-name" required>
                    </div>
                </div>

                <label for="email" class="email-label">Email address</label>
                <input type="email" class="email-input" name="email" required>

                <label for="password" class="password-label">Password
                    <div class="password-toggle" onclick="togglePasswordVisibility()">
                        <img src="../html/images/eye-on.png">
                    </div>
                </label>

                <div class="password-input-container">
                    <input type="password" class="password-input" id="password" name="password" required>
                    <p class="password-requirements">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" name="terms-checkbox" required>
                    <label for="terms-checkbox">By creating an account, I agree to our <a href="#" class="condition">Terms of use</a> and <a href="#" class="condition">Privacy Policy</a></label>
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" name="sms-checkbox">
                    <label for="sms-checkbox">By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.</label>
                </div>

                <button type="submit" class="submit" name="user_signin">Sign up</button>

                <div class="additional-info">
                    Already have an account? <a href="../html/login.html" class="condition">Log in</a>
                </div>
            </form>
        </div>
    </div>

    <script>
        function togglePasswordVisibility() {
            var passwordInput = document.getElementById("password");
            var passwordToggle = document.querySelector(".password-toggle img");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                passwordToggle.src = "images/eye-off.png";
            } else {
                passwordInput.type = "password";
                passwordToggle.src = "images/eye-on.png";
            }
        }
    </script>
</body>

</html>