'use strict';

function Narrator() {

    this.guest = {};

    this.self = document.getElementsByTagName('div')[0];
    this.hideMe = function () {
        this.self.setAttribute('class', 'hideMe');
    };
    this.showMe = function () {
        this.self.setAttribute('class', 'showMe');
    };
    this.getInfo = function () {
        User = JSON.parse(localStorage.getItem('userInfo'));
    };

    this.locallyStoreUser = function () {
        var userInfoStringified = JSON.stringify(this.guest);
        localStorage.setItem('userInfo', userInfoStringified);
        console.log(localStorage);
    };

    this.getGuest = function () {
        this.guest = JSON.parse(localStorage.getItem('userInfo'));
    };

    this.popSubHeader = function () {
        var subHeader = document.getElementsByTagName('h2')[0];
        var critterName = this.guest.marsupial.name;
        var userName = this.guest.name;
        subHeader.innerText = 'This is a Webpage about ' + critterName + ' by ' + userName + '.';
    };

    this.popNavBar = function () {
        var navBar = document.getElementsByTagName('ul')[0];
        var navContent = '<li>' + this.guest.color + '</li><li>' + this.guest.mood + '</li><li>' + this.guest.particle + '</li>';
        navBar.innerHTML = navContent;
    };

    this.popArticleHeading = function () {
        var articleHeadingLoc = document.getElementsByTagName('h3')[0];
        var articleHeading = this.guest.marsupial.name;
        articleHeadingLoc.innerText = articleHeading;
    };

    this.popCritterBlurb = function () {
        var critterBlurbLoc = document.getElementsByTagName('p')[0];
        var critterBlurb = this.guest.marsupial.blurb;
        critterBlurbLoc.innerHTML = '<img src=\'\'/>' + critterBlurb;
    };

    this.popCritterPic = function () {
        var critterPic = document.getElementsByTagName('img');
        var critterSrc = this.guest.marsupial.filepath;
        critterPic.src = critterSrc;
    };

}

/* Fix Narrator Show/Hide Stretch goal*/
// var button = document.getElementById('closeout');
// button.addEventListener('click', hideMeHandler);
// function hideMeHandler() {
//     event.preventDefault();
//     Narrator.hideMe();
// }


// var showTab = document.getElementsByClassName('hideMe');
// showTab.addEventListener('hover', showTabHandler);
// function showTabHandler() {
//     event.preventDefault();
//     Narrator.showTab();
// }