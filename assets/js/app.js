$(document).ready(function () {

  
    const introBgClass = function () {
        $('.intro-block').addClass('animate');
    }

    const removeBgClass = function () {
        $('.intro-block').removeClass('animate');
    }


    let mql = window.matchMedia('(max-width: 700px)'),
        vid = $('#js-vid');

    const video = document.querySelector('video');
    const videoFunct = function () {
        if (mql.matches == true) {
            vid.html('<source src="/assets/prest-vale-xxs-muted.webmsd.webm" type="video/webm"><source src="/assets/prest-vale-xxs-muted.mp4" type="video/mp4">')
            console.log('mobile video')
        } else {
            vid.html('<source src="/assets/prest-vale-s-muted.webmhd.webm" type="video/webm"><source src="/assets/prest-vale-s-muted.mp4" type="video/mp4">')
            console.log('desktop video')
        }
    }
    const videoPlay = function(e) {
        video.addEventListener('canplaythrough', (e) => {
            console.log('I think I can play through the entire ' +
            'video without ever having to stop to buffer.');
           
        });
    }



    // Run Colour animation
    // Choose Correct Video Format
    // Video fully buffered
    // Reveal Video and Play
    // Hide colour animation

 

    //   Dynamic Backgrounds

    let aboutWrap = '#about-wrap',
        aboutNav = '.about-nav';

    const observedSections = document.querySelectorAll(aboutWrap + ' .block h2')
   
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


                    if ($(window).width() <= 700) {
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
    
    

    var infoLink = '.info-link';

    const infoLinkClick = function () {

        $(infoLink).on('click', function (e) {
            e.preventDefault();

            var introBg = $('.about-nav a.about-us').data('bg-color');
            var infoCol = $('.about-nav a.about-us').data('color');
        
            $('html').addClass('reveal');
            
            // dynamicBg()
            $('body').css('background-color', introBg)
            $('body').css('color', infoCol)
            // document.addEventListener('scroll', function() {
            //     dynamicBg()
            // })

            if ($(window).width() <= 700) { 
                
                $('.about-nav').css('background-color', introBg)
            }

            setTimeout(function () {
                $('html').addClass('zwitch');
            }, 360)

        })
    }

    infoLinkClick()

    $(aboutNav + ' a').click(function(e) {

        e.preventDefault()

        let sectionName = $(this).data('anchor'),
            sectionId = $('#' + sectionName),
            currPadding = $(aboutWrap).css('padding-top'),
            currPaddingNo = parseInt(currPadding,10), 
            sectionScroll = sectionId.position(),
            sectionTop = parseInt(sectionScroll.top, 10),
            sectionNewPos = sectionTop - currPaddingNo,
            bgColor = $(this).data('bg-color'),
            col = $(this).data('color');


            // console.log('without padding is ' + sectionTop + ' and with padding is ' + sectionNewPos)

        // $(window).scrollTo(sectionNewPos,{duration:360}, {easing:'ease'});

       
        $('.block').not('#' + sectionName).fadeOut(360, function () {
            $("html, body").animate({ scrollTop: 0 }, 360);
            sectionId.fadeIn(720);
        })

        // $('body').css('background-color',bgColor)

        $('body').css('background-color',bgColor)
        $('body').css('color', col)

        if ($(window).width() <= 700) { 
            $('.about-nav').css('background-color',bgColor)
            $('.about-nav').css('color', col)
        }
        
        $('.about-nav a').not('.'+sectionName).removeClass('focus')
        $(this).addClass('focus')
        
        if ($(window).width() <= 700) { 

        }

       

    });

    
    if ($(window).width() <= 700) {

        $('a.close').html('&times;')
    }



    var mainLogo = 'h1.main-logo';
    var smallLogo = 'h1.small-logo';
    var overlay =  '.overlay';
   

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


        if ($(window).width() > 700 ) {
            $(mainLogo).on('mouseenter', function() {
                
                console.log(bgNo)

                var logoPositionX = logoPosition();
                
                $(this)
                    .addClass('hover')
                    .addClass(bgNoClass)
                    
                    .css('transform','scale(1.7)');
                
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

           
        } else {
            // $(smallLogo).on('click',function() {
                
            //     console.log(logoPositionXSml)

            //     $(mainLogo)
            //         .show()
            //         .addClass('hover')
            //         .addClass(bgNoClass)
            //         // .css('left',logoPositionXSml+'%')
            //         .css('transform','scale(1.35)');
                
            //     $(mainLogo + ' .inline-icon svg').css('transform', 'translateX(-'+logoPositionXSml+'px)')

            //     setTimeout(function() {

            //         $(mainLogo)
            //         .hide()
            //         .removeClass('hover')
            //         .removeClass(bgNoClass)
            //         .css('transform','none')

            //         $(mainLogo + '.inline-icon svg').css('transform', 'none')

            //         if (bgNo == 4) {
            //             bgNo = 1
            //             bgNoClass = 'ov-' + bgNo.toString();
            //         } else {
            //             bgNo = bgNo + 1
            //             bgNoClass = 'ov-' + bgNo.toString();
            //         }

            //         if (logoPositionXSml > 1800 ) {
            //             logoPositionXSml = 180
            //         } else {
            //             logoPositionXSml = logoPositionXSml + 270
            //         }
            //     },1000)
            // })

            // $(mainLogo).on('click',function() {
            //     $(this)
            //         .hide()
            //         .removeClass('hover')
            //         .removeClass(bgNoClass)
            //         .css('transform','none')

            //     $(mainLogo + '.inline-icon svg').css('transform', 'none')

                    
            //         if (bgNo == 4) {
            //             bgNo = 1
            //             bgNoClass = 'ov-' + bgNo.toString();
            //         } else {
            //             bgNo = bgNo + 1
            //             bgNoClass = 'ov-' + bgNo.toString();
            //         }

            //         if (logoPositionXSml > 1800 ) {
            //             logoPositionXSml = 180
            //         } else {
            //             logoPositionXSml = logoPositionXSml + 270
            //         }
            // })
        }

     


    }
    

    const introLogo = $('h1.main-logo .inline-icon');
    const introLogoSml = $('h1.small-logo .inline-icon');
    const introLogoSmlSvg = $('h1.small-logo span')
    const introAnim = gsap.timeline({
        onComplete: overlayV1
    });
    const introAnimSml = gsap.timeline({
        // onComplete: overlay
    });
    const introInfo = $('.info');
    const introMovement = gsap.timeline({
        repeat: -1,
        // onComplete: overlay
    });
    var h1Height = introLogo.height()
    var h1HeightSml = introLogoSml.height()
    var h1Width = introLogoSmlSvg.width() + 30
    var windowWidth = $(window).width() 
    var introBlock = '.intro-block'




    const introAnimFunction = function () {
    introAnim
        // .set(currentVid, {opacity: 0})
        .set(introLogo, {y: h1Height})
        .set(introLogo, {opacity: 1})
        // .to(currentVid, {opacity: 1, delay: .5, duration: .36})
        .to(introLogo, {y: 0, delay: .5, duration: .36})
        .set(introInfo,{opacity: 1, delay: .36, duration: .36})
        .call(introBgClass)
    }

    introAnimFunction()


    const introAnimFunctionSml = function () {
    introAnimSml
        // .set(currentVid, {opacity: 0})
        .set(introLogoSml, { y: h1HeightSml })
        .set(introInfo,{opacity: 0})
        .set(introLogoSml, {opacity: 1})
        // .to(currentVid, {opacity: 1, delay: .5, duration: .36})
        .to(introLogoSml, {y: 0, delay: .5, duration: .72})
        .set(introInfo,{opacity: 1, delay: .36, duration: .36})
        .call(introBgClass)
    }
       
    
    if ($(window).width() <= 700) {
        introAnimFunctionSml()
    }
       

    window.addEventListener('resize', function () { 
        if ($(window).width() <= 700) {
            introAnimFunctionSml()
        }
        
    })


    const introVideoFunc = function () {
    introVideo
        .call(videoFunct)
        .call(videoPlay)
        .set(video, {opacity: 1, duration: .72})
        .call(removeBgClass)
    }
    introVideoFunc()

    var closeLink = '.close';

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

            $('body').css('background-color', introBg)
            $('body').css('color', introCol)
             
            $('.about-nav a').removeClass('focus')
            $('.about-nav a.about-us').addClass('focus')

            if ($(window).width() <= 700) { 
                $('.about-nav').css('background-color', introBg)
            }
        
        }, 360)
    })



}) 