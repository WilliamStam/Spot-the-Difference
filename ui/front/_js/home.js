$(document).ready(function () {
	
	
	
	getData();
	
});

function getData(){
	var ID = _ID;
	var image_width = 0;
	$(".image-area").each(function(){
		var w = $(this).width();
		if (w > image_width){
			image_width = w;
		}
	});
	
	
	$.getData("/front/data/home/slide?ID="+ID,{"width":image_width},function(data){
		
		$(".image-area").each(function(){
			var $this = $(this);
			var id = $this.attr("id");
			file = {
				"file":$this.attr("data-img"),
				"width":data.file.width,
				"height":data.file.height,
				"id":id
			};
			$this.jqotesub($("#template-image"), {"data":data,"file":file});
			
			
			var paper = Raphael($("#canvasdiv-"+id).get(0));
			paper.setViewBox(0,0,data.canvas.width,data.canvas.height,true);
			paper.setSize(data.file.width,data.file.height);
			
			for (var i in data.slide.data){
				paper.path(data.slide.data[i]).attr({"type":"path","stroke":"none","fill":"#ffffff","stroke-opacity":0,"fill-opacity":0.4,});
			}
			

			
			
		});
		
	//	$("#image_left")
		
		//$("#content-area").jqotesub($("#template-slide"), data);
	});
	
	
}
