$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

var hoverLogic = function(topbar, target, biobox) {
  $(topbar).on('mouseenter', target, function(e){ 
    $(this).siblings(biobox).css('display','block');
  });

  $('body').on('mouseleave', biobox, function(e){
    $(this).css('display','none');
  });
}

hoverLogic(".bio-thumbnail", ".authoravi", ".bio-full");