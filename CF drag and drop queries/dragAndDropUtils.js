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
	document.getElementById(parentID).appendChild( n );
	return n;
}

//--------------------------------------------------------------------------------
/* the user has chosen to remove a query clause */
function deleteItem( parentID , itemId) { $(parentID).removeChild($(itemId)); }

//--------------------------------------------------------------------------------

function getUniqueID() {
	var UIX = parseInt( $('uniqueIndex').value );
	$('uniqueIndex').value = UIX+1;
	return UIX;
}

//--------------------------------------------------------------------------------
