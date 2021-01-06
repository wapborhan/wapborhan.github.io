


// FOR PORTFOLIO SECTION
$('.port-parent').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    prevArrow: '<i class="flaticon-right-arrow dandik"></i>',
    nextArrow: '<i class="flaticon-left-arrow bamdik"></i>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });



  
// FOR PORTFOLIO DETAILS SECTION
$('.port-detail-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 800,
    prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
    nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  
  
  // FOR TESTIMONIAL SECTION
  $('.testi-parent').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1500,
    prevArrow: '<i class="flaticon-right-arrow dandik"></i>',
    nextArrow: '<i class="flaticon-left-arrow bamdik"></i>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  


  // FOR BLOG SECTION
  $('.blog-slider').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 1000,
    prevArrow: '<i class="flaticon-right-arrow dandik"></i>',
    nextArrow: '<i class="flaticon-left-arrow bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });