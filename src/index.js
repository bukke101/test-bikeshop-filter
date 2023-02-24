//Some filtering
console.log('All products', data.products);
console.log('All frames', data.products.filter(x => x.category === 'Frames'));
console.log('All handlebars', data.products.filter(x => x.category === 'Handlebars'));
console.log('All Alive products', data.products.filter(x => x.brand === 'Alive'));
console.log('All Alive frames', data.products.filter(x => x.brand === 'Alive' && x.category === 'Frames'));

//Some sorting (Sorting always 'mutates' the original array, that's why we copy it here [...array])
console.log('Sorted by price, highest first', [...data.products].sort((a, b) => a.price));
console.log('Sorted by price, lowest first', [...data.products].sort((a, b) => a.price).reverse());
console.log('Sorted by brand', [...data.products].sort((a, b) => a.brand.localeCompare(b.brand)));
console.log('Sorted by category', [...data.products].sort((a, b) => a.category.localeCompare(b.category)));

//Some mapping
console.log('All brands', new Set(data.products.map(product => product.brand)));
console.log('All categories', new Set(data.products.map(x => x.category)));


// renders all products & addEventListener to the checkboxes
function render() {
    document.getElementById('product-container').innerHTML = renderAllProducts();
    document.getElementById('colors-container').innerHTML = renderAllColors();
    document.getElementById('price-container').innerHTML = renderAllPrices();
    document.querySelectorAll('.price-filter').forEach(checkbox => {
        checkbox.addEventListener('change', event => {

            const [from, to] = checkbox.name       // "0-100"
                                       .split('-') // ["0","100"]
                                       .map(price => {return parseInt(price)}); //[0,100];

            const pricePosition = pricesFilter.findIndex(price => {
                return price.from === from && price.to === to
            });

            if (pricePosition === -1) {
                //const price = { from:from, to:to };
                const price = { from, to };
                pricesFilter.push(price);
            } else {

                pricesFilter.splice(pricePosition, 1);
            }

            render();

        })
    })

   
    document.querySelectorAll('.color-filter').forEach(checkbox => {
        checkbox.addEventListener('change', event => {
            const colorName = checkbox.name;

            //Checking the position or "index" of brandName in brandFilter (0 -> whatever OR if it's not included in the array it will give us -1)
            const colorPosition = colorFilter.indexOf(colorName);
            //Do some checkings on brandposition (-1 means not in the array, anything else is the position in the array)
            if (colorPosition === -1) {
                //brand is not in the array, we must add it
                colorFilter.push(colorName);
            } else {
                //brand is in the array, we must remove it
                colorFilter.splice(colorPosition, 1);
            }

            render();
        })
    })
    document.getElementById('brands-container').innerHTML = renderAllBrands();
    document.getElementById('cats-container').innerHTML = renderAllCats();
    document.querySelectorAll('.cat-filter').forEach(checkbox => {
        checkbox.addEventListener('change', event => {
            const catName = checkbox.name;

            //Checking the position or "index" of brandName in brandFilter (0 -> whatever OR if it's not included in the array it will give us -1)
            const catPosition = catFilter.indexOf(catName);

            // Same thing as above ^^
            // But this thing can be used for looking for anything else than strings or numbers
            // const brandPosition = brandFilter.findIndex(brand => {
            //     return brandName === brand;
            // });

            //Do some checkings on brandposition (-1 means not in the array, anything else is the position in the array)
            if (catPosition === -1) {
                //brand is not in the array, we must add it
                catFilter.push(catName);
            } else {
                //brand is in the array, we must remove it
                catFilter.splice(catPosition, 1);
            }

            render();
        })
    })

    document.querySelectorAll('.brands-filter').forEach(checkbox => {
        checkbox.addEventListener('change', event => {
            const brandName = checkbox.name;

            //Checking the position or "index" of brandName in brandFilter (0 -> whatever OR if it's not included in the array it will give us -1)
            const brandPosition = brandFilter.indexOf(brandName);

            // Same thing as above ^^
            // But this thing can be used for looking for anything else than strings or numbers
            // const brandPosition = brandFilter.findIndex(brand => {
            //     return brandName === brand;
            // });

            //Do some checkings on brandposition (-1 means not in the array, anything else is the position in the array)
            if (brandPosition === -1) {
                //brand is not in the array, we must add it
                brandFilter.push(brandName);
            } else {
                //brand is in the array, we must remove it
                brandFilter.splice(brandPosition, 1);
            }

            render();
        })
    })

    document.querySelectorAll('.product-card').forEach(productCard => {
        productCard.addEventListener('click', event => {
            const productId = productCard.id;
            const product = data.products.find(x => x.id == productId);
            renderProductModal(product);

        })
    })

}

render();


/*
class Person {

    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const kenzo = new Person("Kenzo" , "De Witte")
const fullName = kenzo.firstName;
console.log(fullName);*/