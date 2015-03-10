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

// brads bio hover logic
$(function() {
    $('#bradstopbar').on('mouseenter', '#biotarget2', function(e) {
        $('#author-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#author-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// emilys bio hover logic
$(function() {
    $('#emilystopbar').on('mouseenter', '#biotarget3', function(e) {
        $('#emilysauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#emilysauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// andreas' bio hover logic
$(function() {
    $('#andreastopbar').on('mouseenter', '#biotarget1', function(e) {
        $('#andreasauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#andreasauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// jays bio hover logic
$(function() {
    $('#jaystopbar').on('mouseenter', '#biotarget4', function(e) {
        $('#jaysauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#jaysauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// jaymes bio hover logic
$(function() {
    $('#jaymestopbar').on('mouseenter', '#biotarget5', function(e) {
        $('#jaymesauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#jaymesauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// jessicas bio hover logic
$(function() {
    $('#jessicastopbar').on('mouseenter', '#biotarget6', function(e) {
        $('#jessicasauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#jessicasauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// justins bio hover logic
$(function() {
    $('#justinstopbar').on('mouseenter', '#biotarget7', function(e) {
        $('#justinsauthor-bio-box').css('display', 'block');
    });

    $('#justinstopbar').on('mouseleave', '#justinsauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// marcs bio hover logic
$(function() {
    $('#marcstopbar').on('mouseenter', '#biotarget8', function(e) {
        $('#marcsauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#marcsauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// pauls bio hover logic
$(function() {
    $('#paulstopbar').on('mouseenter', '#biotarget9', function(e) {
        $('#paulsauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#paulsauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// peters bio hover logic
$(function() {
    $('#peterstopbar').on('mouseenter', '#biotarget10', function(e) {
        $('#petersauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#petersauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// roys bio hover logic
$(function() {
    $('#roystopbar').on('mouseenter', '#biotarget11', function(e) {
        $('#roysauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#roysauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// ryans bio hover logic
$(function() {
    $('#ryanstopbar').on('mouseenter', '#biotarget12', function(e) {
        $('#ryansauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#ryansauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// brents bio hover logic
$(function() {
    $('#brentstopbar').on('mouseenter', '#biotarget13', function(e) {
        $('#brentsauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#brentsauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// clays bio hover logic
$(function() {
    $('#claystopbar').on('mouseenter', '#biotarget14', function(e) {
        $('#claysauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#claysauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});


// lindseys bio hover logic
$(function() {
    $('#lindseystopbar').on('mouseenter', '#biotarget15', function(e) {
        $('#lindseysauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#lindseysauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// cindys bio hover logic
$(function() {
    $('#cindystopbar').on('mouseenter', '#biotarget16', function(e) {
        $('#cindysauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#cindysauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// michaels bio hover logic
$(function() {
    $('#michaelstopbar').on('mouseenter', '#biotarget17', function(e) {
        $('#michaelsauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#michaelsauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});

// nates bio hover logic
$(function() {
    $('#natestopbar').on('mouseenter', '#biotarget18', function(e) {
        $('#natesauthor-bio-box').css('display', 'block');
    });

    $('body').on('mouseleave', '#natesauthor-bio-box', function(e) {
        $(this).css('display', 'none');
    });
});
