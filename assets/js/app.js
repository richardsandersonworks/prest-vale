$(document).ready(function () {

    
    let aboutWrap = '#about-wrap',
        aboutNav = '.about-nav';
       

    //   Dynamic Backgrounds

    const observedSections = document.querySelectorAll(aboutWrap + ' .block h2')
    const parentBlock = document.querySelectorAll(aboutWrap + ' .block')
    const $closeButton = $('.about-block .close-link');
   

    let orange = '#F0691F',
        yellow = '#FFE922',
        blue = '#3E86BC',
        green = '#2A8F5C';
    
    const dynamicBg = function () {

        const topViewport = window.pageYOffset
        const midViewport = topViewport + (window.innerHeight / 2)
        const botViewport = topViewport + (window.innerHeight)


        // Middle of each section

        observedSections.forEach(section => {
            
            const topSection = section.offsetTop
            const midSection = topSection + (section.offsetHeight / 2)
        
            // how far is the section from the visible area
            const distanceToSection = midViewport - midSection

            // data
            let 
               white = '#F3EFE2',
               sectionAnchor = section.dataset.anchor,
               navLink = aboutNav + ' a',
               matchLink = navLink + '.' + sectionAnchor,
               navClassCheck = $(navLink).hasClass('.'+sectionAnchor);

            if (distanceToSection > -200) {

                const bgColor = section.dataset.bgColor;

                // console.log(bgColor)

                if (bgColor != '') {
                    // $('html').addClass('background-change')
                    // $('html').removeClass('background-default')
                    $('body').css('background-color',bgColor)
                    // console.log('linear-gradient(180deg,'+ bgColor +'50%, rgba(240, 105, 31, 0) 100%)')
                    // setTimeout(function () { 
                    //     $('.about-block .close-link').css('background','linear-gradient(180deg,' + bgColor + ' 50%, rgba(240, 105, 31, 0) 100%)')
                    // },2000)
                    
                    console.log('change to' + bgColor)
                    console.log(sectionAnchor)


                    if ($(window).width() <= 700 && $('html').hasClass('reveal')) {

                        $('.about-block .about-nav').css('background-color', bgColor)
                    }
                   
                    $(matchLink).addClass('focus');
                    $(navLink).not('.' + sectionAnchor).removeClass('focus')


 

                } else {
                    $('html').addClass('background-default')
                    $('html').removeClass('background-change')
                    // console.log('change to default')

                }

            } 

        })



    }
    
    dynamicBg()

    document.addEventListener('scroll', function() {
        dynamicBg()
    })

    var infoLink = '.info-link';

    $(infoLink).on('click', function (e) {
        e.preventDefault();
       
        $('html').addClass('reveal');


        setTimeout(function () {
            $('html').addClass('zwitch');
        }, 360)

    })


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

            $("html, body").animate({ scrollTop: 0 }, 360);
        }, 360)
    })


    var mainLogo = 'h1.main-logo';
    var smallLogo = 'h1.small-logo';
    var overlay =  '.overlay';
    var overlaySlide = overlay + ' .ov-inner';

    $(mainLogo).on('mouseenter',function() {
        $(overlay).fadeIn(300)

       
        setTimeout(function() {
            $(overlay).fadeOut(300, function() {
                $(overlaySlide).toggleClass('display')
            })
        },1000)

    })

    $(overlay).on('click',function() {
        $(overlay).fadeOut(300, function() {
            $(overlaySlide).toggleClass('display')
        })
    })

    if ($(window).width() <= 700 ) {

           $(smallLogo).on('click',function() {
                $(overlay).fadeIn(300)

                setTimeout(function() {
                    $(overlay).fadeOut(300, function() {
                        $(overlaySlide).toggleClass('display')
                    })
                },1000)

            })

            $(overlay).on('click',function() {
                $(overlay).fadeOut(300, function() {
                    $(overlaySlide).toggleClass('display')
                })
            })

    }
    // let lastCopy = $('#contact'),
        
    // navPosition = $(aboutNav).offset().top + $(aboutNav).height(),
    //     navFrom = window.innerHeight - navPosition;

    //     lastCopy.css('margin-bottom',navFrom)


    


}) 