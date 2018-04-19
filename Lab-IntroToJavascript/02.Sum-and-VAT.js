/**
 * Created by Valeri on 5/23/2017.
 */
function sumAndVAT(arr) {
    let numbers = arr.map(Number);
    let sum = 0;
    let VAT = 0;
    let total = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    VAT = sum * 0.20;
    total = sum + VAT;
    console.log(`sum = ${sum}`)
    console.log(`VAT = ${VAT}`);
    console.log(`total = ${total}`);
}

sumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);