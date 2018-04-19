/**
 * Created by Valeri on 5/17/2017.
 */
function cookingByNumbers(params) {
    let number = Number(params[0]);
    let operations = params.slice(1, 6);

    for (var i = 0; i < operations.length; i++) {
        switch (operations[i]){
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= (number * 0.2);break;
            default: break;
        }
        console.log(number);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet','']);