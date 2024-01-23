<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database_wattwise";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve form data
$first_name = mysqli_real_escape_string($conn, $_POST['first-name']);
$last_name = mysqli_real_escape_string($conn, $_POST['last-name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

// Insert data into the database
$sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
