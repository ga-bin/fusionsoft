$(function(){
    var showed = ("table .show");
    $("table .title td .bi-caret-down-square").click(function() {
        var clicked = $(this).parents().parents().next("tr");
        if($(clicked).hasClass('hide')) {
            $(showed).removeClass('show').addClass('hide');
            $(clicked).removeClass('hide').addClass('show');
            $(this).animate({
                rotate:"180deg"
            }, 1000)
            // $(this).removeClass('.bi-caret-down-square').addClass('.bi-caret-up-square');
        }  
        else {
            $(this).animate({
                rotate:"0deg"
            }, 1000)
            $(clicked).addClass('hide').removeClass('show');
        }
    })
})

