$(function() {
    const view_height = window.innerHeight;
    const skillMain = $('#skill-main')
    const subSkills = $('.sub_skills')
    const skillMainScrollTop = skillMain.offset().top;
    const subSkillsScrollTop = subSkills.offset().top;
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > subSkillsScrollTop - view_height / 1.5) {
            subSkills.animate({
                'opacity': '1'
            }, 600)
        } else if (scrollTop > skillMainScrollTop - view_height / 1.5) {
            skillMain.animate({
                'opacity': '1'
            }, 600);
        } 
    });
});