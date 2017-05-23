'use strict';

var layoutNarrator = new Narrator();

layoutNarrator.guest = JSON.parse(localStorage.getItem('userInfo'));

var subHeader = document.getElementsByTagName('h2')[0];
var critterName =  layoutNarrator.guest.marsupial;
var userName = layoutNarrator.guest.name;
subHeader.innerText = 'This is a Webpage about ' + critterName + ' by ' + userName + '.';

var navBar = document.getElementsByTagName('ul')[0];
var navContent = '<li>' + layoutNarrator.guest.color + '</li><li>' + layoutNarrator.guest.mood + '</li><li>' + layoutNarrator.guest.particle + '</li>';
navBar.innerHTML = navContent;