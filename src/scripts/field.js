// An array to store seed objects
const plantsInField = []

// Accepts a seed object (or array of seed objects) and adds them to the 
// plantsInField array
export const addPlant = (seeds) => {
    // Checks if parameter is an array
    if (Array.isArray(seeds)) {
        // Adds each seed object in the array to plantsInField
        for (const seed of seeds) {
            plantsInField.push(seed)
        }

    }

    // Adds seed object to plantsInField
    else {
        plantsInField.push(seeds)
    }

};

export const usePlants = () => {
    return plantsInField
}