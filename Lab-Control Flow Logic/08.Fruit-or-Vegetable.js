/**
 * Created by Valeri on 5/25/2017.
 */
function fruitOrVegitable(str){
    switch (str){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach': console.log('fruit'); break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley': console.log('vegetable');break;
        default: console.log('unknown'); break;
    }
}

fruitOrVegitable('tomato');