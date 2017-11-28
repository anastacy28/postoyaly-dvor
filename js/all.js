$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$("#form").trigger("reset");
		});
		return false;
	});
});


$('.js-close-thank-you').click(function() { 
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { 
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

$('.sl-show-first').slick({
  autoplay: true,
  autoSpeed: 2000,
  cssEase: 'ease-in',
  asNavFor: '.sl-nav-first',
  fade: true
});
$('.sl-nav-first').slick({
  autoplay: true,
  autoSpeed: 2000,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.sl-show-first',
  focusOnSelect: true,
});

$('.sl-show-second').slick({
  cssEase: 'ease-in',
  asNavFor: '.sl-nav-second',
  fade: true
});
$('.sl-nav-second').slick({
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.sl-show-second',
  focusOnSelect: true,
});

$('.sl-show3').slick({
  cssEase: 'ease-in',
  asNavFor: '.sl-nav3',
  fade: true
});
$('.sl-nav3').slick({
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.sl-show3',
  focusOnSelect: true,
});

 /*<![CDATA[*/
 var s=[],s_timer=[];
 function show(id,h,spd)
 { s[id]= s[id]==spd? -spd : spd;
 s_timer[id]=setTimeout(function() {
 var obj=document.getElementById(id);
 if(obj.offsetHeight+s[id]>=h){obj.style.height=h+"px";obj.style.overflow="auto";}
 else if(obj.offsetHeight+s[id]<=0){obj.style.height=0+"px";obj.style.display="none";}
 else {obj.style.height=(obj.offsetHeight+s[id])+"px";
 obj.style.overflow="hidden";
 obj.style.display="block";
 setTimeout(arguments.callee, 10);
 }
 }, 10);
 }
 /*]]>*/