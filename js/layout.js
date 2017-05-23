'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User ();

layoutNarrator.saveGuest = function() {
    this.guest = layoutUser;
};

layoutNarrator.getGuest();
layoutNarrator.popTopContent();

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
/* Submit Button Transition to next page */
    event.preventDefault();
    layoutUser.userSubmission();
    layoutNarrator.saveGuest();
    layoutNarrator.locallyStoreUser();
    window.location.href= './color.html';
}