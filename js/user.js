'use strict';

var userArray = [];

var user = {
    name: '',
    color: '',
    mood: '',
    particle: '',
    marsupial: '',
    fontSize: 0,
    pFont: 0,
    margin: 0,
    float: '',

    color1: '',
    color2: '',
    color3: '',

    userSubmission: function() {
        this.name = document.getElementById('nameInput').value;
        this.color = document.getElementById('colorInput').value;
        this.mood = document.getElementById('moodInput').value;
        this.particle = document.getElementById('particleInput').value;
        this.marsupial = document.querySelector('input[name = "marsupial"]:checked').value;
    },

    locallyStoreUser: function() {
        var userArrayStringified = JSON.stringify(userArray);
        localStorage.setItem('userArray', userArrayStringified);
        console.log(localStorage);
    }

};
