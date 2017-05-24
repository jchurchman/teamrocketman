'use strict';

var layoutNarrator = new Narrator();
var layoutUser = new User();


var layoutPhaseOne = new Phase('Great! Look how cute that (marsupial) is. We’ve added the content, so, let’s look at the layout. We\'ll go through the whole process and if you don\'t like the formatting, you can hit the reset button to start over. Now, we\’re going to add borders to all of our HTML elements. This will help you better understand what is known as the Box Model.', '<input type=\'submit\' value = \'Okay\'>', null, null, null);

var layoutPhaseTwo = new Phase('Basically every element on your webpage is in a box. We’ve added these borders to show you how your elements interact with one another (don’t worry, we’ll get rid of them after we’re done formatting the page). We want our web pages to look appealing by giving them some white space. So, let’s add some margins, make your choice below.', '<input type=\'submit\' value = \'Small\'>', null, null, '<input type=\'submit\' value = \'Large\'>');

var layoutPhaseThree = new Phase('Doesn’t that look better? We’ve centered the content on our page, utilizing white space. We want our header to really stand out. Let\'s make it a little bigger by increasing the pixel size. Right now our font is set to 24px. Try typing in 32 for the pixel value of the header.', '<input type=\'submit\' value = \'submit\'>', '<input type=\'text\'>', null, null);

var layoutPhaseFour = new Phase('Great, our header is set. When you have images with text that relates to it, you want to access that visually. The float property will allow us to do this by putting the text next to the image. Click on one of the buttons and see what happens!', '<input type=\'submit\' value = \'Left\'>', null, null, '<input type=\'submit\' value = \'Right\'>');

var layoutPhaseFive = new Phase('Now that our content is formatted, let\'s choose the font. Currently, the paragraph font is (Times) and we want to make it sans-serif to match the rest of our page. Select a font from the menu below.', '<input type=\'submit\' value = \'Submit\'>', '<select class = \'inputBox\' name = \'Font List\'> <option value = Arial> Arial</option> <option value = Helvetica> Helvetica</option> <option value= \'Raleway\'>Raleway</option>', null, null);

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

layoutNarrator.getGuest();
layoutNarrator.popContent();
onLoadPage();
