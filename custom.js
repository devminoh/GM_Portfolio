$(function(){ //body 부분 모두 읽은 다음에 script를 실행할 것.
  // trigger
  $('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $("section, .menu a").click(function () {
    $(".gnb").removeClass("active");
    $('.trigger').removeClass('active');
  });

  // Smooth Scrolling
  // $(".menu a").click(function (e) {
  //   $.scrollTo(this.hash || 0, 900);
  // });

  // Change CSS with Scroll
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header, .gototop').addClass('active')
    }else{
      $("header, .gototop").removeClass("active");
    }
  })
})