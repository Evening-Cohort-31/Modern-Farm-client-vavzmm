export const Catalog = (foods) => {

    let harvestedSeedsHTML= `
        <table>
            <tr>
                <th>Food</th>
                <th>Quantity</th>
            </tr>       
        `;

    for (const food of foods) {
        const harvestFood = food.type
        const harvestQuantity = food.quantity

        const foodhtml = `
            <tr>
            <td class="plant">${harvestFood}</td>
            <td class="plant">${harvestQuantity}</td>
            </tr>
            `
        harvestedSeedsHTML += foodhtml
    }   
    
    harvestedSeedsHTML += `
    </table>
    `
    return harvestedSeedsHTML
}