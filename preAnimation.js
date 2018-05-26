var tl = new TimelineMax();
var bgd = document.getElementById('#background rect');
var table = document.getElementById('#table_legs, #table');
var lampLeg = document.getElementById('#lamp > .lamp-leg');
var lampbt = document.getElementById('#lamp-bottom');
var lampLight = document.getElementById('#lamp > .light');
var lampLine = document.getElementById('#lamp-line');
var lampLineB = document.getElementById('#lamp-line-b');
var lampLineT = document.getElementById('#lamp-line-t');
var lampCircle = document.getElementById('#lamp-circle');
var lampHead = document.getElementById('#lamp-head');
var lampHeader = document.getElementById('#lamp-header');
var lampBody = document.getElementById('#lamp-body');
var computer = document.getElementById('#computer > *');
var keyboard = document.getElementById('#keyboard > *');
var asset = document.getElementById('#computer_mouse > * , #coffee_mug > *');

tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
	.staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
	.from(lampLeg, 0.2, {opacity:0, x: "-200", ease: Elastic.easeOut})
	.from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
	.from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
	.from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
  .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
	.from(lampHead, 0.2, {opacity:0, scale:0, ease: Elastic.easeOut})
	.from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
	.from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
	.staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
	.staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
	.staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
	.to(lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
  .to(lampLight, 0.1, {opacity:0}, "b")
  .to(lampLight, 0.1, {opacity:0.2}, "c")
	.to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
	.to(bgd, 0.1, {opacity: 1}, "b-=0.05")
	.to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
	.to(bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
	.fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
	.to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
	.to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");