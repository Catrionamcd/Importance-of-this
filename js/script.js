$(document).ready(function() {
    $(".box").on("click", function() {
        /***
         * When we click on an element that has
         * a 'box'class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var classNames = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // if this object is already red, turn it to black
            $("." + className).css("background-color". "#000")
        } else {
            $("." + boxClass).css("background-color". "#000");
            $("." + className).css("background-color". "red");
        }
    });
});


// $(document).ready(function() {
//     $(".box").on("click", function(){
//         var classNames = $(this).attr("class").split(" ");
//         $("." + className[1].css("background-color", "red"));
//     });
// });

// $('button').mouseenter(function() {
//     $(this).removeClass('makeRed').addClass('makeBlue')
// });

// $('button').mouseleave(function() {
//     $(this).removeClass('makeBlue').addClass('makeRed')
// })