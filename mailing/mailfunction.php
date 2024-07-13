<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require('vendor/autoload.php');
require('mailingvariables.php');

function mailfunction($mail_reciever_email, $mail_reciever_name, $mail_msg, $attachment = false){

    $mail = new PHPMailer(true); // Enable exceptions

    try {
        // Server settings
        $mail->isSMTP();
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER; // Uncomment for debug output
        $mail->Host = $GLOBALS['mail_host'];
        $mail->Port = $GLOBALS['mail_port'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->SMTPAuth = true;
        $mail->Username = $GLOBALS['mail_sender_email'];
        $mail->Password = $GLOBALS['mail_sender_password'];

        // Recipients
        $mail->setFrom($GLOBALS['mail_sender_email'], $GLOBALS['mail_sender_name']);
        $mail->addAddress($mail_reciever_email, $mail_reciever_name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Someone Contacted You!';
        $mail->msgHTML($mail_msg);
        $mail->AltBody = 'This is a plain-text message body';

        // Attachments
        if ($attachment !== false) {
            $mail->addAttachment($attachment);
        }

        // Send the email
        $mail->send();
        return true;
    } catch (Exception $e) {
        // Log or echo error message for debugging
        error_log('Mail Error: ' . $mail->ErrorInfo);
        return false;
    }
}
?>
