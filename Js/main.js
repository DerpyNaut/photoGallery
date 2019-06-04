lightbox.option({
  'maxWidth': 1200,
  'maxHeight': 600,
})

/*
$('#search').hideseek();
*/

$('input').on('keyup', function(event) {
  var $variable = $(this).val();
  console.log($variable);

  $('a').hide();

  $('a').each(function (index, value) {
    var $title = $(this).attr('data-title');
    console.log($title);
    if (($title).includes($variable)) {
      $(this).show();
    }
  });
});
