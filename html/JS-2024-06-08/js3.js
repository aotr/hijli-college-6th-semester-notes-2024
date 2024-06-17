
document.querySelector("#myButton").addEventListener("click", function () { 
    document.querySelector("#header").innerHTML = "Hello, World!";
    document.querySelector("#header").style.color = "red";
});




$(".myButton").click(function () { 
    $("#header").html("Hello!").css('color', 'green');
});


$("button[name='myButton']").click( function () {
    $("#header").html("Hijli College!").css('color', 'blue');
});
