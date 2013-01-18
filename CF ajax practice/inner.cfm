
<cfquery datasource="#request.ds#" name="qSelectAll">
	SELECT * FROM Test
</cfquery>

<input type="button" 
		value="query" 
		onclick="OpenPopup( { popUpId:'sampleQueryDiv', height:500, width:500, overlay:true, distFromTop:100} )">

&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" 
		value="Mail" 
		onclick="OpenPopup( { popUpId:'mailDiv', height:390, width:500, overlay:true, distFromTop:100} )">

&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" 
		value="Variables" 
		onclick="OpenPopup( { popUpId:'varsDiv', height:500, width:800, overlay:true, distFromTop:100} )">

&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" 
		value="Dynamic FlickR" 
		onclick="OpenPopup( { popUpId:'dynScriptDiv', height:600, width:850, overlay:true, distFromTop:100} )">

<!-- **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****  -->

<div style='display:none;' class="popUpDiv" id="sampleQueryDiv">
	<div class="popUpTitleBar">
		<span class="titleBarCloseBtn">
			<a href="javascript:;" onclick="javascript:ShowPage();">[X]</a>
		</span>
	</div>
	<div class="popUpDivContent">
		<h3>Sample Query Output</h3>
		<table cellpadding="5" cellspacing="5" border="1">
			<tr>  <th>ID</th>  <th>NAME</th>  </tr>
			<cfoutput query="qSelectAll">
				<tr>  <td>#qSelectAll.ItemID#</td>  <td>#qSelectAll.Name#</td>  </tr>
			</cfoutput>
		</table>
	</div>
</div>

<!-- **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****  -->

<div style='display:none;' class="popUpDiv" id="mailDiv">
	<div class="popUpTitleBar">
		<span class="titleBarCloseBtn">
			<a href="javascript:;" onclick="javascript:ShowPage();">[X]</a>
		</span>
	</div>
	<div class="popUpDivContent">
		<cfinclude template="/SCRATCH/cfmail.cfm">
	</div>
</div>

<!-- **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****  -->

<div style='display:none;' class="popUpDiv" id="varsDiv">
	<div class="popUpTitleBar">
		<span class="titleBarCloseBtn">
			<a href="javascript:;" onclick="javascript:ShowPage();">[X]</a>
		</span>
	</div>
	<div class="popUpDivContent">
		<cfinclude template="/SCRATCH/Global_Vars.cfm">
	</div>
</div>

<!-- **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****  -->

<div style='display:none;' class="popUpDiv" id="dynScriptDiv">
	<div class="popUpTitleBar">
		<span class="titleBarCloseBtn">
			<a href="javascript:;" onclick="javascript:ShowPage();">[X]</a>
		</span>
	</div>
	<div class="popUpDivContent" id="dynScriptContent"> &nbsp; </div>
</div>

<!-- **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****  -->


<div id="overlay" class="overlay" onclick='javascript:ShowPage();' >&nbsp;</div>


<!-- **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****  -->


