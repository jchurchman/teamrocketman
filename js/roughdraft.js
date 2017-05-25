'use strict';

var roughDraftNarrator = new Narrator ();
var roughDraftUser = new User();
var currentPhase = 1;

roughDraftNarrator.getGuest();
roughDraftNarrator.popContent();
roughDraftNarrator.popStyles();
roughDraftNarrator.popColors();

var roughDraftPhaseOne = new Phase (
    'This is pretty much what your page looks like after incorporating the choices that you\'ve made. We want to show you the final page, but we\'ve lost the link to the final submit button! Click below to find it.',
    '<input type="submit" value="Let\'s do it!" id="actualButtonOne">',
    null,
    null,
    null
);

var roughDraftPhaseTwo = new Phase (
    'In order to find the button, we need your help selecting an element from the drop-down menu.',
    '<input type="submit" value="This one?" id="actualButtonOne">',
    '<select class="inputBox" id="inputFieldOne" name="Tag List"><option value="img">Image</option><option value="h1">Header</option><option value="h2">SubHeader</option><option value="h3">Article Header</option><option value="ul">Nav List</option>',
    null,
    null
);

roughDraftNarrator.popPageUser = function () {
    roughDraftUser = this.guest;
};

roughDraftNarrator.popPageUser();

Phase.prototype.executePhase = function () {
    roughDraftNarrator.talkLoc.innerHTML = this.talkAt;
    roughDraftNarrator.buttonOne.innerHTML = this.buttonOne;
    if (this.inputOne) {
        roughDraftNarrator.listenLocOne.innerHTML = this.inputOne;
    }
    if (this.inputTwo) {
        roughDraftNarrator.listenLocTwo.innerHTML = this.inputTwo;
    }
    if (this.buttonTwo) {
        roughDraftNarrator.buttonTwo.innerHTML = this.buttonTwo;
    }
};

roughDraftPhaseOne.executePhase();

var submitButton = document.getElementById('buttonDiv');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    if (currentPhase === 1) {
        roughDraftNarrator.clearThroat();
        roughDraftPhaseTwo.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 2) {
        switch (document.querySelector('#inputFieldOne option:checked').value) {
            case ('h1'):
                document.getElementsByTagName('header')[0].removeChild(document.getElementsByTagName('h1')[0]);
                break;
            case ('ul'):
                document.getElementsByTagName('header')[0].removeChild(document.getElementsByTagName('ul')[0]);
                break;
            case ('h2'):
                document.getElementsByTagName('header')[0].removeChild(document.getElementsByTagName('h2')[0]);
                break;
            case ('img'):
                document.getElementsByTagName('p')[0].removeChild(document.getElementsByTagName('img')[0]);
                break;
            case ('h3'):
                var articleHeaderLoc = document.getElementsByTagName('h3')[0];
                articleHeaderLoc.innerHTML = '<input type="submit" value="I\'m done!" id="actualButtonTwo">';
                var moveOnButton = document.getElementById('actualButtonTwo');
                moveOnButton.addEventListener('click', moveOnHandler);
        }
    }
}
    function moveOnHandler() {
        window.location.href = './final.html';
    }
