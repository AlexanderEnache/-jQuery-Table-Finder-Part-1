
"use strict"

class Reservation{
	
	constructor(name, phone, num){
		
		this.name = name;
		this.phone = phone;
		this.num = num;
		
	}
	
}

$(document).ready(function () {
	
	let tabs = new Array(9);
	
	$(".table").addClass("available");
	
	$(".close").on("click", function(e){
		
		$(".forum").fadeOut(1000);
		
	});
	
	$(".table").on("click", function(e){
		
		$(".forum").fadeIn(1000);
		
		$(".tableNum").html("Table number : " + e.target.id);
		
		$(".submit").on("click", function(er){
			
			$(e.target).removeClass("available").addClass("reserved");
			
			$(".forum").fadeOut(1000);
			
			let id = Number(e.target.id);
			
			tabs[id - 1] = new Reservation($(".name").val(), $(".phone").val(), $(".num").val());
			$("#h"+e.target.id).prepend(`Name: ${tabs[id-1].name}<br>Number of guests ${tabs[id-1].num}`);
			
		});
		
	});
	
	let offHover = true;
	let offTable = true;
	let id;
	
	$(".table").on("mouseenter", function(e){
		
		let id = Number(e.target.id);
		
		if(e.target.classList[1] == "reserved"){
			
			offTable = false;
			
			$("#h"+e.target.id).css("display", "block");
		
		}
		
	});
	
	$(".hovered").on("mouseenter", function(e){
		
		offHover = false;
		
	});
	
	$(".table").on("mouseout", function(e){
		
		//$("#"+e.target.id).html(e.target.id);
		id = e.target.id;
		
		offTable = true;
		
		//console.log(offTable);
		
	});
	
	$(".hovered").on("mouseout", function(e){
			
		//$("#"+e.target.id).html(e.target.id);
		
		offHover = true;
		
		console.log("sadfghjk"+offHover);
		
	});
	
	$(document).mousemove(function(e){
		
		console.log("Shit");
		
		setTimeout(function(){
			
			if(offHover && offTable){
				
				$(".hovered").css("display", "none");
				
			}
			
		}, 1000)
	  
	});
	
});

















