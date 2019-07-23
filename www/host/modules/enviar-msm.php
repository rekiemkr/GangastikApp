<?php
	require_once('miler/class.phpmailer.php');
	function mensajeRegistro($datos)
	{
		$mail=new PHPMailer();
		$body='<section style="margin:0 auto;max-width:1100px;">
			<header>
				<h1>'.$datos['a'].'</h1>
			</header>
			<section>
				<article>
					<p>
						Te has registrado al app gangastik con los siguientes datos:
					</p>
					<p>
						<b>Nombres: </b>'.$datos['a'].'<br />
						<b>Correo: </b>'.$datos['b'].'<br />
						<b>Contraseña: </b>'.$datos['d'].'<br />
					</p>
				</article>
			</section>
		</section>';
		$mail->SetFrom('support@gangastik.com','Gangastik');
		$mail->From = "support@gangastik.com";
		$mail->FromName = "Gangastik";
		$mail->AddReplyTo('support@gangastik.com','Gangastik');
		$address=$datos['b'];
		$mail->AddAddress($address, $datos['a']);
		$mail->Subject = "Registro exitoso";
		$mail->AltBody = "Cuerpo alternativo del mensaje";
		$mail->CharSet = 'UTF-8';
		$mail->MsgHTML($body);
		$mail->Send();
		/*if(!$mail->Send()) {
			echo "Error al enviar el mensaje: " . $mail­>ErrorInfo;
		} 
		else {
			echo "2";
		}*/
	}
?>