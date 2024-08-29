
$(document).ready(function(){
    var currentPath = window.location.pathname;

    $(".navbar-nav .nav-item").each(function(){
        var linkPath = $(this).find('a').attr('href');
        if (currentPath === linkPath){
            $(".navbar-nav .nav-item").removeClass('active');

            $(this).addClass('active');
        }
    });
});