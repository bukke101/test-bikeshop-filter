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
    if (catFilter.length === 0) {
        return true;
    } else {
        return catFilter.includes(product.category);
    }
}

const filterByColor = product => {
    if (colorFilter.length === 0) {
        return true;
    } else {
        return colorFilter.includes(product.color);
    }
}

const filterByPrice = product => {
    if (pricesFilter.length === 0) {
        return true;
    } else {
        return pricesFilter.find(pf => { 
            return product.price >= pf.from && product.price <= pf.to;
         });
    }
}

const colorMap =  {
    'Grey':'#DEDE',
    'Black':'#000',
    'Raw':'#CCC',
};
