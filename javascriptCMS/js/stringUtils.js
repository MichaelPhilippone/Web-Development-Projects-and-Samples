/**
################################################
  This file contains functions for manipulating 
  individual strings (they are just utility
  functions)
  *********************************************
  Last modified: 13 OCT 2008 
  Michael Philippone
################################################
**/


/*
 *  Takes a string and strips "{{{", "}}}", 
 *  "[[[", "]]]" and then returns it
 */ 
function stripControls(str) {  
	return str.replace(/\[{3}/g, '').replace(/\]{3}/g,'').replace(/\{{3}/g, '').replace(/\}{3}/g,'') 
}