//CALLING FUNTION
$(function(){
  project();
  workLoad();
  smoothScrooll(1000);
});

// LOADING PAGE
$(window).load(function(){

    $('body').css("overflow","auto");

    $('.loading_page .spn').fadeOut(2000, function(){
        $(this).parent().fadeOut(2000, function(){
            $(this).remove();
        });
    });
});
// #### LOADING PAGE

//NAV HEADER EFFECT
function smoothScrooll(duration)
{
	 $(".header_menu a[href^='#']").on('click', function(){
         var target = $( $(this).attr('href') );

         if(target.length){
             event.preventDefault();
             $('html, body').animate({
                 scrollTop: target.offset().top
             }, duration);
         }
     });
}

$(function(){
$('.header_menu .li_header .link_header').click(function(){
  $('.header_menu .li_header').removeClass('ctv');
  $(this).parent().addClass('ctv');
});
});
// #### NAV HEADER EFFECT

//NAV PROJECT
$(function(){
$('.nav li a').click(function(){
  $('.nav li').removeClass('active');
  $(this).parent().addClass('active');
  var change = $(this).attr('id');

  if(change =='all'){
    $('.thumb_unit').fadeIn(300);
  }else{
    $('.thumb_unit').fadeIn(300);
    $('.thumb_unit').not('.' + change).hide();
}
});
});
// ####NAV PROJECT



//PROJECTS
function project()
{
    $('.thumb_unit').click(function(){
        $('.container_proj, .nav, .cta').css('left','-100%');
        $('.work').show();
    });
    $('.return').click(function(){
        $('.container_proj, .nav, .cta').css('left','0%');
        $('.work').hide();
    });
}
// ####PROJECTS

//PROJECT AJAX
function  workLoad(){
    $.ajaxSetup({ cache: false });

    $('.thumb_unit').click(function(){

        var $this = $(this),
            newTitle = $this.find('.title').text(),
            newfolder = $this.data('folder'),
            spinner = '<div class="spn">Loading...</div>',
            newHtml = '/work/'+ newfolder +'.html';

        $('.projrct-load').html(spinner).load(newHtml);
        $('.work-title').text(newTitle);
    });
}
// #### PROJECT AJAX


//CLIENT SLIDERS
$(function(){
  $('.client_cont').each(sliders);

  function sliders(i, elem){
    var track = $(elem),
        first = track.find('.client_slide').eq(0),
        loop = 0;

    first.nextAll().hide();
    setInterval(function(){
      loop++
      first = first.fadeOut(500, function(){
        $(this).appendTo(track);
      }).next().fadeIn(500);
    }, 3000);

  }
});
// #### CLIENT SLIDERS



//HEADER NAV MENU
function menu(x){
  x.classList.toggle('change');
}
$(function(){
  $('.menu').on('click', function(){
    $('.header_menu').fadeToggle(300);
  });
});
// ### HEADER NAV MENU



//SCROLL PAGE PARALLEX
var $animation_element = $('.scroll_animate');
var $window = $(window);

function check_view(){
  var window_height = $window.height();
  var window_top = $window.scrollTop();
  var window_bottom = (window_height + window_top);

  $.each($animation_element, function(){
    var $ele = $(this);
    var ele_height = $ele.outerHeight();
    var ele_top = $ele.offset().top;
    var ele_bottom = (ele_height + ele_top);

    if((ele_bottom >= window_top) && (ele_top <= window_bottom)){
      $ele.addClass('in_view');

    }else{
      $ele.removeClass('in_view');
    }
  });
}
$window.on('scroll resize', check_view);
$window.trigger('scroll');

$(window).scroll(function(){
  var wTop = $(this).scrollTop();
  var outer = $('.container_proj').offset().top;
  var memb = $('.team_content').offset().top;
  var place = $('.places_cards_group').offset().top;

  if (wTop > outer - 200 * 1.2){
     $('.thumb_unit').each(function(i){

       setTimeout(function(){
         $('.thumb_unit').eq(i).addClass('visible');
       }, 200 * i);
     });
  }

  if (wTop > memb - 200 * 1.2){
    $('.team_memb').each(function(i){
      setTimeout(function(){
        $('.team_memb').eq(i).addClass('memb_fade');
      }, 200 * i);
    });
  }

  if (wTop > place - 200 * 1.2){
    $('.place_card').each(function(i){
      setTimeout(function(){
        $('.place_card').eq(i).addClass('place_fade');
      }, 200 * i);
    });
  }
});
// #### SCROLL PAGE PARALLEX
