/* ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== appendToFile */
function readFile(fs , fname) {
  fs.root.getFile(fname, {}, function(fileEntry) {
    fileEntry.file(function(file) {
       var reader = new FileReader();
       reader.onloadend = function(e) {
       		$('#content')
       			.append( $('<span/>').text("Please input file contents:") )
       			.append( $('<br/>') )
       			.append(
							$('<input/>')
								.attr('type','text')
								.attr('name','newFileName')
								.attr('id','newFileName')
								.attr('value',this.result)
								.css('width','500px')
       			)
       			.append( $('<br/>') )
       			.append(
							$('<input/>')
								.attr('type','button')
								.attr('id','saveBtn')
								.attr('name','saveBtn')
								.attr('value','save')
								.click(function(sv_e){
									console.log( $('#newFileName') );
									writeFile(fs , fname , $('#newFileName') );
								})
						);
       };
       
       $('#MESSAGES').text( reader.readAsText(file) );
              
    }, errorHandler);
  }, errorHandler);
}
/* ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== appendToFile */
function writeFile(fs , fname , $pnl , append) {
	fs.root.getFile( fname , {create: true} , function(fileEntry) {
		fileEntry.createWriter(function(fileWriter) {			
			fileWriter.onwriteend = function(e) { print('Write completed.'); };
			fileWriter.onerror = function(e) { print('Write failed: ' + e.toString()); };
			BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder // in Chrome 12
			var bb = new BlobBuilder();
			bb.append( ($pnl ? $pnl.text():'') );
			fileWriter.write( bb.getBlob('text/plain') );
		}, errorHandler);
	}, errorHandler);
}
/* ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== appendToFile */
function appendToFile(fs , fname) {
  fs.root.getFile(fname, {create: false}, function(fileEntry) {
    fileEntry.createWriter(function(fileWriter) {
      fileWriter.seek(fileWriter.length); // Start write position at EOF.
      BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder // in Chrome 12
      var bb = new BlobBuilder(); // Note: window.WebKitBlobBuilder in Chrome 12.
      bb.append('Hello World');
      fileWriter.write(bb.getBlob('text/plain'));
    }, errorHandler);
  }, errorHandler);
}





/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === page load */
$('body').ready(function(e_TOP){

	var fileName = 'log.txt';
	
	window.requestFileSystem( 
		window.TEMPORARY 
		, 1024*1024 
		, function(fs) { 
				
				console.log(fs);
				//return;
				
				readFile( fs , fileName );
				//writeFile( fs , fileName );
				//appendToFile( fs , fileName );
		}
		, errorHandler );
		
});
/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === page unload */
$(window).unload(function(e_TOP){});
