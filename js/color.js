'use strict';

var colorNarrator = new Narrator ();
var colorUser = new User();

var colorPhaseOne = new Phase (
    'Welcome to a world of color! Black and white can be very appealing, but color can also add a lot to a page. Let\'s experiment! First, choose a color for the background of your page.',
    '<input type="submit" value="Onward!">',
    '<input type="radio" value="grey">  Grey', 
    '<input type="radio" value="lightblue">  Light Blue' 
);

var colorPhaseTwo = new Phase (
    'Next, choose a color for your header.',
    '<input type="submit" value="Onward!">',
    '<input type="radio" value="darkgreen">  Dark Green', 
    '<input type="radio" value="maroon">  Maroon' 
);

var colorPhaseThree = new Phase (
    'Lastly, choose a color for the text in your paragraph.',
    '<input type="submit" value="Onward!">',
    '<input type="radio" value="darkblue">  Dark Blue', 
    '<input type="radio" value="red">  Red'
);

var colorPhaseFour = new Phase (
    'What do you think? If you\'re happy with it, submit it to see your changes, so far.',
    '<input type="submit" value="Onward!"'
);

Phase.prototype.executePhase = function(){
        colorNarrator.talkLoc.innerText = this.talkAt;
        colorNarrator.buttonOne.innerHTML = this.buttonOne;

if (this.inputOne) {
    colorNarrator.listenLocOne.innerHTML = this.inputOne;
}

if (this.inputTwo) {
    colorNarrator.listenLocTwo.innerHTML = this.inputTwo;
}

if (this.buttonTwo) {
    colorNarrator.buttonTwo.innerHTML = this.buttonTwo;
}
    };

colorNarrator.saveGuest = function() {
    this.guest = colorUser;
};

//  give the user a page to view

var onloadPage = function() {
    colorPhaseOne.executePhase();
// colorNarrator.talkLoc.innerText = colorPhaseOne.talkAt;
// colorNarrator.buttonOne.innerHTML = colorPhaseOne.buttonOne;

// if (colorPhaseOne.inputOne) {
//     colorNarrator.listenLocOne.innerHTML = colorPhaseOne.inputOne;
// }

// if (colorPhaseOne.inputTwo) {
//     colorNarrator.listenLocTwo.innerHTML = colorPhaseOne.inputTwo;
// }

// if (colorPhaseOne.buttonTwo) {
//     colorNarrator.buttonTwo.innerHTML = colorPhaseOne.buttonTwo;
// }

};

onloadPage();

var submitButton = document.getElementById('buttonOne');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    // colorUser.userSubmission();
    colorNarrator.saveGuest();
    colorNarrator.locallyStoreUser();
    window.location.href= './roughdraft.html';
}





// var inputSpotOne = document.getElementById('inputOne');
// inputSpotOne.innerHTML = '<input type="radio" value="grey">';
