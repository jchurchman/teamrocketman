'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User();
var currentPhase = 1;

layoutNarrator.getGuest();
layoutNarrator.popContent();

var layoutPhaseOne = new Phase(
    'Great! Look how cute that ' + layoutNarrator.guest.marsupial.critterName + ' is. We’ve added the content, so, let’s look at the layout. We\'ll go through the whole process and if you don\'t like the formatting, you can hit the reset button to start over. Now, we\’re going to add borders to all of our HTML elements. This will help you better understand what is known as the Box Model.',
    '<input type=\'submit\' value = \'Okay\' id=\'actualButtonOne\'>',
    null,
    null,
    null);

var layoutPhaseTwo = new Phase(
    'Basically every element on your webpage is in a box. We’ve added these borders to show you how your elements interact with one another (don’t worry, we’ll get rid of them after we’re done formatting the page). We want our web pages to look appealing by giving them some white space. So, let’s add some margins, make your choice below.',
    '<input type=\'submit\' value = \'Small\' id=\'actualButtonOne\'>',
    null,
    null, 
    '<input type=\'submit\' value = \'Large\' id=\'actualButtonTwo\'>');

var layoutPhaseThree = new Phase(
    'Doesn’t that look better? We’ve indented the content on our page, utilizing white space. We want our header to really stand out. Let\'s make it a little bigger by increasing the pixel size. Right now our font is set to 24px. Try typing in 32 for the pixel value of the header.',
    '<input type=\'submit\' value = \'submit\' id=\'actualButtonOne\'>',
    '<input id=\'inputFieldOne\' type=\'text\'>',
    null,
    null);

var layoutPhaseFour = new Phase(
    'Great, our header is set. When you have images with text that relates to it, you want to access that visually. The float property will allow us to do this by putting the text next to the image.',
    '<input type=\'submit\' value = \'left\' id=\'actualButtonOne\'>',
    null,
    null, 
    '<input type=\'submit\' value = \'right\' id=\'actualButtonTwo\'>');

var layoutPhaseFive = new Phase(
    'Now that our content is formatted, let\'s choose the font. Currently, the paragraph font is (Times) and we want to make it sans-serif to match the rest of our page. Select a font from the menu below.',
    '<input type=\'submit\' value = \'Submit\' id=\'actualButtonOne\'>',
    '<select class = \'inputBox\' id=\'inputFieldOne\' name = \'Font List\'> <option value = Arial> Arial</option> <option value = Helvetica> Helvetica</option> <option value= \'Raleway\'>Raleway</option>',
    null,
    null);

var layoutPhaseSix = new Phase(
    'We\'re almost there! The last step is to create a navigation bar from the list that you created on the last page. First, we need to get rid of the bullet points, which is a list style. In the field below, type \'none\' to remove the bullet points.',
    '<input type=\'submit\' value = \'Submit\' id=\'actualButtonOne\'>',
    '<input type = \'text\' id=\'inputFieldOne\'>',
    null,
    null);

var layoutPhaseSeven = new Phase(
    'Lastly, we want a horizontal navigation bar. Right now the list is stacked, which is a block dislay. Let\'s change the display to inline.', 
    '<input type=\'submit\' value = \'Submit\' id=\'actualButtonOne\'>', 
    null, 
    null, 
    null);

var layoutPhaseEight = new Phase(
    'Great job! We\'ve formatted our page. Let\'s add some color to make it pop.', 
    '<input type=\'submit\' value = \'Move on\' id=\'actualButtonOne\'>', 
    null, 
    null, 
    '<input type=\'submit\' value = \'Reset\' id=\'actualButtonTwo\'>');

layoutNarrator.popPageUser = function () {
    layoutUser = this.guest;
};

var onLoadPage = function () {
    layoutNarrator.talkLoc.innerText = layoutPhaseOne.talkAt;
    layoutNarrator.buttonOne.innerHTML = layoutPhaseOne.buttonOne;
    layoutNarrator.listenLocOne.innerHTML = layoutPhaseOne.inputOne;
    layoutNarrator.listenLocTwo.innerHTML = layoutPhaseOne.inputTwo;
    layoutNarrator.buttonTwo.innerHTML = layoutPhaseOne.buttonTwo;
    layoutNarrator.popPageUser();
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
        headerTag.style.border = '2px solid black';
        mainTag.style.border = '2px solid black';
        layoutNarrator.clearThroat();
        layoutPhaseTwo.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 2) {
        var selectedMargin;

        if (event.target.value === 'Small') {
            selectedMargin = '100px';
        } else if (event.target.value === 'Large'){
            selectedMargin = '300px';
        }

        layoutUser.margin = selectedMargin;
        document.getElementsByTagName('main')[0].style.marginLeft = selectedMargin;
        layoutNarrator.clearThroat();
        layoutPhaseThree.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 3) {
        var headerInput = document.getElementById('inputFieldOne').value;
        layoutUser.fontSize = headerInput;
        var headerLoc = document.getElementsByTagName('h1')[0];
        headerLoc.style.fontSize = headerInput + 'px';
        layoutNarrator.clearThroat();
        layoutPhaseFour.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 4) {
        var selectedFloat = event.target.value;
        layoutUser.float = selectedFloat;
        var imageFloat = document.getElementsByTagName('img')[0];
        imageFloat.style.float = selectedFloat;
        layoutNarrator.clearThroat();
        layoutPhaseFive.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 5) {
        var selectedFont = document.querySelector('#inputFieldOne option:checked').value;
        layoutUser.pFont = selectedFont;
        var pfontLoc = document.getElementsByTagName('p');
        for (var i = 0; i < pfontLoc.length - 2; i++) {
            pfontLoc[i].style.fontFamily = selectedFont;
        }
        layoutNarrator.popCritterPic();
        layoutNarrator.clearThroat();
        layoutPhaseSix.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 6) {
        var listStyleInput = document.getElementById('inputFieldOne').value;
        var listLoc = document.getElementsByTagName('ul')[0];
/*          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$        */
/*REDO ALL TAG STYLE CHANGES AS FOLLOWS*/
        listLoc.style.listStyleType = listStyleInput;
        layoutNarrator.clearThroat();
        layoutPhaseSeven.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 7) {
        var navBarLI = document.getElementsByTagName('li');
        for (var i = 0; i < navBarLI.length; i++){
            navBarLI[i].style.display = 'inline-block';
        }
        layoutNarrator.clearThroat();
        layoutPhaseEight.executePhase();
        currentPhase += 1;
    } else if (currentPhase === 8) {
        if (event.target.value === 'Move on'){
            layoutNarrator.saveGuest();
            layoutNarrator.locallyStoreUser();
            window.location.href = './color.html';
        }
    }
}