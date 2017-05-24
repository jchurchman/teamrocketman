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

colorNarrator.talkAt = [
    'Welcome to a world of color! Black and white can be very appealing, but color can also add a lot to a page. Let\'s experiment! First, choose a color for the background of your page.',
    'Next, choose a color for your header.',
    'Lastly, choose a color for the text in your paragraph.',
    'What do you think? If you\'re happy with it, submit it to see your changes, so far.'
];
colorNarrator.listenTo = [
    '<input type="radio" value="grey">', 
    '<input type="radio" value="darkgreen">', 
    '<input type="radio" value="darkblue">', 
    '',
    '<input type="radio" value="lightblue">', 
    '<input type="radio" value="maroon">', 
    '<input type="radio" value="red">',
    ''
];
colorNarrator.moveOn = [
    '<input type="submit" value="Onward!"',
    '<input type="submit" value="Onward!"',
    '<input type="submit" value="Onward!"',
    '<input type="submit" value="Onward!"',
];




var inputSpotOne = document.getElementById('inputOne');
inputSpotOne.innerHTML = '<input type="radio" value="grey">';
