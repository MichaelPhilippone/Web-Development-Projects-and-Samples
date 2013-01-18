<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">


		<xsl:template match="/">
			<html>
			<head>
				<style>
					h2, p { color:#FFFFFF; }
				</style>
			</head>
			<body style="background-color:#333333;"> 
			<h2>My CD Collection</h2>
			<hr />
			<xsl:apply-templates/> 
			</body>
			</html>
		</xsl:template>
<!-- ************************************************************************ -->
				<xsl:template match="cd">
					<p>
						<xsl:apply-templates select="title" />
						<xsl:apply-templates select="artist" />
					<hr />
					</p>
				</xsl:template>
<!-- ************************************************************************ -->
				<xsl:template match="title">
					Title: <span style="color:#FF0000;">
						<xsl:value-of select="." />
					</span>
					<br />
				</xsl:template>
<!-- ************************************************************************ -->
				<xsl:template match="artist">
					Artist: <span style="color:#00FF00;">
						<xsl:value-of select="." />
					</span>
					<br />
				</xsl:template>
<!-- ************************************************************************ -->
</xsl:stylesheet>