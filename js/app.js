$(document).ready(function(){

  //slider
  $('.owl-carousel').owlCarousel({
    mouseDrag: true,
    items: 1,		
  });
  //background water drop effect
  $('#profile').ripples({
    resolution: 512,
    dropRadius: 20,
  });


  //progress bar
  const bars = document.querySelectorAll('.progress');

  bars.forEach(function(bar){
    let percentage = bar.dataset.parcentence;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width = percentage + '%';

  })

  // counter up
  var counted = 0;
  $(window).scroll(function() {

    var oTop = $('.counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      counted = 1;
    }

  });
  // end

  //filtering
  var mixer = mixitup('.portfolio-items');

 

});