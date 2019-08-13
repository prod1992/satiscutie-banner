import "../scss/index.scss";
import "bootstrap";
import "./aos";
import "./flickity";
import "./plyr";
import "./typed-text";
import "./countup";
import "./background-images";

// Your jQuery code
$(window)
  .on("load", function() {
    $("body").addClass("loaded");
  })
  .on("scroll", function() {
    if ($(this).scrollTop() >= 30) {
      $("header").css("background-color", "#1B1F3B");
    } else {
      $("header").css("background-color", "transparent");
    }
  });

$(document).ready(function() {
  if ($(window).scrollTop() >= 30) {
    $("header").css("background-color", "#1B1F3B");
  } else {
    $("header").css("background-color", "transparent");
  }
});

$(".dropdown-menu a.dropdown-item").on("click", function(e) {
  if (
    !$(this)
      .next()
      .hasClass("show")
  ) {
    $(this)
      .parents(".dropdown-menu")
      .first()
      .find(".show")
      .removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");
  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function(e) {
      $(".dropdown-submenu .show").removeClass("show");
    });
  return false;
});
