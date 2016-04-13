
$(function() {
  // hide the story from view
  $("#story").hide();

  $("myButton").click(function(a) {
     $(".answer1").empty().append($("input.answer1").val());
        $(".answer2").empty().append($("input.answer2").val());
           $(".answer3").empty().append($("input.answer3").val());
              $(".answer4").empty().append($("input.answer4").val());



              // show the story
          $("#story").show();

          // empty the form's values
          $(':input').val('');

          // hide the questions
          $("#questions").hide();

        });
