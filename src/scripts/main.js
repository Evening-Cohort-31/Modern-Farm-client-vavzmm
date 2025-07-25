import { addPlant, usePlants } from "./field.js";
import {createPlan} from "./plan.js"
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan();
console.log(yearlyPlan)

plantSeeds(yearlyPlan)

console.log(...usePlants())

console.log("Welcome to the main module")

