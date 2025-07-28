import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

// Creates a seed object for each item within matrix parameter 
// and adds to plantsInField array
export const plantSeeds = (plan) => {
    // Loops through each subArray
    for (const row of plan) {
        // Loops through each item in each subArray
        for (const seed of row) {
            // Empty variable to assign seed object to
            let seedToPlant 
            
            
            
        // Checks the value of the seed string and calls the appropriate function
        if (seed === "Asparagus") {
        seedToPlant = createAsparagus(seed)
        }    
        if (seed === "Corn") {
            seedToPlant = createCorn(seed)
        }    
        if (seed === "Potato") {
            seedToPlant = createPotato(seed)
        }    
        if (seed === "Soybean") {
            seedToPlant = createSoybean(seed)
        }    
        if (seed === "Sunflower") {
            seedToPlant = createSunflower(seed)
        }    
        if (seed === "Wheat") {
            seedToPlant = createWheat(seed)
        }    
        // Adds seed object to the plantsInField array
        addPlant(seedToPlant)
    }
    
}
}
