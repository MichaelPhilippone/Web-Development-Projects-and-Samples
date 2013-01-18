function ajaxFunction() {
	var xmlHttp = getXmlHttpRequest();
	
	if(xmlHttp == null) {
		alert("incompaitble browser!");
		return;	
	}
	

	xmlHttp.onreadystatechange=function() {
		if( xmlHttp.readyState == 4) { //server has responded
			document.myform.time.value=xmlHttp.responseText;
		}
	}//end readyStateChanged fxn
	
	xmlHttp.open("GET", "time.asp", true);
	xmlHttp.send(null);	

}
////////////////////////////////////////////////////////////////////////
function getXmlHttpRequest() {

	var xmlHttp = null;

	try 
	{ // Firefox, Opera 8.0+, Safari :
	 xmlHttp=new XMLHttpRequest();
	} 
	catch (e) { // Internet Explorer 6.0+:
		try 
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e) 
		{ // Internet Explorer 5.5+:
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xmlHttp;
}
////////////////////////////////////////////////////////////////////////
function showHint(str) {
	if(str.length == 0) {
		document.getElementById("txtHint").innerHTML="";
		return;
	}
	xmlHttp=getXmlHttp();
	
	if(xmlHttp == null) {
		alert("incompaitble browser!");
		return;	
	}
	
	var url="gethint.php";
	url += "?="+str;
	url += "&sid=" + Math.random();
	
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
////////////////////////////////////////////////////////////////////////
function stateChanged() {
	if(xmlHttp.readyState==4)
		document.getElementById("txtHint").innerHTML = xmlHttp.responseText;
}
////////////////////////////////////////////////////////////////////////