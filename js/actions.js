'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  slider();
});

function slider () {
  var slider__item = document.querySelectorAll('.slider__item'),
      slider__dotsItem = document.querySelectorAll('.slider__dotsItem'),
      leftButton = document.querySelectorAll('.slider__buttomLeft'),
      rightButton = document.querySelectorAll('.slider__buttomRight');

  if (slider__item.length > 0) {
    var activeSlide,
        sliderDirections = {
          forward: 1,
          back: 0
        },
        time,
        timeInterval = 15000;
        
    function removeAll () {
      slider__dotsItem.forEach(function (item, i) {
        if (item.classList.contains('slider__dotsItem_active')) {
          item.classList.remove('slider__dotsItem_active');
          slider__item[i].classList.remove('slider__item_active');
          activeSlide = i;
        }
      });
    }

    function nextSlide(directions) {
      removeAll();
      var lastSlide = slider__item.length - 1;
      if (directions == sliderDirections.forward) {
        (activeSlide == lastSlide) ? activeSlide = 0 : activeSlide++;
      }
      if (directions == sliderDirections.back) {
        (activeSlide == 0) ? activeSlide = lastSlide : activeSlide--;
      }
      slider__dotsItem[activeSlide].classList.add('slider__dotsItem_active');
      slider__item[activeSlide].classList.add('slider__item_active');
      timer();
    };

    function timer() {
      clearTimeout(time);
      time = setTimeout(function () {
        nextSlide(sliderDirections.forward);
      }, timeInterval);
    }

    rightButton[0].addEventListener("click", function () {
      nextSlide(sliderDirections.forward);
    });
    leftButton[0].addEventListener("click", function () {
      nextSlide(sliderDirections.back);
    });

    slider__dotsItem.forEach(function (item, i) {
      item.addEventListener("click", function () {
        removeAll();
        item.classList.add('slider__dotsItem_active');
        slider__item[i].classList.add('slider__item_active');
        timer();
      })
    });

    timer();
  }
}