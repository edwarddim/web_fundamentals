// WHAT IS JQUERY?
// jQuery a Javascript Library 

// EVENT LISTENERS
$(document).ready(function(){
    console.log("DOCUMENT IS READY")

    // EVENT LISTENERS
    $("#title").hover(function(){
        // ANIMATIONS
        $("h3").fadeToggle()
    })

    // GETTER
    var text = $("#text_body").html()
    // console.log("HTML FROM TEXT_BODY: ", text)
    // SETTER
    $("#text_body").html("<h4>THIS IS THE REPLACEMONT HTML</h4>")


    // $(this)
    $("h3").click(function(){
        $(this).hide()
    })

})

