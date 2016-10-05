<?php
namespace controllers\front;
use \timer as timer;
use \models as models;
class home extends _ {
	function __construct(){
		parent::__construct();
	}
	function page(){
		//if ($this->user['ID']=="")$this->f3->reroute("/login");
		$offset = $this->f3->get("PARAMS['page']");
		$records = models\slides::getInstance()->getAll();
		$offset = ($offset)?$offset:1;
		if ($offset==0)$offset = 1;
		$record = $records[0];
		if (isset($records[$offset-1])){
			$record = $records[$offset-1];
		} else {
			$offset = 1;
		}
		
		
		$nav = array();
		
		if ($offset>1){
			$nav['prev'] = $offset-1;
		}
		if ($offset < count($records)){
			$nav['next'] = $offset+1;
		}	
			
		$record['data'] = json_decode($record['data'],true);
		//test_array($record); 
		
	
		//test_array(array("index"=>$offset,"nav"=>$nav,"c"=>count($records))); 
		
		$tmpl = new \template("template.twig","ui/front");
		$tmpl->page = array(
			"section"    => "home",
			"sub_section"=> "home",
			"template"   => "home",
			"meta"       => array(
				"title"=> "Woof",
			),
		);
		$tmpl->records = $records;
		$tmpl->record = $record;
		$tmpl->nav = $nav;
		$tmpl->output();
	}
	
	
	
}
