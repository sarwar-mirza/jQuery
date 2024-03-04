jQuery.noConflict();
jQuery(document).ready(function ($) {
    // slide up
    $("#btn-slideup").click(function (){
        $("#image-id").slideUp(1000, function(){  // visiblity 
            console.log("Slide Up");
        });
    });
    // slide up
    $("#btn-slidedown").click(function (){
        $("#image-id").slideDown(1000, function(){    // visiblity
            console.log("Slide Up");
        });
    });
    // slide up
    $("#btn-slidetoggle").click(function (){
        $("#image-id").slideToggle(1000,function(){     // visiblity
            console.log("Slide Toggle");
        });
    });
})