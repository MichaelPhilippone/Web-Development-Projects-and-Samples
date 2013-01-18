<div style="background-color:#CCDD99; margin-left:25px; border:1px solid #000000; width:75%; padding:0 0 10 10px;">
	<h1>Some Useful Variable Dumps:</h1>
	
	<hr/>
	<cftry>
		<h2>Application:</h2>
		<cfdump var="#application#">
		<cfcatch>
			<h3>Oops. (Application)</h3>
		</cfcatch>
	</cftry>
	
	<hr/>
	<cftry>
		<h2>Request:</h2>
		<cfdump var="#request#">
		<cfcatch>
			<h3>Oops. (request)</h3>
		</cfcatch>
	</cftry>
	
	<hr/>
	<cftry>
		<h2>CGI:</h2>
		<cfdump var="#CGI#">
		<cfcatch>
			<h3>Oops. (CGI)</h3>
		</cfcatch>
	</cftry>
	
	<hr/>
	<cftry>
		<h2>URL:</h2>
		<cfdump var="#URL#">
		<cfcatch>
			<h3>Oops. (URL)</h3>
		</cfcatch>
	</cftry>
	
	<hr/>
	<cftry>
		<h2>Session:</h2>
		<cfdump var="#Session#">
		<cfcatch>
			<h3>Oops. (session)</h3>
		</cfcatch>
	</cftry>
	
	<hr/>
	<cftry>
		<h2>CFcatch:</h2>
		<cfdump var="#no_var_to_ensure_error#">
		<cfcatch type="expression">
			<cftry>
				<cfdump var="#cfcatch#">
				<cfcatch>
					<h4>cfCatch variable is undefined</h4>
				</cfcatch>
			</cftry>
		</cfcatch>
	</cftry>
	
	<!---
	<hr/>
	<cftry>
		<h2>Server:</h2>
		<cfdump var="#server#">
		<cfcatch>
			<h3>Oops. (server)</h3>
		</cfcatch>
	</cftry>
	--->
</div>