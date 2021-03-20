// Create Dino Constructor **checked

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen **checked

// On button click, prepare and display infographic

const compareButton = document.getElementById('compareButton');
const enterHeight = document.getElementById('enterYourHeight');
const enterWeight = document.getElementById('enterYourWeight');
const grid = document.getElementById('gridContainer');
const card = document.querySelector('.card');
const footer = document.getElementById('footer');

compareButton.addEventListener('click', displayGrid);

function changeToImperial() {
    enterWeight.innerHTML = 'Enter your weight: (lbs)';
    enterHeight.innerHTML = 'Enter your height: (Feet)';
}

function changeToMetric() {
    enterWeight.innerHTML = 'Enter your weight: (kg)';
    enterHeight.innerHTML = 'Enter your height: (cm)';
}

// Remove form from screen
function displayGrid() {
    grid.style.display = 'grid';
    card.style.display = 'none';
    footer.style.position = 'unset';
}

/**
 * The raw dinosaur data, put in function to avoid global variable
 * the function returns an array of dino objects
 */
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

// dino constructor
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

// Store the prototype dinosaur with methods,
// assign the prototype to the constructor
//units are imperial
const protoDino = {
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

    compareDiet: function (humanDiet) {
        if (humanDiet === this.diet) {
            return `you eat the same as ${this.species}!`;
        } else {
            return `you two eat very diferent`;
        }
    },
};

DinoConstructor.prototype = protoDino;

const velociraptor = new DinoConstructor(jsonDinoData()[0], 'm');

console.log(velociraptor);
console.log(velociraptor.compareWeight(120));
console.log(velociraptor.compareHeight(70.8));
console.log(velociraptor.compareDiet('omnivore'));
