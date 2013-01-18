<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

	<xsl:template match="/">
		<html>
			<body>
		
				<h2>My CD Collection</h2>
		
				<table border="1">
					<tr style="background-color:#9ACD32;">
						<th align="left">Title</th>
						<th align="left">Artist</th>
						<th align="left">Price</th>
					</tr>

					<!-- ONE ***************************************
					process for every CD entry in the xml file: -->
					<xsl:for-each select="catalog/cd">
						<tr style="background-color:#CCCCCC;">
							<td><xsl:value-of select="title" /></td>
							<td><xsl:value-of select="artist" /></td>
						</tr>
					</xsl:for-each>

					<!-- TWO ***************************************
					List all entries in alpha order: -->
					<xsl:for-each select="catalog/cd">
					<xsl:sort select="artist"/>
						<tr style="background-color:#CCCC66;">
							<td><xsl:value-of select="title" /></td>
							<td><xsl:value-of select="artist" /></td>
						</tr>
					</xsl:for-each>


					<!-- THREE ***************************************
					Process for every CD in the xml file that has artist as Radiohead -->
					<xsl:for-each select="catalog/cd[ artist='Radiohead']">				
						<tr style="background-color:#66CCCC;">
							<td><xsl:value-of select="title" /></td>
							<td><xsl:value-of select="artist" /></td>
						</tr>
					</xsl:for-each>
						
					<!-- FOUR ***************************************
					put the output in alpha order: -->
					<xsl:for-each select="catalog/cd">
						<xsl:if test="price &gt; 10">
							<tr style="background-color:#CC66CC;">
								<td><xsl:value-of select="title" /></td>
								<td><xsl:value-of select="artist" /></td>
								<td><xsl:value-of select="price" /></td>
							</tr>
						</xsl:if>
					</xsl:for-each>

					<!-- FIVE ***************************************
					List all entries in alpha order with more expensive ones in red: -->
					<xsl:for-each select="catalog/cd">
						<xsl:choose>
							<xsl:when test="price &gt; 9">
								<tr style="background-color:#99CC99; color:#FF3333;">
									<td> <xsl:value-of select="title" /> </td>
									<td> <xsl:value-of select="artist" /> </td>
									<td><xsl:value-of select="price" /></td>
								</tr>
							</xsl:when>
							<xsl:otherwise>
								<tr style="background-color:#99CC99;">
									<td><xsl:value-of select="artist" /></td>
									<td><xsl:value-of select="title" /></td>								
									<td><xsl:value-of select="price" /></td>
								</tr>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:for-each>
			    
					</table>

				<h3><span style="background-color:#CCCCCC;">First</span>:
					Full list of CD catalog in XML file.  (in order printed)</h3>
				<h3><span style="background-color:#CCCC66;">Second</span>:
					Full List in sorted alpha order. (by artist)</h3>
				<h3><span style="background-color:#66CCCC;">Third</span>:
					List of CD Catalog where artist = 'Radiohead'</h3>
				<h3><span style="background-color:#CC66CC;">Fourth</span>:
					List all cds in catalog where price &gt; 10</h3>
				<h3><span style="background-color:#99CC99;">Fifth</span>:
					List all cds in catalog in red where price &gt; 9</h3>
				
				</body>
			</html>
	</xsl:template>
</xsl:stylesheet>


