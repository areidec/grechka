$(function() {

	// Custom JS
  var allLines = $('.content__block--left--item--line');
  var intervalId;
  $('.header__humburger--btn').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');

  });
  $('.header__busket').on('click', function(event){
    event.preventDefault();
    $('.overlay').addClass('active')
    $('.header__busket').addClass('active');
    $('.overlay__busket--menu ').addClass('active')
  })
  $('.overlay__busket--menu--title--btn-close').on('click', function(event){
    event.preventDefault();
    $('.overlay').removeClass('active')
    $('.header__busket').removeClass('active');
    $('.overlay__busket--menu ').removeClass('active')
  });





  //change tabs
  var allBtn = $('.content__block--left--item');
  function toggleTab (elem){
    allBtn.removeClass('active');
    $('.content__block--right--slides').removeClass('activeSlide');
    var index = allBtn.index($(elem));
    console.log(index)
    $('.content__block--right .content__block--right--slides').eq(index).addClass('activeSlide');
    $(elem).addClass('active');
  }
  allBtn.on('click', function(){
    toggleTab(this);
    clearInterval(intervalId);
    intervalId = setInterval( channgeImgInInterval(), 4000 );
  });

  //change img in tabs
  function chengeImg(elem){
    var allIgInTab = $('.activeSlide .content__block--right--slides--bottom--img');
    var index = allIgInTab.index($(elem));
    allIgInTab.removeClass('active');
    $(elem).addClass('active');
    $('.activeSlide .content__block--right--slides--photo--big img').removeClass('active');
    $('.activeSlide .content__block--right--slides--photo--big img').eq(index).addClass('active');
  }
  allIg = $('.content__block--right--slides--bottom--img');
  allIg.on('click', function () {
    chengeImg(this);
  });

  //interaval change img in tab
  function channgeImgInInterval(){
    console.log('CHANGE');
    var allIgCopy = $('.activeSlide .content__block--right--slides--bottom--img');
    var currentIndex = allIgCopy.index($('.activeSlide .content__block--right--slides--bottom--img.active'));
    if(currentIndex >= allIgCopy.length-1){
      console.log('!!.0');
      currentIndex=0;
    }
    else {
      currentIndex++;
    }
    allIgCopy.removeClass('active');
    allIgCopy.eq(currentIndex).addClass('active');
    $('.activeSlide .content__block--right--slides--photo--big img').removeClass('active');
    $('.activeSlide .content__block--right--slides--photo--big img').eq(currentIndex).addClass('active');
  }


  function setIntervalToImg (){
    setInterval( function(){channgeImgInInterval()}, 4000 );
  }
   setIntervalToImg();






});
