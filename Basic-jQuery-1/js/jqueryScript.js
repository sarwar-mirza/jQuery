// Ex-01

// $("button").click(function(){
//     console.log("Button Clicked")
// });



// Ex-02[ready()]

// $(document).ready(function(){
//     $("button").click(function(){
//         console.log("read-Button Clicked")
//     });
// });


// Ex-03 [noConflict()]

// jQuery.noConflict();
// jQuery(document).ready(function ($) {
//     $("button").click(function (){
//         console.log("noConflict-Button clicked")
//     })
// });



// Ex-04

jQuery.noConflict();
jQuery(document).ready(function ($) {
    // button target
    $("button").click(function (){
        console.log("Element Selector for button");
    });

    // Tag target
    $("p").click(function () {
        // console.log("Element selector for tag");
        alert("Element selector for tag");
    });

    // id target
    $("#btn-id").click(function () {
        console.log("Call this id");
    });
    // class target
    $(".btn-cls").click(function () {
        console.log("Call this class");
    });
})