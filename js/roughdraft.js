'use strict';

var roughDraftNarrator = new Narrator ();
var roughDraftUser = new User();
// var currentPhase = 1;

roughDraftNarrator.getGuest();
roughDraftNarrator.popContent();
roughDraftNarrator.popStyles();
roughDraftNarrator.popColors();

roughDraftNarrator.saveGuest = function() {
    this.guest = roughDraftUser;
};

roughDraftNarrator.popPageUser = function () {
    roughDraftUser = this.guest;
};

var submitButton = document.getElementById('buttonDiv');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    roughDraftUser.userSubmission();
    roughDraftNarrator.saveGuest();
    roughDraftNarrator.locallyStoreUser();
    window.location.href= './final.html';
}
