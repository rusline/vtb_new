$(function() {
	
	//placeholder
	if (!Modernizr.input.placeholder) {
		$('input[placeholder], textarea[placeholder]').placeholder();
	}
	
	$("input.phonenumber").mask("+9 (999) 999-99-99");
	
	// Clone
	$('.add1').click(function() {
		$(".clone1 .line").clone().appendTo(".clone-add1");
		return false;
	});
	$('.add2').click(function() {
		$(".clone2 .line").clone().appendTo(".clone-add2");
		return false;
	});
	
	
	//to top
	$('#toTop').click(function() {
		$('html,body').animate({scrollTop:0},800);
		return false;
	});
	
	// Fancy
	$('.fancybox').fancybox({
		padding: 0,
		openEffect  : 'none',
		closeEffect : 'none',
		closeBtn: false,
		helpers : {
			 title : {
            type : 'inside'
        }
		}
	});
	
	$('.fancybox-media').fancybox({
		padding: 0,
		openEffect  : 'none',
		closeEffect : 'none',
		closeBtn: false,
		helpers : {
			media : {},	
			title : {
        type : 'inside'
      }
		}
	});
	
	
		
	
});