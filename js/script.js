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
    $(biobox).css('display','block');
  });

  $('body').on('mouseleave', biobox, function(e){
    $(this).css('display','none');
  });
}

hoverLogic("#bradstopbar", "#biotarget2", "#author-bio-box");
hoverLogic("#emilystopbar", "#biotarget3", "#emilysauthor-bio-box");
hoverLogic("#andreastopbar", "#biotarget1", "#andreasauthor-bio-box");
hoverLogic("#jaystopbar", "#biotarget4", "#jaysauthor-bio-box");
hoverLogic("#jaymestopbar", "#biotarget5", "#jaymesauthor-bio-box");
hoverLogic("#jessicastopbar", "#biotarget6", "#jessicasauthor-bio-box");
hoverLogic("#justinstopbar", "#biotarget7", "#justinsauthor-bio-box");
hoverLogic("#marcstopbar", "#biotarget8", "#marcsauthor-bio-box");
hoverLogic("#marcstopbar", "#biotarget8", "#marcsauthor-bio-box");
hoverLogic("#paulstopbar", "#biotarget9", "#paulsauthor-bio-box");
hoverLogic("#peterstopbar", "#biotarget10", "#petersauthor-bio-box");
hoverLogic("#roystopbar", "#biotarget11", "#roysauthor-bio-box");
hoverLogic("#brentstopbar", "#biotarget13", "#brentsauthor-bio-box");
hoverLogic("#claystopbar", "#biotarget14", "#claysauthor-bio-box");
hoverLogic("#lindseystopbar", "#biotarget15", "#lindseysauthor-bio-box");
hoverLogic("#cindystopbar", "#biotarget16", "#cindysauthor-bio-box");
hoverLogic("#michaelstopbar", "#biotarget17", "#michaelsauthor-bio-box");
hoverLogic("#natestopbar", "#biotarget18", "#natesauthor-bio-box");