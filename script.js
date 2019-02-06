
"use strict"

//<<<<<<< HEAD
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
	
//=======
$(document).ready(function () {
	
	console.log("sfwv");

//>>>>>>> parent of baf63cc... def
	$(".close").on("click", function(e){
		
		$(".forum").fadeOut(1000);
		
	});
	
//<<<<<<< HEAD
	$(".table").on("click", function(e){
		
		$(".forum").fadeIn(1000);
		
		$(".tableNum").html("Table number : " + e.target.id);
		
		$(".submit").on("click", function(er){
			
			$(e.target).removeClass("available").addClass("reserved");
			
			$(".forum").fadeOut(1000);
			
			let id = Number(e.target.id);
			
			tabs[id - 1] = new Reservation($(".name").val(), $(".phone").val(), $(".num").val());
			
		});
//=======
	$(".submit").on("click", function(e){
		
		;
//>>>>>>> parent of baf63cc... def
		
	});
	
	let offHover = true;
	let offTable = true;
	let id;
	
	$(".table").on("mouseenter", function(e){
		
		let id = Number(e.target.id);
		
		if(e.target.classList[1] == "reserved"){
			
			//offTable = false;
			
			$("#h"+e.target.id).html(`Name: ${tabs[id-1].name}<br>Number of guests ${tabs[id-1].num}`);
			
			$("#h"+e.target.id).css("display", "block");
		
		}
		
	});
	
	$(".table").on("mouseout", function(e){
		
		//$("#"+e.target.id).html(e.target.id);
		id = e.target.id;
		
		//offTable = true;
		
		//console.log(offTable);
		
		$("#h"+id).css("display", "none");
		
		//Off();
		
	});
	
	/* $(".hovered").on("mouseenter", function(e){
		
		offHover = false;
		
	});
	
	$(".hovered").on("mouseout", function(e){
			
		//$("#"+e.target.id).html(e.target.id);
		
		offHover = true;
		
		console.log("sadfghjk"+offHover);
		
		Off();
		
	});
	
	function Off(){
		
		console.log("Shit");
		
		setTimeout(function(){
			
			if(offHover && offTable){
				
				$(".hovered").css("display", "none");
				
			}
			
		}, 750);
	  
	} */
	
});

});

});














\