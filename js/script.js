  $(document).ready(function () {
    $('#select').css('color', 'gray');
    $('#select').change(function () {
      var current = $('#select').val();
      if (current != 'null') {
        $('#select').css('color', 'black');
      } else {
        $('#select').css('color', 'gray');
      }
    });
  });

  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 0,
          nav: false,
          loop: false
        }
      }
    })
  });


  $(document).ready(function () {
    $("#mmenu").mmenu({
      "slidingSubmenus": false,
      navbar: {
        title: false
      }
    });

    var api = $("#mmenu").data( "mmenu" );
    api.bind('open:finish', function () {
      $('.hamburger').addClass('is-active');
    }).bind('close:finish', function(){
        $('.hamburger').removeClass('is-active');
      });
  });