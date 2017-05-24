'use strict';

function User() {
    this.userName = '';
    this.color = '';
    this.mood = '';
    this.particle = '';
    this.marsupial = '';
    this.fontSize = '';
    this.pFont = 0;
    this.margin = '';
    this.float = '';
    this.color1 = '';
    this.color2 = '';
    this.color3 = '';
}

function Marsupial( critterName, id, filepath, blurb ) {
    this.critterName = critterName;
    this.id = id;
    this.filepath = filepath;
    this.blurb = blurb;
}

function Phase(talkAt, buttonOne, inputOne, inputTwo, buttonTwo) {
    this.talkAt = talkAt;
    this.buttonOne = buttonOne;
    this.inputOne = inputOne;
    this.inputTwo = inputTwo;
    this.buttonTwo = buttonTwo;
}
