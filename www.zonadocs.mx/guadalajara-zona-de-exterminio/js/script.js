import { CountUp } from './countUp.min.js';

$(function() {
  var vw = $(window).width(),
      vh = $(window).height();

  $(".share-toggle").on("click", function() {
    $(".share").toggleClass("active")
    $(".social-icons").slideToggle();
  });

  var controller = new ScrollMagic.Controller();

  var count1 = new CountUp('nmr01', 15, {});
  var count2 = new CountUp('nmr02', 1, {});
  var count3 = new CountUp('nmr03', 2, {});
  var count4 = new CountUp('nmr04', 4, {});
  var count5 = new CountUp('nmr05', 2, {});
  var count6 = new CountUp('nmr06', 7, {});
  var count7 = new CountUp('nmr07', 767137, {});
  var count8 = new CountUp('nmr08', 232, {});
  var count9 = new CountUp('nmr09', 30000, {});
  var count10 = new CountUp('nmr10', 319, {});
  var count11 = new CountUp('nmr11', 78, {});
  var count12 = new CountUp('nmr12', 321, {});
  var count13 = new CountUp('nmr13', 12, {});
  var count14 = new CountUp('nmr14', 17, {});
  var count15 = new CountUp('nmr15', 24, {});
  var count16 = new CountUp('nmr16', 56, {});

  // Full screen galleries
  $(".fs-gallery").each(function(is, ns) {
    var photos = $(ns).find(".frame");
    var prbar = $(ns).find(".progress-bar");
    var pingallery = new ScrollMagic.Scene({
        triggerElement: ns,
        duration: vh * (photos.length - 0.5),
        offset: 0
      })
      .triggerHook(0)
      .setPin(ns)
      .on("progress", function(e) {
        var wd = e.progress * 100;
        prbar.width(wd + '%')
      })
      .addTo(controller);
    for(var i=1; i<photos.length; i++) {
      let it = i;
      var showframe = new ScrollMagic.Scene({
          triggerElement: ns,
          duration: vh * 0.5,
          offset: vh * (i - 0.5)
        })
        .triggerHook(0)
        .setTween($(photos[i]), {opacity: 1})
        .on("end", function(e) {
          if(it == 1) {
            count1.start();
            count2.start();
          }
             if(it == 4) {
           $(".impideinteraccion").css("pointer-events", "all");
          }
          
          if(it == 5) {
            count3.start();
            count4.start();
            count5.start();
            count6.start();
            count7.start();
            count8.start();
            count9.start();
            count10.start();
            count11.start();
            count12.start();
                count13.start();
            count14.start();
            count15.start();
               count16.start();
          }
          if(it == 7) {
            setTimeout(function() {
              $("p.outro:last-child").animate({
                opacity: 1
              }, 1000);
            }, 1000);
          }
        })
        .addTo(controller);
    }
  });


  $(".h-wrapper").each(function(i,n) {
    TweenLite.defaultEase = Linear.easeNone;
    var tl = new TimelineMax();
    var hwidth = $(n).find(".blocks").width();;
    var slideContainerWidth = hwidth - vw;

    var actionHorizontal = new TimelineMax()
    .to($(n).find(".blocks"), 1, {x: -slideContainerWidth})

    var horizontal = createHorizontal();

    function createHorizontal() {
      return new ScrollMagic.Scene({
        triggerElement: n,
        triggerHook: "onLeave",
        duration: slideContainerWidth
      })
      .setPin(n)
      .setTween(actionHorizontal)
      // .addIndicators()
      .addTo(controller);
    }
  });


  // Scrollytelling
  $(".scrollytelling").each(function(is, ns) {
    var scenes = $(ns).find(".scene");
    for(var i=0; i<scenes.length; i++) {
      var showScene = new ScrollMagic.Scene({
          triggerElement: ns,
          duration: vh * 0.2,
          offset: vh * $(scenes[i]).data("offset")
        })
        .setTween($(scenes[i]), {opacity: 1})
        .addTo(controller);
    }
  });


})
