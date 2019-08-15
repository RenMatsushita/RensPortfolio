$(function() {
    const fab_to_top = $('#fab-to-top');
    const view_height = window.innerHeight;
    fab_to_top.hide();

    $('#about-data-list').fadeIn();
    console.log("ffffff");
    

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > view_height*2) {
    //         fab_to_top.fadeIn();
    //     } else {
    //         fab_to_top.fadeOut();
    //     }
    // });

    // fab_to_top.click(function() {
    //     $('html,body').animate({scrollTop: 0}, 400, 'swing');
    // });
});