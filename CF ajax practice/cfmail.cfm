
<cfif IsDefined("form.submit")>
   <cfif form.mailto is not "" AND form.mailfrom is not "">
    <!---  
	<cfmail   to = "#form.mailto#"
          		from = "#form.mailFrom#"
          		subject = "#form.subject#">
            This message was sent by an automatic mailer built with cfmail:
            = = = = = = = = = = = = = = = = = = = = = = = = = = =
            #form.body#
      </cfmail>   
      <h3>Thank you</h3>
      <p>Thank you, <cfoutput>#mailfrom#: your message, #subject#, has
            been sent to #mailto#</cfoutput>.
	--->
	<cfoutput>
		TO: #form.MailTo# <br/>
		FROM: #form.MailFrom# <br/>
		SUBJ: #form.MailSubject# <br/>
		BODY: #form.MailBody# <br/>
   	</cfoutput>
	</cfif>   
</cfif>

<h3>cfmail Example</h3>

<script language="javascript" type="text/javascript">
	function validate( form_obj , input_ctrl , value)
	{
		form_obj.getElementsByTagName
		return false;
	}
</script>

<div>
	<cfform action="cfmail.cfm" enctype="multipart/form-data" id="mailForm" method="POST" name="mailForm" onsubmit="validate">
		<table>
			<tr>
				<td>TO:&nbsp;*</td>
				<td>
					<cfinput name="MailTo" id="MailTo" type="text">
				</td>
			</tr>
			<tr>
				<td>FROM:&nbsp;*</td>
				<td>
					<cfinput name="MailFrom" id="MailFrom" type="text">
				</td>
			</tr>
			<tr>
				<td>SUBJECT:</td>
				<td>
					<cfinput name="MailSubject" id="MailSubject" type="text">
				</td>
			</tr>	
			<tr>
				<td colspan='2'>MESSAGE BODY:</td>
			</tr>
			<tr>
				<td colspan='2'> 
					<textarea name="MailBody" id="MailBody" cols="40" rows="5"></textarea> 
				</td>
			</tr>
			<tr>
				<td colspan='2'><cfinput type="submit" name="submit" value="SUBMIT"></td>
			</tr>
		</table>
	</cfform>
</div>
