<html>
<head>
	<title>index.php</title>
</head>

<body>
	<div id="contentBody" style="background-color:#DFDFDF; padding:10px; margin:10px; float:left;">
		<?php 
			//define the path as relative
			$path = ".";
			
			//using the opendir function
			$dir_handle = @opendir($path) or die("Unable to open $path");
		?>
		
		<div>Directory Listing of <?php exec("pwd"); ?> </div>
		<ul>

		<?php //running the while loop
			while ($file = readdir($dir_handle)) 
				if($file[0]!=".") 
				{ ?>
					<li><a target="_blank" href="<?php echo $file ?>"><?php echo $file ?></a></li>
			<?php } 
			//closing the directory
			closedir($dir_handle); ?>
		
		</ul>
		<hr/>
		
	</div>
</body>
</html>