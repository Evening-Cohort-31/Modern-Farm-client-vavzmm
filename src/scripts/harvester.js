// Function to harvest plants and return seed objects
export const harvestPlants = (plants) => {
    const harvestedSeeds = [];
    
    // Iterate through each plant in the plants array
    for (const plant of plants) {  
        let outputAmount = plant.output;
        
        // Special case for corn - only half goes to seeds, half sold to cattle ranchers
        if (plant.type === "Corn") {
            outputAmount = Math.floor(plant.output / 2);
        }
        
        // Add the specified number of plant objects to the harvested seeds array
        for (let i = 0; i < outputAmount; i++) {
            harvestedSeeds.push({
                type: plant.type,
                height: plant.height,
                output: plant.output
            });
        }
    }
    
    return harvestedSeeds;
};

