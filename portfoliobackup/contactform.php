<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "ben.nguyen08@icloud.com";
    $headers = "Portfolio - From: ".$name;
    $txt = "You have received an email from ".$name.".\nThere email is ".$mailFrom."!\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html");
}