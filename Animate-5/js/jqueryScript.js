jQuery.noConflict();
jQuery(document).ready(function ($){

    // Animate
    $("#btn-animate").click(function (){
        $("#image-id").animate({left: "+=60"}, 1000, function(){
            console.log("Image Animate");
        })
    })


    // Set and Get text
    $("#btn-setText").click(function (){
        $("p").text("I love you too");      // set text()
    })


    // Ajax(plan text)
    $("#btn-ajax").click(function () {
        console.log("button clicked");

        // create XMLHttpRequest Object
        const xhr = new XMLHttpRequest()

        // initalize create request
        xhr.open("GET", "data.txt", true);

        // Handling server response
        xhr.onload = function () {
            // response create funcation

            if (xhr.status === 200){
                let x = xhr.responseText
                console.log(x)
                 $("p").text(x);      // set text()
            }
            else{
                console.log("Oh No your request failed")
            }

        };
        // request send
        xhr.send()
    })
})