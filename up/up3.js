$(function() {
  // Bind Click event to the drop down navigation button
  $(".nav-button").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus
        hiding all LI apart from the first */
    $(this).parent().parent().toggleClass("closed");

  });
});
