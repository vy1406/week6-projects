$(document).ready(function(){
    console.log("click on the hamburger")
    let isSided = false;
    $(".fas").on( "click", function(){
        if (isSided == false)
            $(".sidebar").css("width","20%")
        else
            $(".sidebar").css("width","100%")

        isSided = !isSided
    });
  });
