<?php

namespace controllers\front\data;
use \models as models;

class home extends _ {
	function __construct() {
		parent::__construct();

	}


	function slide(){
		$ID = isset($_GET['ID'])?$_GET['ID']:"";
		$width = isset($_GET['width'])?$_GET['width']:"";
		$return = array();
		$return['slide'] = models\slides::getInstance()->get($ID);
		
		
		$return['slide']['data'] = json_decode($return['slide']['data'],true);
		
		$image = $return['slide']['image_left'];
		$return['image'] = array();
		$media = $this->cfg['media'];
		$path = fixslashes($media . "/slides/");
		$full_path = fixslashes($path . "/" . $image);
		
		//test_array($full_path); 
		
		if (file_exists($full_path)){
			
			$img = new \Image($full_path,false,"");
			
			$return['image']['height'] = $img->height();
			$return['image']['width'] = $img->width();
			
			
		}
		
		
		$ow = $return['image']['width'];
		$oh = $return['image']['height'];
		
		$w = $width*1;
		$ratio = ($ow / $oh);
		$h = $w / $ratio;
		
		$return['file'] = array(
				"width"=>$w,
				"height"=>$h
		);
		
		
		
		$w = 1000;
		$ratio = ($ow / $oh);
		$h = $w / $ratio;
		
		$return['canvas'] = array(
				"width"=>$w,
				"height"=>$h
		);
		
		
		
		
		
		
		
		return $GLOBALS["output"]['data'] = $return;
	}
	
	


}
