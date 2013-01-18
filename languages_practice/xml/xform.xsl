<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	
	<xsl:output method="html" />
	
	<xsl:template match="/">
		<html xmlns:html="http://www.w3.org/1999/xhtml">
		<head>
			<title>TRANSFORMED!</title>
		</head>
		<body>
			<div style="background-color:#FFDDCC;">
				<xsl:apply-templates />
			</div>
		</body>
		</html>
	</xsl:template>

	<xsl:template match="catalog">
		<table border="1" align="center">
		<xsl:apply-templates />
		</table>
	</xsl:template>
	
	<xsl:template match="title">
		<tr><td style="background-color:#CCDDFF;">
			<xsl:value-of select="." />
		</td></tr>
	</xsl:template>

</xsl:stylesheet>