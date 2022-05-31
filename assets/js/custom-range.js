if ($('.js-range-slider').length > 0) {

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    skin: "round",
    grid: false,
    min: 20,
    max: 150,
    from: 0,
    to: 100,
    postfix: " CHF",
  });

}