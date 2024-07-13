<?php   
require('mailing/mailfunction.php');

$name = htmlspecialchars(strip_tags($_POST["name"]));
$phone = htmlspecialchars(strip_tags($_POST['phone']));
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags($_POST["message"]));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Invalid email format! Please go back and enter a valid email.';
    exit;
}

$body = "<ul>
            <li>Name: ".$name."</li>
            <li>Phone: ".$phone."</li>
            <li>Email: ".$email."</li>
            <li>Message: ".$message."</li>
         </ul>";

$receiver_email = "iskolartechsolutions@gmail.com";
$receiver_name = "Iskolartech Solutions";

$status = mailfunction($receiver_email, $receiver_name, $body);

if ($status) {
    echo 'Thanks! We will contact you soon.';
} else {
    echo 'Error sending message! Please try again.';
}
?>
