$(document).ready(function(){

//    sponsor expanding and collapsing
//    setTimeout(function(){
//        $('.sponsor').addClass('expanded');
//    }, 1500);
//    setTimeout(function(){
//        $('.sponsor').removeClass('expanded');
//        $('.closeAd').html( 'افتح الاعلان');
//    }, 7000);
//    $('.closeAd').on('click',function(e){
//        e.preventDefault()
//        $('.sponsor').toggleClass('expanded');
//        $('.closeAd').html($('.closeAd').text() == 'اغلق الاعلان' ? 'افتح الاعلان' : 'اغلق الاعلان');
//    })



//    menu scroll to toggle
    $(window).scroll(function() {
        if ($(document).scrollTop() > 130) {
            $("#sidebar-wrapper").on('mouseleave',function(e) {
                $("#wrapper").removeClass("toggled");
            });
            $("#sidebar-wrapper").on('mouseenter',function(e) {
                $("#wrapper").addClass("toggled");
            });
            $("#wrapper").removeClass("toggled");
        }
        else {
            $("#wrapper").addClass("toggled");
            $("#sidebar-wrapper").off('mouseleave').off('mouseenter');
            $(".show_content").removeClass('show_content');
        }
    });


    // click more to expand content
    $('.more_link').on('click',function(e){
        e.preventDefault()
        $(this).parent().find('.mor_container').toggleClass('show_content').find('.mor_content').toggleClass('show_content');
    })

    // speach pupple
    $('.close_btn').on('click',function(e){
        e.preventDefault()
        $(this).parent().fadeOut();
    })


//    mobile menu toggle
    $('.navicon-button').on('click',function(e){
        e.preventDefault()
        $(this).toggleClass('open');
        $("#wrapper").toggleClass('mobile_open');
        $("body").toggleClass('ovHide');
    })



})