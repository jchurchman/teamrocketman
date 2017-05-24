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
    this.saveInfo = function(parameter) {
    this[parameter] = Narrator.listenLocOne;
};

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
    // this.executePhase = function(){
//         Narrator.talkLoc.innerText = this.talkAt;
//         Narrator.buttonOne.innerHTML = this.buttonOne;

// if (this.inputOne) {
//     Narrator.listenLocOne.innerHTML = this.inputOne;
// }

// if (this.inputTwo) {
//     Narrator.listenLocTwo.innerHTML = this.inputTwo;
// }

// if (this.buttonTwo) {
//     Narrator.buttonTwo.innerHTML = this.buttonTwo;
// }
//     };
}