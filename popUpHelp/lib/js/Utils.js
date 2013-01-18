//--------------------------------------------------------------------------------
/*
* Michael Philippone CorporateZen
* michael@corporatezen.com
* The following function returns a 2-element array of 
* the horizontally and vertically scrolled values 
* for the page.
* [xX] property --> the scrolled over value on the X axis
* [yY] property --> the scrolled over value on the Y axis
* 
* The following function returns an object with the X and Y values of the
* horizontally and vertically scrolled values 
* for the page.
* It is accessible via: getScrollXY().x or getScrollXY().y  
*/
function getScrollXY() 
{
  var scrOfX = 0;
  var scrOfY = 0;
  var retObj = new Object(); // the return type
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  retObj.x = scrOfX;
  retObj.X = scrOfX;
  retObj.y = scrOfY;
  retObj.Y = scrOfY;
  
  return retObj;
}
//--------------------------------------------------------------------------------
/*
 * Get all the elements with a given class name
 */
function getElementsByClassName(classname, node)  {
    if(!node) node = document.getElementsByTagName("body")[0];
    var a = [];
    var re = new RegExp('\\b' + classname + '\\b');
    var els = node.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}
//--------------------------------------------------------------------------------
/* Add the element 
 * PARAMS:
 * parentID - the id of the parent to which to add the element
 * type - what type of HTML element should this be?
 * txt - what the innerHTML of the element be?
 * properties - an object of key-value pairs for properties and their values
 */
function addElement(parentID,type,txt,properties) 
{
	var n = document.createElement(type);
	for(var P in properties)
		n.setAttribute(P,properties[P]);
	if(txt) n.innerHTML = txt;
	if(parentID) document.getElementById(parentID).appendChild( n );
	else document.getElementsByTagName("body")[0].appendChild( n );
	return n;
}
//--------------------------------------------------------------------------------
/* the user has chosen to remove a query clause */
function deleteElement( parentID , item) { $(parentID).removeChild( item ); }
//--------------------------------------------------------------------------------
function getUniqueID() {
	window.UIX = ((!window.UIX) ? (0) : (window.UIX)); // if it doesn't exist, create it!
	var IX = parseInt( window.UIX );
	window.UIX = IX+1;
	return IX;
}
//--------------------------------------------------------------------------------
/*
 * Fills in the header, close button, etc for the popup
 * Like this:
 * 	<div class="popUpTitleBar">
 * 		<span class="titleBarCloseBtn">  <a href="javascript:;" onclick="javascript:ShowPage();">[X]</a>  </span>
 * 	</div>
 * 	<div class="popUpDivContent">
 * 		<h3>Sample PopUp</h3>
 * 	</div>
 */
function fillInPopUpComponents(Pid , txt) {
	
	var UIX = getUniqueID();
		
	var titleProps = new Object();
	titleProps.id = "popUpTitleBar"+UIX;
	titleProps["className"] = "popUpTitleBar";
	titleProps["class"] = "popUpTitleBar";
	var title = addElement(Pid , 'div' , null , titleProps);
	
	if(window.titleBarText) { 
		var titleTxtProps = new Object();
		titleTxtProps.id = "popUpTitleBarText"+UIX;
		titleTxtProps["className"] = "popUpTitleBarText";
		titleTxtProps["class"] = "popUpTitleBarText";
		var titleTxt = addElement(titleProps.id , 'span' , window.titleBarText , titleTxtProps);
	}
	
	var closerProps = new Object();
	closerProps["id"] = "titleBarCloseBtn"+UIX;
	closerProps["className"] = "titleBarCloseBtn";
	closerProps["class"] = "titleBarCloseBtn";
	var closer = addElement( "popUpTitleBar"+UIX , 'span' , null , closerProps);  

	var aProps = new Object();
	aProps["href"] = "javascript:;";
	var a = addElement( "titleBarCloseBtn"+UIX , 'a' , '[X]' , aProps ); 
	// if the user has specified a redirect location, another popUp close action or nothing:
	if ( window.popUpCloseRedirect ) a.onclick = function() { window.location.href = window.popUpCloseRedirect; };
	else if( window.popUpCloseAction ) a.onclick = window.popUpCloseAction; 
	else a.onclick = ShowPage;
	
	var contentProps = new Object();
	contentProps["id"] = 'popUpDivContent'+UIX;
	contentProps["class"] = 'popUpDivContent';
	contentProps["className"] = 'popUpDivContent'; 
	var content = addElement(Pid , 'div' , txt , contentProps);
}
//--------------------------------------------------------------------------------
/*
 * Given an id, fill it with LOREM IPSUM content 'num' times over
 */
function loremIpsumFill(id , num) {
	var loremIpsum = "<p>Lorem Ipsum Dolor Sit amet. Lorem Ipsum Dolor Sit amet. Lorem Ipsum Dolor Sit amet. Lorem Ipsum Dolor Sit amet. </p>";
	for(var i=0; i<num; i++)
		loremIpsum += "<p>Lorem Ipsum Dolor Sit amet. Lorem Ipsum Dolor Sit amet. Lorem Ipsum Dolor Sit amet. Lorem Ipsum Dolor Sit amet. </p>";
	$(id).innerHTML = loremIpsum;
}
//--------------------------------------------------------------------------------
