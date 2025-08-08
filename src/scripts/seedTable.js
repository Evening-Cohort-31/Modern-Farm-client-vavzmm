export const seedTable = (harvestedSeeds) => {
    const newSeedArray = []

    for (const seed of harvestedSeeds) {
        let found = newSeedArray.find(newSeed => {
          return  newSeed.type === seed.type
           
        })
       if (found)  {
                found.quantity +=1
            }

            else {
                newSeedArray.push({type: seed.type, quantity: 1})
            }  
    }

    return newSeedArray 
}