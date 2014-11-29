$(document).ready(function(){

	//dynamically load content from content.html 
	// intro .main section
	
	// $('.dynamic').load('content/content.html');
	
	// add eventhandler to more link
	
	$('.more').click(function(e){
		e.preventDefault();
		$('.dynamic').load('content/content.html');
		$(this).remove();
	});
	
	
	
	
});

