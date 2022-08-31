//render icons
feather.replace();

//setup floating input labels in contact form
$(document).ready(function() {
    $(".bm-floating-input-label input, .bm-floating-input-label textarea").focus(function() {
      $(this).parent().addClass('active content')
    })

   $(".bm-floating-input-label input, .bm-floating-input-label textarea").focusout(function() {
      $(this).parent().removeClass('active');
      if(!$(this).val()) $(this).parent().removeClass('content');
    })
})
