'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User ();

layoutNarrator.saveGuest = function() {
    this.guest = layoutUser;
};

layoutNarrator.getGuest();
layoutNarrator.popContent();

//edit these
layoutNarrator.getFontSize = function () {
    var fontSizeProp = document.getElementById('input').value;
    this.guest.fontSize = fontSizeProp;
};
layoutNarrator.getPFont = function () {
    var pFontProp = document.getElementById('input').value;
    this.guest.pFont = pFontProp;
};
layoutNarrator.getMargin = function () {
    var marginProp = document.getElementById('input').value;
    this.guest.margin = marginProp;
};
layoutNarrator.getFloat = function () {
    var floatProp = document.getElementById('input').value;
    this.guest.float = floatProp;
};

var layoutPhaseOne = new Phase('Great! Look how cute that (marsupial) is. We’ve added the content, so, let’s look at the layout. We\'ll go through the whole process and if you don\'t like the formatting, you can hit the reset button to start over. Now, we\’re going to add borders to all of our HTML elements. This will help you better understand what is known as the Box Model.', 'Okay', null, null, null);
var layoutPhaseTwo = new Phase('Basically every element on your webpage is in a box. We’ve added these borders to show you how your elements interact with one another (don’t worry, we’ll get rid of them after we’re done formatting the page). We want our web pages to look appealing by giving them some white space. So, let’s add some margins, make your choice below.', 'Small', null, null, 'Large');
var layoutPhaseThree = new Phase('Doesn’t that look better? We’ve centered the content on our page, utilizing white space. We want our header to really stand out. Let\'s make it a little bigger by increasing the pixel size. Right now our font is set to 24px. Try typing in 32 for the pixel value of the header.', 'Submit', 'font size', null, null);
var layoutPhaseFour = new Phase('Great, our header is set. When you have images with text that relates to it, you want to access that visually. The float property will allow us to do this by putting the text next to the image. Click on one of the buttons and see what happens!', 'Left', null, null, 'Right');
var layoutPhaseFive = new Phase('Now that our content is formatted, let\'s choose the font. Currently, the paragraph font is (Times) and we want to make it sans-serif to match the rest of our page. Select a font from the menu below.', 'Submit', 'font dropdown', null, null );
var layoutPhaseSix = new Phase('We\'re almost there! The last step is to create a navigation bar from the list that you created on the last page. First, we need to get rid of the bullet points, which is a list style. In the field below, type \'none\' to remove the bullet points.', 'Submit', 'inputNone', null, null);
var layoutPhaseSeven = new Phase('Lastly, we want a horizontal navigation bar. Right now the list is stacked, which is a block dislay. Let\'s change the display to inline.', 'Submit', null, null, null);
var layoutPhaseEight = new Phase('Great job! We\'ve formatted our page. Let\'s add some color to make it pop.', 'Move on', null, null, 'Reset');

// //8 items in here
// layoutNarrator.talkAt = ['Great! Look how cute that (marsupial) is. We’ve added the content, so, let’s look at the layout. We\'ll go through the whole process and if you don\'t like the formatting, you can hit the reset button to start over. Now, we\’re going to add borders to all of our HTML elements. This will help you better understand what is known as the Box Model.', 'Basically every element on your webpage is in a box. We’ve added these borders to show you how your elements interact with one another (don’t worry, we’ll get rid of them after we’re done formatting the page). We want our web pages to look appealing by giving them some white space. So, let’s add some margins, make your choice below.', 'Doesn’t that look better? We’ve centered the content on our page, utilizing white space. We want our header to really stand out. Let\'s make it a little bigger by increasing the pixel size. Right now our font is set to 24px. Try typing in 32 for the pixel value of the header.', 'Great, our header is set. When you have images with text that relates to it, you want to access that visually. The float property will allow us to do this by putting the text next to the image. Click on one of the buttons and see what happens!', 'Now that our content is formatted, let\'s choose the font. Currently, the paragraph font is (Times) and we want to make it sans-serif to match the rest of our page. Select a font from the menu below.', 'We\'re almost there! The last step is to create a navigation bar from the list that you created on the last page. First, we need to get rid of the bullet points, which is a list style. In the field below, type \'none\' to remove the bullet points.', 'Lastly, we want a horizontal navigation bar. Right now the list is stacked, which is a block dislay. Let\'s change the display to inline.', 'Great job! We\'ve formatted our page. Let\'s add some color to make it pop.'];

// layoutNarrator.listenTo = ['',];

// layoutNarrator.moveOn = ['Okay',];

// for (var i = 0; i < layoutNarrator.talkAt.length; i++) {
//     for (var j = 0; j < layoutNarrator.listenTo.length; j++) {
//         for (var k = 0; layoutNarrator.moveOn.length; k++) {

//         }
//     }
// }



// layoutNarrator.talkAtUser = function (speech) {
//     this.talkLoc.innerText = speech;
// };


// var submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', submitHandler);

// function submitHandler() {
// /* Submit Button Transition to next page */
//     event.preventDefault();
//     layoutUser.userSubmission();
//     layoutNarrator.saveGuest();
//     layoutNarrator.locallyStoreUser();
//     window.location.href= './color.html';
// }