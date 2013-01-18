/**
################################################
  Last modified: 13 OCT 2008 
  Michael Philippone
################################################
**/


/*
 * Append the given argument to the degugging output panel:
 */
function debug(arg) 
{ 
	var temp = "";
	for(var i = 0; i < arg.length; i = i + 1)
		{ temp += arg[i] + '\n'; }
		
	temp = temp.replace(/</g,"&lt;");
	temp = temp.replace(/>/g,"&gt;");
	temp = temp.replace(/\n/g,"<br/>");
	temp += "<br/>";
		
	if( $("debug") != null && $("debug") != undefined ) { 
		$("debug").innerHTML += temp;
	}
	else {
		temp = temp.replace(/<br\/>/g, '\n');
		alert(temp);
	}
}