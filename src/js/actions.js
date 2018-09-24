'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  mainMenuOpen();
  productOpen();
});

function mainMenuOpen() {
  var menu = document.querySelectorAll('.mainMenu');
  var menuButton = document.querySelectorAll('.mainMenu__button');

  if (menuButton.length > 0) {
    menuButton.forEach(function (mainButton) {

      mainButton.addEventListener("click", function (event) {

        this.classList.toggle('mainMenu__button_open');
        menu.forEach(function(menuItem) {          
          menuItem.classList.toggle('mainMenu_open');
        });
      });
    });
  }
};

function productOpen() {
  var products = document.querySelectorAll('.productCase');
  var productsName = document.querySelectorAll('.productCase__name');
  var promo = document.querySelectorAll('.promo');

  if (products.length > 0) {
    productsName.forEach(function (productName) {
      productName.addEventListener("click", function (event) { 
        var thisOpened = this.parentElement.classList.contains('productCase_open');       
        this.parentElement.parentElement.querySelectorAll('.productCase_open').forEach(function (elem) {
          elem.classList.remove('productCase_open');
        });
        if (!thisOpened) {
          this.parentElement.classList.add("productCase_open");
      }
      });
    });
  }
  if (promo.length > 0) {
    promo.forEach(function (promoItem) {
      promoItem.addEventListener("click", function (event) {
        products.forEach(function (elem) {
          if(elem.classList.contains('productCase_open')) {
            elem.classList.remove('productCase_open');
          }
        });
      });
    });
  }
};

