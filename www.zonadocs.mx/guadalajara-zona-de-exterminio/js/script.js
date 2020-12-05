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
             if(it == 3) {
           $(".impideinteraccion").css("pointer-events", "all");
          }
          
            if(it == 4) {
            $(".impideinteraccion").css("pointer-events", "none");
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
          }
           if(it == 7) {
           
            count12.start();
                count13.start();
            count14.start();
            count15.start();
               count16.start();
          }  if(it == 8) {
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


 $('#boton1').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton1").addClass("pausa");
					  $("#boton1").removeClass("play");
		     $('#videouno').get(0).play(); 
		   $("#iconouno").addClass("fa-pause");
		   $("#iconouno").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton1").addClass("pausa");
					  $("#boton1").removeClass("pausa");
										   $("#boton1").addClass("play");
		     $('#videouno').get(0).pause(); 
		   $("#iconouno").addClass("fa-play");
		   $("#iconouno").removeClass("fa-pause");
}     });
			 $('#boton2').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton2").addClass("pausa");
					  $("#boton2").removeClass("play");
		     $('#videodos').get(0).play(); 
		   $("#iconodos").addClass("fa-pause");
		   $("#iconodos").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton2").addClass("pausa");
					  $("#boton2").removeClass("pausa");
										   $("#boton2").addClass("play");
		     $('#videodos').get(0).pause(); 
		   $("#iconodos").addClass("fa-play");
		   $("#iconodos").removeClass("fa-pause");
}
		   
		   

      });
			    $('#boton3').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton3").addClass("pausa");
					  $("#boton3").removeClass("play");
		     $('#videotres').get(0).play(); 
		   $("#iconotres").addClass("fa-pause");
		   $("#iconotres").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton3").addClass("pausa");
					  $("#boton3").removeClass("pausa");
										   $("#boton3").addClass("play");
		     $('#videotres').get(0).pause(); 
		   $("#iconotres").addClass("fa-play");
		   $("#iconotres").removeClass("fa-pause");
}
		   
		   

      });
			   
			    $('#boton4').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton4").addClass("pausa");
					  $("#boton4").removeClass("play");
		     $('#videocuatro').get(0).play(); 
		   $("#iconocuatro").addClass("fa-pause");
		   $("#iconocuatro").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton4").addClass("pausa");
					  $("#boton4").removeClass("pausa");
										   $("#boton4").addClass("play");
		     $('#videocuatro').get(0).pause(); 
		   $("#iconocuatro").addClass("fa-play");
		   $("#iconocuatro").removeClass("fa-pause");
}
		   
		   

      });
			   
			    $('#boton5').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton5").addClass("pausa");
					  $("#boton5").removeClass("play");
		     $('#videocinco').get(0).play(); 
		   $("#iconocinco").addClass("fa-pause");
		   $("#iconocinco").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton5").addClass("pausa");
					  $("#boton5").removeClass("pausa");
										   $("#boton5").addClass("play");
		     $('#videocinco').get(0).pause(); 
		   $("#iconocinco").addClass("fa-play");
		   $("#iconocinco").removeClass("fa-pause");
}});
					
					 $('#boton6').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton6").addClass("pausa");
					  $("#boton6").removeClass("play");
		     $('#videoseis').get(0).play(); 
		   $("#iconoseis").addClass("fa-pause");
		   $("#iconoseis").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton6").addClass("pausa");
					  $("#boton6").removeClass("pausa");
										   $("#boton6").addClass("play");
		     $('#videoseis').get(0).pause(); 
		   $("#iconoseis").addClass("fa-play");
		   $("#iconoseis").removeClass("fa-pause");
}});
		   
		   
			
			 $('#boton7').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton7").addClass("pausa");
					  $("#boton7").removeClass("play");
		     $('#videosiete').get(0).play(); 
		   $("#iconosiete").addClass("fa-pause");
		   $("#iconosiete").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton7").addClass("pausa");
					  $("#boton7").removeClass("pausa");
										   $("#boton7").addClass("play");
		     $('#videosiete').get(0).pause(); 
		   $("#iconosiete").addClass("fa-play");
		   $("#iconosiete").removeClass("fa-pause");
}});
			
			 $('#boton8').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton8").addClass("pausa");
					  $("#boton8").removeClass("play");
		     $('#videoocho').get(0).play(); 
		   $("#iconoocho").addClass("fa-pause");
		   $("#iconoocho").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton8").addClass("pausa");
					  $("#boton8").removeClass("pausa");
										   $("#boton8").addClass("play");
		     $('#videoocho').get(0).pause(); 
		   $("#iconoocho").addClass("fa-play");
		   $("#iconoocho").removeClass("fa-pause");
}});
			
			 $('#boton9').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton9").addClass("pausa");
					  $("#boton9").removeClass("play");
		     $('#videonueve').get(0).play(); 
		   $("#icononueve").addClass("fa-pause");
		   $("#icononueve").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton9").addClass("pausa");
					  $("#boton9").removeClass("pausa");
										   $("#boton9").addClass("play");
		     $('#videonueve').get(0).pause(); 
		   $("#icononueve").addClass("fa-play");
		   $("#icononueve").removeClass("fa-pause");
}});
			 $('#boton10').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton10").addClass("pausa");
					  $("#boton10").removeClass("play");
		     $('#videodiez').get(0).play(); 
		   $("#iconodiez").addClass("fa-pause");
		   $("#iconodiez").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton10").addClass("pausa");
					  $("#boton10").removeClass("pausa");
										   $("#boton10").addClass("play");
		     $('#videodiez').get(0).pause(); 
		   $("#iconodiez").addClass("fa-play");
		   $("#iconodiez").removeClass("fa-pause");
}});
			
	 $('#boton11').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton11").addClass("pausa");
					  $("#boton11").removeClass("play");
		     $('#videoonce').get(0).play(); 
		   $("#iconoonce").addClass("fa-pause");
		   $("#iconoonce").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton11").addClass("pausa");
					  $("#boton11").removeClass("pausa");
										   $("#boton11").addClass("play");
		     $('#videoonce').get(0).pause(); 
		   $("#iconoonce").addClass("fa-play");
		   $("#iconoonce").removeClass("fa-pause");
}});
			
			 $('#boton12').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton12").addClass("pausa");
					  $("#boton12").removeClass("play");
		     $('#videodoce').get(0).play(); 
		   $("#iconodoce").addClass("fa-pause");
		   $("#iconodoce").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton12").addClass("pausa");
					  $("#boton12").removeClass("pausa");
										   $("#boton12").addClass("play");
		     $('#videodoce').get(0).pause(); 
		   $("#iconodoce").addClass("fa-play");
		   $("#iconodoce").removeClass("fa-pause");
}});
			
			 $('#boton13').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton13").addClass("pausa");
					  $("#boton13").removeClass("play");
		     $('#videotrece').get(0).play(); 
		   $("#iconotrece").addClass("fa-pause");
		   $("#iconotrece").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton13").addClass("pausa");
					  $("#boton13").removeClass("pausa");
										   $("#boton13").addClass("play");
		     $('#videotrece').get(0).pause(); 
		   $("#iconotrece").addClass("fa-play");
		   $("#iconotrece").removeClass("fa-pause");
}});
			
			 $('#boton14').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton14").addClass("pausa");
					  $("#boton14").removeClass("play");
		     $('#videocatorce').get(0).play(); 
		   $("#iconocatorce").addClass("fa-pause");
		   $("#iconocatorce").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton14").addClass("pausa");
					  $("#boton14").removeClass("pausa");
										   $("#boton14").addClass("play");
		     $('#videocatorce').get(0).pause(); 
		   $("#iconocatorce").addClass("fa-play");
		   $("#iconocatorce").removeClass("fa-pause");
}});
			
			 $('#boton15').click(function(){
		   if ($(this).hasClass("play")) {
			   $("#boton15").addClass("pausa");
					  $("#boton15").removeClass("play");
		     $('#videoquince').get(0).play(); 
		   $("#iconoquince").addClass("fa-pause");
		   $("#iconoquince").removeClass("fa-play");
 } else if ($(this).hasClass("pausa")) {
				$("#boton15").addClass("pausa");
					  $("#boton15").removeClass("pausa");
										   $("#boton15").addClass("play");
		     $('#videoquince').get(0).pause(); 
		   $("#iconoquince").addClass("fa-play");
		   $("#iconoquince").removeClass("fa-pause");
}});
