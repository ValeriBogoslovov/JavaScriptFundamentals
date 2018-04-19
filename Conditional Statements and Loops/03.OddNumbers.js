/**
 * Created by Valeri on 5/15/2017.
 */
function oddNumbers(params) {
    let number = Number(params[0]);
    for (var i = 1; i <= number; i+= 2) {
        console.log(i);
    }
}

oddNumbers([21]);