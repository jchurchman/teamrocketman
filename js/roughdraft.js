'use strict';

var roughDraftNarrator = new Narrator ();
var roughDraftUser = new User();

roughDraftNarrator.saveGuest = function() {
    this.guest = roughDraftUser;
};

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    roughDraftUser.userSubmission();
    roughDraftNarrator.saveGuest();
    roughDraftNarrator.locallyStoreUser();
    window.location.href= './final.html';
}
