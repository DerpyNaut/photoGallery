lightbox.option({
  'maxWidth': 1200,
  'maxHeight': 600,
});

/*
$('#search').hideseek();
*/

$('input').on('keyup', function(event) {
  var $variable = $(this).val().toLowerCase();
  console.log($variable);

  $('.galleryContainer .photo').hide();

  $('.galleryContainer .photo a').each(function(index, value) {
    var $title = $(this).attr('data-title').toLowerCase();
    console.log($title);
    if ($title.includes($variable)) {
      $(this).parent().show();
    }}
  );
});
