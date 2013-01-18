/* ============================================================================ BrowserPanel */
function BrowserPanel() {	
	var self = this;
	self.init();
	self.fill();
	return self;
}
/* ------------------------------------------------------------------------------- Prototype */
BrowserPanel.prototype = 
{
	fileSystem : null
	, block : false
	, kb : 1024
	, Mb : 1024*1024
	
		/* ----------------------------------------------------------------------------------- UID */
	, UID: function() {
			if(!!!window.BpnlUID) window.BpnlUID = 0;
			return window.BpnlUID++;
	}	
	/* ---------------------------------------------------------------------------------- init */
	, init : function() {
			var self = this;
			window.requestFileSystem( 
				window.TEMPORARY
				, 25 * self.Mb
				, function(fs) { 
						fileSystem = fs; 
						block = false; 
				}
				, errorHandler 
			);
	}
	/* ---------------------------------------------------------------------------------- fill */
	, fill : function() {
			var self = this;
			
			/** once the body element has loaded, do the magic */
			$('body').append(
				$('<input/>')
					.attr('type','button')
					.attr('value','Add File')
					.attr('name','AddFileBtn')
					.attr('id','AddFileBtn')
					.click(function(add_e){ 
						var id = 'file_' + self.UID();
						var fname='';
						$('body')				
							.append( $('<hr/>') )
							.append(
								$('<input/>')
									.attr('type','text')
									.attr('name',id)
									.attr('id',id)
									.keyup(function(chg_e){
										fname=chg_e.currentTarget.value;
									})
							)
							.append(
								$('<input/>')
									.attr('type','button')
									.attr('value','save')
									.attr('name', 'svBtn_'+id)
									.attr('id', 'svBtn_'+id)
									.click(function(sv_e) {
										if( !block ) { 
											var file = FileItem();
											//file.newFile( fileSystem , fname );
										}
										else {
											print('FileSystem Not available!!!');
										}
									})
							);
					}) 
			);	
	}
	/* ------------------------------------------------------------------------------- addFile */
	, addFile : function() {}	
	/* ------------------------------------------------------------------------------ clearAll */
	, clearAll : function() {}	
	/* --------------------------------------------------------------------------------------- */
};
/* ================================================================================================ */

