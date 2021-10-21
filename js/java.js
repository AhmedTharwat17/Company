$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });
    // option color
    $(".gear-check").click(function(){
        $(".color-option").fadeToggle();
    });
    // loading
    $(window).on('load' , function()
    {
        $(".loading-overlay .sk-folding-cube").fadeOut(2000,
        function()
        {
            $(this).parent().fadeOut(2000,
            function(){
                
                $(this).remove();
            }); 
        });
    });
    // ScrollTop
    var scrollTop = $("#scroll-top");
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            scrollTop.show();
        } else {
            scrollTop.hide();
        }
    });
       scrollTop.on('click' , function(){
           $("html , body").animate({scrollTop:0},600); 
        });
    // nice scroll
    $("body").niceScroll();
});
