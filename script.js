// header

var header = new TimelineMax();
    header
    .from('.left',0.5,{height:0})
    .from('.right',0.5,{y:'100%'})
    .from('.cardXL',1,{height:0})
    .from('.tag',1,{y:100, autoAlpha:0});

// livre

var controller = new ScrollMagic.Controller();

var flip = new ScrollMagic.Scene({
  triggerElement: '.flyers',
  reverse:true
})


.setClassToggle('.cover', 'fall')
.addTo(controller)
.addIndicators({
  colorStart: 'blue',
  colorTrigger: 'red'
 })


// card1

var cardAnimation = new TimelineMax();
  cardAnimation
  .to('#card1',0.3,{ ease: Power0.easeInOut, x: 50, opacity:100 })
  .to('#card2',0.3,{ ease: Power0.easeInOut, x: 50, opacity:100 }, "-=0.1" )
  .to('#card3',0.3,{ ease: Power0.easeInOut, x: 50, opacity:100 }, "-=0.1");

var card = new ScrollMagic.Scene({
  triggerElement: '.card',
  reverse:true
})

.addTo(controller)
.addIndicators({
  colorStart: 'green'
 })
.setTween(cardAnimation)



// licorne

var licorneAnimation = new TimelineLite();
licorneAnimation
.from('.boldTitle',1,{opacity:0,y:150})
.from('.text',1,{opacity:0,x:-150},'-=0.5')
.from('.inner-img',0.5,{height:0, delay:-0.5,x:-150})
.from('.licorne',1.5,{opacity:0, delay:-0.5, transformOrigin: "50% 50%", scaleX:0.2, scaleY:0.2});

var licorne = new ScrollMagic.Scene({
    triggerElement:'.titleContent',
    reverse:true
  })

  .addTo(controller)
  .addIndicators({
    colorStart:'purple'
  })
  .setTween(licorneAnimation)



// suite logo

var blockAnimation = new TimelineMax();
blockAnimation
 .staggerFrom('.square',0.5,{y:150,opacity:0, ease:Power2.easeOut,yoyo:true},0.1)
 .staggerFrom('.logo-img',0.5,{y:50,opacity:0, ease:Power2.easeOut,yoyo:true},0.1);

var block = new ScrollMagic.Scene({
  triggerElement:'.show',
  reverse:true
})
// .setTween(blockAnimation)
.addTo(controller)
.addIndicators({
  colorStart:'orange'
 })
 .setTween(blockAnimation)
