
function doFeed() 
{
	
	var divID = document.getElementById("dynScriptContent");
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';	
	newScript.src = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=sunset&format=json';
	newScript.id = 'flickrFeed';
	divID.appendChild(newScript);
	
	//alert('height PRE: ' + document.getElementById('dynScriptContent').style.height);
	
	jsonFlickrFeed(feed);	
	
	//alert('height POST: ' + document.getElementById('dynScriptContent').style.height);
}

function jsonFlickrFeed(feed){
	var output = '';
	
	output = '<h2>' + feed.title + '</h2>';
	output += '<ul>';
	for (x=0; x<feed.items.length; x++) 
		output += '<li> <a href="' + feed.items[x].link + '">' + feed.items[x].title + '</a></li>';
  	output += '<ul>';
	document.getElementById('dynScriptContent').innerHTML += output;
	
 }