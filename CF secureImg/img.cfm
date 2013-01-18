<!--- 
**********************************************************************************************************************

	--------------------------------------------------------------------------------------
	WHAT:	Protect images from having a "hard-link" obtained from source code
	--------------------------------------------------------------------------------------
	WHO:	Michael Philippone michael.philippone@gmail.com
	--------------------------------------------------------------------------------------
	WHEN:	24 March 2009
	--------------------------------------------------------------------------------------
	WHY:	Client has requested a securing system for protecting image downloads
	-------------------------------------------------------------------------------------- 
	HOW:
		BEGIN:
		-> TRY:
		->	->	IF the request for the image is associated with a logged in user:
		->	->	->	decrypt the a1 and a2 URL variables 
					// a1:the filename of the image 
					// a2: the path (absolute to the web application)
		->	->	->	make a variable for the location of the image file in the web app
		->	->	ELSE:
		->	->	->	set the file location variable to the "no permission" image
		->	->	IF the file location variable (at this point) points to a non-existent file:
		->	->	->	set the fileLocation variable to the "image not found" image
		->	->	determine the MIME type of the image
		->	->	read the binary data form of the image into a CFFILE variable
		->	->	specify the content-length in an http header (uses CFHEADER tag)
		->	->	serve the binary representation of the image (uses CFCONTENT tag)
		->	CATCH (any exception types):
		->	->	redirect the request to a hardlinked "image not found" image (uses CFLOCATION tag)
		END.
	--------------------------------------------------------------------------------------
	WHERE: 	Anywhere you would use a hard-link image path
			For example:
			<img src="/img.cfm?a1=[ENCODED_ENCRYPTED_IMG_NAME]&a2=[ENCODED_ENCRYPTED_PATH]" ... />
	--------------------------------------------------------------------------------------

**********************************************************************************************************************
--->

<cfoutput>
	<cftry>
		<cfif isUserLoggedIn() AND 
			  ( structKeyExists(url,"a1") AND structKeyExists(url,"a2") ) >
				  
			<cfset src = Decrypt( url.a1 , "EnCrYpTiOn StRiNg KeY 123" )>
			<cfset path = Decrypt( url.a2 , "EnCrYpTiOn StRiNg KeY 123" )>
			
			<cfset fileLoc = expandPath( path & src )>			
			
		<cfelse> <!--- not authenticated or improper URL for img.cfm call --->
			<cfset fileLoc = expandPath( "img/errorImage.gif" )>
		</cfif>
		
		<!--- Now construct and return the image --->
		
		<cfif NOT fileExists(#fileLoc#)> <!--- the specified image file does not exist --->
			<cfset fileLoc = expandPath( "img/imageNotFound.gif" )>
		</cfif>
		
		<cfif findNoCase(".jpg" , fileLoc) or findNoCase(".jpeg" , fileLoc)>
			<cfset mimeType = "image/jpeg">			
		<cfelseif findNoCase(".pct" , fileLoc)>
			<cfset mimeType = "image/x-pict">
		<cfelseif findNoCase(".ico" , fileLoc)>
			<cfset mimeType = "image/x-icon">
		<cfelseif findNoCase(".gif" , fileLoc)>
			<cfset mimeType = "image/gif">
		<cfelseif findNoCase(".png" , fileLoc)>
			<cfset mimeType = "image/png">
		<cfelseif findNoCase(".bmp" , fileLoc)>
			<cfset mimeType = "image/bmp">			
		<cfelseif findNoCase(".ppm" , fileLoc)>
			<cfset mimeType = "image/x-portable-pixmap">
		<cfelseif findNoCase(".tif" , fileLoc) OR findNoCase(".tiff" , fileLoc)>
			<cfset mimeType = "image/tiff">
		</cfif>
		
		<cffile action="readBinary" 
			variable="binImg" 
			file="#fileLoc#" >
	
		<cfheader
			name="content-length"
			value="#ArrayLen( binImg )#"
			/>
		
		<cfcontent
			type="#mimeType#"
			variable="#binImg#"
			/>
		
	<cfcatch type="Any">
		<cflocation addtoken="false" url="img/imageNotFound.gif">
	</cfcatch>
	
	</cftry>

</cfoutput>