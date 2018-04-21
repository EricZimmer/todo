
$("#list").on("click", "span", function(event){
  $(this).parent().fadeOut( 500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});


$("#list").on('click', "li", function(){
  $(this).toggleClass("completed");
});

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("#list").append("<li><span><i class = 'fa fa-trash'></i> </span> " + todoText + "</li>");
  }
});

$("#toggle-form").on("click", function(){
  $("input").fadeToggle();
});