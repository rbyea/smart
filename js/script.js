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

    $('.feedback-content__blank').on('click', function () {
      $('.add-link').toggleClass('add-link__visible')
    });

  });

  $(document).ready(function () {

    $('.feedback-content__blank').on('click', function () {
      $('.add-blank_link').toggleClass('add-blank_visible')
    });

  });

  $(document).ready(function () {
        $(".slider1").owlCarousel({
            loop: true, //Зацикливаем слайдер
            mouseDrag: false,
            margin: 30, //Отступ от элемента справа в 50px
            nav: true, //Отключение навигации
            autoplay: false, //Автозапуск слайдера
            smartSpeed: 1000, //Время движения слайда
            navText: ["<img src='img/work/arrow-left.png'>", "<img src='img/work/arrow-right.png'>"],
            responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              1000: {
                items: 2
              },
              1204: {
                items: 2
              },
              1205: {
                items: 4
              }
            }
        });
  });

  $(document).ready(function () {
        $(".slider2").owlCarousel({
            loop: false, //Зацикливаем слайдер
            mouseDrag: false,
            margin: 580, //Отступ от элемента справа в 50px
            nav: true, //Отключение навигации
            autoplay: false, //Автозапуск слайдера
            smartSpeed: 1000, //Время движения слайда
            navText: ["<img class='images-slide' src='img/reviews/arrow-left-green.png'>", "<img class='images-slide2' src='img/reviews/arrow-right-green.png'>"],
            responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
              0: {
                items: 1,
                nav: true,
                margin: 50,
                loop: true
              },
              320: {
                items: 1,
                nav: true,
                margin: 250,
                loop: true
              },
              600: {
                items: 1,
                nav: true,
                margin: 10,
                loop: true
              },
              1000: {
                items: 1,
                nav: true,
                margin: 10,
                loop: true
              },
              1004: {
                items: 1,
                nav: true,
                margin: 10,
                loop: true
              },
              1127: {
                items: 2,
                nav: true,
                margin: 10,
                loop: true
              },
              1230: {
                items: 4,
                nav: false
              }
            }
        });
  });

$(document).ready(function () {
  $(".slider3").owlCarousel({
    loop: true, //Зацикливаем слайдер
    autoplay: false, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    navText: ["<img class='about-arrow__left' src='img/about/slider/arrow-left.png'>", "<img class='about-arrow__right' src='img/about/slider/arrow-right.png'>"],
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
        nav: true,
        margin: 10
      },
      480: {
        items: 2,
        nav: true
      },
      680: {
        item: 3,
        nav: true,
      },
      975: {
        items: 4,
        nav: true,
        margin: 10
      },
      1000: {
        items: 4,
        nav: true,
        margin: 10
      },
      1204: {
        items: 4,
        nav: true,
        margin: 30
      },
      1205: {
        items: 4,
        margin: 30,
        nav: true,
      },
      1255: {
        items: 5,
        margin: 30,
        nav: true,
      }
    }
  });
});

  $(document).ready(function () {
    $('.btn-top').on('click', function () {
      $('.modal-callback').toggleClass('mdl_visible');
    });
    $('.close').on('click', function () {
      $('.modal-callback').toggleClass('mdl_visible');
    });
    $('.btn-join').on('click', function () {
      $('.modal-open').toggleClass('join-visible');
    });
    $('.modal-join_close').on('click', function () {
      $('.modal-open').toggleClass('join-visible');
    });
  });

  $(document).ready(function () {
    $('#humburger-btn').on('click', function () {
      $('#header-menu__mob').toggleClass('mobile-menu_visible');
    });
    $('.header-menu__close').on('click', function () {
      $('#header-menu__mob').toggleClass('mobile-menu_visible');
    });
  });

  $(document).ready(function () {
    $('.btn-mob').on('click', function () {
      $('.modall').toggleClass('modall-shadow');
    });
    $('.modall-close').on('click', function () {
      $('.modall').toggleClass('modall-shadow');
    });
    
    $('#btn-join').on('click', function () {
      $('.modal-open').toggleClass('join-visible');
    });
    $('.modal-content__close').on('click', function () {
      $('.modal-open').toggleClass('join-visible');
    });
  });

  $(document).ready(function () {
    $("img").lazyload({ effect: "fadeIn" });
    $("a[rel='colorbox']").colorbox({
      maxWidth: "90%",
      maxHeight: "90%",
      opacity: "0.7",
      current: "Документ"
    });
  });

    $(document).ready(function () {
      $('.btn-about').on('click', function () {
        $('.modal-calback').toggleClass('mdl_visible');
      });
      $('.modal-about_close').on('click', function () {
        $('.modal-calback').toggleClass('mdl_visible');
      });

      $('.btn-green_mobl').on('click', function () {
        $('.about-mob').toggleClass('about-mob-shadow');
      });
      $('.modal-mob_close').on('click', function () {
        $('.about-mob').toggleClass('about-mob-shadow');
      });

      $('.btn-about-two').on('click', function () {
        $('.modal-about-two').toggleClass('modal-about-two-shadow');
      });
      $('.modal-about_close').on('click', function () {
        $('.modal-about-two').toggleClass('modal-about-two-shadow');
      });
    });
