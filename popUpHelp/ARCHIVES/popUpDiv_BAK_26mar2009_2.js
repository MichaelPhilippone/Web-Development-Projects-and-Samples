/*
 * This file is needed / used for the centered div pop up
 * (it should work in both Firefox and IE 
 * (Safari and Chrome too, as far as I know!)
 * 
 *
 *	CREATED:		04 FEB 2009 (for this site)
 *	LAST MODIFIED:	09 FEB 2009
 *	AUTHOR:			Michael Philippone 
 *	AUTHOR EMAIL:	michael@corporatezen.com
 ********************************************************* */

//--------------------------------------------------------------------------------
/*
 * Pop up a div in the foreground of the web page
 * 
 *  PARAMETER --> Object with named elements for all the properties of the popup:
 *   Properties (* means required):
 *  	- height (int)
 *  	- width (int)
 *  	- overlay (true/false)
 *  	- id (string: id of some div to populate and pop-up)
 *  	- draggable (true/false)
 *  	- distFromTop (int: how far from window-top should pop up appear?)
 *  	- title (string)	
 *  	- redirectOnClose (string: URL)
 *  	- altCloseAction (string: function name)
 *  	- className (string: css class)
 *  	- contentLoc (string: URL for ajax content population -- BROKEN)
 *  	- content (string: pop up's content)
 *  	- rounded (true/false: should the popUp have rounded corners? -- NOT YET DEVELOPED)
 */
function OpenPopup( propsObj ) 
{	
	try {
		if(!propsObj.distFromTop) { propsObj.distFromTop = 100; }
		if(!propsObj.height) { propsObj.height = 500; }
		if(!propsObj.width) { propsObj.width = 500; }
		if(propsObj.title) { window.titleBarText = propsObj.title }
		if(propsObj.redirectOnClose) { window.popUpCloseRedirect = propsObj.redirectOnClose; }
		if(propsObj.altCloseAction) { window.popUpCloseAction = propsObj.altCloseAction; }
		
		if(propsObj.overlay) { ShowOverlay(); }
		
		if(propsObj.id) { 
			propsObj.popObj = $( propsObj.id ); 
			window.popUpID = propsObj.id;
		}
		else {
			propsObj.id = "popUp_" + getUniqueID();
			window.popUpID = propsObj.id;
			propsObj.popObj = addElement( null , 'div' , null , propsObj);
		}
		
		propsObj.popObj.style.display = "none";
		
		if(propsObj.className) { 
			propsObj.popObj.setAttribute("class" , propsObj.className );
			propsObj.popObj.setAttribute("className" , propsObj.className );
		}
	
		propsObj.popObj.style.position = 'absolute';
		propsObj.popObj.style.top = (getScrollXY()['y'] + propsObj.distFromTop) + 'px';
		propsObj.popObj.style.left = (getScrollXY()['x'] + ((document.body.offsetWidth - propsObj.width) /2)) + 'px';
		propsObj.popObj.style.height = propsObj.height + 'px';
		propsObj.popObj.style.width = propsObj.width + 'px';
		
		propsObj.popObj.innerHTML = '';
		
		if (propsObj.contentLoc) 
			ajaxFiller(propsObj.contentLoc);
		else if (!propsObj.content) {
			propsObj.content = "";
			fillInPopUpComponents( propsObj.id , propsObj.content );
		}
		else if (propsObj.content)
			fillInPopUpComponents( propsObj.id , propsObj.content );
		
		if(propsObj.draggable) new Draggable( propsObj.id );
		
		Effect.Appear(propsObj.id);
		
	} catch(err) {
		alert(err);
	}
}
//--------------------------------------------------------------------------------

/*
 * hides the specified popup
 * by default, it also tries to hide the overlay
 * PARAM 01 --> id of the div to hide up
 */
function HidePopup( hideMe ) { 	$(hideMe).puff(); }
//--------------------------------------------------------------------------------
/*
 * This function renders the transparent background overlay visible
 * NO PARAMS
 */
function ShowOverlay()
{		
	var overlay = document.createElement('div');
	overlay["id"] = "overlay";
	overlay["class"] = "overlay";
	overlay["className"] = "overlay";
	overlay.style.width = '100%';
	overlay.style.height = document.getElementsByTagName("body")[0].offsetHeight;
	overlay.style.display = 'block';
	overlay.style.position='absolute';
	overlay.style.top = getScrollXY()['y'];
	
	// if the user has specified a redirect location, another popUp close action or nothing:
	if ( window.popUpCloseRedirect ) overlay.onclick = function(){ window.location.href = window.popUpCloseRedirect; }; 		
	else if( window.popUpCloseAction )overlay.onclick = window.popUpCloseAction; 
	else overlay.onclick = function(){ HidePopup( window.popUpID ); HideOverlay(); };
	
	document.getElementsByTagName("body")[0].appendChild(overlay);
}
//--------------------------------------------------------------------------------
/*
 * This function renders the transparent background overlay INvisible
 * if one is not present, then it fails gracefully
 * NO PARAMS
 */
function HideOverlay()
{
	var overlay = document.getElementById('overlay');
	if(overlay.parentElement) overlay.parentElement.removeChild(overlay); // not supported by FF (why?)
	else document.getElementsByTagName("body")[0].removeChild(overlay); // for FF
}
//--------------------------------------------------------------------------------
/*
 * This function hides all the pop'd  divs and the overlay (reverts to 'normal' view)
 * NO PARAMS
 */
function ShowPage()
{
	var pop_arr = getElementsByClassName('popUpDiv');
	for(var i=0; i<pop_arr.length; i++) {
		HidePopup(pop_arr[i].id);	
	}	
	HideOverlay();		
}
//--------------------------------------------------------------------------------