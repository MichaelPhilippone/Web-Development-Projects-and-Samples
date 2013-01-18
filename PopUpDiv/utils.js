//--------------------------------------------------------------------------------
/*
* Michael Philippone CorporateZen
* michael@corporatezen.com
* The following function returns an object with the X and Y values of the
* horizontally and vertically scrolled values 
* for the page.
* It is accessible via: getScrollXY().x or getScrollXY().y  
*/
function getScrollXY()  {
  var scrOfX = 0, scrOfY = 0, retObj = new Object();
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
function getUniqueID() {
	var IX = parseInt( window.UIX );
	window.UIX = IX+1;
	return IX;
}
//--------------------------------------------------------------------------------
/*
 * Instantiate an HTML element of the given type
 */
function make(type , className) {
	var id="id_" + getUniqueID();
	var n = document.createElement( type );
	n["id"] = id;	
	if(className){
		n.setAttribute("class",className);
		n.setAttribute("className",className);
	}
	return n;
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
function getWidth( id ) { return document.defaultView.getComputedStyle( document.getElementById(id) , "" ).getPropertyValue("width"); }
//--------------------------------------------------------------------------------
function getHeight( id ) { return document.defaultView.getComputedStyle( document.getElementById(id) , "" ).getPropertyValue("height"); }
//--------------------------------------------------------------------------------