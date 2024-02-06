<?php
include('dbconfig.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['user_login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT email, password FROM user WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows == 1) {
        // replace with your actual code
        header('Location: user_profile.html');

        exit();
    } else {
        $error[] = 'Incorrect username or password';
    }
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WattWise</title>
    <link rel="stylesheet" href="../html/css/login.css">
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
            Log In for a Sustainable Future
        </div>
        <div class="login-container">
            <form class="login-form" action="" method="POST">
                <h4>Log In</h4>
                <label for="username" class="username-label">Email</label>
                <input type="email" id="username" name="username" required>

                <label for="password" class="password-label">Password
                    <div class="password-toggle" onclick="togglePasswordVisibility()">
                        <img src="../html/images/eye-on.png">
                    </div>
                </label>

                <div class="password-input-container">
                    <input type="password" id="password" name="password" required>
                </div>
                <!-- add some style -->
                

                <button type="submit" name="user_login">Log in</button>

                <div class="additional-info">
                    By continuing, you agree to the <a href="#" class="condition">Terms of use</a> and <a href="#" class="condition">Privacy Policy</a>.
                    <br>
                    <br>
                    <br>
                    <span class="span">
                        <a href="#" class="issue">Other issue with sign in?</a>
                        <a href="#" class="forget">Forget your password</a>
                    </span>
                </div>

                <div class="additional-info2">
                    <button class="create-account" onclick="redirectToSignup()">Create Account</button>
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

        function redirectToSignup() {
            window.location.href = "signup.php";
        }

        function redirectToUser() {
            window.location.href = "user_profile.html";
        }
    </script>
</body>

</html>