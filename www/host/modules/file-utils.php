<?php
function validararchivo($label) {
	$valid = "true";
	$nomarch = $label;
	$nomarch = explode(".",$nomarch);
	$ext = $nomarch[sizeof($nomarch)-1];
	$ext = strtolower($ext);
	if(($ext!="jpg")&&($ext!="JPG")&&($ext!="jpeg")&&($ext!="JPEG")&&($ext!="png")&&($ext!="PNG")&&($ext!="gif")&&($ext!="GIF")&&($ext!="pdf")&&($ext!="PDF")&&($ext!="doc")&&($ext!="DOC")&&($ext!="docx")&&($ext!="DOCX")&&($ext!="xls")&&($ext!="XLS")&&($ext!="xlsx")&&($ext!="XLSX")&&($ext!="ppt")&&($ext!="PPT")&&($ext!="pptx")&&($ext!="PPTX")) {
		$response = new stdClass();
		$response->code = FILE_EXTENSION_ERROR_CODE;
		$response->error = FILE_EXTENSION_ERROR;
		closeService($response);
	}
	
	return $valid;
}

function uploadFile($indice, $path) {
	checkFolder($path);
	$nombrearchivo = isset($_FILES[$indice]['name']) ? $_FILES[$indice]['name'] : "";
	$time = time();
	$nombretemporal = isset($_FILES[$indice]['tmp_name']) ? $_FILES[$indice]['tmp_name'] : "";
	
	$fileName = explode(".", $nombrearchivo);
	$extension = $fileName[count($fileName) - 1];
	$nuevonombre = $fileName[0]."-".$time.".".$extension;
	$nuevonombre = fixis($nuevonombre);
	
	$res = copy($nombretemporal, $path.$nuevonombre);
	if(!$res) { 
		$response = new stdClass();
		$response->code = TRANSFER_ERROR_CODE;
		$response->error = TRANSFER_ERROR;
		closeService($response);
	}
		
	return $nuevonombre;
}

function deleteFile($dbcon, $table, $idcon, $fieldName, $path) {
	$query = "SELECT * FROM ".$table." WHERE id='$idcon'";
	if(!$result = mysqli_query($dbcon, $query))
	{
		$response = new stdClass();
		$response->code = SQL_ERROR_CODE;
		$response->error = SQL_ERROR;
		if($debugServices) $response->error .= "<br/><br/>".mysqli_error($dbcon)."<br/><br/>".$query;
		closeService($response, $dbcon);
	}
	
	$result = mysqli_fetch_array($result);
	$file = $result[$fieldName]; 
	
	@unlink($path.$file);
}

function readCSV($csvFile) {
	$file_handle = fopen($csvFile, 'r');
	if(!$file_handle) 
	{
		$response = new stdClass();
		$response->code = FILE_ERROR_CODE;
		$response->error = FILE_ERROR;
		closeService($response);
	}
	
	while(!feof($file_handle)) {
		$line_of_text[] = fgetcsv($file_handle, 1024);
	}
	
	fclose($file_handle);
	return $line_of_text;
}

?>