/**
 * Created by Valeri on 5/25/2017.
 */
function primeNumberChecker(num) {
    let start = 2;
    while (start <= Math.sqrt(num)) {
        if (num % start++ < 1) return false;
    }
    return num > 1;
}
primeNumberChecker(81);