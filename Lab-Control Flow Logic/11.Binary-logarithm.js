/**
 * Created by Valeri on 5/25/2017.
 */
function binaryLogarithm(arr) {
    for (let num of arr) {
        console.log(Math.log2(num));
    }
}
binaryLogarithm([ 1024, 1048576, 256, 1, 2, 50, 100 ]);