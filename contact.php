<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "info@proactiveict.co.za";  // Your Axxess email
    $headers = "From: ".$email."\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you, your message has been sent!";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
