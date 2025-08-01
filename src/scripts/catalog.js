export const Catalog = (foods) => {

    let harvestedSeedsHTML= "";

    for (const food of foods) {
        const harvestFood = food.type

        const foodhtml = `<section class="plant">${harvestFood}</section>`
        harvestedSeedsHTML += foodhtml
    }    
    return harvestedSeedsHTML
}