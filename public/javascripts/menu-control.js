var whichPic = 1;
var currentPage = "#page2"
var currentSubPage = "#page1-sub1-page"
var bg_1_pic = "bg1.jpg"
var bg_2_pic = "bg1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));
jQuery.noConflict();
jQuery(document).ready(function() {

	document.body.style.display = 'block';

	jQuery(".content-type-1").css("display","none")
	jQuery("#page1-sub1-page").css("display","block")
	jQuery("#page8-sub1-page").css("display","block")

	changePage("#page1")
	jQuery(".bg2").css("display", "none");
	jQuery("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
		jQuery(".menu-hl").css("margin-left","-10px");
	}
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').mouseenter(
	  function () {
		//alert(jQuery(this).attr("id") != '#main-6-link');
				jQuery(this).next().animate(
					{"margin-top":"-100px","background-color":"#bddc94","opacity":"1"},
					{duration: 250
					,ease: "swing"
					,queue: false}
				);
		
	  }
	);
	//=====MOUSE LEAVE MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').mouseleave(
	  function () {
				jQuery(this).next().animate(
					{"margin-top":"-200px", "background-color":"black", "opacity":"0"},
					{duration: 650
					,ease: "linear"
					,queue: true}
				);
	  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('%ul.submenu li').hover(
	  function () {
		//alert("tutu")
	    	jQuery(this).animate(
							{"width":"300px"},
							{duration: 250
							,ease: "linear"
							,queue: true}
						);
	  },
	  function () {
	    jQuery(this).animate(
							{"width":"150px"},
							{duration: 250
							,ease: "linear"
							,queue: false}
						);
	  }
	);
	jQuery('%ul.submenu li').click(
	  function () {
			toggleSubPage(this)
	  }
	);

	jQuery('#main-1-link').click(function(){
		changePage("#page1");
		switchBg("bg1.jpg");
		jQuery("p").removeClass("black-text");
		toggleSubPage(jQuery("#page1-sub1"));
	});
	
	jQuery('#main-2-link').click(function(){
		changePage("#page2");
		switchBg("bg3.jpg");
		jQuery("p").addClass("black-text");
		toggleSubPage(jQuery("#page2-sub1"));
		// pageComeOut();
	});
	jQuery('#main-3-link').click(function(){
		changePage("#page3");
		switchBg("bg4.jpg");
		jQuery("p").addClass("black-text");
		toggleSubPage(jQuery("#page3-sub1"));
		// pageComeOut();
	});
	jQuery('#main-4-link').click(function(){
		changePage("#page4");
		switchBg("bg5.jpg");
		jQuery("p").addClass("black-text");
		toggleSubPage(jQuery("#page4-sub1"));
		// pageComeOut();
	});
	jQuery('#main-5-link').click(function(){
		changePage("#page5");
		switchBg("bg2.jpg");
		jQuery("p").removeClass("black-text");
		toggleSubPage(jQuery("#page5-sub1"));
		// pageComeOut();
	});
	jQuery('#main-6-link').click(function(){
		changePage("#page6");
		switchBg("bg6.jpg");
		jQuery("p").addClass("black-text");
		toggleSubPage(jQuery("#page6-sub1"));
		// pageComeOut();
	});
	jQuery('#main-7-link').click(function(){
		changePage("#page7");
		switchBg("bg2.jpg");
		jQuery("p").removeClass("black-text");
		toggleSubPage(jQuery("#page7-sub1"));
		// pageComeOut();
	});
	jQuery('#main-8-link').click(function(){
		changePage("#page8");
		switchBg("bg6.jpg");
		jQuery("p").addClass("black-text");
		toggleSubPage(jQuery("#page8-sub1"));
		// pageComeOut();
	});
	//setInterval(slideShow,9000);

});
function toggleSubPage(input){
	var target = "#"+ jQuery(input).attr("id") + "-page"
	if(jQuery(target).css("display") == "none"){
		jQuery(target).slideToggle();
		jQuery(currentSubPage).slideToggle();
		currentSubPage = target
	}
}
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt(jQuery("window").css("height")))
		//alert(window.orientation)
		if( parseInt(jQuery(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			jQuery(".bg1").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
			jQuery(".bg2").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				jQuery(".bg1").css(
					{"height": "100%"}
					);
				jQuery(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
jQuery(window).resize(function() {
 	var middlePoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(currentPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
	//alert("tutu")
	jQuery(currentPage).css("left",inPoint)
	jQuery(".content-container").css("height",jQuery(".bod"))
});

//===============

function changePage(targetPage){
	//var inPoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(targetPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
	var outPoint2 =  (0 - parseInt(jQuery(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt(jQuery("body").css("width")) + parseInt(jQuery(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		jQuery(targetPage).css("left",outPoint2)
		jQuery(targetPage).fadeIn(100).animate(
		{'left':inPoint},"slow","swing"
		);
		//jQuery(currentPage).fadeOut();
		jQuery(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).fadeOut("fast");
		currentPage = targetPage
	};
}
function slideShow(){
	if(currentPage == "#page1"){
		whichPic += 1;
		if(whichPic == 1){
			switchBg("bg1.jpg");
		}
		if(whichPic == 2){
			switchBg("bg2.jpg");
		}
		if(whichPic == 3){
			switchBg("bg3.jpg");
		}
		if(whichPic == 4){
			switchBg("bg4.jpg");
		}
		if(whichPic == 5){
			switchBg("bg5.jpg");
			whichPic = 0;
		}
	}
	//jQuery(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){

	jQuery(".bg2").css("display","block");
	jQuery(".bg2").css("background-image","url(/images/"+ bg_1_pic + ")");
	jQuery(".bg1").css("display","none");
	jQuery(".bg1").css("background-image","url(/images/"+ whichBg + ")");
	
	jQuery(".bg2").fadeOut(1500);
	jQuery(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;

}
