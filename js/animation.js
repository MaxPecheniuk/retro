//navbar
(function() {
    $('.toggleNav').on('click',function() {
        $('.nav-menu ul').toggleClass('open');
        $('.header-line_3').toggleClass('open');
        $('.header-line_2').toggleClass('hidden');
        $('.header-line_1').toggleClass('open');

    });
})();

// Anchorn
$(function(){
    $('.anchorn').bind('click.smoothscroll', function(){
            let target = $(this).attr('href'),
           _positionElement = $(target).offset().top ;
        $('body, html').animate({scrollTop: _positionElement}, 1200);
    })
});

// FadeIn header_block
(function () {
    let _target= $('.header_block');
    $(document).ready(function(){
        $(_target).css("display", "none");
        $(_target).fadeIn(500)
    });
})();

// about_me_block animation
(function () {
    let _target = $(".about-me_item_logo");
    let _winHeight = $(window).height();
    $(document).scroll(function () {
        let _scrollPosition = $("body").scrollTop();
        let _positionElement = _target.offset().top;
        let _heightElement= _target.height();
        let _beginFade =  _positionElement - _winHeight;

        if(_scrollPosition > _beginFade &&
            _scrollPosition < (_positionElement + (_heightElement - 100))){
            $(_target).removeClass('fadeOut');
            $(_target).addClass('fadeIn');
        }else {
            $(_target).removeClass('fadeIn');
            $(_target).addClass('fadeOut');
        }
    });
})();

