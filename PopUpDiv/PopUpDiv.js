/*
 * This file is needed / used for the centered div pop up
 * (it should work in both Firefox and IE (and safari as far 
 * as I know!)
 *			~Michael Philippone
 */
//--------------------------------------------------------------------------------
/*
 * Michael Philippone Corporate Zen
 * michael@corporatezen.com
 * The following function opens a div centered as a popup
 * it asigns and uses the atributes supplied in the 'props' 
 * object or uses hard-coded, in-function defaults
 * -> options for the object:
 * 	--> height (int)
 * 	--> width (int)
 * 	--> overlay (true/false)
 * 	--> id (REQUIRED, string)
 * 	--> top (int)
 */
function OpenPopup(props) {
	if(!props.height) props.height = 300;
	if(!props.width) props.width = 500;
	if(!props.top) props.top = 100;
	
	//props.height = ((props.height)?(props.height):(300));
	//props.width = ((props.width)?(props.width):(500));
	//props.top = ((props.top)?(props.top):(100));
	
	if(props.overlay) { ShowOverlay(); }
	if(!props.id) { alert('ERROR, no id'); return; }
	
	var obj = document.getElementById(props.id);
	obj.style.display = 'block';
	obj.style.position = 'absolute';	
	obj.style.top = props.top + 'px';
	obj.style.left = (getScrollXY()['x'] + (document.body.offsetWidth - props.width) /2) + 'px';
	obj.style.height = props.height + 'px';
	obj.style.width = props.width + 'px';
}
//--------------------------------------------------------------------------------
function HidePopUps() {
	var allPops = getElementsByClassName( 'popUpDiv');	
	for(var i=allPops.length-1; i>=0; i--) document.getElementsByTagName("body")[0].removeChild(allPops[i]);
	HideOverlay();
}
//--------------------------------------------------------------------------------
/*
 * This function renders the transparent background
 * overlay visible
 */
function ShowOverlay() {
	HideOverlay(); // delete if one already exists
	var overlay = document.createElement('div');
	overlay["id"] = "overlay";
	overlay.setAttribute("class" , 'overlay');
	overlay.setAttribute("className" , 'overlay');
	
	overlay.style.width = document.getElementsByTagName('body')[0].offsetWidth + 'px';
	overlay.style.height =  document.getElementsByTagName('body')[0].offsetHeight + 'px';
	
	alert('overlay height = ' + overlay.style.height + '\noverlay width = ' + overlay.style.width );
	
	overlay.onclick=function(){ HideOverlay(); };	
	document.getElementsByTagName("body")[0].appendChild(overlay);
	docment.getElementById('overlay').style.display = 'block';	
}
//--------------------------------------------------------------------------------
/*
 * This function renders the transparent background
 * overlay INvisible
 */
function HideOverlay() {
	var overlay = document.getElementById('overlay');
	if(overlay) overlay.parentElement.removeChild(overlay);
}
//--------------------------------------------------------------------------------