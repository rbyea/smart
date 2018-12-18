$(document).ready(function () {
  $(".btn-top").on("click", function () {
    $(".modal-callback").toggleClass("modal_visible");
  });
  $('.modal-content_close').on('click', function () {
    $('.modal-callback').toggleClass('modal_visible');
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
    $('.modal-callback').toggleClass('modal_visible');
  });
  $('.modal-content__close').on('click', function () {
    $('.modal-callback').toggleClass('modal_visible');
  });
});

$(document).ready(function () {
  $('.header-content__btns_transparent').on('click', function () {
    $('.modal-join').toggleClass('join-visible');
  });
  $('.modal-join_close').on('click', function () {
    $('.modal-join').toggleClass('join-visible');
  });
  $('#btn-join').on('click', function () {
    $('.modal-cont-join').toggleClass('modal-cont-join-shadow');
  });
  $('.modal-cont_close').on('click', function () {
    $('.modal-cont-join').toggleClass('modal-cont-join-shadow');
  });
});