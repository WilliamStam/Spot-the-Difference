<?php
namespace controllers\admin;
use \timer as timer;
use \models as models;
class slides_list extends _ {
	function __construct(){
		parent::__construct();
	}
	function page(){
		//if ($this->user['ID']=="")$this->f3->reroute("/login");
		
		
		$tmpl = new \template("template.twig","ui/admin");
		$tmpl->page = array(
			"section"    => "slides",
			"sub_section"=> "list",
			"template"   => "slides_list",
			"meta"       => array(
				"title"=> "Admin | Slides List",
			),
		);
		$tmpl->output();
	}
	
	
	
}
