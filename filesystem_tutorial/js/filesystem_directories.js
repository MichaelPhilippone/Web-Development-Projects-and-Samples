/* === === === === === === === === === === === === === === === === === === === === ===  */
/* === === === === === === === === === === === === === === === === === === === === === listResults */
function listResults(entries , erase) {
	if(!( erase === false )) 
		$('#files').children().each(function(i,el){ $(el).remove(); })
	
	entries=entries.sort(function(a,b){return a.name>b.name;});	
	$(entries)
		.each(function(i,entry) {
			if( !entry.isFile ) {
				$('#files').append( 
					$('<li/>').append(
							$('<span/>')
								.text( entry.name + "   (dir)")
								.attr( 'id' , entry.name )
						));
				return;
			}
			$('#files').append( 
				$('<li/>').append(
					$('<a/>')
						.text( entry.name)
						.attr( 'href' , entry.toURL() )
						.attr( 'target' , '_blank' )
						.attr( 'id' , entry.name )
				)
				.append( // add deletion tools
					$('<a/>')
						.text('[X]')
						.css('margin-left','10px')
						.attr('href','javascript:;')
						.click(function(del_e){
							var prnt = $(this).parent();
							// remove DOM element
							prnt.fadeTo( 1*1000 , 0 , function() { prnt.remove(); });
							// remove actual file
							deleteFile( entry.name );
						})
				)
			);
		});
}
/* === === === === === === === === === === === === === === === === === === === === ===  */
/* === === === === === === === === === === === === === === === === === === === === === listDirs */
function listDirs(fs) {
  var dirReader = fs.root.createReader();
  var entries = [];
  
	// Call the reader.readEntries() until no more results are returned.
	var readEntries = function() {
		dirReader.readEntries(function(results) {
			if (!results.length) {
				listResults( entries , false );
			} else {
				entries = $(results);
				//$(entries).each(function(i,el){
				//	if( !el.isFile ) {
				//		dirReader = el.createReader();
				//		readEntries();
				//	}
				//});
				//listResults( $(results) );
				readEntries();
			}		
		}, errorHandler);
	};
	readEntries(); // Start reading dirs.
}
/* === === === === === === === === === === === === === === === === === === === === ===  */
/* === === === === === === === === === === === === === === === === === === === === === initDirs */
function initDirs() {
	window.requestFileSystem(
		window.TEMPORARY
		, 1
		, listDirs
		, errorHandler );
}
/* === === === === === === === === === === === === === === === === === === === === ===  */
/* === === === === === === === === === === === === === === === === === === === === ===  */