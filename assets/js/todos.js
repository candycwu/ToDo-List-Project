//check off selected todo
$("ul").on("click", "li", function() {
    //toggle the class only on the clicked one on and off
    $(this).toggleClass("completed"); 
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    //this refers to span selected
    $(this).parent().fadeOut(500, function(){
        //this refers to li of the span selected
        $(this).remove(); 
    });
    //to stop event bubbling
    event.stopPropagation(); 
});


$("input[type='text']").keypress(function(){
    if(event.which === 13){
        //grabbing todo text from input
        var todoText = $(this).val(); 
        //setting the input to nothing after enter is presssed
        $(this).val(""); 
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>"); //create a new li and add to ul using append
    }
});

//.append() method take a string of HTML and it will then add it to whatever we select.



//select icon to toggle on off of input
$(".fa-pencil-square-o").click(function(){
    $("input[type='text']").fadeToggle();
})