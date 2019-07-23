<?php
function validarImagen($label) {
	$valid = "true";
	$nomarch = basename($_FILES[$label]['name']);
	$nomarch = explode(".", $nomarch);
	$ext = $nomarch[sizeof($nomarch) - 1];
	$ext = strtolower($ext);
	if(($ext!="jpg") && ($ext!="JPG") && ($ext!="jpeg") && ($ext!="JPEG") && ($ext!="gif") && ($ext!="GIF") && ($ext!="png") && ($ext!="PNG")) {
		echo FILE_EXTENSION_ERROR;
		$valid = "false";
	}
	return($valid);
}

function createThumb($indice, $path, $cropsArray) {
	checkFolder($path);
	$time = time();
	$nombrearchivo = isset($_FILES[$indice]['name']) ? $_FILES[$indice]['name'] : "";
	$nombretemporal = isset($_FILES[$indice]['tmp_name']) ? $_FILES[$indice]['tmp_name'] : "";
	
	$fileName = explode(".", $nombrearchivo);
	$extension = $fileName[count($fileName) - 1];
	$nuevonombre = $fileName[0]."-".$time.".".$extension;
	$nuevonombre = fixis($nuevonombre);
	
	if(is_uploaded_file($_FILES[$indice]['tmp_name'])) {
		$res = @copy($_FILES[$indice]['tmp_name'], $path.$nuevonombre);
		if (!$res) { 
			echo TRANSFER_ERROR; 
			exit; 
		} 
	}
	
	$crops = "";
	foreach($cropsArray as $crop)
    {
		$crop = (object) $crop;
		if(isset($crop->cropMethod))
		{
			if(isset($crop->quality))
				cropImagen($crop->width, $crop->height, $path.$nuevonombre, $extension, $path.$crop->prefijo.$nuevonombre, $crop->cropMethod, $crop->quality);
			else
				cropImagen($crop->width, $crop->height, $path.$nuevonombre, $extension, $path.$crop->prefijo.$nuevonombre, $crop->cropMethod);
		}
		else
			cropImagen($crop->width, $crop->height, $path.$nuevonombre, $extension, $path.$crop->prefijo.$nuevonombre);
	}
		
	return $nuevonombre;
}

function cropImagen($newWidth, $newHeight, $path, $extension, $newPath, $cropMethod=ZEBRA_IMAGE_CROP_CENTER, $quality=80) {
	$response = new stdClass();
	$image = new Zebra_Image();

	// indicate a source image (a GIF, PNG or JPEG file)
	$image->source_path = $path;
	
	// indicate a target image
	// note that there's no extra property to set in order to specify the target 
	// image's type -simply by writing '.jpg' as extension will instruct the script 
	// to create a 'jpg' file
	$image->target_path = $newPath;
	
	// since in this example we're going to have a jpeg file, let's set the output 
	// image's quality
	$image->jpeg_quality = $quality;
	
	// some additional properties that can be set
	// read about them in the documentation
	$image->preserve_aspect_ratio = true;
	$image->enlarge_smaller_images = true;
	$image->preserve_time = true;
	
	// resize the image to exactly XxX pixels by using the "crop from center" method
	// (read more in the overview section or in the documentation)
	//  and if there is an error, check what the error is about
	if (!$image->resize($newWidth, $newHeight, $cropMethod, "-1")) {
		// if there was an error, let's see what the error is about
		switch ($image->error) {
			case 1:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "El archivo no se pudo encontrar.";
				closeService($response);
				 break;
			case 2:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "El archivo no es legible.";
				closeService($response);
				 break;
			case 3:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "No se pudo escribir el archivo.";
				closeService($response);
				 break;
			case 4:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "El archivo tiene un formato no soportado.";
				closeService($response);
				 break;
			case 5:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "El formato de destino no es soportado.";
				closeService($response);
				 break;
			case 6:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "La libreria GD no soporta el formato de destino.";
				closeService($response);
				 break;
			case 7:
				$response->code = IMAGE_ERROR_CODE;
				$response->error = "La libreria GD no se encuentra instalada.";
				closeService($response);
				 break;
		}
	}
}

function deleteImages($dbcon, $table, $idcon, $fieldName, $path, $crops) {
	$query = "SELECT * FROM ".$table." WHERE id='$idcon'";
	if(!$result = mysqli_query($dbcon, $query))
	{
		$response->code = SQL_ERROR_CODE;
		$response->error = SQL_ERROR;
		if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
		closeService($response, $dbcon);
	}
	
	$result = mysqli_fetch_array($result);
	$img = $result[$fieldName]; 
	
	for($i = 0; $i <= count($crops); $i++)
		@unlink($path.$crops[$i]->prefijo.$img);
}

function deleteTableImages($dbcon, $table, $idName, $idcon, $fieldName, $path, $crops) {
	$query = "SELECT * FROM ".$table." WHERE ".$idName."='$idcon'";
	if(!$result = mysqli_query($dbcon, $query)) 
	{
		$response->code = SQL_ERROR_CODE;
		$response->error = SQL_ERROR;
		if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
		closeService($response, $dbcon);
	}
	
	while($row = mysqli_fetch_array($result)) {
		$img = $row[$fieldName];
		
		for($i = 0; $i <= count($crops); $i++)
			@unlink($path.$crops[$i]->prefijo.$img);
	}
	
	$query = "DELETE FROM ".$table." WHERE ".$idName."='$idcon'";
	if(!$result = mysqli_query($dbcon, $query))
	{
		$response->code = SQL_ERROR_CODE;
		$response->error = SQL_ERROR;
		if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
		closeService($response, $dbcon);
	}
}

function setImageHtml($width, $height, $url, $image, $class=null) {
	$clase = isset($class) ? 'class="'.$class.'"' : "";
	
	if($image == "")
		return '<img width="auto" height="'.$height.'" src="images/no_image.jpg" '.$clase.' style="max-width:120px"/>';
	else
		return '<img width="'.$width.'" height="'.$height.'" src="'.$url.$image.'" '.$clase.'/>';
}

?>