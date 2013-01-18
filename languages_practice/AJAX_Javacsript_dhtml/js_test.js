////////////////////////////////////////////////////////////////
function showNodes() {
	//the root element:
		var rootElement = document.documentElement;
	//the root element's children:
		var docNodes = rootElement.childNodes;
	//alert with the nodenames of the children:
		for (i = 0; i < docNodes.length; i++) {
			alert(docNodes[i].nodeName);
		}
		
	// get the table cells - this returns an array of all TD's
	  var myTableCells = document.getElementsByTagName("td");
	  for (i = 0; i < myTableCells.length; i++) {
		 alert(myTableCells[i].nodeName);
	  }
}
////////////////////////////////////////////////////////////////
function getObj(idName) {
	if (document.getElementById) {
		this.obj = document.getElementById(idName);
		this.style = document.getElementById(idName).style;
	} else {
		return;
	}
}

////////////////////////////////////////////////////////////////
function changeColor(idName) {
	var myObj = new getObj(idName);
	var colorIn;

	if (idName == "NUM01") {
		if ( myObj.style.color == "rgb(0, 255, 0)" ) 
			{ colorIn = "rgb(255, 0, 0)"; } 
		else
			{ colorIn = "rgb(0, 255, 0)"; }
	} else if (idName == "NUM02") {
		if ( myObj.style.color == "rgb(0, 0, 255)" ) 
			{ colorIn = "rgb(0, 0, 0)"; } 
		else
			{ colorIn = "rgb(0, 0, 255)"; }
	}

	myObj.style.color = colorIn;
}
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////