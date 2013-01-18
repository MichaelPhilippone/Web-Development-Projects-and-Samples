/*
###############################################################
 * The output and page-data 
 * manipulation functions are listed first:
###############################################################
 */

/*
 *  Given 2 strings and an object, make the 
 *  the first parameter-string a key field for 
 *  the object and assign this newly created 
 *  field the value of the second 
 *  parameter-string
 */
function objectify(key, value , obj) {
	var retObj = obj;
	eval( "retObj." + key + " = '"+ value +"'; ");
	return obj;
}

/*
 * Cleans the comments and empty lines out 
 * of a string and returns it
 * matches any text between an asterisk ('*') and 
 * newline ('\n') and removes it
 * also strips newline characters
 */
function cleanComments(str) {
	commentRegex = /\*([A-Za-z0-9]*).*?\n/g
	return str.replace( commentRegex , '' ).replace(/\n/g,'');
}


/*
 * get the raw text of data from the file, and clean it 
 * -> remove whitespace lines, remove comments, 
 */
function splitRegex(rawstr) {

	var txt = cleanComments(rawstr);
	var myObj = new Object();
	
	//match all text surrounded by "[[[ ]]]"
	dataFieldRegex = /\[{3}[a-zA-Z0-9\-\_\(\)\!\@\#\$\%\^\&\*\.\,\?\\\/\;\:\'\'\=\+]*\]{3}/g ;
	
	//match all text surrounded by "{{{ }}}"
	dataRegex = /\{{3}[a-zA-Z0-9\s\-\_\(\)\!\@\#\$\%\^\&\*\.\,\?\\\/\;\:\'\'\"\<\>\=\+\n\t\ ]*\}{3}/g;

	var fieldArr = txt.match(dataFieldRegex);
	var dataArr = txt.match(dataRegex);

	if(fieldArr.length != dataArr.length) {
		alert('Field and data count error\n Page will not load properly.' + 
			'\n\nfieldArr = \n\n' + fieldArr + '\n\ndataArr = \n\n' + dataArr );
		return;
	}	
	
	//make the key,value pairs exist in an object:
	for ( var m=0; m < fieldArr.length && (fieldArr.length == dataArr.length); m = m + 1 ) {		
		myObj = objectify( 
							stripControls( fieldArr[m] ), 
							stripControls( dataArr[m] ), 
							myObj);
	}
	return myObj;
}

/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */
 
/*
 * actually print the results of the ajax calls 
 * to the appropriate places on the page:
 * 		param 1: the array of text from the ajax call (cleaned)
 *		param 2: the array of the ids to fill on the page
 *			(from the matching line labels in the TXT file)
 */
function printToPage(dataDict) {
	for( var key in dataDict ) {		
		if( $(key) != null && ($(key) != 'undefined') ) {
			$(key).innerHTML = dataDict[key];
		}
	}
} 

/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */

/*
 * The driver of the page-filling CMS:
 * reads from the "file" that is returned from the ajax call
 * 		param 1: the array of text lines from the server 
 */
function readFromFile (pageTxt) { 
	printToPage( 
		splitRegex( pageTxt ) ); 
}
