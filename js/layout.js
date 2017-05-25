'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User();
var currentPhase = 1;

layoutNarrator.getGuest();
layoutNarrator.popContent();

var layoutPhaseOne = new Phase('Great! Look how cute that ' + layoutNarrator.guest.marsupial.critterName + ' is. We’ve added the content, so, let’s look at the layout. We\'ll go through the whole process and if you don\'t like the formatting, you can hit the reset button to start over. Now, we\’re going to add borders to all of our HTML elements. This will help you better understand what is known as the Box Model.', '<input type=\'submit\' value = \'Okay\'>', null, null, null);

var layoutPhaseTwo = new Phase('Basically every element on your webpage is in a box. We’ve added these borders to show you how your elements interact with one another (don’t worry, we’ll get rid of them after we’re done formatting the page). We want our web pages to look appealing by giving them some white space. So, let’s add some margins, make your choice below.', '<input type=\'submit\' value = \'Small\'>', null, null, '<input type=\'submit\' value = \'Large\'>');

var layoutPhaseThree = new Phase('Doesn’t that look better? We’ve centered the content on our page, utilizing white space. We want our header to really stand out. Let\'s make it a little bigger by increasing the pixel size. Right now our font is set to 24px. Try typing in 32 for the pixel value of the header.', '<input type=\'submit\' value = \'submit\'>', '<input id=\'headerInput\' type=\'text\'>', null, 'Hit submit once you\'re done.');

var layoutPhaseFour = new Phase('Great, our header is set. When you have images with text that relates to it, you want to access that visually. The float property will allow us to do this by putting the text next to the image.', '<input type=\'submit\' value = \'Left\'>', ' Click on one of the buttons and see what happens!', null, '<input type=\'submit\' value = \'Right\'>');

var layoutPhaseFive = new Phase('Now that our content is formatted, let\'s choose the font. Currently, the paragraph font is (Times) and we want to make it sans-serif to match the rest of our page. Select a font from the menu below.', '<input type=\'submit\' value = \'Submit\'>', '<select class = \'inputBox\' id=\'fontDropdown\' name = \'Font List\'> <option value = Arial> Arial</option> <option value = Helvetica> Helvetica</option> <option value= \'Raleway\'>Raleway</option>', null, 'Choose a good one.');

var layoutPhaseSix = new Phase('We\'re almost there! The last step is to create a navigation bar from the list that you created on the last page. First, we need to get rid of the bullet points, which is a list style. In the field below, type \'none\' to remove the bullet points.', '<input type=\'submit\' value = \'Submit\'>', '<input type = \'text\'>', null, null);

var layoutPhaseSeven = new Phase('Lastly, we want a horizontal navigation bar. Right now the list is stacked, which is a block dislay. Let\'s change the display to inline.', '<input type=\'submit\' value = \'Submit\'>', null, null, null);

var layoutPhaseEight = new Phase('Great job! We\'ve formatted our page. Let\'s add some color to make it pop.', '<input type=\'submit\' value = \'Move on\'>', null, null, '<input type=\'submit\' value = \'Reset\'>');


var onLoadPage = function () {
    layoutNarrator.talkLoc.innerText = layoutPhaseOne.talkAt;
    layoutNarrator.buttonOne.innerHTML = layoutPhaseOne.buttonOne;
    layoutNarrator.listenLocOne.innerHTML = layoutPhaseOne.inputOne;
    layoutNarrator.listenLocTwo.innerHTML = layoutPhaseOne.inputTwo;
    layoutNarrator.buttonTwo.innerHTML = layoutPhaseOne.buttonTwo;
};

layoutNarrator.saveGuest = function () {
    this.guest = layoutUser;
};

onLoadPage();

Phase.prototype.executePhase = function () {
    layoutNarrator.talkLoc.innerText = this.talkAt;
    layoutNarrator.buttonOne.innerHTML = this.buttonOne;

    if (this.inputOne) {
        layoutNarrator.listenLocOne.innerHTML = this.inputOne;
    }

    if (this.inputTwo) {
        layoutNarrator.listenLocTwo.innerHTML = this.inputTwo;
    }

    if (this.buttonTwo) {
        layoutNarrator.buttonTwo.innerHTML = this.buttonTwo;
    }
};

var submitButton = document.getElementById('buttonDiv');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    if (currentPhase === 1) {
        var headerTag = document.getElementsByTagName('header')[0];
        var mainTag = document.getElementsByTagName('main')[0];
        headerTag.setAttribute('class', 'border');
        mainTag.setAttribute('class', 'border');
        layoutPhaseTwo.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 2) {
        var selectedMargin = event.target.value;
        console.log(selectedMargin);
        layoutUser.margin = selectedMargin;
        document.getElementsByTagName('body')[0].setAttribute('class', selectedMargin);
        layoutPhaseThree.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 3) {
        var headerInput = document.getElementById('headerInput').value;
        var headerLoc = document.getElementsByTagName('h1')[0];
        headerLoc.innerHTML = '<h1 style="font-size:' + headerInput + 'px">Your Webpage!</h1>';
        layoutPhaseFour.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 4) {
        var selectedFloat = event.target.value;
        layoutUser.float = selectedFloat;
        var imageFloat = document.getElementsByTagName('img')[0];
        imageFloat.setAttribute('class', selectedFloat);
        layoutPhaseFive.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 5) {
        //does not work yet
        var selectedFont = document.querySelector('#fontDropdown option:checked').value;
        console.log(selectedFont);
        layoutUser.pFont = selectedFont;
        var pfontLoc = document.getElementById('mainParagraph');
        pfontLoc.innerHTML = '<p style="font-family:' + selectedFont + '">';
        layoutPhaseSix.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 6) {
        
        layoutPhaseSeven.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 7) {

        layoutPhaseEight.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 8) {

        currentPhase += 1;
    }
}