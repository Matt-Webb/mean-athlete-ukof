(function() {
    'use strict';

    angular
        .module('core')
        .factory('HelperService', HelperService);

    function HelperService() {
        var helper = {
            banner: banner,
            template: template,
            theme: theme,
            menu: menu,
            script: script,
            dropdown:dropdown
        };

        return helper;

        function dropdown() {
            (function() {
                "use strict";
                var dropdown = document.querySelectorAll('.dropdown');
                var dropdownArray = Array.prototype.slice.call(dropdown,0);
                dropdownArray.forEach(function(el){
                    var button = el.querySelector('a[data-toggle="dropdown"]'),
                        menu = el.querySelector('.dropdown-nav'),
                        arrow = button.querySelector('i.icon-arrow');

                    button.onclick = function(event) {
                        if(!menu.hasClass('show')) {
                            menu.classList.add('show');
                            menu.classList.remove('hide');
                            arrow.classList.add('open');
                            arrow.classList.remove('close');
                            event.preventDefault();
                        }
                        else {
                            menu.classList.remove('show');
                            menu.classList.add('hide');
                            arrow.classList.remove('open');
                            arrow.classList.add('close');
                            event.preventDefault();
                        }
                    };
                })

                Element.prototype.hasClass = function(className) {
                    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
                };
                // Author code here
            })();
        }


        function script() {
            (function ($) {
                "use strict";
                $(document).ready(function () {
                    $('#parallax-block').btparallaxfix("50%", 0.5);
                    $(window).resize(function(){
                        $('#parallax-block').btparallaxfix("50%", 0.5);
                    });
                    var options = {
                        slideSize: {'type': 'full', 'size': ''}, // type = full or auto
                        parallaxType: 'dynamic', // parallaxType = static or dynamic
                        item_width: 200,
                        item_height: 200,
                        rows: 2,
                        spacing: 5,
                        scroll_direction: 'rtl',
                        speed: 2,
                        next_prev_s: 200,
                        contentType: 'video' // contentType = image or video
                    };
                    $('#parallax-block').btParallax(options);
                });

                $(document).ready(function () {
                    $('#parallax-block-modern').btparallaxfix("50%", 0.5);
                    var options = {
                        slideSize: {'type': 'full', 'size': '1170'}, // type = full or auto
                        parallaxType: 'dynamic', // parallaxType = static or dynamic
                        item_width: 'auto',
                        item_height: 'auto',
                        centerPadding:50,
                        rows: 1,
                        spacing: 15,
                        scroll_direction: 'rtl',
                        speed: 2,
                        next_prev_s: 200,
                        contentType: 'image' // contentType = image or video
                    };
                    $('#parallax-block-modern').btParallax(options);
                });
            })(jQuery);
        }

        function banner() {
            (function($) {
                // jQuery Banner Index
                var slider = new MasterSlider();

                slider.control('arrows' ,{insertTo:'#masterslider-index'});
                slider.control('bullets');

                slider.setup('masterslider-index' , {
                    width:1366,
                    height:768,
                    space:5,
                    view:'basic',
                    layout:'fullscreen',
                    fullscreenMargin:0,
                    loop:true,
                    speed:70
                });
                // End jQuery Banner Index 


                // adds Arrows navigation control to the slider.
                slider.control('arrows');
                slider.control('timebar' , {insertTo:'#masterslider'});
                slider.control('bullets');

                slider.setup('masterslider' , {
                    width:1400,    // slider standard width
                    height:768,   // slider standard height
                    space:1,
                    layout:'fullscreen',
                    loop:true,
                    preload:0,
                    fullscreenMargin:0,
                    autoplay:true

                });
                // End jQuery Banner Layer  
            })(jQuery);
        }

        function template() {
            (function ($) {
                var html = '';
                var widthBox = $('#boxOpenTime').width();
                $('.img-box-right-border').css('border-left-width', widthBox + 'px');

                    $(window).resize(function () {
                        widthBox = $('#boxOpenTime').width();
                        $('.img-box-right-border').css('border-left-width', widthBox + 'px');
                    });
                    $('a[href=#top]').click(function () {
                        $('html, body').animate({
                            scrollTop : 0
                        }, 'slow');
                        return false;
                    });

                    $('#to-bottom').click(function () {
                        $('html, body').animate({
                            scrollTop : $(this).offset().top
                        }, 'slow');
                        return false;

                    });
                    $('#select-demo').click(function () {
                        $('html, body').animate({
                            scrollTop : $('#to-bottom').offset().top
                        }, 'slow');
                        return false;

                    });

                    $('.about-con').each(function () {
                        if ($(this).index() == 1) {
                            $(this).addClass('block-item-special');
                        }
                    });

                    $('.about-con').hover(function () {
                        if (!$(this).hasClass('block-item-special') && !$(this).hasClass('blockItemFirst')) {
                            $('.block-item-special').removeClass('block-item-special');
                            $(this).addClass('block-item-special');
                        }
                    });

                    $('.img-class').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.content-main-right .title-men, .content-main-right .desc-content, .content-main-right .join').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(400 * index + 700).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        }, {
                            offset : '100%'
                        });
                    });
                    $('.content-main-left .title-men, .content-main-left .desc-content, .content-main-left .join').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(400 * index + 700).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.title-about').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_from_top');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.box-right').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(400 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.box-left').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(400 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.timetable').waypoint(function () {
                        $('.title-time, .octember, .monday, .tuesday, .wednesday , .thursday, .friday , .saturday, .sunday').each(function (index) {
                            $(this).delay(500 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_top');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.demos-home').waypoint(function () {
                        $('.demos-content').each(function (index) {
                            $(this).delay(500 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_top');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.banner-text').waypoint(function () {
                        $('.athlete-html, .athlete-welcome, .athlete-desc, .link-to').each(function (index) {
                            $(this).delay(500 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_top');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.image-price-right, .image-price-left, .boxing-card-content, .yoga-card-content').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center_img');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.ch-info-wrap, .success').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_title');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.fit-strong-left').waypoint(function () {
                        $('.fit-strong-text, .fit-strong-sub, .fit-strong-bottom').each(function (index) {
                            $(this).delay(600 * index).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_title');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.fit-strong-right, .img-box-right').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(600 * index + 1000).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_title');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.img-box-right').waypoint(function () {
                        $('.img-box, .open-hour, .text-box').each(function (index) {
                            $(this).delay(600 * index + 2000).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_title');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.facts-page').waypoint(function () {
                        $('.title-facts').each(function (index) {
                            $(this).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_title');
                            });
                        });

                        var counter = 0;
                        $('.facts-content .count span').each(function(){
                            var el = this;
                            counter++;
                            var y = parseInt($(el).html());
                            setTimeout(function(){
                                $({someValue: 0}).animate({someValue: y}, {
                                    duration: 2000,
                                    easing:'swing', // can be anything
                                    step: function() { // called on every step
                                        $(el).html(Math.round(this.someValue));
                                    },
                                    complete:function(){
                                        $(el).html(y);
                                    }
                                });
                            },1000 * counter);
                        });

                    }, {
                        offset : '100%'
                    });

                    $('.facts-page').waypoint(function () {
                        $('.facts-content').each(function (index) {
                            $(this).delay(600 * index + 2000).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.introduction').waypoint(function () {
                        $('.intro-content').each(function (index) {
                            $(this).delay(1000 * index + 2000).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_title');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.masonry-small, .masonry-lagar').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(300 * index + 500).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center');
                            });
                        }, {
                            offset : '100%'
                        });
                    });

                    $('.product-store').waypoint(function () {
                        $('.product-store .product-image-wrapper').each(function (index) {
                            $(this).delay(500 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_fadein_top');
                            });
                        });
                    }, {
                        offset : '100%'
                    });

                    $('.sport-box').each(function (index) {
                        $(this).waypoint(function () {
                            $(this).delay(500 * index + 650).animate({
                                width : "auto"
                            }, 0, function () {
                                $(this).addClass('move_to_center_img');
                            });
                        }, {
                            offset : '100%'
                        });
                    });


                window.showEvent = function(id) {
                    $('.calendar-details').hide();
                    $('.calendar-active.active').removeClass('active');
                    $('#' + id + '-pop').show("slow");
                    $('#' + id).addClass('active');
                }
                $('.calendar-note').mouseleave(function () {
                    $('.calendar-details').hide();
                    $('.calendar-active.active').removeClass('active');
                });

                $('#contents-main .scroll-to').each(function (index) {
                    $(this).waypoint(function (direction) {
                        if (direction === 'down') {
                            $('.header').removeClass('alt');
                        } else if (direction === 'up') {
                            $('.header').addClass('alt');
                        }
                    }, {
                        offset : '100%'
                    });

                });

                $('#load-more-trainer').click(function () {
                    $.ajax({
                        type : "GET",
                        url : 'ajax-trainer.html',
                        cache : false,
                        success : function (transport) {
                            if (html != transport) {
                                html = transport;
                                var $moreBlocks = $(transport).filter('.our-trainer-box');
                                $('#our-trainers').append($moreBlocks);
                            }
                        }
                    });
                });

                $('#load-more-listing').click(function () {
                    $.ajax({
                        type : "GET",
                        url : 'ajax-listing-grid.html',
                        cache : false,
                        success : function (transport) {
                            if (html != transport) {
                                html = transport;
                                var $moreBlocks = $(transport).filter('.listing-grid');
                                $('#our-listing-grid').append($moreBlocks);
                            }
                        }
                    });
                });
                $('.owl-page').click(function () {
                    var owl1 = $('#carousel-text').data('owlCarousel');
                    var owl2 = $('#carousel-image').data('owlCarousel');
                    $('.owl-page').removeClass('active');
                    $(this).addClass('active');
                    owl1.goTo($(this).attr('data-page'));
                    owl2.goTo($(this).attr('data-page'));
                });
                function showproduct() {
                    var url = 'product-detail.html';
                    window.location.href = url;
                }
                var heightW = $(window).height();
                $('#contents-main').css('margin-top', heightW + 'px');
                $(window).resize(function () {
                    var heightW = $(window).height();
                    $('#contents-main').css('margin-top', heightW + 'px');
                });

                /** PARALLAX LAYERS EFFECT FOR WELCOME PAGE**/
                if (typeof Parallax !== 'undefined') {
                    $('#scene .layer-bg').css({
                        height : ($(window).height() + 400) + 'px',
                        width : ($(window).width() + 400) + 'px'
                    });
                    $(window).resize(function () {
                        $('#scene .layer-bg').css({
                            height : ($(window).height() + 400) + 'px',
                            width : ($(window).width() + 400) + 'px'
                        });
                    })
                    new Parallax(document.getElementById('scene'));
                }

                /** PANEL FUNCTION **/
                var colorSetting = '';
                var defaultSetting = '';
                var timeout = 0;

                function panelSetting() {
                    $('.color-setting button').each(function () {
                        if (this.value[0] == '#') {
                            $(this).css('background-color', this.value);
                        } else {
                            $(this).css('background', 'url(' + this.value + ')');
                        }
                    });
                    $('body').append('<style type="text/css" id="color-setting"></style>');
                    panelAddOverlay();
                    panelBindEvents();
                    panelLoadSetting();

                }
                function panelBindEvents() {
                    var clickOutSite = true;
                    $('.panel-button').click(function () {
                        if (!$(this).hasClass('active')) {
                            $(this).addClass('active');
                            $('.panel-content').show().animate({
                                'margin-left' : 0
                            }, 400, 'easeInOutExpo');
                        } else {
                            $(this).removeClass('active');
                            $('.panel-content').animate({
                                'margin-left' : '-240px'
                            }, 400, 'easeInOutExpo', function () {
                                $('.panel-content').hide()
                            });
                        }
                        clickOutSite = false;
                        setTimeout(function () {
                            clickOutSite = true;
                        }, 100);
                    });
                    $('.panel-content').click(function () {
                        clickOutSite = false;
                        setTimeout(function () {
                            clickOutSite = true;
                        }, 100);
                    });
                    $(document).click(function () {
                        if (clickOutSite && $('.panel-button').hasClass('active')) {
                            $('.panel-button').trigger('click');
                        }
                    });

                    $('.layout-setting button').click(function () {
                        if (!$(this).hasClass('active')) {
                            $('.layout-setting button').removeClass('active');
                            $(this).addClass('active');
                            panelAddOverlay();
                            panelWriteSetting();
                            $(window).resize();
                        }
                    });
                    $('.background-setting button').click(function () {
                        if($('.layout-setting button.active').val()=='wide'){
                            return;
                        }
                        if (!$(this).hasClass('active')) {
                            $('.background-setting button').removeClass('active');
                            $(this).addClass('active');
                            if (this.value[0] == '#') {
                                $('body').css('background', this.value);
                            } else {
                                $('body').css('background', 'url(' + this.value + ')');
                            }
                            panelWriteSetting();
                        }
                    });
                    $('.sample-setting button').click(function () {
                        if (!$(this).hasClass('active')) {
                            $('.sample-setting button').removeClass('active');
                            $(this).addClass('active');
                            var newColorSetting = colorSetting.replace(/#ec3642/g, this.value);
                            $('#color-setting').html(newColorSetting);
                            panelWriteSetting();
                        }
                    });
                    $('.reset-button button').click(function () {
                        panelApplySetting(defaultSetting);
                        setCookie('layoutsetting', '');
                    });


                    $('.my-cart').click(function () {
                        if (!$(this).hasClass('active')) {
                            $(this).addClass('active');
                            $('.icon-cart .carts-store').show().animate({
                                'margin-right' : 0
                            }, 400, 'easeInOutExpo');
                        } else {
                            $(this).removeClass('active');
                            $('.icon-cart .carts-store').animate({
                                'margin-right' : '-301px'
                            }, 400, 'easeInOutExpo', function () {
                                $('.icon-cart .carts-store').hide()
                            });
                        }
                        clickOutSite = false;
                        setTimeout(function () {
                            clickOutSite = true;
                        }, 100);
                    });
                    $('.icon-cart .carts-store').click(function () {
                        clickOutSite = false;
                        setTimeout(function () {
                            clickOutSite = true;
                        }, 100);
                    });
                    $(document).click(function () {
                        if (clickOutSite && $('.my-cart').hasClass('active')) {
                            $('.my-cart').trigger('click');
                        }
                    });

                    $('.my-wishlist').click(function () {
                        if (!$(this).hasClass('active')) {
                            $(this).addClass('active');
                            $('.icon-wishlist .wishlists-store').show().animate({
                                'margin-right' : 0
                            }, 400, 'easeInOutExpo');
                        } else {
                            $(this).removeClass('active');
                            $('.icon-wishlist .wishlists-store').animate({
                                'margin-right' : '-301px'
                            }, 400, 'easeInOutExpo', function () {
                                $('.icon-wishlist .wishlists-store').hide()
                            });
                        }
                        clickOutSite = false;
                        setTimeout(function () {
                            clickOutSite = true;
                        }, 100);
                    });
                    $('.icon-wishlist .wishlists-store').click(function () {
                        clickOutSite = false;
                        setTimeout(function () {
                            clickOutSite = true;
                        }, 100);
                    });
                    $(document).click(function () {
                        if (clickOutSite && $('.my-wishlist').hasClass('active')) {
                            $('.my-wishlist').trigger('click');
                        }
                    });

                }
                function panelAddOverlay() {
                    if ($('.layout-setting .active').hasClass('boxed')) {
                        $('.overlay-setting').removeClass('disabled');
                        $('body').addClass('body-boxed');
                    } else {
                        $('.overlay-setting').addClass('disabled');
                        $('body').removeClass('body-boxed');
                    }

                }
                function panelLoadSetting() {
                    // remember default setting
                    defaultSetting = {
                        layout : $('.layout-setting button.active').val(),
                        mainColor : $('.sample-setting button.active').val(),
                        bgColor : $('.background-setting button.active').val()
                    }
                    // apply activated setting
                    var activeSetting = getCookie('layoutsetting');
                    if (activeSetting) {
                        activeSetting = JSON.parse(activeSetting);
                        panelApplySetting(activeSetting);
                    }
                }
                function panelApplySetting(setting) {
                    $('.layout-setting button').each(function () {
                        if (setting.layout == this.value) {
                            $(this).trigger('click');
                        }
                    });
                    $('.sample-setting button').each(function () {
                        if (setting.mainColor == this.value) {
                            $(this).trigger('click');
                        }
                    });
                    $('.background-setting button').each(function () {
                        if (setting.bgColor == this.value) {
                            $(this).trigger('click');
                        }
                    });
                }
                function panelWriteSetting() {
                    var activeSetting = {
                        layout : $('.layout-setting button.active').val(),
                        mainColor : $('.sample-setting button.active').val(),
                        bgColor : $('.background-setting button.active').val()
                    }
                    setCookie('layoutsetting', JSON.stringify(activeSetting), 0);
                }

                /** CONTACT FORM **/
                $('.main-contact-form').submit(function (e) {
                    $.ajax({
                        type : "POST",
                        url : 'contact.php',
                        data : $(this).serialize(),
                        dataType : "json",
                        success : function (result) {
                            if (result.status) {
                                $('.btn-submit').addClass('btn-success');
                            } else {
                                $('.btn-submit').addClass('btn-error');

                            }
                            setTimeout(function () {
                                //$('.btn-submit').removeClass('btn-error');
                                //$('.btn-submit').removeClass('btn-success');
                            }, 1000);
                        }
                    });
                    e.preventDefault();
                });
                $('.main-contact-form input,.main-contact-form textarea').focus(function () {
                    $('.btn-submit').removeClass('btn-error');
                    $('.btn-submit').removeClass('btn-success');
                })
                /** COOKIE FUNCTION */
                function setCookie(cname, cvalue, exdays) {
                    var expires = "";
                    if(exdays){
                        var d = new Date();
                        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                        expires = " expires=" + d.toUTCString();
                    }
                    document.cookie = cname + "=" + cvalue + ";" + expires;
                }
                function getCookie(cname) {
                    var name = cname + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ')
                            c = c.substring(1);
                        if (c.indexOf(name) == 0)
                            return c.substring(name.length, c.length);
                    }
                    return "";
                }
            })(jQuery);
        }

        function theme() {
            (function($){
                "use strict";

                $(function(){

                    var Core = {

                        initialized : false,

                        initialize : function(){

                            if(this.initialized) return;
                            this.initialized = true;

                            this.build();

                        },

                        build : function(){

                            this.plugins();
                            this.animations();

                            if($('.progress-indicator').length) this.events.progressBars();
                        },

                        sliders : function(){

                            // collection of the slider elements

                            var sliderCollection = ['.r_slider','#layerslider','#layerslider_video','.flexslider','.iosslider'],
                                haveSlider = false;

                            for(var i = 0; i < sliderCollection.length;i++){
                                if($(sliderCollection[i]).length) haveSlider = true;
                            }
                            if(!haveSlider) return false;

                            // revolution

                            if($(sliderCollection[0]).length){
                                var api = $(sliderCollection[0]).revolution({
                                    delay:5000,
                                    startwidth:1170,
                                    startheight:500,
                                    hideThumbs:0,
                                    fullWidth:"on",
                                    hideTimerBar:"on",
                                    soloArrowRightHOffset:30,
                                    soloArrowLeftHOffset:30,
                                    shadow:0
                                });

                                api.bind('revolution.slide.onloaded',function(){
                                    $(sliderCollection[0]).parent().find('.tp-leftarrow,.tp-rightarrow')
                                        .addClass('color_light icon icon_wrap_size_3 circle tr_all');
                                });
                                $(sliderCollection[0]).parent().find('.tp-bullets').remove();
                            }


                        },

                        plugins : function(){

                            // plugins collection

                            var pluginsCollection = ['.tabs','.accordion','#calendar','.jackbox[data-group]','.tweets','#countdown','#dribbble_feed','#price','.thumbnails_carousel','#img_zoom'],
                                havePlugin = false;

                            for(var i = 0; i < pluginsCollection.length;i++){
                                if($(pluginsCollection[i]).length) havePlugin = true;
                            }

                            this.owlCarousel();
                            this.isotope();

                            if(!havePlugin) return false;

                            if($(pluginsCollection[3]).length){
                                $(pluginsCollection[3]).jackBox("init",{
                                    showInfoByDefault: false,
                                    preloadGraphics: true,
                                    fullscreenScalesContent: true,
                                    autoPlayVideo: true,
                                    flashVideoFirst: false,
                                    defaultVideoWidth: 960,
                                    defaultVideoHeight: 540,
                                    baseName: "plugins/jackbox",
                                    className: ".jackbox",
                                    useThumbs: true,
                                    thumbsStartHidden: false,
                                    thumbnailWidth: 75,
                                    thumbnailHeight: 50,
                                    useThumbTooltips: true,
                                    showPageScrollbar: false,
                                    useKeyboardControls: true
                                });
                            }

                        },

                        animations : function(){
                            // appear animatuion
                            $("[data-appear-animation]").each(function() {

                                var self = $(this);

                                self.addClass("appear-animation");

                                if($(window).width() > 767) {
                                    self.appear(function() {

                                        var delay = (self.attr("data-appear-animation-delay") ? self.attr("data-appear-animation-delay") : 1);

                                        if(delay > 1) self.css("animation-delay", delay + "ms");
                                        self.addClass(self.attr("data-appear-animation"));

                                        setTimeout(function() {
                                            self.addClass("appear-animation-visible");
                                        }, delay);

                                    }, {accX: 0, accY: -150});
                                } else {
                                    self.addClass("appear-animation-visible");
                                }
                            });
                        },

                        owlCarousel: function(options) {

                            var total = $("div.owl-carousel").length;

                            $("div.owl-carousel").each(function() {

                                var slider = $(this),
                                    buttonClass = slider.data('nav');

                                var defaults = {
                                    // Most important owl features
                                    items : 5,
                                    itemsCustom : false,
                                    itemsDesktop : [1199,4],
                                    itemsDesktopSmall : [980,3],
                                    itemsTablet: [768,2],
                                    itemsTabletSmall: false,
                                    itemsMobile : [479,1],
                                    singleItem : true,
                                    itemsScaleUp : false,

                                    //Basic Speeds
                                    slideSpeed : 500,
                                    paginationSpeed : 800,
                                    rewindSpeed : 1000,

                                    //Autoplay
                                    autoPlay : false,
                                    stopOnHover : false,

                                    // Navigation
                                    navigation : false,
                                    navigationText : ["<i class=\"icon icon-chevron-left\"></i>","<i class=\"icon icon-chevron-right\"></i>"],
                                    rewindNav : true,
                                    scrollPerPage : false,

                                    //Pagination
                                    pagination : false,
                                    paginationNumbers: false,

                                    // Responsive
                                    responsive: true,
                                    responsiveRefreshRate : 200,
                                    responsiveBaseWidth: window,

                                    // CSS Styles
                                    baseClass : "owl-carousel",
                                    theme : "owl-theme",

                                    //Lazy load
                                    lazyLoad : false,
                                    lazyFollow : true,
                                    lazyEffect : "fade",

                                    //Auto height
                                    autoHeight : false,

                                    //JSON
                                    jsonPath : false,
                                    jsonSuccess : false,

                                    //Mouse Events
                                    dragBeforeAnimFinish : true,
                                    mouseDrag : true,
                                    touchDrag : true,

                                    //Transitions
                                    transitionStyle : false,

                                    // Other
                                    addClassActive : false,

                                    //Callbacks
                                    beforeUpdate : false,
                                    afterUpdate : false,
                                    beforeInit: false,
                                    afterInit: false,
                                    beforeMove: false,
                                    afterMove: false,
                                    afterAction: false,
                                    startDragging : false,
                                    afterLazyLoad : false
                                }
                                var config = $.extend({}, defaults, options, slider.data("plugin-options"));
                                // Initialize Slider
                                slider.owlCarousel(config).addClass("owl-carousel-init");

                                // subscribe filter event
                                if(slider.hasClass('wfilter_carousel')) Core.events.filterCarousel(slider,$('[data-carousel-filter]'));

                                $('.'+buttonClass+'next').on('click',function(){
                                    slider.trigger('owl.next');
                                });

                                $('.'+buttonClass+'prev').on('click',function(){
                                    slider.trigger('owl.prev');
                                });

                                if(slider.data('plugin-options') != undefined && slider.data('plugin-options').pagination){
                                    if(slider.hasClass('brands')){
                                        slider.find('.owl-controls').addClass('d_inline_b');
                                        return;
                                    }
                                    slider.find('.owl-controls')
                                        .appendTo(slider.next().find('.clients_pags_container'));
                                }
                                if(slider.hasClass('banners_carousel')) slider.find('.owl-controls').addClass('wrapper d_inline_b m_top_10');


                            });
                        },

                        isotope : function(){
                            var cthis = this;
                            $('[data-isotope-options]').each(function(){

                                var self = $(this),
                                    options = self.data('isotope-options');

                                self.isotope(options);

                                cthis.events.sortIsotope(self);
                                cthis.events.loadMoreIsotope(self,options.itemSelector);

                            });
                        },

                        events : {
                            filterCarousel : function(carousel, filterUL){

                                var elements = [],
                                    item = carousel.find('.wfcarousel_item'),
                                    len = item.length,
                                    counter = 0;

                                for(var i = 0; i < len; i++){
                                    elements.push(item.eq(i)[0].outerHTML);
                                }

                                filterUL.on('click','a',function(e){

                                    e.preventDefault();
                                    counter++;

                                    var self = $(this),
                                        activeElem = self.data('filter-c-item');

                                    carousel.addClass('changed').find('.owl-wrapper').animate({
                                        opacity : 0
                                    },function(){

                                        var s = $(this);
                                        carousel.children().remove();

                                        if(activeElem == "*"){
                                            $.each(elements,function(i,v){
                                                carousel.append(v);
                                            });
                                        }else{
                                            $.each(elements,function(i,v){
                                                if(v.indexOf(activeElem) !== -1){
                                                    carousel.append(v);
                                                }
                                            });
                                        }

                                        carousel.data('owlCarousel').destroy();
                                        carousel.owlCarousel({
                                            itemsCustom: [[992,4],[768,3],[450,2],[10,1]],
                                            pagination:false,
                                            slideSpeed:500,
                                            afterInit: function(){
                                                carousel.addClass('no_children_animate');
                                            }
                                        });
                                        carousel.find("[data-group]").attr("data-group","filter_group" + counter).jackBox("newItem");
                                    });

                                    self.closest('li').addClass('active').siblings().removeClass('active');

                                });
                            },

                            loadMoreIsotope : function(container,item){
                                var loadMore = $('#load-more'),
                                // filter classes array
                                    sortItem = $('.sort').find('[data-filter]'),
                                    sortClasses = [];

                                for(var i = 1; i < sortItem.length;i++){
                                    sortClasses.push(sortItem.eq(i).data('filter').slice(1));
                                }

                                loadMore.on('click',function(e){

                                    var elems = [];

                                    for(var i = 0,l = Core.helpers.getRandom(2,5);i < l;i++){
                                        elems.push(Core.helpers.getNewRandomElement(sortClasses,container,item.slice(1)));
                                    }

                                    container.append(elems).isotope('appended', container.find(item+':not([style])').addClass( container.hasClass('home') ? 'added type_2' : 'added'));
                                    setTimeout(function(){
                                        container.isotope('layout');
                                        Core.simpleSlideshow();
                                    },100);

                                    jQuery.jackBox.available(function() {

                                        jQuery(".added").find("[data-category]").jackBox("newItem");

                                    });

                                    e.preventDefault();
                                });
                            },

                            selectButtons : function(){

                                var sButton = $('[class*="select_button"]');

                                sButton.on('click',function(e){
                                    e.preventDefault();

                                    var self = $(this),
                                        container = self.attr('href'),
                                        offset = $(container).offset().top;

                                    $('html,body').animate({
                                        scrollTop : offset - 58
                                    },1000,'easeInOutCirc');

                                });

                            },

                            progressBars : function(){

                                var item = $('.progress-indicator'),
                                    container = item.closest('ul');
                                if(!item.length) return;

                                function scrollPage(){
                                    var offset = container.offset().top;
                                    if($(window).scrollTop() > (offset - 700) && !(container.hasClass('counted'))){
                                        item.each(function(i){
                                            container.addClass('counted');

                                            var self = $(this),
                                                value = +self.data('value'),
                                                indicator = self.children('div');

                                            setTimeout(function(){
                                                indicator.animate({
                                                    'width': value + '%'
                                                },1000,'easeInCubic');
                                            },i * 100);

                                        });
                                    }
                                }
                                scrollPage();

                                $(window).on('scroll',scrollPage);
                            },
                        }
                    }

                    Core.initialize();
                });
            })(jQuery);
        }

        function menu() {
            (function() {
                "use strict";
                var bodyEl = document.body,
                    content = document.querySelector( '.content-wrapper' ),
                    openbtn = document.getElementById( 'open-button' ),
                    closebtn = document.getElementById( 'close-button' ),
                    isOpen = false;

                function init() {
                    initEvents();
                }

                function initEvents() {
                    openbtn.addEventListener( 'click', toggleMenu );
                    if( closebtn ) {
                        closebtn.addEventListener( 'click', toggleMenu );
                    }

                    // close the menu element if the target itÂ´s not the menu element or one of its descendants..
                    content.addEventListener( 'click', function(ev) {
                        var target = ev.target;
                        if( isOpen && target !== openbtn ) {
                            toggleMenu();
                        }
                    } );
                }

                function toggleMenu() {
                    if( isOpen ) {
                        classie.remove( bodyEl, 'show-menu' );
                    }
                    else {
                        classie.add( bodyEl, 'show-menu' );
                    }
                    isOpen = !isOpen;
                }

                init();

            })();
        }
    }

})();
