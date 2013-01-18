/*
// make the pop up a globally-scoped object
window.PopUp = new Object();

// give it a method for creating its title bar
PopUp.makeTitle = function(){
	var ttl = make('div');
	ttl.setAttribute("class" , 'popUpTitleBar')
	ttl.setAttribute("className" , 'popUpTitleBar')
	
	var clBtn = make('span');
	clBtn.setAttribute('class' ,'titleBarCloseBtn' );
	clBtn.setAttribute('className' , 'titleBarCloseBtn' );
	
	var a=make('a');
	a["href"]="javascript:;";
	a.innerHTML="[X]";
	a.onclick=function() { HidePopUps(); };
	
	clBtn.appendChild(a);
	ttl.appendChild(clBtn);
	this.appendChild(ttle);
};
*/
function pop(fromWhere , over , pWidth , pHeight){	
	if(fromWhere) var txt = document.getElementById(fromWhere).innerHTML;
	else var txt = "<h1>THIS IS TEST CONTENT</h1><br/><br/>";
	
	// syntax: make( 'HTML tag type' , 'class' ) 
	var n = make( 'div' , 'popUpDiv');
	var content = make('div' , 'popUpDivContent' );
	var hdr = make('div' , 'popUpHeader');	
	var btns = make('div' , 'buttonContainer');	
	var ttl = make('div' , 'popUpTitleBar' );	
	var clBtn = make('span' , 'titleBarCloseBtn' );
	var a=make('a' , null);
	
	
	hdr.innerHTML = "Pop Up Div";
	
	a["href"]="javascript:;";
	a.innerHTML="[X]";
	a.onclick=function() { HidePopUps(); };
	
	clBtn.appendChild(a);
	ttl.appendChild(clBtn);
	n.appendChild(ttl);
	
	content.appendChild(hdr);
	content.innerHTML = txt;
	n.appendChild(content);
	
	document.getElementsByTagName("body")[0].appendChild(n);
	
	OpenPopup(
		{
			id:n.id,
			overlay:over,
			width:500,
			height:500,
			top:100
		});
}