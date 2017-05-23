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
        User = JSON.parse(localStorage.getItem('user'));
    };

    this.locallyStoreUser = function() {
    // userArray = [];
    // userArray.push(user);
        var userInfoStringified = JSON.stringify(this.guest);
        localStorage.setItem('userInfo', userInfoStringified);
        console.log(localStorage);
    };
}


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