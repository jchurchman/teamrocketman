'use strict';

var colorNarrator = new Narrator ();
var colorUser = new User();

colorNarrator.saveGuest = function() {
    this.guest = colorUser;
};

var submitButton = document.getElementById('buttonOne');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    colorUser.userSubmission();
    colorNarrator.saveGuest();
    colorNarrator.locallyStoreUser();
    window.location.href= './roughdraft.html';
}

var colorPhaseOne = new Phase (
    'Welcome to a world of color! Black and white can be very appealing, but color can also add a lot to a page. Let\'s experiment! First, choose a color for the background of your page.',
    '<input type="submit" value="Onward!"',
    '<input type="radio" value="grey">', 
    '<input type="radio" value="lightblue">' 
);

var colorPhaseTwo = new Phase (
    'Next, choose a color for your header.',
    '<input type="submit" value="Onward!"',
    '<input type="radio" value="darkgreen">', 
    '<input type="radio" value="maroon">' 
);

var colorPhaseThree = new Phase (
    'Lastly, choose a color for the text in your paragraph.',
    '<input type="submit" value="Onward!"',
    '<input type="radio" value="darkblue">', 
    '<input type="radio" value="red">'
);

var colorPhaseFour = new Phase (
    'What do you think? If you\'re happy with it, submit it to see your changes, so far.',
    '<input type="submit" value="Onward!"'
);




// var inputSpotOne = document.getElementById('inputOne');
// inputSpotOne.innerHTML = '<input type="radio" value="grey">';
