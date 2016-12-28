function readfilter() {
	var checkboxes = document.getElementsByName("checkbox");
	var checkedCheckBoxes = [];
	if (checkboxes.length > 0) {
		for (var i = 0; i<checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				checkedCheckBoxes.push(checkboxes[i].value);
			}
		}
	}
	return checkedCheckBoxes;
}

function updateSections(checkedBoxes) {
	var left = document.getElementById("float-left");
	var middle = document.getElementById("center");
	var right = document.getElementById("float-right");
	
	if (checkedBoxes.length === 3) {
		$("#float-left").css("left", "2.5%");
		$("#float-left").css("width", "30%");
		left.innerHTML = checkedBoxes[0];
		
		$("#center").css("left", "35%");
		$("#center").css("width", "30%");
		middle.innerHTML = checkedBoxes[1];

		$("#float-right").css("left", "67.5%");
		$("#float-right").css("width", "30%");
		right.innerHTML = checkedBoxes[2];	
	} else if (checkedBoxes.length === 2) {
		middle.innerHTML = "";

		$("#float-left").css("left", "10%");
		$("#float-left").css("width", "35%");
		left.innerHTML = checkedBoxes[0];
		
		$("#float-right").css("left", "55%");
		$("#float-right").css("width", "35%");
		right.innerHTML = checkedBoxes[1];
	} else  if (checkedBoxes.length === 1){
		left.innerHTML = "";
		right.innerHTML = "";

		$("#center").css("left", "25%");
		$("#center").css("width", "50%");
		middle.innerHTML = checkedBoxes[0];
	} else {
		console.log(middle);
	}
	updateContent(checkedBoxes);
	
}

function updateContent(checkedBoxes) {
	var facebook_status = false;
	var twitter_status = false;
	var instagram_status = false;
	var contents = [];
	
	for (var x = 0; x < checkedBoxes.length; x++) {
		if (checkedBoxes[x] === "Facebook") {
			facebook_status = true;
			contents.push("content-facebook");
		} else if (checkedBoxes[x] === "Twitter") {
			twitter_status = true;
			contents.push("content-twitter");
		} if (checkedBoxes[x] === "Instagram") {
			instagram_status = true;
			contents.push("content-instagram");
		}
	}

	if (facebook_status === false) {
		$("#content-facebook").hide();
	} else {
		$("#content-facebook").show();
	}
	if (twitter_status === false) {
		$("#content-twitter").hide();
	} else {
		$("#content-twitter").show();
	}
	if (instagram_status === false) {
		$("#content-instagram").hide();
	} else {
		$("#content-instagram").show();
	}
	
	if (contents.length === 3) {
		var left_column = document.getElementById(contents[0]);
		var middle_column = document.getElementById(contents[1]);		
		var right_column = document.getElementById(contents[2]);
		
		left_column.style.left = "calc(10%/4)";
		left_column.style.width = "30%";
		
		middle_column.style.left = "calc(10%/2 + 30%)";
		middle_column.style.width = "30%";
		
		right_column.style.left = "calc(10%/4 * 3 + 60%";
		right_column.style.width = "30%";		
		
		
	} else if (contents.length === 2) {
		var left_column = document.getElementById(contents[0]);
		var right_column = document.getElementById(contents[1]);
		
		left_column.style.left = "10%";
		left_column.style.width = "35%";
		
		right_column.style.left = "55%";
		right_column.style.width = "35%";
		
		
	} else if (contents.length === 1) {
		var column = document.getElementById(contents[0]);
		column.style.left = "25%";
		column.style.width = "50%";
	} 
}


function messaging() {
	$(".message-content").hide();
	$(".dropdown-button").on("click", function() {
		console.log($(this));
		$(this).next().slideToggle(0);
	});
}

function main() {
	$(".dropdown-content").hide();
	$(".message-dropdown-content").hide();
	$(".home-button").on("click", function() {
		window.location.href = "index.html";
	});
	$(".suggestion-button").on("click", function() {
		window.location.href = "suggestions.html";
	});
	$("#dropdown-button-2").on("click", function() {
		$(this).next().slideToggle(0);
		document.getElementById("dropdown-button-2").style.opacity="1";
	});
	$(".submit-button").on("click", function() {
		checkedBoxes = readfilter();
		if (checkedBoxes.length > 0) {
			updateSections(checkedBoxes);
		} else {
			var resubmitBox = [];
			if (document.getElementById("float-left").innerHTML != "") {
				resubmitBox.push(document.getElementById("float-left").innerHTML);
			}
			if (document.getElementById("center").innerHTML != "") {
				resubmitBox.push(document.getElementById("center").innerHTML);
			}
			if (document.getElementById("float-right").innerHTML != "") {
				resubmitBox.push(document.getElementById("float-right").innerHTML);
			}	
			var filterBox = document.getElementsByName("checkbox");
			for (var x = 0; x < resubmitBox.length; x++) {
				for (var y = 0; y < filterBox.length; y++) {
					if (resubmitBox[x] === filterBox[y].value) {
						filterBox[y].checked = true;
					}
				}
			};
		};
		document.getElementById("dropdown-button-2").style.opacity="0.8";
	
		$(".dropdown-content").hide();
	});
	

	$(".dropdown-button").on("click", function() {
		$(".message-dropdown-content").slideToggle(0);
	});
	
	
}

$(document).ready(main);
