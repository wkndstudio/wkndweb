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
// window.sr = ScrollReveal();

// var sections = document.getElementsByClassName('anim');

// function divreveal() {
// 	sr.reveal('div', { container: sections, duration: 2000, scale: 1, distance: '30px' });
// 	// sr.reveal('div', { container: footer, duration: 2000, scale: 1, distance: '30px' });
// 	// ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
// }
//         sr.reveal('header', { duration: 2000, scale: 1, distance: '30px' });
//         sr.reveal('.hero', { duration: 2000, scale: 1, distance: '50px' });
//         		// divreveal();
//     	sr.reveal('.section div', { container: sections, duration: 2000, scale: 1, distance: '30px' });


//Smooth Scroll & Remove irrevelant links

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// interval and custom config passed to reveal 
// sr.reveal('section', { duration: 2000 }, 1000);


function test() {
 let pretext = ['we bring', 'we love making ', 'we are the music to your', 'we are the music to your'];
 let text = ['magic.', 'things.', 'mixtape.', 'mixtape.'];
 let maxIndex = (pretext.length - 1);
 let cIndex = 0;

 setInterval(function() {
  if (cIndex == maxIndex)
      cIndex = 0;

      $("#pretext").fadeIn(800);
      $('#pretext').text(pretext[cIndex]);
      $("#text").delay(200).fadeIn(1200);
      $('#text').text(text[cIndex]);

      $("#pretext").fadeOut(1200);
      $("#text").fadeOut(1600);
  cIndex++;
}, 5000);

}

test();