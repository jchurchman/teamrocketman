'use strict';

var finalNarrator = new Narrator ();

finalNarrator.getGuest();
finalNarrator.popContent();

function insertFinalStyles() {
    var finalStylesLoc = document.getElementById('finalstyles');
    finalStylesLoc.innerHTML = '<style type="text/css"> h1.final-final {font-size: ' + finalNarrator.guest.fontSize + 'px;    color:' + finalNarrator.guest.color2 + ';} body.final-final {background-color: ' + finalNarrator.guest.color1 + ';} main.final-final { margin: 0 ' + finalNarrator.guest.margin + '; } p.final-final {font-family: ' + finalNarrator.guest.pFont + '; color: ' + finalNarrator.guest.color3 + '; } ul.final-final { list-style-type: none;} li.final-final { margin: 5px 20px; display: inline-block; } img.final-final { float: ' + finalNarrator.guest.float + ';}</style>';
}

function establishAlltheClasses () {
    var getAllTheThings = document.getElementsByTagName('*');
    for (var i = 0; i < getAllTheThings.length; i++) {
        getAllTheThings[i].setAttribute('class', 'final');
    }
}

insertFinalStyles();
establishAlltheClasses();

window.addEventListener('load', changeAllTheClasses);
function changeAllTheClasses() {
    var getAllTheThings = document.getElementsByTagName('*');
    for (var i = 0; i < getAllTheThings.length; i++) {
        getAllTheThings[i].setAttribute('class', 'final-final');
    }
    var audioTag = document.getElementsByTagName('audio')[0];
    audioTag.setAttribute('class', 'melodious');
}


var player = document.getElementsByTagName('audio')[0];
player.addEventListener('mouseover', jumpAround );
function jumpAround () {
    var randomNoOne = Math.floor(Math.random()*80);
    var randomNoTwo = Math.floor(Math.random()*80);
    player.style.top = randomNoOne + '%';
    player.style.left = randomNoTwo + '%';
}