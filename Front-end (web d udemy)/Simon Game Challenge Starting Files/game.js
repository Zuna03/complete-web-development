buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern=[];

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

setTimeout(animatePress(currentColour){
    currentColour.addClass("pressed");
  }
}, 100);
$("button").click(function handler(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userClickedPattern);
})
var level=0;
var started=false;
$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}
