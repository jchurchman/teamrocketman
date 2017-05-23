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

var articleHeadingLoc = document.getElementsByTagName('h3')[0];
var articleHeading = layoutNarrator.guest.marsupial.name;
articleHeadingLoc.innerText = articleHeading;

var critterBlurbLoc = document.getElementsByTagName('p')[0];
var critterBlurb = layoutNarrator.guest.marsupial.critterBlurb;
critterBlurbLoc.innerHTML = '<img src=\'\'/>' + critterBlurb;

var critterPic = document.getElementsByTagName('img')[0];
var critterSrc = layoutNarrator.guest.marsupial.filepath;
critterPic.src = critterSrc;
