/** *******************************************************
 * WHO:			Michael Philippone
 * 
 * WHAT:		collection of functions and 
 * 				algorithms for validating form input
 * 
 * WHEN:		02 Sept 2009
 * 
 * HOW:		
 * 		PROPERTIES / GLOBALS:
 * 			-->	window.validateFields
 * 
 * 		FUNCTIONS:
 * 			-->	registerFormField
 * 			-->	unregisterFormField
 * 			-->	validateForm
 * 			--> alertMsg
 * 
 * 		INSTRUCTIONS:
 * 			1)	include this JS file in the page with a <script></script> tag
 * 
 * 			2)	use the following code as the onSubmit function in the <form> element
 * 				
 * 					CODE: onSubmit="javascript:return validateForm();"
 * 
 * 			3)	use the following code to register a form field for validation 
 *				(don't forget to put it between <script></script> tags!)
 *
 *					CODE: registerFormField(  <fieldNameOrID>  ,  <validationType>  ,  <message>  ); 	
 *					(see function header for more details)
 *		
 *			4)	Pour yourself a stiff drink, this javascript stuff is hard work.
 *
 *
 *	VERSION: 	1.1
 *	COPYRIGHT:	2009 Corporate Zen
 *
 ******************************************************** */

/* ********************************************************************************************* */

/*
* Given a field, the type of input to validate that field for and a message to display
* register the form field in the global structure (create it if isn't alreadty around)
* 
* valid 'types' are:
* 	dropdown	-	checks to make sure that some field other than the first one is selected  
* 	int 		-	checks to make sure that the input is an integer number
* 	float 		-	checks to make sure that the input is a floating point number
* 	text 		-	checks to make sure that the input (type='text') 
* 					or textarea is not null or blank
* 	email 		- 	checks for a well-formed, non-blank email address 
* 					(contains an '@' and a '.')
* 	check 		-	checks for a selected ('checked') checkbox
* 	radio		-	checks that some radio button is selected in a button group 
* 					(all radios should have a common name attribute) 
*/
function registerFormField(field , type , message) {	
	if(!field) {
		alert(
			'You have used the registerFormField(...) function ' + 
			'\n' +
			'without specifying a "field" name or id.' + 
			'\n\n'+ 
			'Disregarding this message will lead to unwanted / unspecifed behavior.');
		return;
	}
 	else if(!type) {
		alert(
			'You have used the registerFormField(...) function ' + 
			'\n' +
			'without specifying a validation "type".' + 
			'\n\n'+ 
			'Disregarding this message will lead to unwanted / unspecifed behavior.' + 
			'\n\n' +
			'(field: ' + field + ')' + 
			'\n' + 
			'(message: ' + message + ')');
		return;
	}
	else if(!message) {
		alert(
			'You have used the registerFormField(...) function ' + 
			'\n' +
			'without specifying an alert "message".' + 
			'\n\n'+ 
			'Disregarding this message will lead to unwanted / unspecifed behavior.' + 
			'\n\n' + 
			'If your intent was not to have a message alerted on non-validation, please use a string with only a SPACE character: " ".' + 
			'\n\n' +
			'(field: ' + field + ')');
		return;
	}	
	
	//	check for the global structure and make one if it does not exist
	if(!window.validateFields) window.validateFields = {};
	
	//	if there is not already an object for this particular field, make one:
	if(!window.validateFields[field]) window.validateFields[field] = {};
	//	set the values for use in the validateForm() function:
	window.validateFields[field]['type'] = type;
	window.validateFields[field]['message'] = message;
}

/* ********************************************************************************************* */

/*
* Given a field, UNregister the form field in the global structures
* If it does not exist, just terminate gracefully 
*/
function unregisterFormField(field) 
{
	if(!field) 
	{
		alert(
			'You have used the unregisterFormField(...) function ' + 
			'\n' +
			'without specifying a "field" name or id.');
		return;
	}
	
	//	check for the global structure and alert+exit if one does not exist
	if(!window.validateFields) 
	{
		alert(
			'You have used the unregisterFormField(...) function ' + 
			'\n' +
			'but the fields listing has not yet been instantiated.');
		return;
	} 
	
	//	if there is not already an object for this particular field, just exit the method
	if(!window.validateFields[field]) return;
	// otherwise just blank it out
	else delete window.validateFields[field];
	
}

/* ********************************************************************************************* */

/*
 * alert the given message if it is NON-BLANK
 */
function alertMsg(msg) { if(msg.length > 0 && msg != " ") alert(msg); }

/* ********************************************************************************************* */

/*
* using the global structure, validate the form
*/	
function validateForm() {
	// From the get-go, if we don't have the global property
	//	to loop over for our items to validate, then just leave
	if (!window.validateFields) {
		alert(
			'The validation listing has not been defined.\n' +
			'Please be sure to call the registration function as follows: \n\n' + 
			'registerFormField( \n    {fieldNameOrID} , \n    {validationType} , \n    {message} \n );' );		
		return false;
	}
	else 
		fields = window.validateFields;

	// init some convenience variables
	var e = null;
	var eByName = null;
	var msg = null;
	var type = null;
	var val = null;
	
	for(var X in fields) {
		e = document.getElementById(X);
		eByName = document.getElementsByName(X);
		name = X;
		msg = fields[X].message;
		type = fields[X].type;
		
		// if there isn't an element specifed by the given ID: 
		//		try that ID as its name instead
		if(!e && eByName && eByName.length == 1 && eByName[0]) 
			e = eByName[0];
		else if (!e && !eByName) {
			alert(
				'The element "' + X + '" ' +
				" is not an HTML element's name or ID." + 
				"\n" +
				"Please check the registerFormField() function usages in your form." +
				"\n\n" + 
				"Continuing with validation...");
				
			continue; // make sure the element exists before we can use it
		}
		
		// get the value to test 
		//	(this is ignored if it's a radio or dropdown item)
		val = "";
		
		if (e && e.value && e.value != "") 
			val = e.value;
		
		switch(type) {
			case "dropdown":
				if( e && e.selectedIndex <= 0 ) {
					alertMsg(msg);					
					e.focus();					
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			case "int":
				if( val == '' ||  val != parseInt(val) ) {
					alertMsg(msg);					
					e.focus();					
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			case "float":
				if( val == '' ||  val != parseFloat(val) ) {
					alertMsg(msg);			
					e.focus();					
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			case "email":								
				if( val == '' || !val.match(/^[a-zA-Z0-9-_\.\+\=\%]+\@[a-zA-Z0-9-_\.\+]+\.[a-zA-Z]{2,6}$/)  ) {
					alertMsg(msg);			
					e.focus();					
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			case "text":				
				if( val == "" ) {
					alertMsg(msg);			
					e.focus();					
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			case "radio": 	// if there is at least one selected item 
							// in the collection of radio buttons, we're all set
				var selRadio = false;
				
				for(var i=0; i<eByName.length; i++)
					if (eByName[i].checked) 
						selRadio = true;
				if(!selRadio) {
					alertMsg(msg);
					eByName[0].focus();
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			case "check":				
				if( !e.checked ) {
					alertMsg(msg);			
					e.focus();					
					return false;
				}
			break;
			////////////////////////////////////////////////////////////////////////////////////
			default:  
				alert(
					"The element: " + 
					X + 
					"\n has been registered for validation with an invalid type: " + 
					type + "." );
				return false;
			break;
		} // END switch statement
	}	
	return true;
}

/* ********************************************************************************************* */
