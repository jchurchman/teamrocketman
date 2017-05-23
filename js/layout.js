'use strict';

var layoutNarrator = new Narrator();

layoutNarrator.getGuest();
layoutNarrator.popContent = function () {
    this.popSubHeader();
    this.popNavBar();
    this.popArticleHeading();
    this.popCritterBlurb();
    this.popCritterPic();
};
layoutNarrator.popContent();