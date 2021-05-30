$(document).ready(function () {

    var infoLink = '.info-link';

    $(infoLink).on('click', function (e) {
        e.preventDefault();
       
        $('html').addClass('reveal');

        setTimeout(function () {
            $('html').addClass('zwitch');
        }, 360)

    })

   

    let aboutWrap = '#about-wrap',
        aboutNav = '.about-nav';
       

    $(aboutNav + ' a').click(function(e) {

        e.preventDefault()

        let sectionName = $(this).data('anchor'),
            sectionId = $('#' + sectionName),
            currPadding = $(aboutWrap).css('padding-top'),
            currPaddingNo = parseInt(currPadding,10); 
            sectionScroll = sectionId.position();
            sectionTop = parseInt(sectionScroll.top, 10);
            sectionNewPos = sectionTop - currPaddingNo; 

            console.log('without padding is ' + sectionTop + ' and with padding is ' + sectionNewPos)

        $(window).scrollTo(sectionNewPos,{duration:360}, {easing:'ease'});

    });

    var closeLink = '.close';

    $(closeLink).on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('reveal');

        setTimeout(function () {
            $('html').removeClass('zwitch');
            $(window).scrollTo(0,{duration:360}, {easing:'ease'});

        }, 360)



    })






}) 