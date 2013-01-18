/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === GLOBALS */
window.requestFileSystemSync = window.requestFileSystemSync || window.webkitRequestFileSystemSync;
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
window.files=0;
/* === === === === === === === === === === === === === === === === === === === === ===  */
/* === === === === === === === === === === === === === === === === === === === === === toArray */
//function toArray(list) { return Array.prototype.slice.call(list || [], 0); }
/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === print */
function print(msg) { 
	$('#MESSAGES').show();
	$('#MESSAGES').html(
		msg.replace('\n','<br/>') 
	); 
	setTimeout(
		function(){
				$('#MESSAGES').fadeTo(
					2*1000
					, 0 
					, function(){ 
							$('#MESSAGES').hide(); 
					});
		}
		, 5*1000);
}
/* === === === === === === === === === === === === === === === === === === === === === */
/* === === === === === === === === === === === === === === === === === === === === === errorHandler */
function errorHandler(e) {
  var msg = '';
  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
		 	print('Error: QUOTA_EXCEEDED_ERR');
      break;
    case FileError.NOT_FOUND_ERR:
		 	print('Error: NOT_FOUND_ERR');
      break;
    case FileError.SECURITY_ERR:
		 	print('Error: SECURITY_ERR');
      break;
    case FileError.INVALID_MODIFICATION_ERR:
		 	print('Error: INVALID_MODIFICATION_ERR');
      break;
    case FileError.INVALID_STATE_ERR:
		 	print('Error: INVALID_STATE_ERR');
      break;
    default:
		 	print('Error: Unknown Error\n(Check console for details)');
		 	console.log(e);
      break;
  };
}
