/**
 * Created by Valeri on 5/23/2017.
 */
function storeCatalogue(array) {
    let output = array.sort();
    let letter = 0;

    for (let obj of output) {
        let arr = obj.split(' : ');
        if(obj[0] != letter){
            letter = obj[0];
            console.log(letter);
        }
        console.log('  ' + arr[0] + ':' + ' ' + arr[1]);
    }
}
storeCatalogue([ 'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10' ]);