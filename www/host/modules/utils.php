<?php
	require_once("image-utils.php");
	require_once("file-utils.php");
	require_once("mail-utils.php");

	function checkFolder($folder) {
		if(!file_exists($folder)) 
	        mkdir($folder, 0777);
	    else if(!is_writable($folder))
	        chmod($folder, 0777);
	}

	function fixis($a) {
		$a = str_replace(' ', '-', $a);
		$a = str_replace("_", "-", $a);
		$a = str_replace(" ", "-", $a);
		$a = str_replace("ñ", "n", $a);
		$a = str_replace("Ñ", "n", $a);
		
		$unwanted_array = array( 'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
	                            'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
	                            'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
	                            'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
	                            'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );
		$a = strtr($a, $unwanted_array);
		
		$a = preg_replace('/[^A-Za-z0-9.\-]/', '', $a);
		$a = strtolower($a);
		return $a;
	}

	function closeService($response, $dbcon=null) {
		if(isset($dbcon))
			mysqli_close($dbcon);
		echo json_encode($response);
		die();
		return;
	}

	function reorder($dbcon, $table, $orderfield, $idfield, $id=null, $pos=null, $newpos=null, $conditionfield=null, $contitionvalue=null) {
		//echo 'TABLA: '.$table.' CAMPO ORDEN: '.$orderfield.' CAMPO ID: '.$idfield.' ID: '.$id.' POS: '.$pos.' NEW POS: '.$newpos.' CAMPO CONDICION: '.$conditionfield.' VALOR CONDICION: '.$contitionvalue.'<br/>';
		
		if($conditionfield==null)
			$condicion = "";
		else
			$condicion = "$conditionfield = '$contitionvalue' AND";
		
		if($pos > $newpos)
		{
			$sql = "SELECT $orderfield, $idfield FROM ".$table." WHERE ".$condicion." ".$orderfield." < $pos AND ".$orderfield." >= $newpos ORDER BY ".$orderfield." ASC";
			
			if(!$rs1 = mysqli_query($dbcon, $sql))
			{
				$response->code = SQL_ERROR_CODE;
				$response->error = SQL_ERROR;
				if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
				closeService($response, $dbcon);
			}
			//echo $sql."<br/><br/>";
			
			if(!mysqli_query($dbcon, $sql = "UPDATE ".$table." SET ".$orderfield."=".$newpos." WHERE id = '".$id."'"))
			{
				$response->code = SQL_ERROR_CODE;
				$response->error = SQL_ERROR;
				if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
				closeService($response, $dbcon);
			}
			//echo $sql."<br/><br/>";
			
			$p = $newpos;
			while($r = mysqli_fetch_array($rs1)) {
				$p++;
				$sql = "UPDATE ".$table." SET ".$orderfield."='".$p."' WHERE ".$idfield."= '".$r[$idfield]."'";
				//echo $sql."<br/>";
				if(!$q1 = mysqli_query($dbcon, $sql)) 
				{
					$response->code = SQL_ERROR_CODE;
					$response->error = SQL_ERROR;
					if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
					closeService($response, $dbcon);
				}
			}
		}
		else if($pos < $newpos)
		{
			$sql = "SELECT $orderfield, $idfield FROM ".$table." WHERE ".$condicion." ".$orderfield." <= $newpos AND ".$orderfield." > $pos ORDER BY ".$orderfield." ASC";
			if(!$rs1 = mysqli_query($dbcon, $sql))
			{
				$response->code = SQL_ERROR_CODE;
				$response->error = SQL_ERROR;
				if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
				closeService($response, $dbcon);
			}
			//echo $sql."<br/><br/>";
			
			if(!mysqli_query($dbcon, $sql = "UPDATE ".$table." SET ".$orderfield."=".$newpos." WHERE id = '".$id."'"))
			{
				$response->code = SQL_ERROR_CODE;
				$response->error = SQL_ERROR;
				if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
				closeService($response, $dbcon);
			}
			//echo $sql."<br/><br/>";
			
			$p = $pos;
			while($r = mysqli_fetch_array($rs1)) {
				$sql = "UPDATE ".$table." SET ".$orderfield."='".$p."' WHERE ".$idfield."= '".$r[$idfield]."'";
				//echo $sql."<br/>";
				if(!$q1 = mysqli_query($dbcon, $sql)) 
				{
					$response->code = SQL_ERROR_CODE;
					$response->error = SQL_ERROR;
					if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
					closeService($response, $dbcon);
				}
				$p++;
			}
		}
	}

	function updateDeletedOrden($dbcon, $table, $orderfield, $idfield, $posdeleted=null, $conditionfield=null, $contitionvalue=null) {
		if($conditionfield==null)
			$condicion = "";
		else
			$condicion = "$conditionfield = '$contitionvalue' AND";
		
		if(!$rs1 = mysqli_query($dbcon, $sql = "SELECT $orderfield, $idfield FROM ".$table." WHERE ".$condicion." ".$orderfield." >= $posdeleted ORDER BY ".$orderfield." ASC"))
		{
			$response->code = SQL_ERROR_CODE;
			$response->error = SQL_ERROR;
			if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
			closeService($response, $dbcon);
		}
		
		$p = $posdeleted;
		while($r = mysqli_fetch_array($rs1)) {
			$sql = "UPDATE ".$table." SET ".$orderfield."='".$p."' WHERE ".$idfield."= '".$r[$idfield]."'";
			
			if(!$q1 = mysqli_query($dbcon, $sql)) 
			{
				$response->code = SQL_ERROR_CODE;
				$response->error = SQL_ERROR;
				if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
				closeService($response, $dbcon);
			}
			$p++;
		}
	}

	function get_client_ip_env() {
	    $ipaddress = '';
	    if (getenv('HTTP_CLIENT_IP'))
	        $ipaddress = getenv('HTTP_CLIENT_IP');
	    else if(getenv('HTTP_X_FORWARDED_FOR'))
	        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
	    else if(getenv('HTTP_X_FORWARDED'))
	        $ipaddress = getenv('HTTP_X_FORWARDED');
	    else if(getenv('HTTP_FORWARDED_FOR'))
	        $ipaddress = getenv('HTTP_FORWARDED_FOR');
	    else if(getenv('HTTP_FORWARDED'))
	        $ipaddress = getenv('HTTP_FORWARDED');
	    else if(getenv('REMOTE_ADDR'))
	        $ipaddress = getenv('REMOTE_ADDR');
	    else
	        $ipaddress = 'UNKNOWN';
	 
	    return $ipaddress;
	}

	function postsqli($bd, $post)
	{
		$input = htmlentities($post);
		$segur = mysqli_real_escape_string($bd, $input);
		return $segur;
	}

	function postsqli_caracteres($bd, $post)
	{
		$input = htmlentities($post);
		$segur = mysqli_real_escape_string($bd, $input);
		$otro = replacecaract($segur);
		return $otro;
	}

	function stringarray($num)
	{
		if ($num == 0) {
			$caracteres = array("\\", "¨", "º", "-", "~",
				"#", "@", "|", "!", "\"",
				"·", "$", "%", "&", "/",
				"(", ")", "?", "'", "¡",
				"¿", "[", "^", "`", "]",
				"+", "}", "{", "¨", "´",
				">", "< ", ";", ",", ":",
				".", " ");
		}
		else{
			$caracteres = array("\\", "¨", "º", "-", "~",
				"#", "@", "|", "!", "\"",
				"·", "$", "%", "&", "/",
				"(", ")", "?", "'", "¡",
				"¿", "[", "^", "`", "]",
				"+", "}", "{", "¨", "´",
				">", "< ", ",", ":", " ");
		}
		return $caracteres;
	}

	function replacecaract($string = '', $special_chars = array())
	{
		if (empty($string) || !is_string($string)) {
			return -1;
		}
		$string = trim($string);
		// Replace special chars
		if (!empty($special_chars)) {
			$string = str_replace(
				$special_chars["search"],
				$special_chars["replace"],
				$string
			);
		}
		// Delete special chars
		$string = str_replace(stringarray(0), '', $string);
		return $string;
	}

	function cors()
	{
		if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
	}
?>