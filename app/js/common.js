$(function() {
  //plugin
  
  

  jQuery.fn.menu = function(option){
    var state = ['close', 'open'];
    if(state.includes(option)) {
      return option == 'close' ? 
       $(this).fadeOut(300) : $(this).fadeIn(300).css({'display': 'flex'});
    }
    return 
  };
	// Custom JS
  var allLines = $('.content__block--left--item--line');
  var intervalId;
  var menuStateOpen = false;

  $('.humburger__btn').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');

    if(menuStateOpen) {
      $('.menu_grey .menu__list').menu('close');
    }
    else {
      $('.menu_grey .menu__list').menu('open');
    }
    menuStateOpen = !menuStateOpen;
  });

  //Busket
  $('.busket-btn').on('click', function(event){
    event.preventDefault();
    $('.overlay').addClass('active')
    $('.busket-menu ').addClass('active')
  });

  // overlay 
  $('.busket-menu__btn-close').on('click', function(event){
    event.preventDefault();
    $('.overlay').removeClass('active')
    $('.busket-menu ').removeClass('active')
  });

  $('.overlay__bg').on('click', function(){
    $('.overlay').removeClass('active');
    $('.busket-menu ').removeClass('active');
  });

  //change tabs 
  
  var allBlocks = $('.block');
  var allSlides = $('.container-box__slide');
  var botSlNav = $('.navigation__img ');
  var slImg = $('.container-box__slide_active .slider__items img');
  var intervalId;


  allBlocks.on('click', function(){
    allBlocks.removeClass('block_active');
    allSlides.removeClass('container-box__slide_active');
    $(this).addClass('block_active');
    var index = allBlocks.index($(this));
    allSlides.eq(index).addClass('container-box__slide_active');
    clearInterval(intervalId);
   intervalId = setInterval( channgeImgInInterval(), 4000 );
   
  });

  
  function changeImg(element){
    botSlNav = $('.container-box__slide_active .navigation__img ');
    slImg = $('.container-box__slide_active .slider__items img');
    botSlNav.removeClass('navigation__img_active');
    slImg.removeClass('active');
    $(element).addClass('navigation__img_active');
    var indexNav = botSlNav.index($(element));
    slImg.eq(indexNav).addClass('active');
  }
  
  botSlNav.on('click', function(){
    changeImg(this);
  });


  function channgeImgInInterval(){
    var allIgCopy = $('.container-box__slide_active .navigation__img');
    var currentIndex = allIgCopy.index($('.container-box__slide_active .navigation__img_active'));
    if(currentIndex >= allIgCopy.length-1){
      currentIndex=0;
    }
    else {
      currentIndex++;
    }
    allIgCopy.removeClass('navigation__img_active');
    allIgCopy.eq(currentIndex).addClass('navigation__img_active');
    $('.container-box__slide_active .slider__items img').removeClass('active');
    $('.container-box__slide_active .slider__items img').eq(currentIndex).addClass('active');
  }


  function setIntervalToImg (){
    setInterval( function(){channgeImgInInterval()}, 4000 );
  }
   setIntervalToImg();


   window.addEventListener("resize", function() {
    console.log(window.innerWidth);
    if(window.innerWidth >= 1200) {
      $('.menu_grey .menu__list').menu('open');
    }
    else {
      $('.menu_grey .menu__list').menu('close');
    }
});


});
