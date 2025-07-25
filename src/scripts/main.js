import { addPlant, usePlants } from "./field.js";
import {createPlan} from "./plan.js"
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from './harvest.js';

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan)

const plants = usePlants();

const harvestedSeeds = harvestPlants(plants)

console.log(...harvestedSeeds)

// console.log(...yearlyPlan)

// plantSeeds(yearlyPlan)

// console.log(...usePlants())

console.log("Welcome to the main module")

