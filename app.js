const compareButton = document.getElementById('compareButton');
const againButton = document.getElementById('ab');
const enterHeight = document.getElementById('enterYourHeight');
const enterWeight = document.getElementById('enterYourWeight');
const inputName = document.getElementById('inputName');
const inputHeight = document.getElementById('inputHeight');
const inputWeight = document.getElementById('inputWeight');
const inputDiet = document.getElementById('diet');
const grid = document.getElementById('gridContainer');
const card = document.querySelector('.card');
const footer = document.getElementById('footer');

// Create Dino Constructor
function DinoConstructor(data, units) {
    this.diet = data.diet;
    this.where = data.where;
    this.species = data.species;
    this.when = data.when;
    this.fact = data.fact;
    //the data comes in imperial so we check units
    if (units === 'm') {
        this.weight = Math.round(data.weight / 2.21);
        this.height = Math.round(data.height * 2.54);
    } else {
        this.weight = data.weight;
        this.height = data.height;
    }
}

// Create Dino Objects
function jsonDinoData() {
    const dinos = [
        {
            species: 'Triceratops',
            weight: 13000,
            height: 114,
            diet: 'herbivore',
            where: 'North America',
            when: 'Late Cretaceous',
            fact: 'First discovered in 1889 by Othniel Charles Marsh',
        },
        {
            species: 'Tyrannosaurus Rex',
            weight: 11905,
            height: 144,
            diet: 'carnivore',
            where: 'North America',
            when: 'Late Cretaceous',
            fact: 'The largest known skull measures in at 5 feet long.',
        },
        {
            species: 'Anklyosaurus',
            weight: 10500,
            height: 55,
            diet: 'herbivore',
            where: 'North America',
            when: 'Late Cretaceous',
            fact: 'Anklyosaurus survived for approximately 135 million years.',
        },
        {
            species: 'Brachiosaurus',
            weight: 70000,
            height: '372',
            diet: 'herbivore',
            where: 'North America',
            when: 'Late Jurassic',
            fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
        },
        {
            species: 'Stegosaurus',
            weight: 11600,
            height: 79,
            diet: 'herbivore',
            where: 'North America, Europe, Asia',
            when: 'Late Jurassic to Early Cretaceous',
            fact:
                'The Stegosaurus had between 17 and 22 seperate plates and flat spines.',
        },
        {
            species: 'Elasmosaurus',
            weight: 16000,
            height: 59,
            diet: 'carnivore',
            where: 'North America',
            when: 'Late Cretaceous',
            fact:
                'Elasmosaurus was a marine reptile first discovered in Kansas.',
        },
        {
            species: 'Pteranodon',
            weight: 44,
            height: 20,
            diet: 'carnivore',
            where: 'North America',
            when: 'Late Cretaceous',
            fact:
                'Actually a flying reptile, the Pteranodon is not a dinosaur.',
        },
        {
            species: 'Pigeon',
            weight: 0.5,
            height: 9,
            diet: 'herbivore',
            where: 'Worldwide',
            when: 'Holocene',
            fact: 'All birds are living dinosaurs.',
        },
    ];

    return dinos;
}

// Create Human Object
const human = {};

// Use IIFE to get human data from form
const getHumanData = (function () {
    let name = '';
    let height = 0;
    let weight = 0;
    let diet = '';
    return function () {
        name = inputName.value;
        height = inputHeight.value;
        weight = inputWeight.value;
        diet = inputDiet.value;
        human.name = name;
        human.height = height;
        human.weight = weight;
        human.diet = diet;
        human.species = 'human';
    };
})();

//create dino methods
const protoDino = {
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareWeight: function (humanWeight) {
        if (humanWeight > this.weight) {
            return `you weigh ${(humanWeight / this.weight).toFixed(
                2 //to only display first 2 decimals
            )} times more than ${this.species}!`;
        } else if (humanWeight === this.weight) {
            return `you and ${this.species} weigh the same`;
        } else {
            return `${this.species} weight ${(
                this.weight / humanWeight
            ).toFixed(2)} times more than you`;
        }
    },
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareHeight: function (humanHeight) {
        if (humanHeight > this.height) {
            return `you are ${(humanHeight / this.height).toFixed(
                2 //to only display first 2 decimals
            )} times more tall than ${this.species}!`;
        } else if (humanHeight === this.height) {
            return `you and ${this.species} are the same height`;
        } else {
            return `${this.species} is ${(this.height / humanHeight).toFixed(
                2
            )} times taller than you`;
        }
    },
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareDiet: function (humanDiet) {
        if (humanDiet === this.diet) {
            return `you eat the same as ${this.species}!`;
        } else {
            return `you two eat very diferent`;
        }
    },
};

// Generate Tiles for each Dino in Array
function createDinoArray(units) {
    const dinos = jsonDinoData();
    const dinoArray = [];
    dinos.forEach(function (dino) {
        dinoArray.push(new DinoConstructor(dino, units));
    });
    dinoArray.splice(4, 0, 'human');
    return dinoArray;
}

// Add tiles to DOM
let units = 'm'; //metric by default
function addTilesDOM() {
    const dinoArray = createDinoArray(units);
    let i = 1;
    dinoArray.forEach(function (dino) {
        const newDiv = document.createElement('div');
        if (dino === 'human') {
            newDiv.innerHTML = `<p class="nameCard">${human.name}</p> <img src="images/${human.species}.png" alt="dino1" class="dinoImg" />`;
        } else {
            newDiv.innerHTML = `<p class="nameCard">${
                dino.species
            }</p> <img src="images/${
                dino.species
            }.png" alt="dino1" class="dinoImg" /> <div id="fact">${pickRandomFact(
                dino
            )}</div> `;
        }
        newDiv.setAttribute('id', 'card' + i);
        grid.appendChild(newDiv);
        i += 1;
    });
}

//function that picks random fact related to human
function pickRandomFact(dino) {
    const outcomes = [
        dino.fact,
        dino.compareHeight(human.height),
        dino.compareDiet(human.diet),
        dino.compareWeight(human.weight),
    ];
    const random = Math.floor(Math.random() * outcomes.length);
    if (dino.species === 'Pigeon') {
        return outcomes[0];
    } else {
        return outcomes[random];
    }
}

// Remove form from screen
function displayGrid() {
    grid.style.display = 'grid';
    card.style.display = 'none';
    footer.style.position = 'unset';
    getHumanData();
    console.log(human);
    addTilesDOM();
}

function again() {
    grid.style.display = 'none';
    card.style.display = 'unset';
    footer.style.position = 'absolute';
}

// On button click, prepare and display infographic
compareButton.addEventListener('click', displayGrid);
againButton.addEventListener('click', again);

// change units
function changeToImperial() {
    enterWeight.innerHTML = 'Enter your weight: (lbs)';
    enterHeight.innerHTML = 'Enter your height: (in)';
    units = 'i';
}
function changeToMetric() {
    enterWeight.innerHTML = 'Enter your weight: (kg)';
    enterHeight.innerHTML = 'Enter your height: (cm)';
    units = 'm';
}

DinoConstructor.prototype = protoDino;
