$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $("#zoomscroll").css({
          zoom: scroll,
          "-webkit-filter": "blur(" + (scroll/200) + "px)",
          filter: "blur(" + (scroll/200) + "px)"
      });
  });