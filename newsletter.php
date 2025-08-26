<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $to = "info@proactiveict.co.za"; // Where you want to collect newsletter emails
    $subject = "New Newsletter Subscription";
    $message = "New subscriber: " . $email;

    $headers = "From: no-reply@proactiveict.co.za\r\n";
    $headers .= "Reply-To: ".$email."\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for subscribing!";
    } else {
        echo "Subscription failed. Please try again.";
    }
}
?>
