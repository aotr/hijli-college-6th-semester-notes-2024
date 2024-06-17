

$("#myButton").click(function () { 
    $("#header").html("Hello, World!").css('color', 'red');
});



$(".myButton").click(function () { 
    $("#header").html("Hello!").css('color', 'green');
});


$("button[name='myButton']").click( function () {
    $("#header").html("Hijli College!").css('color', 'blue');
});
