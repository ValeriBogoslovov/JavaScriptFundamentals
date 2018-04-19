/**
 * Created by Valeri on 5/23/2017.
 */
function autoEngineering(array){
    let brands = new Map();

    for (let carData of array) {
        let _data = carData.split(' | ');
        let [_brand, _model, _quantity] = [_data[0], _data[1], Number(_data[2])];
        if(!brands.has(_brand)){
            brands.set(_brand, new Map());
            brands.get(_brand).set(_model, _quantity);
        }else if(!brands.get(_brand).has(_model)){
            brands.get(_brand).set(_model, _quantity);
        }else {
            let moreQuantity = brands.get(_brand).get(_model) + _quantity;
            brands.get(_brand).set(_model, moreQuantity);
        }
    }
    for (let [brand, models] of brands.entries()) {
        console.log(brand);
        for (let [model, quantity] of models.entries()) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoEngineering([ 'Mercedes-Benz | 50PS | 123',
    'Mercedes-Benz | 50PS | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200' ]);