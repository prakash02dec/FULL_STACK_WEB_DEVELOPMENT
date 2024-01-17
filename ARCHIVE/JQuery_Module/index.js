$(document).ready(function (){});


$("h1").css("color","red");

console.log($("h1").css("color"));

$("h1").addClass("big-title margin-50");

$("h1").hasClass("margin-50");


$("h1").text("bye");

$("button").html("<em>click me</em>");

console.log($("img").attr("src", "www.yahoo.com"));


$("h1").click(function(){
    $("h1").css("color" , "purple");
});

$("button").click(function(){
    $("h1").css("color", "black");
});

$("input").keydown(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color" , "purple");
} );


// add element then before after prepend append
// will remove will remove the specified element
$("button").on("click" , function(){
    $("h1").toggle(); 
    // toggle show fadeOut fadeIn fadeToggle slideUp slideDown slideToggle 
});

$("button").on("click" , function(){
    $("h1").animate({margin : "20%"}); 
});