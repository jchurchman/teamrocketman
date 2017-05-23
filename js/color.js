'use strict';

var colorNarrator = new Narrator ();
var colorUser = new User();

colorNarrator.saveGuest = function() {
    this.guest = colorUser;
};

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    colorUser.userSubmission();
    colorNarrator.saveGuest();
    colorNarrator.locallyStoreUser();
    window.location.href= './roughdraft.html';
}
