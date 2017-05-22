var welcomeNarrator = new Narrator ();

var button = document.getElementById('closeout');
button.addEventListener('click', hideMeHandler);
function hideMeHandler() {
    event.preventDefault();
    if (event.target.parentElement.getAttribute('class') === 'showMe' || event.target.parentElement.getAttribute('class') === ''){
    console.log('it is working, sort of');
    welcomeNarrator.hideMe();
    }

}

// var showTab = '';
var showTab = document.getElementById('closeout');
showTab.addEventListener('click', showMeHandler);
function showMeHandler() {
    event.preventDefault();
    if (event.target.parentElement.getAttribute('class') === 'hideMe' || event.target.parentElement.getAttribute('class') === ''){
    console.log('it is working, sort of');
    welcomeNarrator.showMe();
    }
}