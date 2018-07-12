$(document).ready(function () {
  openMenu();
  slideDown();
  $(window).on('scroll', function () {
    let $header = $('.the-navigation');
    let $win = $(window).scrollTop();
    if ($win > 50) {
      $header.addClass('sticky');
    }
    else {
      $header.removeClass('sticky');
    }
  });
  $(window).on('scroll', function () {
    $('.blog-indi').each(function (b) {
      let $bottomOfBlog = $(this).offset().top + $(this).outerHeight();
      let $windowBottom = $(window).scrollTop() + $(window).height();
      if ($windowBottom > $bottomOfBlog - 100) {
        $(this).css({
          'opacity': '1',
          '-webkit-transform': 'translateY(0)',
          '-ms-transform': 'translateY(0)',
          'transform': 'translateY(0)',
        });
      }
    });
  });
  $('.navigation-lg').localScroll();
  $('.navigation-sm').localScroll();
  $('#go-down').localScroll();

  function openMenu() {
    const $menu = $('.navigation-sm');
    const $button = $('.control');
    $button.click(() => {
      if($menu.css('display') === 'block') {
        $menu.css('display', 'none').animate({
          opacity: 0,
          width: 0,
        }, 300);
        $button.removeClass('responsive');
      }
      else {
        $menu.css('display', 'block').animate({
          opacity: 1,
          width: '20%',
        }, 300);
        $button.addClass('responsive');
      }
    });
    $(window).on('resize', () => {
      $menu.css({
        'display': 'none',
        'opacity': 0,
        'width': 0
      });
      $button.removeClass('responsive');
    });
  }

  function slideDown() {
    let $blogs = $('.blog-indi');
    let $showMore = $('.load-more a');
    $blogs.hide();
    $blogs.slice(0, 2).show();
    $showMore.on('click', function (e) {
      e.preventDefault();
      $('.blog-indi:hidden').slice(0, 2).slideDown(1000);
      if ($('.blog-indi:hidden').length == 0) {
        $showMore.fadeOut(1000);
      }
    });
  }
});
