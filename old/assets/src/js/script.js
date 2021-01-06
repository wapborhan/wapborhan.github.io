

// FOR WEBSITE PRELOADER
// $(window).on("load", function(){
//   var preload = document.querySelector(".preloader");
//   preload.classList.add("load-finish");
// });


// FOR NAVBAR ACTIVE MENU
$(".nav-item").on("click", function(){
  $("li.nav-item").removeClass("active");
  $(this).addClass("active");
});


// FOR NAVBAR FIXED
$(window).on("scroll", function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > 130){
      $(".menu-head").addClass("menu-fixed");
  }else{
      $(".menu-head").removeClass("menu-fixed");
  }
});


// FOR ABOUT CATEGORY MENU ACTIVE
$(".category-btn").on("click", function(){
  $(".category-btn").removeClass("category-active");
  $(this).addClass("category-active");
});


// FOR ABOUT CATEGORY CONTENT
function filter(active) {
  hide = document.getElementsByClassName('active-section');
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = 'none';
  }

  let show = document.getElementsByClassName(active);
  for (i = 0; i < hide.length; i++) {
    show[i].style.display = 'block';
  }
}


// FOR FAQ SECTION ACCORDION
jQuery(document).ready(function($){
  var panels = $(".faq-ans").hide();
  panels.first().show();
  
   $(".faq-que").click(function(){
       var $this = $(this);
       panels.slideUp();
       $this.next().slideDown();
   });
});


// FOR BACK2TOP BUTTON
$(window).on("scroll", function(){
  var scroll = $(this).scrollTop();
  if(scroll > 1000){
      $(".top-btn").show();
  }else{
      $(".top-btn").hide();
  }
});


// FOR PORTFOLIO CATEGORY ACTIVE MENU
$(".menu").on("click", function(){
  $(".menu").removeClass("active");
  $(this).addClass("active");
});


// FOR LIVE PREVIEW ALERT BUTTON
function liveAlert() {
  window.alert("Please contact this author if you would like to preview this product live.");
}



