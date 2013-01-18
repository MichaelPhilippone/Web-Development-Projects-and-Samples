<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
	<head> 
		<title>JavaScript Form Validator</title>
		
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
				
		<script type="text/javascript" src="formValidate.js"></script>
		
		<style type="text/css">
			body { background-color:#DFDFDF; }
			.outer { text-align:center; }			
			.inner {
				background-color:#EFEFEF;
				border:5px ridge #000000;
				padding:15px;
				margin-left:auto; 
				margin-right:auto;
				text-align:left;
				width:350px;	
			}
		</style>
	</head>
	<body>
		<br /><br /><br />
		<div class="outer">
			<h1>Form Validator</h1>
			<cfif isDefined("form") AND structKeyExists(form,"testingSubmit")>
				<cfdump var="#form#"> <br />
			</cfif>					
			<div class="inner">
				<form
					method="POST"
					action="index.cfm" 
					onSubmit="javascript: return validateForm();">
					
					<table>
						<tr>
							<td>RADIO: </td>
							<td>
								RADIO 1:
								<input 
									type="radio" 
									name="radios" 
									id="radio1" 
									value="radio 1 checked" />
								&nbsp;&nbsp;&nbsp;
								RADIO 2:
								<input
									type="radio" 
									name="radios" 
									id="radio2"
									value="radio 2 checked" />
								
								<script type="text/javascript">
									registerFormField("radios" , "radio" , "Please select a radio button");
								</script>
							</td>
						</tr>
						<tr>
							<td style="width:125px;">EMAIL: </td>
							<td>
								<input 
									type="text" 
									name="email" 
									<!--- id="email"  --->
									/>
								<script type="text/javascript">
									registerFormField("email" , "email" , "Please enter a valid email address");
								</script>
							</td>
						</tr>
						<tr>
							<td>FIRST: </td>
							<td>
								<input 
									type="text" 
									name="firstName" 
									id="firstName" 
									/>
								<script type="text/javascript">
									registerFormField("firstName" , "text" , "Please enter a first name");
								</script>
							</td>
						</tr>
						<tr>
							<td>LAST: </td>
							<td>
								<input 
									type="text" 
									name="lastName" 
									id="lastName" 
									/>
								<script type="text/javascript">
									registerFormField("lastName" , "text" , "Please enter a last name");
								</script>
							</td>
						</tr>
						<tr>
							<td>INT COST: </td>
							<td>
								<input 
									type="text" 
									name="intCost" 
									id="intCost" 
									/>
								<script type="text/javascript">
									registerFormField("intCost" , "int" , "Please enter a valid integer number");
								</script>
							</td>
						</tr>
						
						<tr>
							<td>FLOAT COST: </td>
							<td>
								<input 
									type="text" 
									name="floatCost" 
									id="floatCost" 
									/>
								<script type="text/javascript">
									registerFormField("floatCost" , "float" , "Please enter a valid floating point number");
								</script>
							</td>
						</tr>
							
						<tr>
							<td>CC TYPE: </td>
							<td>
								<select name="ccType" id="ccType">
									<option value="">Choose a type</option>
									<option value="mastercard">Mastercard</option>
									<option value="visa">Visa</option>
									<option value="amex">American Express</option>										
								</select>
								
								<script type="text/javascript">
									registerFormField("ccType" , "dropdown" , "Please select a credit card type");
								</script>
							</td>
						</tr>
						<tr>
							<td>CHECKBOX: </td>
							<td>
								CHECK:
								<input 
									type="checkbox" 
									name="check" 
									id="check" 
									value="check box checked!"/>
								
								<script type="text/javascript">
									registerFormField("check" , "check" , "Please select the CHECK box");
								</script>
							</td>
						</tr>
						<tr>
							<td>TEXTAREA: </td>
							<td>
								<textarea  
									name="textarea"
								 	id="textarea"
								 	cols="20"
								 	rows="10"></textarea>
								
								<script type="text/javascript">
									registerFormField("textarea" , "text" , "Please fill in the TEXTAREA");
								</script>
							</td>
						</tr>										
					</table>
					<br />
					<input type="submit" name="testingSubmit" id="testingSubmit" value=" SUBMIT " />
					&nbsp;&nbsp;&nbsp;
					<input type="reset" name="testingReset" id="testingReset" value=" CLEAR " />
					
					<!---
					<script type="text/javascript">
						dump(window.validateFields , { label:'window.validateFields' } );
					</script>
					--->
					
				</form>
			</div>
		</div>
	</body>
</html>