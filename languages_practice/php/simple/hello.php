<html>
<head><title>PHP Test</title></head>

<style>

p {
color:red;
}

</style>
<body>

<?php echo '<h1><p>hello</p></h1>';?>



<?php if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
?> 

<h2>you have IE.</h2>
?>

<?php 
	}
	else 
	{
?>	
<h2>you have something other than IE. </h2>
<h3>strpos() must have returned false</h3>
<?php 
}
?>
	<hr/><br/>
	<a href="../">Home...</a>
</body>

</html>