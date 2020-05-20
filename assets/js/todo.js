//check of specific ToDo by clicking
$("ul").on("click", "li", function(){
    //if li  is gray
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    //else
    else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});

//click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

$("Input[type='text'").keypress(function(event){
     if (event.which === 13){
      //grabing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      //create a new li and add to ul
      $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li> ")
    }

});














