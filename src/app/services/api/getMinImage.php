<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$method = $_SERVER['REQUEST_METHOD'];

if($method == 'POST'){
	$requestBody=file_get_contents('php://input');
	$params= json_decode($requestBody);
	$params = (array) $params;

	if ($params['id_post']) {
		$id_post = $params['id_post'];
        $a=array();
		foreach(glob('storage/min/images/'.$id_post.'/*.{jpg,pdf,png,PNG}', GLOB_BRACE) as $file) {
            //echo $file;
            $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]"."/api/".$file;
			array_push($a,$actual_link);
        }
		$res = json_encode($a, JSON_NUMERIC_CHECK);
		header('Content-Type: application/json');
		echo $res;
	}else{
		echo "Not valid Body Data";
	}

}else{
	echo "Not valid Data";
}

?>