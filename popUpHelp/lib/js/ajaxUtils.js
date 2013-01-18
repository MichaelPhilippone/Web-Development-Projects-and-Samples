
//--------------------------------------------------------------------------------
/*
 * The callback for a successful ajax call
 */
function success(xport) 
{ 	
	alert('successful ajax' + '\n' + "windown.popUpID = " + windown.popUpID); 
	
	var response = xport["responseText"];
	if (response.length = "") {
		response = "Nothing to report."
	}
		
	fillInPopUpComponents( window.popUpID , response );
}
//--------------------------------------------------------------------------------
/*
 * the callback for a failed ajax call
 */
function fail()  
{  
	alert('failed ajax'); 
	fillInPopUpComponents( window.popUpID , 'Something went wrong...' );   
}
//--------------------------------------------------------------------------------
/*
 * The function that initiates the ajax request
 */
function ajaxFiller( URI )
{
	var myAjax = 
		new Ajax.Request( URI ,
		{
			method:'post',
			onSuccess: success,
		 	onFailure: fail
		});
}
//--------------------------------------------------------------------------------