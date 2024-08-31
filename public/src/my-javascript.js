
$(document).ready(function(){
    var currentPath = window.location.pathname;

    $(".navbar-nav .nav-item").each(function (i,link){
        link.find('a').addEventListener("click",() => {
            $(".navbar-nav .nav-item").each(function (i, removeActive){
                removeActive.removeClass("active");
            })
            this.addClass("active");
        })
        });
    });