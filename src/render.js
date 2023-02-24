function renderColor(color) {
    let checked = null;

    if (colorFilter.includes(color)) {
        checked = 'checked="checked"'
    }
    return `
    <div class="form-check">
       <input class="form-check-input color-filter" type="checkbox" value="" id="${color}" name="${color}" ${checked}>
       <label class="form-check-label" for="${color}">
        ${color}
       </label>
    </div>
    `;
}


function renderCat(cat) {
    let checked = null;

    if (catFilter.includes(cat)) {
        checked = 'checked="checked"'
    }

    return `
    <div class="form-check">
       <input class="form-check-input cat-filter" type="checkbox" value="" id="${cat}" name="${cat}" ${checked}>
       <label class="form-check-label" for="${cat}">
        ${cat}
       </label>
    </div>
    `;
}

function renderBrand(brand) {
    let checked = null;

    if (brandFilter.includes(brand)) {
        checked = 'checked="checked"'
    }

    return `
    <div class="form-check">
       <input class="form-check-input brands-filter" type="checkbox" value="" id="${brand}" name="${brand}" ${checked}>
       <label class="form-check-label" for="${brand}">
        ${brand}
       </label>
    </div>
    `;
}

function renderPrice(price) {
    let checked = null;
    const { from, to } = price;

    const selected = pricesFilter.find(pf => {
        return pf.from === from && pf.to === to;
    })

    if (selected) {
        checked = 'checked="checked"'
    }


    const value = `${from}-${to}`
    return `
    <div class="form-check">
       <input class="form-check-input price-filter" type="checkbox" value="" id="${value}" name="${value}" ${checked}>
       <label class="form-check-label" for="${value}">
        ${value}
       </label>
    </div>
    `;
}


function renderProduct(product) {
    const { brand, name, image, category, color, price, id } = product;

            return  `<div class="col-4 product-card" style="margin-bottom:15px;" id="${id}" data-bs-toggle="modal" data-bs-target="#product-modal">
                       <div class="card">
                         <img src="${image}" class="card-img-top" style="width: 100%; height: 125px; object-fit: cover;" alt="...">
                           <div class="card-body">
                             <h5 class="card-title">${brand} ${name}</h5>
                             <p class="card-text">
                              ${category} - ${color} - $${price}
                             </p>
                            </div>
                       </div>
                    </div>`
                
}

function renderProductModal (product) {
    console.log(product);
    const { brand, name, image, category, color, price } = product;
    const productModalBody = `<div>
                                <img src="${image}" width="100%">
                                <div>
                                    <h5 class="card-title">${brand} ${name}</h5>
                                    <p class="card-text">
                                        ${category} - ${color} - $${price}
                                    </p>
                                </div>
                              </div>`;
   document.getElementById('product-modal-body').innerHTML = productModalBody;                   
   document.getElementById('product-modal-label').innerHTML = `${brand} ${name}`;                   
}

function renderAllPrices() {

    return availablePrices.map(price => {
        return renderPrice(price);
    }).join('');

}


function renderAllBrands() {
    const allBrandsWithDuplicates = data.products.map(product => {
        return product.brand;
    });

    const brands = [];

    allBrandsWithDuplicates.forEach(brand => {

        if (!brands.includes(brand)) {

            brands.push(brand);
        }
    })

    return brands.map(brand => {
        return renderBrand(brand);
    }).join('');
}




function renderAllCats() {

    const allCatsWithDuplicates = data.products.map(product => {

        return product.category;
    })

    const cats = [];

    allCatsWithDuplicates.forEach(cat => {

        if (!cats.includes(cat)) {

            cats.push(cat);
        }
    })

    return cats.map(cat => {
        return renderCat(cat);
    }).join('');
}




function renderAllColors() {
    const allColorsWithDuplicates = data.products.map(product => {
        return product.color;
    })

    const colors = [];

    allColorsWithDuplicates.forEach(color => {
        if (!colors.includes(color)) {
            colors.push(color);
        }
    })
    return colors.map(color => {
        return renderColor(color);
    }).join('');

}

function renderAllProducts() {
    return data.products
        .filter(filterByBrand)

        .filter(filterByCategory)

        .filter(filterByColor)

        .filter(filterByPrice)

        .map(product => {
            return renderProduct(product);
        }).join('');

}