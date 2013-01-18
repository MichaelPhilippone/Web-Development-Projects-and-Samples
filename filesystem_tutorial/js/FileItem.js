/* ============================================================================ BrowserPanel */
function FileItem() {	
	var self = this;
	return self;
}
/* ------------------------------------------------------------------------------- Prototype */
FileItem.prototype = {
	_a : null
	
	/* ----------------------------------------------------------------------------------- UID */
	, UID: function() {
			if(!!!window.fileUID) window.fileUID = 0;
			return window.fileUID++;
	}
	/* ------------------------------------------------------------------------------- newFile */
	, newFile : function( fileSystem , fname ) {
			if ( !(window.File && window.FileReader && window.FileList && window.Blob) ) {
				print('<div style="color:red;">File API is not supported by this browser</div>');
				return;
			}
			
			fileSystem.root.getFile(
				(fname || 'file_' + (new Date()).getTime() + '.txt')
				, {create:true, exclusive:false}
				, function(fe) { print('&nbsp;>>&nbsp;&nbsp;Created File: ' + fe.name); }
				, errorHandler );
	}
	/* --------------------------------------------------------------------------------------- */
};
/* ================================================================================================ */
