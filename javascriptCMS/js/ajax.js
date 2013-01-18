/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */

/*
###############################################################
 * Handle all the "file-IO" using Ajax calls and such...
###############################################################
 */
 
/*
 * a bit more elegant, the real one used:
 * (calls the readFromFile method)
 */
function load(url)
{
	var success = function(t) { readFromFile( t.responseText ); };
	var failure = function () { alert("ERROR LOADING CONTENT"); };
	var contentAjax = new Ajax.Request ( url, { method: 'get', onSuccess:success, onFailure:failure, } );	
}

/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */

/*
 * given the "whereToPrint" element id, put out RAW data from the ajax call:
 * (debugging use only)
 */
function alt_load(url, whereToPrint)
{
	var failure = function (t) { $(whereToPrint).innerHTML = "ERROR LOADING CONTENT"; };
	var success = function (t) { $(whereToPrint).innerHTML += t.responseText.replace(/\n/g,"<br/>") ; };
	var contentAjax = new Ajax.Request ( url, { method: 'get', onFailure:failure, onSuccess:success, } );
}

/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */