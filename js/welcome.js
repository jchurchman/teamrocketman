'use strict';
var welcomeNarrator = new Narrator();

//NARRATOR FUNCTIONS TBD
// var button = document.getElementById('closeout');
// button.addEventListener('click', hideMeHandler);
// function hideMeHandler() {
//     event.preventDefault();
//     if (event.target.parentElement.getAttribute('class') === 'showMe' || event.target.parentElement.getAttribute('class') === ''){
//     console.log('it is working, sort of');
//     welcomeNarrator.hideMe();
//     }

// }

// var showTab = document.getElementById('closeout');
// showTab.addEventListener('click', showMeHandler);
// function showMeHandler() {
//     event.preventDefault();
//     if (event.target.parentElement.getAttribute('class') === 'hideMe' || event.target.parentElement.getAttribute('class') === ''){
//     console.log('it is working, sort of');
//     welcomeNarrator.showMe();
//     }
// }

var submit = document.getElementById('submit');
submit.addEventListener('click', submissionHandler);
function submissionHandler() {
    event.preventDefault();
    welcomeNarrator.userSubmission();
    user.locallyStoreUser();
}

//add userSubmissions as a prototype function of welcomeNarrator
Narrator.prototype.userSubmission = function () {
    user.name = document.getElementById('nameInput').value;
    user.color = document.getElementById('colorInput').value;
    user.mood = document.getElementById('moodInput').value;
    user.particle = document.getElementById('particleInput').value;
    user.marsupial = document.querySelector('input[name = "marsupial"]:checked').value;
};