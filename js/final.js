'use strict';

var finalNarrator = new Narrator ();
var finalUser = new User ();

finalNarrator.getGuest();
finalNarrator.popContent();
finalNarrator.popStyles();
finalNarrator.popColors();

var player = document.getElementsByTagName('audio')[0];
player.addEventListener('mouseover', jumpAround );
function jumpAround () {
    var randomNoOne = Math.floor(Math.random()*80);
    var randomNoTwo = Math.floor(Math.random()*80);
    player.style.top = randomNoOne + '%';
    player.style.left = randomNoTwo + '%';
}