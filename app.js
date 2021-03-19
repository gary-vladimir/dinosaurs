// Create Dino Constructor

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

// Remove form from screen

// On button click, prepare and display infographic

const compareButton = document.getElementById('compareButton');
const enterHeight = document.getElementById('enterYourHeight');
const enterWeight = document.getElementById('enterYourWeight');
const grid = document.getElementById('gridContainer');
const card = document.querySelector('.card');

compareButton.addEventListener('click', displayGrid);

function changeToImperial() {
    enterWeight.innerHTML = 'Enter your weight: (lbs)';
    enterHeight.innerHTML = 'Enter your height: (Feet)';
}

function changeToMetric() {
    enterWeight.innerHTML = 'Enter your weight: (kg)';
    enterHeight.innerHTML = 'Enter your height: (cm)';
}

function displayGrid() {
    grid.style.display = 'grid';
    card.style.display = 'none';
}
