'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User ();

layoutNarrator.saveGuest = function() {
    this.guest = layoutUser;
};

layoutNarrator.getGuest();
layoutNarrator.popContent();

layoutNarrator.getFontSize = function () {
    var fontSizeProp = document.getElementById('input').value;
    this.guest.fontSize = fontSizeProp;
};
layoutNarrator.getPFont = function () {
    var pFontProp = document.getElementById('input').value;
    this.guest.pFont = pFontProp;
};
layoutNarrator.getMargin = function () {
    var marginProp = document.getElementById('input').value;
    this.guest.margin = marginProp;
};
layoutNarrator.getFloat = function () {
    var floatProp = document.getElementById('input').value;
    this.guest.float = floatProp;
};
// layoutNarrator.talkAtUser = function (speech) {
//     this.talkLoc.innerText = speech;
// };


// var submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', submitHandler);

// function submitHandler() {
// /* Submit Button Transition to next page */
//     event.preventDefault();
//     layoutUser.userSubmission();
//     layoutNarrator.saveGuest();
//     layoutNarrator.locallyStoreUser();
//     window.location.href= './color.html';
// }