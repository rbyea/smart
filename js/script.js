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
    $('.btn-top').on('click', function () {
      $('.modall-callback').toggleClass('modal_visible');
    });
    $('.modal-content_close').on('click', function () {
      $('.modall-callback').toggleClass('modal_visible');
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
    $('#btn-green').on('click', function () {
      $('.modall-callback').toggleClass('modal_visible');
    });
    $('.header-menu__close').on('click', function () {
      $('.modall-callback').toggleClass('modal_visible');
    });
  });