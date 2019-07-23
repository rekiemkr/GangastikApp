<?php

function sendMail($email, $subject, $from, $content, $contentHtml) {
	$boundary = uniqid('np');
	
	$to = $email;
	
	//and specify the boundary for the email
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "From: " . strip_tags($from) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($from) . "\r\n";
	$headers .= "To: ".$email."\r\n";
	$headers .= "Content-Type: multipart/alternative;boundary=".$boundary."\r\n";
	
	//here is the content body
	$message = "This is a MIME encoded message.";
	$message .= "\r\n\r\n--".$boundary."\r\n";
	$message .= "Content-type: text/plain;charset=utf-8\r\n\r\n";
	
	$message .= $content;
	$message .= "\r\n\r\n--" . $boundary . "\r\n";
	$message .= "Content-type: text/html;charset=utf-8\r\n\r\n";
	$message .= $contentHtml;
	
	$message .= "\r\n\r\n--" . $boundary . "--";
	
	$res = mail($to, $subject, $message, $headers);
	return $res;
}

?>