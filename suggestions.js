function goingHome() {
	
}

function main() {
	$(".message-dropdown-content").hide();
	$(".home-button").on("click", function() {
		window.location.href = "index.html";
	});
	$(".suggestion-button").on("click", function() {
		window.location.href = "suggestions.html";
	});
	$(".dropdown-button").on("click", function() {
		$(".message-dropdown-content").slideToggle(0);
	});
	
}

$(document).ready(main);