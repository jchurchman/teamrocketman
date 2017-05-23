'use strict';

var welcomeNarrator = new Narrator ();
var welcomeUser = new User();

welcomeNarrator.saveGuest = function() {
    this.guest = welcomeUser;
};

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
    welcomeNarrator.saveGuest();
    welcomeNarrator.locallyStoreUser();
    window.location.href= './layout.html';
}

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
//     }

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