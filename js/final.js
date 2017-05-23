'use strict';

var finalNarrator = new Narrator ();
var finalUser = new User ();

finalNarrator.saveGuest = function() {
    this.guest = finalUser;
}

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    finalUser.userSubmission();
    finalNarrator.saveGuest();
    finalNarrator.locallyStoreUser();
    window.location.href= './index.html';
}