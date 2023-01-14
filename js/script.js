$(function() {

	$('.header_menu_mnu').click(function(event){
		$('.header_menu_mnu, .header_menu_link').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(document).mousedown(function(e) {
		//при клике вне кнопки меню, самого меню и его потомков
		if (!$('.header_menu_mnu,.header_head_menu').is(e.target) && $('.header_menu_mnu').has(e.target).length === 0) {
		  $('.header_menu_mnu, .header_menu_link').removeClass('active');
		  $('.menu').hide();
		}
	  });
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

});
