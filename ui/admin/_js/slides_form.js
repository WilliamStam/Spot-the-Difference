


$(document).ready(function(){

	$(document).on("change","#data",function(){
		$(this).doTimeout( 'change', 250, function(){
			loadDataHotspots();
		});
		
	})
	
	
	getData();
	
	$(document).on("submit", "#form", function (e) {
		e.preventDefault();
		var $this = $(this);
		var data = $this.serializeArray();
		
		$.post("/admin/save/slides_form/form?ID=" + _ID, data, function (result) {
			result = result.data;
			validationErrors(result, $this);
			if (!result.errors && typeof getData == 'function') {
				getData();
			} 
		})
		
	});
	
	
});

function getData(){
	
	var ID = _ID||"";
	$.getData("/admin/data/slides_form/data",{"ID":ID},function(data){
		$("#form").jqotesub($("#template-form"), data);
		uploadstuff("image_left");
		uploadstuff("image_right");
		getImagePreviewData();
	})
	
	
	
}
var sketchpad = null;
function loadDataHotspots(){
	console.log("woof")
	var d = $("#data").val();
	d = $.parseJSON(d);
	console.info(d);
	var strokes = [];
	for (var i in d){
		strokes.push({
			"type":"path",
			"path":d[i],
			"fill":"#ffffff",
			"stroke":"#FFFFFF",
			"stroke-opacity":0,
			"fill-opacity":0.4,
			"stroke-width":5,
			"stroke-linecap":"round",
			"stroke-linejoin":"round"
		})
	}
	sketchpad.strokes(strokes);
	
}
function getImagePreviewData(){
	var ID = _ID||"";
	var img = $("#image_left").val();
	if (img){
		$.getData("/admin/data/slides_form/image?img="+img+"&ID="+ID,{},function(data){
			var ow = data.image.width*1;
			var oh = data.image.height*1;
			var height = 0;
			
			var w = 1000;
			var ratio = (ow / oh);
			var h = w / ratio;
			
			
			console.log("w:"+w+" | h:"+h+" | ho:"+oh+" | wo:"+ow);
			
			$("#draw-area").html('<div id="canvasdiv" style="width:'+w+'px;height:'+h+'px;background: url(/thumbnail/slides/'+w+'/'+h+'/'+img+') no-repeat;"></div>');
			
			
			
			sketchpad = Raphael.sketchpad("canvasdiv", {
				width: w,
				height: h,
				editing: true,
				stroke: "#ffffff",
				fill: "#ffffff",
				strokes:[]
			});
			
			
			sketchpad.change(function() {
				var d = $.parseJSON(sketchpad.json());
				var save = [];
				for (var i in d){
					save.push(d[i].path);
					
				}
				
				
				console.log(save)
				$("#data").val(JSON.stringify(save, null, 2));
				
			});
			
			loadDataHotspots();
				
			$('#canvasdiv').mousedown(function(event) {
				
				switch (event.which) {
					case 1:
						
						break;
					case 2:
						
						alert('Middle Mouse button pressed.');
						break;
					case 3:
						event.preventDefault();
						event.stopPropagation();
						sketchpad.undo();
						
						break;
					default:
						
				}
			});
		
			
			/*
			var paper = new Raphael(document.getElementById('canvasdiv'), data.image.width, data.image.height);
			
			var path = [];
			$("#canvasdiv").on("click",function(e){
				var x = e.clientX;
				var y = e.clientY;
				var c = x + " | "+ y;
				var v = x+","+y;
				if (path.length==0){
					c = "starting - "+c;
					v = "M"+v;
				} else {
					v = "L"+v;
				}
				
				path.push(v);
				mark = paper.path(v);
				
				
				console.log(path)
			})
			$("#canvasdiv").on("dblclick",function(e){
				var x = e.clientX;
				var y = e.clientY;
				
				
				path = []
				
				
				console.log("ending - " + x + " | "+ y)
			})
			
			
			
			paper.rect(30, 50, 80, 100).attr({
				fill : "blue",
				stroke : "white",
				strokeWidth : 0,
				r : 10
			});
			var marks = [];
			for (var i in d){
				
				mark = paper.path(d[i]);
				mark.attr({
					"stroke": "#F00",
					"stroke-width": 3,
					"fill": "#00C"
				});
				marks.push(mark)
				
			}
			
			//var d = "M 10,30 L 60,30 L 10,80 L 60,80";
			//var mark = paper.path(d);
			*/
			
			
			
			
			
			
			
			
		});
		
	}
	
}

function uploadstuff(uploadBTNid) {
	
	var field = uploadBTNid;
	$("#" + uploadBTNid + '-progress .progress-bar').css("width", 0).text(0 + "%").parent().hide();
	
	var uploader = new plupload.Uploader({
		runtimes: 'html5,flash,silverlight,html4',
		browse_button: "" + uploadBTNid + "-btn", // you can pass in id...
		container: document.getElementById(uploadBTNid + '-container'), // ... or DOM Element itself
		url: '/admin/save/slides_form/upload',
		flash_swf_url: '/ui/plupload/js/Moxie.swf',
		silverlight_xap_url: '/ui/plupload/js/Moxie.xap',
		multipart_params: {},
		unique_names: true,
		multi_selection: false,
		chunk_size: '5mb',
		filters: {
			//max_file_size: '30mb',
			mime_types: [//{title: "Image files", extensions: "jpg,gif,png,jpeg,giff"},
			]
		},
		
		init: {
			PostInit: function () {
				//document.getElementById('filelist').innerHTML = '';
				
				//uploader.start();
				
				/*
				 document.getElementById('uploadfiles').onclick = function() {
				 
				 return false;
				 };
				 */
				
			}, BeforeUpload: function (up, file) {
				//up.settings.multipart_params["candidate_ID"] = $("#ID").val();
				$("#" + uploadBTNid + '-progress').show();
				up.settings.url = '/admin/save/slides_form/upload?slideID='+_ID+"&folder=slides/" ;
				
			}, FileUploaded: function (up, file) {
				$("#" + uploadBTNid + '-progress').hide();
				
				$("#"+ uploadBTNid + "").val(file.target_name);
				var $preview = $("#" + uploadBTNid + '-preview')
				
				var width = $preview.attr("data-width");
				var height = $preview.attr("data-height");
				
				$preview.html('<img src="/media/slides/' + file.target_name + '" style="max-width:' + width + 'px;max-height:' + height + 'px;"  />');
				
				
				//console.log(file.target_name)
				//console.log("#advert-"+advertID+"-filename")
				//console.log($("#advert-"+advertID+"-filename").length); 
				/*
				
				var cat_ID = $("#" + uploadBTNid).closest("article.advert-panel").attr("data-catID");
				
				
				*/
				
				getImagePreviewData();
				
			}, FilesAdded: function (up, files) {
				plupload.each(files, function (file) {
					//document.getElementById('filelist').innerHTML = '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
					//$(upload_btn_id + '-progress').show();
					up.start();
				});
			},
			
			UploadProgress: function (up, file) {
				//document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
				
				//$("#progress")
				$("#" + uploadBTNid + '-progress .progress-bar').css("width", file.percent).text(file.percent + "%");
				
			},
			
			Error: function (up, err) {
				$("#" + uploadBTNid + '-progress').hide();
				//document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
			}
		}
	});
	
	uploader.init();
	
}
