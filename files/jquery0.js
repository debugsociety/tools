$(function() {
  $('.noStyleDebug').parent().toggle();
  $('.styleChanger').click(function() {
    var style = 'files/' + $(this).attr('id') + '.css?' + $.now();
    $('link[rel="stylesheet"]:first').attr({href : style});
  });
  $('.styleDebug').click(function() {
    var debug = 'files/' + $(this).attr('id') + '.css?' + $.now();
    $('link[rel="stylesheet"]').append('<link rel="stylesheet" type="text/css" href="' + debug + '">');
    $(this).parent().toggle();
    $('.noStyleDebug').parent().toggle();
  });
    $('.noStyleDebug').click(function() {
      $(this).parent().toggle();
      $('.styleDebug').parent().toggle();
      $('link[rel="stylesheet"]:last').remove();
    });
});
