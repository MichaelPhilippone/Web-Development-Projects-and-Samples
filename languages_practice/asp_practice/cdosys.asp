<% 
For Field = 1 to Request.Form.Count - 3
FieldName = Replace(Request.Form.Key(Field),"_"," ")
FieldValue = Request.Form.Item(Field)
Body = Body & FieldName & ": " & FieldValue & VbCrLf
Next
'
'
'set up the variables/objects to be used:
Dim configVar
Set Mail = Server.CreateObject("CDO.Message")
Set configVar = Server.CreateObject("CDO.Configuration")
'now set up the configuration for the e-mail:
With configVar
.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserver")= "mymail.philipponelaw.com"
.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587
.Fields("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
.Fields("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 60
.Fields.Update
End With
'
'
Set Mail.Configuration = configVar
'now set up the message:
With Mail
.Fields("urn:schemas:httpmail:importance").Value = 1
.From = Request.Form("email_address")
.To = "mphilip1@ithaca.edu"
.Subject = Request.Form("email_subject")
.TextBody = Body
.Fields.Update
.Send
End With
'
'
Set configVar = Nothing
Set Mail = Nothing
'
Response.Redirect Request.Form("redirect_to")
%>