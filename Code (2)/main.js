
function promptUser()
{ var storyDiv = document.getElementById("story");
  var answer1 = document.getElementById("answer1").value;
 var answer2 = document.getElementById("answer2").value;
  var answer3 = document.getElementById("answer3").value;
   var answer4 = document.getElementById("answer4").value;

storyDiv.innerHTML =  "  Coding is " + answer1 + " but maybe after " + answer2 " years things will be " + answer3 " and if not, there will always be " + answer4 + ".";
}




document.getElementById("myButton").onclick = promptUser;
