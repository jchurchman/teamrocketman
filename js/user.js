'use strict';


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

    locallyStoreUser: function() {
        var userArrayStringified = JSON.stringify(this);
        localStorage.setItem('userArray', userArrayStringified);
        console.log(localStorage);
    },

    getStoredData: function () {
        JSON.parse(localStorage.getItem('userArray'));
    }
};
