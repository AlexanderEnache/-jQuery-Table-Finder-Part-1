
"use strict"

class reserved{
	
	
	
}

class available{
	
	
	
}

$(document).ready(function () {
	
	console.log("sfwv");
	
	$(".table").addClass("available");

	$(".close").on("click", function(e){
		
		$(".forum").css("display", "none");
		
		console.log("close");
		
	});
	
	$(".table").on("click", function(e){
		
		$(e.target).removeClass("available").addClass("reserved");
		$(e.target).css("background-color", "#ADAAAA");
		
		$(".submit").on("click", function(e){
			
			$(".forum").css("display", "none");
			
		});
		
	});
	
});