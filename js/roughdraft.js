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

var roughDraftPhaseOne = new Phase (
    'This is pretty much what your page looks like after incorporating the choices that you\'ve made. We want to show you the final page, but we\'ve lost the link to the final submit button! Click below to find it.',
    '<input type="submit" value="submit" id="actualButtonOne">',
    null,
    null,
    null
);

var roughDraftPhaseTwo = new Phase (
    'In order to find the button, we need your help selecting an element from the drop-down menu.',
    '<input type"submit" value="This one?" id="actualButtonOne">',
    '<select class="inputBox" id="inputFieldOne" name="Tag List"><option value="img">Image</option><option value="p">Paragraph</option><option value="h1">Header</option><option value="ul">Nav List</option>',
    null,
    null
);