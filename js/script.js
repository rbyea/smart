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