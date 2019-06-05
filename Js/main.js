lightbox.option({
  'maxWidth': 1200,
  'maxHeight': 600,
})

/*
$('#search').hideseek();
*/

$('input').on('keyup', function(event) {
  var $variable = $(this).val().toLowerCase();
  console.log($variable);

  $('.galleryContainer a').css('display', 'none');

  $('.galleryContainer a').each(function(index, value) {
    var $title = $(this).attr('data-title').toLowerCase();
    console.log($title);
    if ($title.includes($variable)) {
      $(this).css('display', 'inline');
      $('.galleryContainer').prepend(this);
    }});

 // '''Lines of code to optimize.'''
  $('.photo').remove();
  $('.galleryContainer a').css('margin', '1rem');
});
