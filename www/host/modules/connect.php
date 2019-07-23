<?php
	date_default_timezone_set('America/Bogota');

	if($_SERVER["SERVER_NAME"] == "localhost") {
		define("DATABASE_SERVER", "localhost");
		define("DATABASE_USERNAME", "root");
		define("DATABASE_PASSWORD", "");
		define("DATABASE_NAME", "unicentro");
	} else { 
		define("DATABASE_SERVER", "72.167.233.110");
		define("DATABASE_USERNAME", "grandev");
		define("DATABASE_PASSWORD", "Hayek2016@");
		define("DATABASE_NAME", "grandev");
	}
	
	$dbcon = @mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME);
	if(!$dbcon){
		echo 'Error conexion base de datos';
	}
?>