jQuery.noConflict();
jQuery(document).ready(function ($) {
    // Mouse Events- [click(), dblclick(), mouseevent(), mouseleave()]
    // Event(click())
    $("p").click(function (){
        console.log("Clicked");
    });

    //  Event(dblclick())
    $("p").dblclick(function (){
        console.log("Double Clicked");
    });

    //  Event(mouseenter())
    $("p").mouseenter(function (){
        console.log("Mouse Enter");
    });
    //  Event(mouseleave())
    $("p").mouseleave(function (){
        console.log("Mouse Leave");
    });

    // keyboard Events- [keypress(), keydown(), keyup()]

    // keypress()
    $("#name-id").keypress(function () {
        console.log("Key Pressed");
    });
    // keypress()
    $("#name-id").keydown(function () {
        console.log("Key Down");
    });
    // keypress()
    $("#name-id").keyup(function () {
        console.log("Key Up");
    });

    // Form Events[focus(), blur(), submite()]
    // focus()
    $("#fname").focus(function () {
        console.log("Focus form");
    });

    // blur()
    $("#fname").blur(function () {
        console.log("Blur Form");
    });

    // submit()
    $("#form-id").submit(function (e) {
        console.log("Form submitted");
        e.preventDefault();    // pare jano reload na nai tai 
    });
})