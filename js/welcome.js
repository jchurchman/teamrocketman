'use strict';

var welcomeNarrator = new Narrator ();
var welcomeUser = new User();

welcomeNarrator.saveGuest = function() {
    this.guest = welcomeUser;
};

welcomeUser.userSubmission = function() {
    this.userName = document.getElementById('userNameInput').value;
    if (this.userName == '') {
        alert('Enter your name.');
        return false;
    }
    this.color = document.getElementById('colorInput').value;
    if (this.color == '') {
        alert('Enter your favorite color.');
        return false;
    }
    this.mood = document.getElementById('moodInput').value;
    if (this.mood == '') {
        alert('Enter your mood. Or just random letters, at least.');
        return false;
    }
    this.particle = document.getElementById('particleInput').value;
    if (this.particle == '') {
        alert('Can\'t think of a favorite subatomic particle? Just put in something.');
        return false;
    }
    // this.marsupial = document.querySelector('#dropdown option:checked').value;
    switch (document.querySelector('#dropdown option:checked').value) {
    case 'kangaroo':
        this.marsupial = new Marsupial ('Kangaroo', 'kangaroo', './img/kangaroo.jpg', 'The kangaroo is a marsupial from the family Macropodidae (macropods, meaning "large foot"). In common use the term is used to describe the largest species from this family, especially those of the genus Macropus: the red kangaroo, antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo. Kangaroos are endemic to Australia. The Australian government estimates that 34.3 million kangaroos lived within the commercial harvest areas of Australia in 2011, up from 25.1 million one year earlier.');
        break;
    case 'koala':
        this.marsupial = new Marsupial ('Koala', 'koala', './img/koala.jpg', 'Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. They are asocial animals, and bonding exists only between mothers and dependent offspring. Adult males communicate with loud bellows that intimidate rivals and attract mates. Males mark their presence with secretions from scent glands located on their chests. Being marsupials, koalas give birth to underdeveloped young that crawl into their mothers\' pouches, where they stay for the first six to seven months of their lives. These young koalas, known as joeys, are fully weaned around a year old. Koalas have few natural predators and parasites, but are threatened by various pathogens, such as Chlamydiaceae bacteria and the koala retrovirus, as well as by bushfires and droughts.');
        break;
    case 'sugarglider':
        this.marsupial = new Marsupial ('Sugar Glider', 'sugarglider', './img/sugarglider.jpg', 'The sugar glider is one of a number of volplane (gliding) possums in Australia. Gliders glide with the fore- and hind-limbs extended at right angles to their body, with their feet flexed upwards. The animal launches itself from a tree, spreading its limbs to expose the gliding membranes. This creates an aerofoil enabling them to glide 50 metres or more. For every 1.82 m travelled horizontally when gliding, sugar gliders fall 1m. Sugar gliders can steer by moving their limbs and adjusting the tension of their gliding membrane; for example, to turn left, a sugar glider will lower its left forearm below its right.');
        break;
    case 'tasmaniandevil':
        this.marsupial = new Marsupial ('Tasmanian Devil', 'tasmaniandevil', './img/tasmaniandevil.jpg', 'The size of a small dog, it became the largest carnivorous marsupial in the world following the extinction of the thylacine in 1936. It is characterized by its stocky and muscular build, black fur, pungent odor, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil\'s large head and neck allow it to generate among the strongest bites per unit body mass of any extant mammal land predator, and it hunts prey and scavenges carrion as well as eating household products if humans are living nearby.');
        break;
    }
    return true;
};

var submitButton = document.getElementById('buttonOne');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    var validation = welcomeUser.userSubmission();
    console.log(validation);
    if (!validation) return;
    welcomeNarrator.saveGuest();
    welcomeNarrator.locallyStoreUser();
    window.location.href= './layout.html';
}
