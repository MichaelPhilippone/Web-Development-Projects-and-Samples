<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>

		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Javascript Query Builder</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		
		<script type="text/javascript" src="scriptaculous/lib/prototype.js"></script>
		<script type="text/javascript" src="scriptaculous/scriptaculous.js"></script>
		
		<!--- *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** --->
		<!--- DRAG AND DROP includes: --->
		<link href="/include/CSS/dragAndDropQueries.css" rel="stylesheet" media="screen"/>
		<script type="text/javascript" src="/include/JS/dragAndDropUtils.js"></script>
		<script type="text/javascript" src="/include/JS/queryCallBacks.js"></script>
		<script type="text/javascript" src="/include/JS/dragAndDropQueries.js"></script>
		
	</head>
	<body>

		<cfif structKeyExists( form , 'submit')>
			<cfset query = 'TRUE'>
		<cfelse>
			<cfset query = 'FALSE'>
		</cfif>
		
		
		<cfif query eq 'TRUE'>
			<cfoutput>
				<h2>Query specified</h2>
				Here is the data:
				<hr/>
				#form.queryBody# <br/>
				#form.uniqueIndex# 
				<hr/>
			</cfoutput>
		</cfif>
		
		<cfif query eq 'FALSE'>
			
			<!--- *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** --->
			<h2>Query Builder</h2>
			<p class="instructions">
				Drag the parts of your query from the toolbox and drop them into the query panel.
			</p>
			<div id="qBuild_Main">
			
				<h2>Toolbox:</h2>
				
				<div class="components_toolBox" id="components_toolBox">
				
					<div id="fieldNamesHdr">Query Fields:</div>
					
					<div id="field1" class="qryField"> Search Field 01 </div>		
					<div id="field2" class="qryField"> Search Field 02 </div>
					<div id="field3" class="qryField"> Search Field 03 </div>
					<div id="field4" class="qryField"> Search Field 04 </div>
							
					<br class="clearIt" />
					<br/>
					<hr/>
					<div id="logOpHdr">Logical Operators:</div>
					
					<div id="or" class="qryField"> OR </div>
					<div id="and" class="qryField"> AND </div>
					<div id="not" class="qryField"> NOT </div>
					<div id="lparen" class="qryField"> ( </div>
					<div id="rparen" class="qryField"> ) </div>
					
					<br class="clearIt" />
					
				</div>
				
				<h2>Query:</h2>
				<div class="components_builder_outer" id='components_builder_outer'>
					<div id="components_builder"></div>
				</div>
					
			</div>
			
			<br/>
			<br/>
			
		<cfoutput>		
			<cfform action="#request.currUrl#" method="post" id='qryBuilderForm' name='qryBuilderForm' onsubmit='return validateAndSend();' >
				<input id="queryBody" name="queryBody" type="hidden" value=""/>
				<input id="uniqueIndex" name="uniqueIndex" type="hidden" value="0"/>
				
				<input type="submit" name="submit" value="SEARCH"/>
			</cfform>
		</cfoutput>	
		
			<!--- DRAG AND DROP setup and function call: --->
			<script type="text/javascript">
				window.UIX = 0;	//set up a unique ID index with GLOBAL scope
				
				window.isIE = ( ( navigator.userAgent.toLowerCase().indexOf("msie")==-1 ) ? (false) : (true) ) 
				
				makeDraggables();		
			</script>
				
		</cfif>
		
	</body>
</html>
