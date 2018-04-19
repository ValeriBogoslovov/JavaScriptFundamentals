/**
 * Created by Valeri on 5/25/2017.
 */
function rounding(arr) {
    let roundNumber = arr[0];
    let precision = arr[1];
    if(precision > 15){
        precision = 15;
    }
    let index = roundNumber.toString().indexOf('.');
    let lengthAfterDot = roundNumber.toString().substr(index + 1);
    if(lengthAfterDot.length < precision){
        precision = lengthAfterDot.length;
    }
    console.log(roundNumber.toFixed(precision));
}
rounding([3.5, 3]);