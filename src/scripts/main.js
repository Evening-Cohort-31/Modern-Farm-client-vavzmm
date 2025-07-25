import { addPlant, usePlants } from "./field.js";
import {createPlan} from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

const yearlyPlan = createPlan();

const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato();
const soybean = createSoybean();
const sunflower = createSunflower();
const wheat = createWheat();

console.log(asparagus, corn, potato, soybean, sunflower, wheat)

const seeds = [asparagus, corn, potato, soybean, sunflower, wheat]

for (const seed of seeds) {
    addPlant(seed)
}

const printSeeds = usePlants();

console.log(...printSeeds);

console.log("Welcome to the main module")

