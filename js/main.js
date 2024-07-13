$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});


// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
const slider = document.querySelector('.slider');
let autoSlideInterval;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Automatic slide change
startAutoSlide();

// Event listeners for arrow buttons
document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
});

// Pause automatic slide change when hovering over the slider
slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        var formData = new FormData(this);

        fetch('contactme.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            let message;
            if (data.includes('Thanks! We will contact you soon.')) {
                message = 'Thanks! We will contact you soon.';
            } else {
                message = 'Error sending message! Please try again.';
            }
            $('#statusMessage').text(message);
            $('#statusModal').modal('show');
        })
        .catch(error => {
            $('#statusMessage').text('Error sending message! Please try again.');
            $('#statusModal').modal('show');
        });
    });
});

});

