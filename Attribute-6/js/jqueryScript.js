jQuery.noConflict();
jQuery(document).ready(function ($){

    // Attribute
    $("#btn-attrvalue").click(function () {

        // GET attribute new data
        let set_oldAttribute = $("#name").attr("data-sid");
        console.log("Old Data:", set_oldAttribute);

        // set attribute
        $("#name").attr("data-sid", "09");
        console.log("set date")

        // GET attribute new data
        let set_newAttribute = $("#name").attr("data-sid");         //SET:  attr("selector", "action")
        console.log("New Data:", set_newAttribute);
    })

    // Set images src Attribute
    $("#btn-car-attribute").click(function () {
        $("#image-car-id").attr("src", "images/m4.jpg");    //SET:  attr("selector", "action")
    })


    // Apply CSS- addClass(), removeClass(), toggleClass()
    // addClass()
    $("#btn-addclass").click(function () {
        $("p").addClass("myclass");
    });

    // removeClass()
    $("#btn-removeclass").click(function () {
        $("p").removeClass("myclass")
    });

    // toggleClass()
    $("#btn-toggleclass").click(function () {
        $("p").toggleClass("myclass")
    });

});