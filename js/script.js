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