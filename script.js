
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
	
	let id;
	
	$(".table").on("click", function(e){
		
		$(".forum").fadeIn(1000);
		
		$(".tableNum").html("Table number : " + e.target.id);
		
		id = Number(e.target.id);
		
	});
	
	$(".submit").on("click", function(e){
			
		$("#"+String(id)).removeClass("available").addClass("reserved");
			
		tabs[id - 1] = new Reservation($(".name").val(), $(".phone").val(), $(".num").val());
			
		$(".name").val("");
		$(".phone").val("");
		$(".num").val("");
			
		$(".forum").fadeOut(1000);
			
	});
	
	$(".table").on("mouseenter", function(e){
		
		let id = Number(e.target.id);
		
		if(e.target.classList[1] == "reserved"){
			
			let obj = tabs[id-1];
			
			$("#"+e.target.id).prepend(`<div class = "hovered"><p class = "hoverText">Name: ${tabs[id-1].name}<br>Number of guests: ${tabs[id-1].num}</p></div>`);
		
		}
		
	});

	$(".table").on("mouseout", function(e){
		
		$("#"+e.target.id).html(e.target.id);
		
	});
	
});



