import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const seed of row) {
            let seedToPlant 
            
            
            
            
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
        addPlant(seedToPlant)
    }
    
}
}
