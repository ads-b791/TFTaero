"use strict"


const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const mobileHeader = document.querySelector('.header');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	mobileHeader.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});


$(function () {

	$('.fly-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 2,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/fly-slider/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/fly-slider/next.svg" alt=""></button>',
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	$('.reviews__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		prevArrow: '<button type="button" class="reviews-prev"><img src="img/fly-slider/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="reviews-next"><img src="img/fly-slider/next.svg" alt=""></button>',
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});



});