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
        $(".owl-carousel").owlCarousel({
            loop: true, //Зацикливаем слайдер
            margin: 50, //Отступ от элемента справа в 50px
            nav: true, //Отключение навигации
            autoplay: false, //Автозапуск слайдера
            smartSpeed: 1000, //Время движения слайда
            responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              1000: {
                items: 4
              }
            }
        });
        $(window).resize(function () {
          if ($(window).width() > 768) {
            owlProjects.trigger('destroy.owl-carousel');
          }
        });
      });