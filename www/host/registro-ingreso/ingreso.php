<?php
	require_once('../config.php');
	cors();
	$datR = json_decode(file_get_contents('php://input'), true);
	$correo = $datR['a'];
	$pass = $datR['b'];

	if ($correo == 'correo@dominio.com' && $pass == '123456') {
		$datos = array(
			'code' => 0,
			'error' => false,
			'mensaje' => 'Datos correctos',
			'status' => 0
		);
	}
	else{
		$datos = array(
			'code' => 0,
			'error' => true,
			'mensaje' => 'Correo y contraseña incorrectos',
			'status' => 100
		);
	}
	echo json_encode($datos);
?>