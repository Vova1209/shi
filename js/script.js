
//
function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }
  ibg();

//
$(window).resize(function(event)  {
    adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header-menu');
    var headerList=$('.menu__list');
    if(w<768){
        if(!headerList.hasClass ('done')){
            headerList.addClass('done').appendTo(headerMenu);
        }
    } else{
            if(headerList.hasClass('done')){
                headerList.removeClass('done').prependTo($('.header__menu'));
            }
        }
        

    }
    

function adaptive_function(){
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();

//menu-burger
$('.header-menu__icon').click(function(event){
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if($(this).hasClass('active')){
        $('body').data('scroll',$(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('body').data('scroll')));

    }
});
