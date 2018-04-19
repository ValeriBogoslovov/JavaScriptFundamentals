/**
 * Created by Valeri on 5/15/2017.
 */
function compoundInterest(params) {
    let P = Number(params[0]);
    let i = Number(params[1]) / 100;
    let n = Number(params[2]);
    let t = Number(params[3]);

    let compoundingFrequncy = 12 / n;

    let result = P * (Math.pow(1 + i / compoundingFrequncy, compoundingFrequncy * t));
    console.log(result.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);