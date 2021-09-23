/*
Template: Hope-Ui - Responsive Bootstrap 4 Admin Dashboard Template
Author: iqonic.design
Design and Developed by: iqonic.design
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

------- Plugin Init --------

:: Sidebar Setting

: Sidebar Type
: Color
: Item Design
------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {
    "use strict";

    const rtlModeDefault = (check) => {
        if (check) {
            $('.offcanvas-start').addClass('on-rtl start').removeClass('offcanvas-start')
            $('.offcanvas-end').addClass('on-rtl end').removeClass('offcanvas-end')
            $('.on-rtl.start').addClass('offcanvas-end').removeClass('start')
            $('.on-rtl.end').addClass('offcanvas-start').removeClass('end')
        } else {
            $('.offcanvas-start').addClass('on-rtl start').removeClass('offcanvas-start')
            $('.offcanvas-end').addClass('on-rtl end').removeClass('offcanvas-end')
            $('.on-rtl.start').addClass('offcanvas-end').removeClass('start')
            $('.on-rtl.end').addClass('offcanvas-start').removeClass('end')
        }
    }

    const updateMode = () => {
        document.addEventListener('ChangeMode',(e) => {
            if (e.detail.rtl === 'rtl' || e.detail.rtl === 'ltr') {
                rtlModeDefault(true)
            }
        })
    }
    updateMode()
    if (document.querySelector('html').getAttribute('dir') === 'rtl') {
        rtlModeDefault(true)
    }

    const colorMode = document.querySelectorAll('[data-setting="color-mode"][data-name="color"]')
    Array.from(colorMode, (mode) => {
        mode.addEventListener('click', (e) => {
            Array.from(colorMode, (el) => {
                el.classList.remove('active')
                document.querySelector('body').classList.remove(el.getAttribute('data-value'))
            })
            mode.classList.add('active')
            document.querySelector('body').classList.add(mode.getAttribute('data-value'))
        })
    })

    const dirMode = document.querySelectorAll('[data-setting="dir-mode"][data-name="dir"]')
    Array.from(dirMode, (mode) => {
        mode.addEventListener('click', (e) => {
            if (!mode.classList.contains('active')) {
                Array.from(dirMode, (el) => {
                    el.classList.remove('active')
                    document.querySelector('html').setAttribute('dir', el.getAttribute('data-value'))
                })
                mode.classList.add('active')
                document.querySelector('html').setAttribute('dir',mode.getAttribute('data-value'))
                const event = new CustomEvent("ChangeMode", {detail: {rtl: mode.getAttribute('data-value')} });
                document.dispatchEvent(event);
            }
        })
    })

    const sidebarTypes = document.querySelectorAll('[data-setting="sidebar"][data-name="sidebar-type"]')
    Array.from(sidebarTypes, (sidebarType) => {
        sidebarType.addEventListener('click', (e) => {
            if (sidebarType.classList.contains('active')) {
                sidebarType.classList.remove('active')
                document.querySelector('.sidebar-default').classList.remove(sidebarType.getAttribute('data-value'))
                if (sidebarType.getAttribute('data-extra-value') !== null) {
                    document.querySelector('.sidebar-default').classList.remove(sidebarType.getAttribute('data-extra-value'))
                    document.querySelector(`[data-value="${sidebarType.getAttribute('data-extra-value')}"]`).classList.remove('active')
                }
            } else {
                sidebarType.classList.add('active')
                document.querySelector('.sidebar-default').classList.add(sidebarType.getAttribute('data-value'))
                if (sidebarType.getAttribute('data-extra-value') !== null) {
                    document.querySelector('.sidebar-default').classList.add(sidebarType.getAttribute('data-extra-value'))
                    document.querySelector(`[data-value="${sidebarType.getAttribute('data-extra-value')}"]`).classList.add('active')
                }
            }
        })
    })

    const allColorsTypes = document.querySelectorAll('[data-setting="sidebar"][data-name="sidebar-color"]')
    Array.from(allColorsTypes, (colorType) => {
        colorType.addEventListener('click', (e) => {
            Array.from(allColorsTypes, (el) => {
                el.classList.remove('active')
                document.querySelector('.sidebar-default').classList.remove(el.getAttribute('data-value'))
            })
            colorType.classList.add('active')
            document.querySelector('.sidebar-default').classList.add(colorType.getAttribute('data-value'))
        })
    })

    const allActiveType = document.querySelectorAll('[data-setting="sidebar"][data-name="sidebar-item"]')
    Array.from(allActiveType, (activeType) => {
        activeType.addEventListener('click', (e) => {
            Array.from(allActiveType, (el) => {
                el.classList.remove('active')
                document.querySelector('.sidebar-default').classList.remove(el.getAttribute('data-value'))
            })
            activeType.classList.add('active')
            document.querySelector('.sidebar-default').classList.add(activeType.getAttribute('data-value'))
        })
    })

    const allNavbarType = document.querySelectorAll('[data-setting="navbar"][data-name="navbar-type"]')
    Array.from(allNavbarType, (navbarType) => {
        navbarType.addEventListener('click', (e) => {
            Array.from(allNavbarType, (el) => {
                el.classList.remove('active')
                document.querySelector(el.getAttribute('data-target')).classList.remove(el.getAttribute('data-value'))
            })
            navbarType.classList.add('active')
            document.querySelector(navbarType.getAttribute('data-target')).classList.add(navbarType.getAttribute('data-value'))
        })
    })

    const defaultNavbarType = document.querySelector('[data-setting="navbar"][data-name="navbar-default"]')
    if (defaultNavbarType !== null) {
        defaultNavbarType.addEventListener("click", (e) => {
            document.querySelector('.iq-navbar').classList.remove('nav-glass','navs-sticky', 'navs-transparent')
            document.querySelector('.iq-navbar-header').classList.remove('navs-bg-color')
        })
    }

})(jQuery)