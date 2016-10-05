$(document).ready(function(){
	
	getData();
	
	$(document).on("submit","#filter-form",function(e){
		e.preventDefault();
		
		getData();
	})
	
	
});

function getData(){
	
	$.getData("/admin/data/slides_list/data",{"search":$("#search").val()},function(data){
		$("#content-area").jqotesub($("#template-list"), data);
	})
	
	
	
}
