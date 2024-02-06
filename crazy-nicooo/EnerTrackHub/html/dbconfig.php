<?php

$servername = "localhost";
$dbuser = "root";
$dbpassword = "";
$dbname = "wattwise";

$conn = new mysqli($servername, $dbuser, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
