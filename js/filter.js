// JavaScript source code
$(function () {

    $("#filter li").click(function () {

        var catagory = $(this).html();
        $("#filter li").removeClass("active");
        $(this).addClass("active");

        $("#portfolio li").hide();

        $("#portfolio li").each(function () {
            if ($(this).hasClass(catagory)) {
                $(this).fadeIn();
            }
            
        });
        

    });


});





