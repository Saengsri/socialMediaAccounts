function main() {
	$(".description").hide();
	$(".learn-more-button").on("click", function(){
		$(this).next().slideToggle(400);
		$(this).toggleClass("active").next();
	});
}
  $(document).ready(main);
	
