// var $left = $('.sentance__half.left .inner');
// var $right = $('.sentance__half.right .inner');
// var $dot = $('.dot');
// var rightW = $right.width();
// var mainDuration = 1.2;

// var tl = new TimelineLite({delay: 1, paused: false});

// $(document).on('keyup', keyup);

// tl
//   .to($left, mainDuration, {xPercent: 101, ease: Expo.easeIn})
//   .to($right, mainDuration, {xPercent: -101, ease: Expo.easeIn}, '-=' + mainDuration)
//   .to($dot, mainDuration, {x: -rightW, ease: Expo.easeIn}, '-=' + mainDuration)
//   .to($dot, 0.2, {y: -16})
//   .to($dot, 0.6, {y: 0, ease: Bounce.easeOut})
//   .to($dot, 1, {x: -rightW + 15}, '-=0.8')

// function keyup(e) {
//   var key = e.keyCode;

//   if(key === 32) tl.restart();
// }

/// Scroll Reveal
window.sr = ScrollReveal();
window.ds = ScrollReveal();
// sr.reveal('.container', { duration: 2000, scale: 1, distance: '30px' });

sr.reveal('header', { duration: 1500, scale: 1, distance: '30px' });
sr.reveal('.hero', { duration: 3000, scale: 1, distance: '50px' });

// if (scrollTop==800) {
// 	ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
// 	divreveal();
// }
// as a DOM node...
var footer = $('footer');
var sections = $('.section');
// sr.reveal('div', { container: footer });
// sr.reveal('div', { container: sections });

// $( 'body' ).scroll(function() {
//   sr.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
// });
function divreveal() {
	ds.reveal('div', { container: sections, duration: 2000, scale: 1, distance: '30px' });
	ds.reveal('div', { container: footer, duration: 2000, scale: 1, distance: '30px' });
	// ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
}

$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 300) {
        // If the function is only supposed to fire once
        divreveal();

        // Other function stuff here...
    }
});




// interval and custom config passed to reveal 
// sr.reveal('section', { duration: 2000 }, 1000);