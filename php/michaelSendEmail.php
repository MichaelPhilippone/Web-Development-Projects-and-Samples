<?php
/*
 *	AUTHOR:		Michael Philippone
 *	EMAIL:		michael.philippone@corporatezen.com
 *	PURPOSE:	Catch form post request and send email with all form info
*/ 

	try {
		if( !$_POST ) {
			echo "Missing Form Post Variable.\n";
			return -1;
		}

		// This is the mail administrator's address: (who gets the form contact)
		$to = "mp656@me.com";
		
		// this is the page to which to redirect after we send everything:
		$redir = "thanks.shtml";
		
		// All the form fields: (from the HTML page)
		$name = $_POST['name'];
		$address = $_POST['address'];
		$city = $_POST['city'];
		$country = $_POST['country'];
		$company = $_POST['company'];
		$from = $_POST['email'];
		$phone = $_POST['phone'];
		$skype = $_POST['skype'];			
		$comments = $_POST['comments'];		// TextArea
		$subj = $_POST['subject'];			// HIDDEN
		
		// Now, construct our email message:
		$message = "Name:		".$name."\r\n" ;
		$message = message."Name:		".$address."\r\n" ;
		$message = message."Address:		".$city."\r\n" ;
		$message = message."Country:		".$country."\r\n" ;
		$message = message."Company:		".$company."\r\n" ;
		$message = message."Email:		".$email."\r\n" ;
		$message = message."Phone:		".$phone."\r\n" ;
		$message = message."Skype:		".$skype."\r\n" ;
		$message = message."Comments:		".$comments."\r\n" ;
		
		// toss on some added info for the email
		$headers = "From: ".$from."\r\n" ;
		$headers .= "Reply-To: ".$from."\r\n" ;
		
		// In case any of our lines are larger than 70 characters, we should use wordwrap()
		$message = wordwrap($message, 70);
		
		// Send the mail!
		mail( $to , $subj , $message , $headers );
		
		// redirect to the thanks page
		// thanks.shtml
	
		header('Location: '.$redir);
	
	} catch (Exception $e) {
	    echo 'Caught exception: ',  $e->getMessage(), "\n";
	}

?>
