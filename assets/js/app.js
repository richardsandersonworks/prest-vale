$(document).ready(function () {

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

    
    if ($(window).width() <= 700) {

        $('a.close').html('&times;')
    }



    var mainLogo = 'h1.main-logo';
    var smallLogo = 'h1.small-logo';
    var overlay =  '.overlay';
    var overlaySlide = overlay + ' .ov-inner';

    const overlayV1 = function() {

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
    
    overlayV2();
    
    const introBgClass = function () {
        $('.intro-block').addClass('animate');
    }

    const introLogo = $('h1.main-logo .inline-icon');
    const introLogoSml = $('h1.small-logo .inline-icon');
    const introLogoSmlSvg = $('h1.small-logo span')
    const introAnim = gsap.timeline({
        // onComplete: overlay
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

    const introAnimFunction = function () {
    introAnim
        .set(introLogo, { y: h1Height })
        .set(introInfo,{opacity: 0})
        .to(introLogo, {y: 0, delay: .5, duration: .36})
        .set(introInfo,{opacity: 1, delay: .36, duration: .36})
        .call(introBgClass)
    }
    introAnimFunction()

    const introAnimFunctionSml = function () {
        introAnimSml
            .set(introLogoSml, { y: h1HeightSml })
            .set(introInfo,{opacity: 0})
            .to(introLogoSml, {y: 0, delay: .5, duration: .36})
            .set(introInfo,{opacity: 1, delay: .36, duration: .36})
            .call(introBgClass)
        }
       
    
    if ($(window).width() <= 700) {
        // introMovement
        //     .set(introLogoSml, {x: 0})
        //     .to (introLogoSml, {x: -h1Width, duration: 6, ease: "linear"})

        introAnimFunctionSml()
    }
       

    window.addEventListener('resize', function () { 
        if ($(window).width() <= 700) {
            // introMovement
            //     .set(introLogoSml, {x: 0})
            //     .to (introLogoSml, {x: -h1Width, duration: 6, ease: "linear"})
            introAnimFunctionSml()
        }
    })


    var closeLink = '.close';

    $(closeLink).on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('reveal');
        introAnimFunction()
        setTimeout(function () {
            $('html').removeClass('zwitch');
            $("html, body").animate({ scrollTop: 0 }, 360);
        
        }, 360)
    })



}) 