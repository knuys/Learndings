const groceries = ['Mango', 'Avocado', 'Durian', 'Watermelon', 'Brocolini'];

function addingItems(newItem) {
    groceries.push(newItem);
}

function groceriesVertical() {
    groceries.forEach(grocery => {
        console.log('Buy ' + grocery);
    
    });
}

addingItems(['Pish', 'salami for cats', 'loops', 'coconut nut', 'cocofruit', 'cocotree', 'cocopalm', 'family'])

groceriesVertical();

