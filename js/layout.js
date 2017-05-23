'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User ();

layoutNarrator.getGuest();
layoutNarrator.popContent = function () {
    this.popSubHeader();
    this.popNavBar();
    this.popArticleHeading();
    this.popCritterBlurb();
    this.popCritterPic();
};
layoutNarrator.popContent();



var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
/* Submit Button Transition to next page */
    layoutUser.userSubmission();
    layoutNarrator.saveGuest();
    layoutNarrator.locallyStoreUser();
    window.location.href= './color.html';
}