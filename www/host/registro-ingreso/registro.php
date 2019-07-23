<?php
	require_once('../config.php');
	require_once("../modules/enviar-msm.php");
	cors();
	$datosJSON = file_get_contents('php://input');
	$datR = json_decode($datosJSON, true);
	$nombre = $datR['a'];
	$correo = $datR['b'];
	$fecha = $datR['c'];
	$password = $datR['d'];

	if ($nombre == '' && $correo == '' && $password == '') {
		$datos = array(
			'error' => true,
			'mensaje' => 'No se ha podido obtener datos post',
			'status' => 100
		);
	}
	else{
		mensajeRegistro($datR);
		$datos = array(
			'error' => false,
			'mensjae' => 'Datos obtenidos',
			'status' => 0,
			'datos' => array(
				'nombre' => $nombre,
				'correo' => $correo,
				'fecha' => $fecha,
				'password' => $password
			)
		);
	}
	echo json_encode($datos);
?>