<?php
namespace controllers\front;
use \timer as timer;
use \models as models;
class thumbnail extends _ {
	function __construct(){
		parent::__construct();
	}
	function image(){
		//if ($this->user['ID']=="")$this->f3->reroute("/login");
		$folder = $this->f3->get("PARAMS['folder']");
		$filename = $this->f3->get("PARAMS['filename']");
		$width = $this->f3->get("PARAMS['width']");
		$height = $this->f3->get("PARAMS['height']");
		
		$crop = (isset($_GET['crop'])&&$_GET['crop']=="false")?false:true;
		$enlarge = isset($_GET['enlarge'])?$_GET['enlarge']:true;
		
		$media = $this->cfg['media'];
		$path = fixslashes($media . "/" . $folder . "/");
		$full_path = fixslashes($path . "/" . $filename);
		
		
		if (file_exists($full_path)){
			
			$img = new \Image($full_path,false,"");
			$img->resize($width,$height ,$crop, $enlarge);
			$img->render();
			
			
		} else {
			$this->f3->error(404);
		}
		
		
		
		
		
		
		
		
		
		//test_array($full_path); 
		
	}
	
	
	
}
