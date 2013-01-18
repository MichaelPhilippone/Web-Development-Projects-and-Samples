
/* This function takes the raw HTML of the query builder disply and 
 * helps convert it closer to SQL 
 *
 * TO DO:
 * 	-> clean out 'input' and 'select/option' fields 
 * 		and replace them with their value(s)
 */
function sanitizeQryBuilderPieces(){
	var qry = '';
	var qryPiecesRaw = getElementsByClassName('qryPart' , $('components_builder') );
	var spans = [];
	
	for(var i=0;i<qryPiecesRaw.length;i++)
	{
		// Clean out the little 'x's:
		spans = qryPiecesRaw[i].getElementsByTagName('span');
		for(var j=0;j<spans.length;j++)
			qryPiecesRaw[i].removeChild(spans[j]);
		
		//
		// TODO: clean out input and select boxes
		//
		
		qry += qryPiecesRaw[i].innerHTML + ' ';
	}
	$('queryBody').value = qry;
}

/* When the user has chosen "SEARCH" with the form button */
function validateAndSend() {	
	sanitizeQryBuilderPieces();
	if($('queryBody').value == '')	return false;
	return true;
}

/* Set up the draggable items */
function makeDraggables() {
	var items = getElementsByClassName( 'qryField', $('components_toolBox') );
	for(var x=0;x<items.length;x++)
		new Draggable( items[x].id , { revert: true } );
	Droppables.add(
		'components_builder_outer' ,
		{ 
			accept: 'qryField' , 
			hoverClass: 'components_builderHover', 
			onDrop: dropOnQuery	
		});
}

/* Insert the piece of the query into the builder box */
function insertGeneralQueryPart(txt) {
	var UIX = parseInt( getUniqueID() );
	var newID = 'qry'+UIX;
	var xID = newID + '_closer';
	
	var nProps = new Object();
	nProps.id = newID;
	nProps["class"] = "qryPart";
	nProps.className='qryPart';
	addElement( 'components_builder' , 'div' , txt , nProps );

	var xProps = new Object();
	xProps.id = xID;
	xProps["class"] = "closer";
	xProps.href = 'javascript:;';
	xProps.className='closer';
	var x = addElement(newID , 'span' , 'x', xProps );
	x.onclick = function(){ deleteItem( 'components_builder' , newID ); };
}

/* When a query item is dropped in the builder: */
function dropOnQuery(element) {	
	if(element.id == 'field1')  txtBoxInsert('Field 01 Equals: ')
	else if(element.id == 'field2')  dropDownInsert( 'Field 02 is: ' , 'Any;Excellent;Good;Fair;Poor' );
	else if(element.id == 'field3')  txtBoxMultiInsert('Field 03 is from:  ' , '  to: ');
	else if(element.id == 'field4')  txtBoxInsert('Field 04 Equals: ');
	else insertGeneralQueryPart( element.innerHTML );
	
	$('components_builder_outer').highlight();
}