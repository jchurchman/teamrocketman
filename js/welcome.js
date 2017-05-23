'use strict';

var welcomeNarrator = new Narrator ();
var welcomeUser = new User();

//NARRATOR FUNCTIONS TBD
// var button = document.getElementById('closeout');
// button.addEventListener('click', hideMeHandler);
// function hideMeHandler() {
//     event.preventDefault();
//     if (event.target.parentElement.getAttribute('class') === 'showMe' || event.target.parentElement.getAttribute('class') === ''){
//         console.log('it is working, sort of');
//         welcomeNarrator.hideMe();
//     console.log('it is working, sort of');
//     welcomeNarrator.hideMe();
//     }

// }

// // var showTab = '';
// var showTab = document.getElementById('closeout');
// showTab.addEventListener('click', showMeHandler);
// function showMeHandler() {
//     event.preventDefault();
//     if (event.target.parentElement.getAttribute('class') === 'hideMe' || event.target.parentElement.getAttribute('class') === ''){
//         console.log('it is working, sort of');
//         welcomeNarrator.showMe();
//     }
// }

//need to instantiate instance of user for this page
welcomeUser.userSubmission = function() {
    this.name = document.getElementById('nameInput').value;
    this.color = document.getElementById('colorInput').value;
    this.mood = document.getElementById('moodInput').value;
    this.particle = document.getElementById('particleInput').value;
    this.marsupial = document.querySelector('input[name = "marsupial"]:checked').value;
};



var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    welcomeUser.userSubmission();
    welcomeUser.locallyStoreUser();
    window.location('./layout.html');
}

//add userSubmissions as a prototype function of welcomeNarrator
Narrator.prototype.userSubmission = function () {
    User.name = document.getElementById('nameInput').value;
    User.color = document.getElementById('colorInput').value;
    User.mood = document.getElementById('moodInput').value;
    User.particle = document.getElementById('particleInput').value;
    User.marsupial = document.querySelector('input[name = "marsupial"]:checked').value;
};
