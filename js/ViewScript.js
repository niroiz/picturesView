// JavaScript source code
$(function () {
    var curre_li;



    $("#search").keyup(function () {

        var current_query = $("#search").val();

        if (current_query != "") {

            $("#portfolio li").hide();

            $("#portfolio li").each(function () {

                var current_keyword = $(this).attr("data-keywords");

                if (current_keyword.indexOf(current_query) >= 0) {
                    $(this).show();
                }

            });
        } else {
            $("#portfolio li").fadeIn();
        }



    });

    $("#portfolio").sortable({
        stop: function () {

            var list_content = $("#portfolio").html();

            $.post("change.php", { list: list_content });


        }
    });

    function setImg(src, id) {
        $("#main").attr("src", src);
        var path = "text/" + id + ".txt";
        $.get(path, function (data) {
            $("#discription p").html(data);
        });
    }

    $("#portfolio img").click(function () {
        var src = $(this).attr("src");
        var id = $(this).attr("id");
        curre_li = $(this).parent();
        setImg(src, id);
        $("#frame").fadeIn(); 
        $("#overlay").fadeIn();
        
    });

    $("#overlay").click(function () {
        $(this).fadeOut();
        $("#frame").fadeOut();
    });

    $("#right").click(function () {

        if (curre_li.is(":last-child")) {
            var next_li = $("#portfolio li").first();
        } else {
            var next_li = curre_li.next();
        }
        var next_src = next_li.children("img").attr("src");
        var id = next_li.children("img").attr("id");
        setImg(next_src, id);
        curre_li = next_li;
    });

    $("#left").click(function () {
        if (curre_li.is(":first-child")) {
            var prev_li = $("#portfolio li").last();
        } else {
            var prev_li = curre_li.prev();
        }  
        var prev_src = prev_li.children("img").attr("src");
        var id = prev_li.children("img").attr("id");
        setImg(prev_src, id);
        curre_li = prev_li; 
    });

    $("#right, #left").mouseover(function () {
        $(this).css("opacity", 0.9);
    });
    $("#right, #left").mouseleave(function () {
        $(this).css("opacity", 0.4);
    });

});