/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function($) {
    "use strict";
    var bodyEl = document.body,
        content = document.querySelector('.content-wrapper'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false,
        mobileMenu = $('#mobileMenu li');

    function init() {
        setTimeout(function() {
            bodyEl = document.body;
            content = document.querySelector('.content-wrapper');
            openbtn = document.getElementById('open-button');
            closebtn = document.getElementById('close-button');
            isOpen = false;
            mobileMenu = $('#mobileMenu li');
            initEvents();
        }, 1000);
    }

    function initEvents() {

        if (openbtn) {
            openbtn.addEventListener('click', toggleMenu);
        }

        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        if (content) {
            // close the menu element if the target it´s not the menu element or one of its descendants..
            content.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleMenu();
                }
            });
        }

        if (mobileMenu) {
			console.log('mobile menu loaded!', mobileMenu);
            mobileMenu.click(function(ev) {
                var target = ev.target;
            });
        }

    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        } else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    init();


})(jQuery);
