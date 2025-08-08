// Import functions
import { usePlants } from "./field.js";
import {createPlan} from "./plan.js"
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from './harvester.js';
import { Catalog } from "./catalog.js";
import { seedTable } from "./seedTable.js";

// Invoke createPlan() and assign to variable yearlyPlan
// createPlan() returns a matrix (An array with nested arrays)
const yearlyPlan = createPlan();

// Invoke plantSeeds with the argument of yearlyPlan
// Creates the appropriate seed object for each plant in the yearlyPlan matrix and
// adds them to the plantsInField array
plantSeeds(yearlyPlan)

// Invoke usePlants and assign to plants
// usePlants returns the array of seed objects
const plants = usePlants();

// Invoke harvestPlants with the argument of plants
// harvestPlants returns an updated array with additional seed objects based on 
// output value/plant type
const harvestedSeeds = harvestPlants(plants)

const countedSeeds = seedTable(harvestedSeeds)

// Sort the harvested seeds alphabetically by type

const sortedHarvestedSeeds = countedSeeds.sort((a, b) => {
    // (Soybean, Corn, Asparagus, Wheat, Potato, Sunflower)
    return a.type.localeCompare(b.type);
});

// Logs sorted harvestedSeeds array to the console
console.log(sortedHarvestedSeeds)

console.log("Welcome to the main module")

// Use the sorted array for the catalog
const foodhtml = Catalog(sortedHarvestedSeeds)

document.querySelector(".container").innerHTML = foodhtml
