<?php
	require_once("modules/connect.php");
	require_once("modules/constants.php");
	require_once("modules/utils.php");

	//Session Vars
	$prefix = "plantillagran";
	$sessionUserID = $prefix."UserID";
	$sessionTokenID = $prefix."Session";
	
	$sessionToken = @$_SESSION[$sessionTokenID];
	$sessionUser = @$_SESSION[$sessionUserID];
	$sessionProfile = @$_SESSION[$profilelUserID];

	//Config Vars
	$devMode = TRUE;
	$debugServices = TRUE;

?>