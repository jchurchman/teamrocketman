'use strict';

function Narrator() {
    this.self = document.getElementById('narrator');
    this.hideMe = function () {
        this.self.setAttribute('class', 'hideMe');
    };
    this.showMe = function () {
        this.self.setAttribute('class', 'showMe');
    };
    this.submit = function () {
        user.saveInfo();
        user.storeInfo();
        window.location('#')
    };
    this.getInfo = function () {
        User = JSON.parse(localStorage.getItem('user'));
    };
}

var button = document.getElementById('closeout');
button.addEventListener('click', hideMeHandler);
function hideMeHandler() {
    event.preventDefault();
    Narrator.hideMe();
}

var showTab = document.getElementsByClassName('hideMe');
showTab.addEventListener('hover', showTabHandler);
function showTabHandler() {
    event.preventDefault();
    Narrator.showTab();
}
