jQuery.noConflict();
jQuery(document).ready(function ($){

    // hide
    $("#btn-hide").click(function (){
        $("#image-id").hide(function (){
            console.log("Images hide");
        })
    });

    // show
    $("#btn-show").click(function () {
        $("#image-id").show(function () {
            console.log("Image show");
        })
    });


    // toggle()- Hide and show 
    $("#btn-toggle").click(function (){
        $("#image-id").toggle(2000, function () {     // time set - 2000 ms
            console.log("Hide and Show ");
        })
    });

    // fadeOut()
    $("#btn-fadeout").click(function () {           
        $("#image-id").fadeOut(1000, function () {  // time set - 2000 ms
            console.log("Fade Out")
        })
    });

    // fadeIn()
    $("#btn-fadein").click(function () {
        $("#image-id").fadeIn(1000, function () {    // time set - 2000 ms
            console.log("Fade in")
        })
    });

    // fadeToggle()
    $("#btn-fadetoggle").click( function () {
        $("#image-id").fadeToggle(1000, function () {    // time set - 2000 ms
            console.log("Fade toggle")
        })
    });

    // fadeTo()
    $("#btn-fadeto").click( function () {
        $("#image-id").fadeTo(1000, 0.5, function(){    //visibility set 0.5
            console.log("Fade to")
        })
    })

    $("p").click(function(){
        $("#p-id").fadeToggle(1000, function () {
            console.log("Text work")
        })
    })
});