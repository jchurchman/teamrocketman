'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User();
var currentPhase = 1;

layoutNarrator.getGuest();
layoutNarrator.popContent();

var layoutPhaseOne = new Phase(
    'Great! Look how cute that ' + layoutNarrator.guest.marsupial.critterName + ' is.<br></br>We’ve added the content, so, let’s look at the layout. We\'ll go through the whole process and if you don\'t like the formatting, you can hit the reset button to start over. <br></br>Now, we\’re going to add borders to all of our HTML elements. This will help you better understand what is known as the Box Model.',
    '<input type=\'submit\' value = \'Okay\' id=\'actualButtonOne\'>',
    null,
    null,
    null);

var layoutPhaseTwo = new Phase(
    'Basically, every element on your webpage is in a box.<br></br>We’ve added these borders to show you how your elements interact with one another (don’t worry, we’ll get rid of them after we’re done formatting the page).<br></br>We want our web pages to look appealing by giving them some white space. So, let’s add some margins, make your choice below.',
    '<input type=\'submit\' value = \'Small\' id=\'actualButtonOne\'>',
    null,
    null,
    '<input type=\'submit\' value = \'Large\' id=\'actualButtonTwo\'>');

var layoutPhaseThree = new Phase(
    'Doesn’t that look better?  We’ve indented the content on our page, utilizing white space.<br></br>We want our header to really stand out. Let\'s make it a little bigger by increasing the pixel size.<br></br>Right now our font is set to 24px.  Try typing in 72 for the pixel value of the header.',
    '<input type=\'submit\' value = \'submit\' id=\'actualButtonOne\'>',
    '<input id=\'inputFieldOne\' type=\'number\'>',
    null,
    null);

var layoutPhaseFour = new Phase(
    'Great, our header is set.<br></br>When you have images with text that relates to it, you want to assess that visually. The float property will allow us to do this by placing the text next to the image.',
    '<input type=\'submit\' value = \'left\' id=\'actualButtonOne\'>',
    null,
    null,
    '<input type=\'submit\' value = \'right\' id=\'actualButtonTwo\'>');

var layoutPhaseFive = new Phase(
    'Now that our content is formatted, let\'s choose the font.<br></br>Currently, the paragraph font is in <i>Comic Sans</i>.. the absolute worst of the fonts. We want to make it look a little more professional.</br><br/>Select a font from the menu below.',
    '<input type=\'submit\' value = \'Submit\' id=\'actualButtonOne\'>',
    '<select class = \'inputBox\' id=\'inputFieldOne\' name = \'Font List\'> <option value = Arial> Arial</option> <option value = Helvetica> Helvetica</option> <option value= \'Georgia\'>Georgia</option>',
    null,
    null);

var layoutPhaseSix = new Phase(
    'We\'re almost there!<br></br>The last step is to create a navigation bar from the list that you created on the last page.<br></br>We first need to get rid of the bullet points, which are a list style. In the field below, type \'<i>none</i>\' to remove the bullet points.',
    '<input type=\'submit\' value = \'Submit\' id=\'actualButtonOne\'>',
    '<input type = \'text\' id=\'inputFieldOne\'>',
    null,
    null);

var layoutPhaseSeven = new Phase(
    'Right now the list is stacked, which is a block dislay. However, we want to create a horizontal navigation bar.<br></br>So, let\'s change the display to <i>inline</i>.',
    '<input type=\'submit\' value = \'Inline\' id=\'actualButtonOne\'>',
    null,
    null,
    null);

var layoutPhaseEight = new Phase(
    'Great job! We\'ve formatted our page.<br></br>Let\'s add some color to make it pop.',
    '<input type=\'submit\' value = \'Move on\' id=\'actualButtonOne\'>',
    null,
    null,
    '<input type=\'submit\' value = \'Reset\' id=\'actualButtonTwo\'>');


layoutNarrator.popPageUser = function () {
    layoutUser = this.guest;
};

layoutNarrator.popPageUser();


Phase.prototype.executePhase = function () {
    layoutNarrator.talkLoc.innerHTML = this.talkAt;
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

layoutPhaseOne.executePhase();


var submitButton = document.getElementById('buttonDiv');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    if (event.target.value) {

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
            } else if (event.target.value === 'Large') {
                selectedMargin = '300px';
            }
            // console.log(layoutNarrator.guest.margin);
            // console.log(layoutUser.margin);
            layoutNarrator.guest.margin = selectedMargin;
            // console.log(layoutNarrator.guest.margin);
            // console.log(layoutUser.margin);
            document.getElementsByTagName('main')[0].style.marginLeft = selectedMargin;
            document.getElementsByTagName('main')[0].style.marginRight = selectedMargin;
            layoutNarrator.clearThroat();
            layoutPhaseThree.executePhase();
            currentPhase += 1;
        } else if (currentPhase === 3) {
            var headerInput = document.getElementById('inputFieldOne').value;
            var headerLoc = document.getElementsByTagName('h1')[0];
            if (headerInput) {
                layoutUser.fontSize = headerInput;
                headerLoc.style.fontSize = headerInput + 'px';
                layoutNarrator.clearThroat();
                layoutPhaseFour.executePhase();
                currentPhase += 1;
            }
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
            if (listStyleInput == 'none' || listStyleInput == 'square') {
                listLoc.style.listStyleType = listStyleInput;
                layoutNarrator.clearThroat();
                layoutPhaseSeven.executePhase();
                currentPhase += 1;
            } else {
                alert('Please enter in \'none\'! Or \'square,\' if you\'re going to be like that.');
                return;
            }
        } else if (currentPhase === 7) {
            var navBarLI = document.getElementsByTagName('li');
            for (var i = 0; i < navBarLI.length; i++) {
                navBarLI[i].style.display = 'inline-block';
            }
            layoutNarrator.clearThroat();
            layoutPhaseEight.executePhase();
            currentPhase += 1;
        } else if (currentPhase === 8) {
            if (event.target.value === 'Move on') {
                layoutNarrator.saveGuest();
                layoutNarrator.locallyStoreUser();
                window.location.href = './color.html';
            }
            if (event.target.value === 'Reset') {
                window.location.reload();
            }
        }
    }
}
layoutNarrator.saveGuest = function () {
    this.guest = layoutUser;
};