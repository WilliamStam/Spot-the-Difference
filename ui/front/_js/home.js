jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
	this.each(function() {
		$(this).css("position","relative");
		for (var x=1; x<=intShakes; x++) {
			$(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
					.animate({left:intDistance}, ((intDuration/intShakes)/2))
					.animate({left:0}, (((intDuration/intShakes)/4)));
		}
	});
	return this;
};

var stats = {
	
	"clicks":0,
	"hit":0,
	"miss":0,
	"accuracy":0,
	"total":0,
	"found":0,
	"timer":{
		"start":"",
		"end":""
	}
}
$(document).ready(function () {
	
	$(document).on("click",".canvas-area",function(e){
		if (stats.timer.start==""){
			stats.timer.start = new Date();
		}
		if($(e.target).is('.difference')){
			stats.hit = stats.hit + 1;
		} else {
			stats.miss = 	stats.miss + 1;
			$(".canvas-area").shake(4,10,100);
		}
		stats.clicks = 	stats.clicks + 1;
		diffCalculator();
	});
	$(document).on("click",".difference",function(){
		var $this = $(this);
		var dif = $this.attr("data-diff");
		
		$(".difference-"+dif).addClass("active");
		
	});
	
	getData();
	
});
function diffCalculator(){
	updateStats();
	
	if (stats.found){
		var percent = (stats.found / stats.total)*100;
		
		
		$("#footer-progress").find(".progress-bar").text(percent.toFixed(0) + "%").css("width",percent+"%");
	
		if (stats.found == stats.total){
			toastr["success"]("You found all the differences!", "Success");
			if (stats.timer.end==""){
				stats.timer.end = new Date();
			}
			
		}
	}
	
	
	
	
}
function updateStats(){
	stats.found = $(".difference.active",$("#canvasdiv-image_left")).length;
	stats.total = $(".difference",$("#canvasdiv-image_left")).length;
	
	$("#stats-clicks").text(stats.clicks);
	$("#stats-hit").text(stats.hit);
	$("#stats-miss").text(stats.miss);
	
	var accuracy = (stats.found / (stats.clicks - stats.hit))*100
	accuracy = accuracy.toFixed(2);
	$("#stats-accuracy").text(accuracy);
	
	$(".found-count").html(stats.found)
	
	
	console.log(stats)
}
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
			var id=1;
			for (var i in data.slide.data){
				var obj = paper.path(data.slide.data[i]).attr({"type":"path","stroke":"none","fill":"#ffffff","stroke-opacity":0,"fill-opacity":0.4,});
				obj.node.setAttribute("class","difference difference-" + id);
				obj.node.setAttribute("data-diff","" + id);
				id++
			}
			

			
			
		});
		diffCalculator();
	//	$("#image_left")
		
		//$("#content-area").jqotesub($("#template-slide"), data);
	});
	
	
}
