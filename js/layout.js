'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User ();

layoutNarrator.saveGuest = function() {
    this.guest = layoutUser;
};

layoutNarrator.getGuest();
layoutNarrator.popContent();

<<<<<<< HEAD
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);
=======





// var submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', submitHandler);
>>>>>>> 484a8d5cca26e075804bf9c9b754fa70b61c470c

// function submitHandler() {
// /* Submit Button Transition to next page */
//     event.preventDefault();
//     layoutUser.userSubmission();
//     layoutNarrator.saveGuest();
//     layoutNarrator.locallyStoreUser();
//     window.location.href= './color.html';
// }