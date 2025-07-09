// ------------------------------------------------
// Project Name: Braxton - Personal Portfolio & Resume HTML Template
// Project Description: Show yourself brightly with Braxton - unique and creative portfolio and resume template!
// Tags: mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean
// Version: 1.0.0
// Build Date: March 2024
// Last Update: March 2024
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: app.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  01. Loader & Loading Animation
//  02. Bootstrap Scroll Spy Plugin Settings
//  03. Lenis Scroll Plugin
//  04. Parallax
//  05. Scroll Animations
//  06. Smooth Scrolling
//  07. Swiper Slider
//  08. Contact Form
//  09. Modernizr SVG Fallback
//  10. Chrome Smooth Scroll
//  11. Images Moving Ban
//  12. Detecting Mobile/Desktop
//  13. PhotoSwipe Gallery Images Replace
//  14. Color Switch
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function () {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  const content = document.querySelector('body');
  const imgLoad = imagesLoaded(content);

  imgLoad.on('done', (instance) => {
    document.getElementById('loaderContent').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('loader').classList.add('loaded');
    }, 300);

    gsap.set('.animate-headline', { y: 50, opacity: 0 });
    ScrollTrigger.batch('.animate-headline', {
      interval: 0.1,
      batchMax: 4,
      duration: 6,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          ease: 'sine',
          stagger: { each: 0.15, grid: [1, 4] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
    });
  });
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Bootstrap Scroll Spy Plugin Settings Start
  // --------------------------------------------- //
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#menu',
    smoothScroll: true,
    rootMargin: '0px 0px -40%',
  });
  // --------------------------------------------- //
  // Bootstrap Scroll Spy Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Lenis Scroll Plugin Start
  // --------------------------------------------- //
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // --------------------------------------------- //
  // Lenis Scroll Plugin End
  // --------------------------------------------- //

  // ------------------------------------------------------------------------------ //
  // Parallax (apply parallax effect to any element with a data-speed attribute) Start
  // ------------------------------------------------------------------------------ //
  gsap.to('[data-speed]', {
    y: (i, el) =>
      (1 - parseFloat(el.getAttribute('data-speed'))) *
      ScrollTrigger.maxScroll(window),
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: 0,
    },
  });
  // --------------------------------------------- //
  // Parallax End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Scroll Animations Start
  // --------------------------------------------- //
  // Animation In Up
  const animateInUp = document.querySelectorAll('.animate-in-up');
  animateInUp.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
        ease: 'sine',
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Animation Rotation
  const animateRotation = document.querySelectorAll('.animate-rotation');
  animateRotation.forEach((section) => {
    var value = $(section).data('value');
    gsap.fromTo(
      section,
      {
        ease: 'sine',
        rotate: 0,
      },
      {
        rotate: value,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Animation Cards Stack
  // Grid 2x
  gsap.set('.animate-card-2', { y: 100, opacity: 0 });
  ScrollTrigger.batch('.animate-card-2', {
    interval: 0.1,
    batchMax: 2,
    duration: 6,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        ease: 'sine',
        stagger: { each: 0.15, grid: [1, 2] },
        overwrite: true,
      }),
    onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
  });

  // Grid 3x
  gsap.set('.animate-card-3', { y: 50, opacity: 0 });
  ScrollTrigger.batch('.animate-card-3', {
    interval: 0.1,
    batchMax: 3,
    duration: 3,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        ease: 'sine',
        stagger: { each: 0.15, grid: [1, 3] },
        overwrite: true,
      }),
    onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
  });

  // Grid 5x
  gsap.set('.animate-card-5', { y: 50, opacity: 0 });
  ScrollTrigger.batch('.animate-card-5', {
    interval: 0.1,
    batchMax: 5,
    delay: 1000,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        ease: 'sine',
        stagger: { each: 0.15, grid: [1, 5] },
        overwrite: true,
      }),
    onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
  });

  ScrollTrigger.addEventListener('refreshInit', () =>
    gsap.set('.animate-card-2', { y: 0, opacity: 1 })
  );
  ScrollTrigger.addEventListener('refreshInit', () =>
    gsap.set('.animate-card-3', { y: 0, opacity: 1 })
  );
  ScrollTrigger.addEventListener('refreshInit', () =>
    gsap.set('.animate-card-5', { y: 0, opacity: 1 })
  );
  // --------------------------------------------- //
  // Scroll Animations End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scrolling Start
  // --------------------------------------------- //
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                return false;
              } else {
                $target.attr('tabindex', '-1');
                $target.focus();
              }
            }
          );
        }
      }
    });
  // --------------------------------------------- //
  // Smooth Scrolling End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  const toolsSlider = document.querySelector('tools-slider');
  const testimonialsSlider = document.querySelector('testimonials-slider');

  if (!toolsSlider) {
    const swiper = new Swiper('.swiper-tools', {
      spaceBetween: 20,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  if (!toolsSlider) {
    const swiper = new Swiper('.swiper-testimonials', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: true,
      speed: 1000,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $('#contact-form').submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.form__reply').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.contact').find('.form__reply').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger('reset');
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Modernizr SVG Fallback Start
  // --------------------------------------------- //
  if (!Modernizr.svg) {
    $("img[src*='svg']").attr('src', function () {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }
  // --------------------------------------------- //
  // Modernizr SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if ($('html').hasClass('chrome')) {
      $.smoothScroll();
    }
  } catch (err) {}
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $('img, a').on('dragstart', function (event) {
    event.preventDefault();
  });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Detecting Mobile/Desktop Start
  // --------------------------------------------- //
  var isMobile = false;
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $('html').addClass('touch');
    isMobile = true;
  } else {
    $('html').addClass('no-touch');
    isMobile = false;
  }
  //IE, Edge
  var isIE =
    /MSIE 9/i.test(navigator.userAgent) ||
    /rv:11.0/i.test(navigator.userAgent) ||
    /MSIE 10/i.test(navigator.userAgent) ||
    /Edge\/\d+/.test(navigator.userAgent);
  // --------------------------------------------- //
  // Detecting Mobile/Desktop End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace Start
  // --------------------------------------------- //
  $('.gallery__link').each(function () {
    $(this)
      .append('<div class="picture"></div>')
      .children('.picture')
      .css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
  });
  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace End
  // --------------------------------------------- //
});

// --------------------------------------------- //
// Color Switch Start
// --------------------------------------------- //
const themeBtn = document.querySelector('.color-switcher');
const langSwitcher = document.getElementById('lang-switcher');

const svgEnglishLang = `
<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 300 159">
          <g fill="none">
            <path fill="#fff" d="M0 .552h300v157.895H0z" />
            <path fill="#b22234"
              d="M0 .552h300v12.146H0zm0 24.292h300V36.99H0zm0 24.291h300v12.146H0zm0 24.292h300v12.146H0zm0 24.291h300v12.146H0zm0 24.292h300v12.146H0zm0 24.291h300v12.146H0z" />
            <path fill="#3c3b6e" d="M0 .552h120v85.02H0z" />
            <path fill="#fff"
              d="m5.638 7.454l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.859 2.077l-1.092-3.361l2.858-2.077H31.25l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.091-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm-89.527 8.527l2.859 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.36l2.859-2.077h-3.534l-1.091-3.361l-1.092 3.361zm19.895 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.859 2.077l-1.092 3.36L60 19.341l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533L60 12.62l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.36l2.859-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.894 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.091 3.361zM5.638 24.507l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.859 2.077l-1.092-3.361l2.858-2.077H31.25l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.091-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm-89.281 8.555l2.858 2.077l-1.091 3.36l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.534l-1.091-3.361l-1.092 3.361zm19.894 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zM5.94 41.517l2.859 2.076l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.076l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.076l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.894 0l2.859 2.076l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.859-2.076h-3.534l-1.092-3.361l-1.091 3.361zm19.895 0l2.858 2.076l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.076l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zM6.127 58.299l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.092-3.36l-1.091 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zM5.884 75.279l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077H11.6l-1.091-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077H51.39l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.092-3.36l-1.091 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zM15.89 49.824l2.858 2.077l-1.091 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.091-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.36l2.859-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.894 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.091-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zM15.831 66.777l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36z" />
          </g>
        </svg>
`;

const svgIndonesiaLang = `
<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 301 201"><g fill="none"><path fill="#ce1126" d="M.5.5h300v200H.5z"/><path fill="#fff" d="M.5 100.5h300v100H.5z"/></g></svg>
`;

function getCurrentTheme() {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  localStorage.getItem('template.theme')
    ? (theme = localStorage.getItem('template.theme'))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(':root');
  if (theme === 'light') {
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-moon-stars"></i>`;
  } else {
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-sun"></i>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
}

function setLanguage(lang) {
  fetch(`../lang/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      for (const key in translations) {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        const placeholders = document.querySelectorAll(
          `[data-i18n-placeholder="${key}"]`
        );

        elements.forEach((el) => {
          el.textContent = translations[key];
        });

        placeholders.forEach((el) => {
          el.setAttribute('placeholder', translations[key]);
        });
      }

      // Update SVG sesuai bahasa
      if (lang === 'en') {
        langSwitcher.innerHTML = svgEnglishLang;
      } else {
        langSwitcher.innerHTML = svgIndonesiaLang;
      }
    });
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('template.theme', `${theme}`);
  loadTheme(theme);
});

// Saat bahasa diubah
langSwitcher.addEventListener('click', () => {
  const currentLang = localStorage.getItem('lang') || 'en';
  const newLang = currentLang === 'en' ? 'id' : 'en';
  localStorage.setItem('lang', newLang);
  window.location.reload();
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());

  // localization
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});
// --------------------------------------------- //
// Color Switch End
// --------------------------------------------- //

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[name="Name"]').value.trim();
    const company = this.querySelector('input[name="Company"]').value.trim();
    const email = this.querySelector('input[name="E-mail"]').value.trim();
    const phone = this.querySelector('input[name="Phone"]').value.trim();
    const message = this.querySelector('textarea[name="Message"]').value.trim();

    const subject = encodeURIComponent('Project Discussion from ' + name);
    const body = encodeURIComponent(
      ` Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}

        Message:
        ${message}`
    );

    const mailtoLink = `mailto:irawanenrico@gmail.com?subject=${subject}&body=${body}`;

    // Trigger mailto
    const a = document.createElement('a');
    a.href = mailtoLink;
    a.target = '_blank';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Tampilkan reply box
    const replyBox = document.querySelector('.form__reply');
    replyBox.classList.add('is-visible');

    // Kosongkan semua field input dan textarea
    this.reset();

    setTimeout(() => {
      replyBox.classList.remove('is-visible');
    }, 5000); // hilang setelah 5 detik
  });

document
  .getElementById('downloadCVBtn')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const lang = localStorage.getItem('lang') || 'en'; // default 'en'
    const cvFileName =
      lang === 'id' ? 'CV_Enrico_Irawan_ID.pdf' : 'CV_Enrico_Irawan_EN.pdf';
    const fileUrl = `../assets/pdf/${cvFileName}`;

    // Buat dan trigger link download
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = cvFileName;
    a.target = '_blank'; // jika ingin buka di tab baru
    a.click();
  });
