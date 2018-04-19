/**
 * Created by Valeri on 5/15/2017.
 */
function triangleOfDollars(params) {
    let count = Number(params[0]);
    for (var i = 1; i <= count; i++) {
        let charArr = Array(i + 1).join('$');
        console.log(charArr);
    }
}

triangleOfDollars([4]);