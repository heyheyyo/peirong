$(document).ready(function(){
	$('.skill-detail, .education-detail, .expect-job-detail, .language-detail, .project-detail').hide();


	$('.skill-top').click(function(){		
		$(this).parent().find('.skill-detail').slideToggle();

	});

	$('.education-top').click(function(){
		$(this).parent().find('.education-detail').slideToggle();
	});

	$('.expect-job-top').click(function(){
		$(this).parent().find('.expect-job-detail').slideToggle();
	});

	$('.language-top').click(function(){
		$(this).parent().find('.language-detail').slideToggle();
	});

	$('.project-top').click(function(){
		$(this).parent().find('.project-detail').slideToggle();
	});

});
