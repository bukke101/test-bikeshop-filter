const brandFilter = [];
const catFilter = [];
const colorFilter = [];
const pricesFilter = [];
const availablePrices = [ 
    { 
        from: 0,
        to: 100
    }, {

        from: 100,
        to: 500
    }
 ];

const filterByBrand = product => {
    // Checking first if theres no filters by checking brand array length (no filters = 0 items in the array)
    if (brandFilter.length === 0) {
        //because we dont have any filters we return true (this will include the product in the results)
        return true;
    } else {
        //we have a filter so we have to check if the product's brand is selected as filter (aka, check if it's included in the brand array)
        return brandFilter.includes(product.brand);
    }
}



const filterByCategory = product => {
    // Checking first if theres no filters by checking brand array length (no filters = 0 items in the array)
    if (catFilter.length === 0) {
        //because we dont have any filters we return true (this will include the product in the results)
        return true;
    } else {
        //we have a filter so we have to check if the product's brand is selected as filter (aka, check if it's included in the brand array)
        return catFilter.includes(product.category);
    }
}

const filterByColor = product => {
    // Checking first if theres no filters by checking brand array length (no filters = 0 items in the array)
    if (colorFilter.length === 0) {
        //because we dont have any filters we return true (this will include the product in the results)
        return true;
    } else {
        //we have a filter so we have to check if the product's brand is selected as filter (aka, check if it's included in the brand array)
        return colorFilter.includes(product.color);
    }
}

const filterByPrice = product => {
    // Checking first if theres no filters by checking brand array length (no filters = 0 items in the array)
    if (pricesFilter.length === 0) {
        //because we dont have any filters we return true (this will include the product in the results)
        return true;
    } else {
        //we have a filter so we have to check if the product's brand is selected as filter (aka, check if it's included in the brand array)
        return pricesFilter.find(pf => { 

            return product.price >= pf.from && product.price <= pf.to;
         });
    }
}

