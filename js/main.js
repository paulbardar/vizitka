;(function($){

	$(window).load(function(){

		var acc = document.getElementsByClassName("ba-accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].onclick = function(){
				this.classList.toggle("active");

				this.nextElementSibling.classList.toggle("show");
			}
		}

	})

	 var body = document.body,
        btn = body.querySelector('.ba-toggle'),
        overlay = body.querySelector('.ba-overlay');

    btn.onclick = function(){
    	body.classList.toggle('ba-menu-open');
    }
    overlay.onclick = function(){
    	body.classList.toggle('ba-menu-open');
    }

    $('.ba-slider').slick({
    	arrows: false,
    	dots: true,
    	infinite: true,
		prevArrow: false,
  		nextArrow:false,
  		autoplay: true,
  		autoplaySpeed: 6000
    });


})(jQuery);
