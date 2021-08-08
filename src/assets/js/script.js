//
import $ from "jquery";
//
//  Functions to handle user interaction
//
$("#aboutMe").collapse({ show: true });
$("#aboutChocoyos").collapse({ show: true });
$("#myProjects").collapse({ show: true });
//
$("#showAboutMe").on("click", function () {
  //
  if ($(this).hasClass("collapsed") || $(this).hasClass("collapsing")) {
    //
    $(this).children().removeClass("fa-chevron-down");
    $(this).children().addClass("fa-chevron-up");
    //
  } else {
    //
    $(this).children().removeClass("fa-chevron-up");
    $(this).children().addClass("fa-chevron-down");
    //
  }
  //
});
//
$("#showAboutChocoyos").on("click", function () {
  //
  if ($(this).hasClass("collapsed") || $(this).hasClass("collapsing")) {
    //
    $(this).children().removeClass("fa-chevron-down");
    $(this).children().addClass("fa-chevron-up");
    //
  } else {
    //
    $(this).children().removeClass("fa-chevron-up");
    $(this).children().addClass("fa-chevron-down");
    //
  }
  //
});
//
$("#showMyProjects").on("click", function () {
  //
  if ($(this).hasClass("collapsed") || $(this).hasClass("collapsing")) {
    //
    $(this).children().removeClass("fa-chevron-down");
    $(this).children().addClass("fa-chevron-up");
    //
  } else {
    //
    $(this).children().removeClass("fa-chevron-up");
    $(this).children().addClass("fa-chevron-down");
    //
  }
  //
});
//
