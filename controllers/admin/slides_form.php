<?php
namespace controllers\admin;
use \timer as timer;
use \models as models;
class slides_form extends _ {
	function __construct(){
		parent::__construct();
	}
	function page(){
		//if ($this->user['ID']=="")$this->f3->reroute("/login");
		$ID = $this->f3->get("PARAMS['ID']");
		$data = array();
		
		
		
		
		$tmpl = new \template("template.twig","ui/admin");
		$tmpl->page = array(
			"section"    => "slides",
			"sub_section"=> "form",
			"template"   => "slides_form",
			"meta"       => array(
				"title"=> "Admin | Slide Form",
			),
		);
		$tmpl->ID=$ID;
		$tmpl->data=$data;
		$tmpl->output();
	}
	
	
	
}
