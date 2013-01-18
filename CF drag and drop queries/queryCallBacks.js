////////////////////////////////////////////////////////////////////////////////
/* If the query piece is determined to be an itemNumber search, 
 * then use this function to add the componentry */
function txtBoxInsert(txt) {
	var UIX = parseInt( getUniqueID() );
	var newID = 'qry'+UIX
	
	var nProps = new Object();
	nProps.id = newID;
	nProps["class"] = "qryPart";
	nProps.className='qryPart';
	addElement( 'components_builder' , 'div' , txt , nProps );
	
	var iProps = new Object();
	iProps.id = 'itemNum_'+newID;
	iProps.type = 'text';
	addElement( newID , 'input' , null , iProps );
	
	var aProps = new Object();
	aProps.id = newID+'_closer';
	aProps.href = 'javascript:;';
	aProps["class"] = "closer";
	aProps.className='closer';
	var a = addElement( newID , 'span' , 'x' , aProps );
	a.onclick = function(){ deleteItem( 'components_builder' , newID ); };
}

////////////////////////////////////////////////////////////////////////////////
/* If the query piece is determined to be a year search, 
 * then use this function to add the componentry */

function txtBoxMultiInsert(preTxt , postTxt) {
	var UIX = parseInt( getUniqueID() );
	var newID = 'qry'+UIX
	var txt = preTxt;
	
	var nProps = new Object();
	nProps.id = newID;
	nProps["class"] = "qryPart";
	nProps.className='qryPart';
	var n = addElement( 'components_builder' , 'div' , txt , nProps );
	
	var iProps1 = new Object();
	iProps1.id = 'years1_'+newID;
	iProps1.type = 'text';
	iProps1.size = '8';
	addElement( newID , 'input' , null , iProps1 );
	
	n.innerHTML += postTxt;
	
	var iProps2 = new Object();
	iProps2.id = 'years2_'+newID;
	iProps2.type = 'text';
	iProps2.size = '8';
	addElement( newID , 'input' , null , iProps2 );
	
	
	var aProps = new Object();
	aProps.id = newID+'_closer';
	aProps.href = 'javascript:;';
	aProps["class"] = "closer";
	aProps.className='closer';
	var a = addElement( newID , 'span' , 'x' , aProps );
	a.onclick = function(){ deleteItem( 'components_builder' , newID ); };
}



////////////////////////////////////////////////////////////////////////////////
 /* If the query piece is determined to be a conditions search, 
 * then use this function to add the componentry */
function dropDownInsert(txt , selections) {
	if(window.isIE)
	{
		txtBoxInsert(txt);
		return false;
	}
	var UIX = parseInt( getUniqueID() );
	var newID = 'qry'+UIX
	var options = selections.split(';');
	
	var nProps = new Object();
	nProps.id = newID;
	nProps["class"] = "qryPart";
	nProps.className='qryPart';
	addElement( 'components_builder' , 'div' , txt , nProps );
	
	var iProps = new Object();
	iProps.id = 'selector_'+newID;
	iProps.type = 'text';
	var selector = addElement( newID , 'select' , null , iProps );
	
	var props = new Object();
	props.id = '';
	props. value = '';		
	for(var i=0;i<options.length;i++) {
		props.id = 'option_'+i+'_'+newID;
		props. value = options[i];
		addElement( 'selector_'+newID , 'option' , options[i] , props );
	}
	
	var aProps = new Object();
	aProps.id = newID+'_closer';
	aProps.href = 'javascript:;';
	aProps["class"] = "closer";
	aProps.className='closer';
	var a = addElement( newID , 'span' , 'x' , aProps );
	a.onclick = function(){ deleteItem( 'components_builder' , newID ); };
}