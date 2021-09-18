$(document).ready(function () {

    // Selectors 
    let introBlock = '.intro-block',
        aboutWrap = '#about-wrap',
        aboutNav = '.about-nav',
        infoLink = '.info-link',
        mainLogo = 'h1.main-logo',
        overlay =  '.overlay',
        introLogo = $('h1.main-logo .inline-icon');
        introLogoSml = $('h1.small-logo .inline-icon');
        introLogoSmlSvg = $('h1.small-logo span'),
        introInfo = $('.info'),
        closeLink = '.close', 
        placeholder = '#placeholder';
    ;

    // Timelines
    const introAnim = gsap.timeline({
        // onComplete: overlayV1
    });
    const introAnimSml = gsap.timeline({
    });
    const introVideo = gsap.timeline({})

    // Variables
    var h1Height = introLogo.height()
    var h1HeightSml = introLogoSml.height()

    // –––––––––––––


    // JS Media Queries
    let mql = window.matchMedia('(max-width: 700px)'),
        mqXL = window.matchMedia('(min-width: 1440px)');
    ;
    
   
    // Add Animation Class / Function
    const introBgClass = function () {
        $(introBlock).addClass('animate');
        console.log('add animation')
    }

    // V2 Video Functions
    const video = document.querySelector('video');
    let vid = $('#js-vid');

    // Video Properties / Function
    const videoProp = function () {
        vid.prop('playsinline',true)
        vid.prop('muted',true)
        vid.prop('autoplay',true)
        vid.prop('loop',true)
    }

    // Video Media Query / Function
    const videoFunct = function () {
        if (mql.matches == true) {
            vid.html('<source src="/assets/prest-vale-xxs-muted.mp4" type="video/mp4">')
            console.log('mobile video')
            videoProp()
        } else {
            vid.html('<source src="/assets/prest-vale-s-muted.mp4" type="video/mp4">')
            console.log('desktop video')
            videoProp()
        }
    }

    // Play Video / Function
    async function playVideo() {
        try {
          await video.play();
          console.log('play')
        } catch(err) {
          console.log('cannot play')
        }
    }

    // Play Video when buffering is finished / Function.
    const videoPlay = function(e) {
        video.addEventListener('canplaythrough', (e) => {

            console.log('Video buffered and can stream');   
            
            if (video.paused) {
                playVideo();
            } else {
                console.log('video is playing already')
            }

            vid.fadeTo(720, 1);
           
        });
    }

    // Info Link Click
    $(infoLink).on('click', function (e) {
        
        e.preventDefault();

        var introBg = $('.about-nav a.about-us').data('bg-color');
        var infoCol = $('.about-nav a.about-us').data('color');
    
        $('html').addClass('reveal');  
        $('body').css('background-color', introBg).css('color', infoCol)
        
        if ($(window).width() <= 700) { 
            $(aboutNav).css('background-color', introBg)
        }

        setTimeout(function () {
            $('html').addClass('zwitch');
        }, 360)

    })

    // About Headings Click

    $(aboutNav + ' a').click(function(e) {

        e.preventDefault()

        let sectionName = $(this).data('anchor'),
            sectionId = $('#' + sectionName),
            bgColor = $(this).data('bg-color'),
            col = $(this).data('color')
        ;

        $('.block').not('#' + sectionName).fadeOut(360, function () {
            $("html, body").animate({ scrollTop: 0 }, 360);
            sectionId.fadeIn(720);
        })

        $('body').css('background-color', bgColor).css('color', col)
        

        if ($(window).width() <= 700) { 
            $(aboutNav).css('background-color',bgColor).css('color', col)
            $('.about-block').css('background-color',bgColor).css('color', col)
        }
        
        $('.about-nav a').not('.'+sectionName).removeClass('focus')
        $(this).addClass('focus')
    });


    // Close Link 

    $(closeLink).on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('reveal');
        introAnimFunction()
        
        setTimeout(function () {
            $('html').removeClass('zwitch');
            $("html, body").animate({ scrollTop: 0 }, 360);
            $('.block').fadeOut();
            $('.block.about-us-copy').fadeIn()
           
            var introBg = $('.about-nav a.about-us').data('bg-color');
            var introCol = $('.about-nav a.about-us').data('color');

            $('body').css('background-color', introBg).css('color', introCol)
             
            $('.about-nav a').removeClass('focus')
            $('.about-nav a.about-us').addClass('focus')

            if ($(window).width() <= 700) { 
                $('.about-nav').css('background-color', introBg)
            }
        
        }, 360)
    })
    
    // Replace Close with X
    
    if (mql.matches == true) {
        $('a.close').html('&times;')
    } 

    const overlayV1 = function() {
        var bgNo = 1;
        var bgNoClass = ' .ov-' + bgNo.toString();

        $(mainLogo).on('mouseenter',function() {
            if ($(window).width() > 700 ) {
                var overlaySlide = overlay + bgNoClass;

                $(overlay).fadeIn(300)
                console.log(bgNoClass)
                 
                $(overlaySlide).addClass('display')

                setTimeout(function() {
                    $(overlay).fadeOut(320, function() {

                        $(overlaySlide).removeClass('display')
                        if (bgNo == 4) {
                            bgNo = 1
                            bgNoClass = ' .ov-' + bgNo.toString();
                        } else {
                            bgNo = bgNo + 1
                            bgNoClass = ' .ov-' + bgNo.toString();
                        }
                    })
                }, 1000)
            
                $(overlay).on('click',function() {   
                    $(this).fadeOut(320, function() {
                        $(overlaySlide).removeClass('display')
                        if (bgNo == 4) {
                            bgNo = 1
                            bgNoClass = ' .ov-' + bgNo.toString();
                        } else {
                            bgNo = bgNo + 1
                            bgNoClass = ' .ov-' + bgNo.toString();
                        }
                    })
                })
            }
        })
    }
        
    const overlayV2 = function() {
        let mainLogoSml = '.small-logo',
            logoPosition = () => {
                return 1 * Math.random() * 100
            };
        var bgNo = 1;
        var bgNoClass = 'ov-' + bgNo.toString();
        var logoPositionXSml = 0;

        
        $(mainLogo).on('mouseenter', function() {
            
        console.log(bgNo)
        var logoPositionX = logoPosition();
        
        $(this)
            .addClass('hover')
            .addClass(bgNoClass)        
            .css('transform','scale(1.7)')
        ;
    
        $(mainLogo + ' .inline-icon').css('transform', 'translateX(-'+logoPositionX+'%)')

        setTimeout(function() {
            $(mainLogo)
                .removeClass('hover')
                .removeClass(bgNoClass)
                .css('transform','none')
        
                $(mainLogo + ' .inline-icon').css('transform','none')

                if (bgNo == 4) {
                    bgNo = 1
                    bgNoClass = 'ov-' + bgNo.toString();
                } else {
                    bgNo = bgNo + 1
                    bgNoClass = 'ov-' + bgNo.toString();
                }
            },1000)
        })

        $(mainLogo).on('click',function() {
            $(this)
                .removeClass('hover')
                .removeClass(bgNoClass)
                .css('transform','none')
            $(mainLogo + ' .inline-icon').css('transform','none')

            if (bgNo == 4) {
                bgNo = 1
                bgNoClass = 'ov-' + bgNo.toString();
            } else {
                bgNo = bgNo + 1
                bgNoClass = 'ov-' + bgNo.toString();
            }
        }) 
    }
    

    

    const introAnimFunction = function () {
        introAnim
        .set(introLogo, {y: h1Height})
        .set(introLogo, {opacity: 1})
        .to(introLogo, {y: 0, delay: .5, duration: .36})
        .set(introInfo,{opacity: 1, delay: .36, duration: .36})
        // .call(introBgClass)
    }

    const introAnimFunctionSml = function () {
        introAnimSml
        .set(introLogoSml, { y: h1HeightSml })
        .set(introInfo,{opacity: 0})
        .set(introLogoSml, {opacity: 1})
        .to(introLogoSml, {y: 0, delay: .5, duration: .72})
        .set(introInfo,{opacity: 1, delay: .36, duration: .36})
        // .call(introBgClass)
    }

    const introVideoFunc = function () {
        introVideo
            .call(videoFunct)
            .call(videoPlay)
            .set(placeholder, {opacity: 0, delay: 1})
            // .call(removeBgClass)
    }
    

    // Run Functions
    introVideoFunc()

    if ($(window).width() <= 700) {
        introAnimFunctionSml()
    } else {
        introAnimFunction()
    }

    window.addEventListener('resize', function () {     
        introVideoFunc()

        if ($(window).width() <= 700) {
            introAnimFunctionSml()
        } 
    })





}) 