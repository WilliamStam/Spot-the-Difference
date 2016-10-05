<?php

namespace controllers\admin\data;
use \models as models;

class slides_form extends _ {
	private static $instance;
	function __construct() {
		parent::__construct();
		
		
	}
	public static function getInstance(){
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	function data(){
		$ID = (isset($_REQUEST['ID'])) ? $_REQUEST['ID'] :"";
		$return = array();
		
		
		$return['details'] = models\slides::getInstance()->get($ID);
		
		
		$data = array();
	
		

		
		
		$return['records'] = array();
		
		return $GLOBALS["output"]['data'] = $return;
	}
	
	function image(){
		$ID = (isset($_REQUEST['ID'])) ? $_REQUEST['ID'] :"";
		$image = (isset($_REQUEST['img'])) ? $_REQUEST['img'] :"";
		$return = array();
		
		
		$return['details'] = models\slides::getInstance()->get($ID);
		$return['details']['data'] = json_decode($return['details']['data'],true);
		$return['image'] = array();
		
		$media = $this->cfg['media'];
		$path = fixslashes($media . "/slides/");
		$full_path = fixslashes($path . "/" . $image);
		
		//test_array($full_path); 
		
		if (file_exists($full_path)){
			
			$img = new \Image($full_path,false,"");
			
			$return['image']['filename'] = $image;
			$return['image']['height'] = $img->height();
			$return['image']['width'] = $img->width();
			
			
		} 
		

		
		
		$return['records'] = array();
		
		return $GLOBALS["output"]['data'] = $return;
	}
	
	
	
}
