/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === deleteFile */
function deleteFile(fname) {
		// remove actual file
		window.requestFileSystem(window.TEMPORARY, 1, function(fs) {
			fs.root.getFile( fname , {create: false}, function(fileEntry) {	
				fileEntry.remove(function() {
					console.log('File removed: '+ fname);
				}, errorHandler);
			}, errorHandler);
		}, errorHandler);
}
/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === editFile */
function editFile(fs,fname) {}
/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === makeFile */
function makeFile(fs,fname) {
	fs.root.getFile(
		fname
		, {create:true, exclusive:false}
		, function(fe) { 
				print('&nbsp;>>&nbsp;&nbsp;Created File: ' + fe.name);
				initDirs();
		}
		, errorHandler );
}
/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === init */
function initFile(fname) {

	if ( !(window.File && window.FileReader && window.FileList && window.Blob) ) {
		print('<div style="color:red;">File API is not supported by this browser</div>');
		return;
	}

	var kb = 1024;
	var Mb = kb*1024;
	
	/* open the file system and get rolling... */
	window.requestFileSystem( 
		window.TEMPORARY 
		, 5*Mb
		, function(fs){ 
				makeFile(fs , (fname || 'file_' + (new Date()).getTime() + '.txt') ); }
		, errorHandler 
	);
}
