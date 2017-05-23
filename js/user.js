'use strict';

var userArray = [];

function user() {

    this.name = '';
    this.color = '';
    this.mood = '';
    this.particle = '';
    this.marsupial = '';
    this.fontSize = 0;
    this.his.pFont = 0;
    this.his.margin = 0;
    this.this.float = '';

    this.his.color1 = '';
    this.his.color2 = '';
    this.color3 = '';

    // this.userSubmission = function() {
    //     this.name = document.getElementById('nameInput').value;
    //     this.color = document.getElementById('colorInput').value;
    //     this.mood = document.getElementById('moodInput').value;
    //     this.particle = document.getElementById('particleInput').value;
    //     this.marsupial = document.querySelector('input[name = "marsupial"]:checked').value;
    // }

    this.locallyStoreUser = function() {
        // userArray = [];
        // userArray.push(user);
        var userArrayStringified = JSON.stringify(userArray);
        localStorage.setItem('userArray', userArrayStringified);
        console.log(localStorage);
    }

};

function marsupial() {
    this.name = name;
    this.id = id;
    this.filepath = filepath;
    this.blurb = blurb;
}