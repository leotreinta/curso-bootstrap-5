/*=============================================
=            Banner          =
=============================================*/

$(".fade-slider").jdSlider({

isSliding:false,
isAuto:true,
isLoop: true,
isDrag: false,
interval:5000,
isCursor:false,
speed:3000
	

});

var alturaBanner = $(".fade-slider").height();

console.log("alturaBanner", alturaBanner);

$(".bannerEstatico").css({"height":alturaBanner+"px"})


