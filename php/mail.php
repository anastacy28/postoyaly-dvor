<?php

$recepient = "postoyaly-dvor@ukr.net";
$sitename = "postoyaly-dvor.com.ua";

$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
	foreach ( $_POST as $key => $value ) {
			if ( $value != "" ) {
				$message .= "" . $key . ":" . " " . $value . "\n";
			}
		}
}


$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");