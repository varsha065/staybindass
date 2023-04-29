$('#click').click(function () {
  $('#kidney').addClass('zoomanimate');
  $('#click').hide()
  setTimeout(function () {
    $('#germs').css("display","block").addClass('fade-in')
  }, 1700);
  setTimeout(function () {
    $('#germs').addClass('zoomin');
  }, 1800);
});




