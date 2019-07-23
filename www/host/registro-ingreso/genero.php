<?php
	require_once('../config.php');
	session_start();
	cors();
	$datR = json_decode(file_get_contents('php://input'), true);
	$estado_civil = $datR['a'];

	if ($estado_civil == '') {
		$datos = array(
			'error' => true,
			'mensaje' => 'Datos no recibidos',
			'status' => 100
		);
	}
	else{
		$datos = array(
			'error' => false,
			'mensaje' => 'Datos recibidos',
			'status' => 0
		);
	}

	echo json_encode($datos);
?>