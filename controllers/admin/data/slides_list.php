<?php

namespace controllers\admin\data;
use \models as models;

class slides_list extends _ {
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
		$search = (isset($_REQUEST['search'])) ? $_REQUEST['search'] :"";
		$return = array();
		
		
		$return['records'] = models\slides::getInstance()->getAll("heading LIKE '%{$search}%'","ID DESC");
		
		
		
		

		
		
		
		return $GLOBALS["output"]['data'] = $return;
	}
	
	
	
}
