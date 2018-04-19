/**
 * Created by Valeri on 5/25/2017.
 */
function compoundInterest(arr) {
    let [ps,ir,cp,t] = [arr[0],arr[1],arr[2],arr[3]];
    let compoundingFrequency = 12 / cp;
    let result = ps * (Math.pow(1 + (ir /100) / compoundingFrequency, compoundingFrequency * t));
    console.log(result.toFixed(2));
}
compoundInterest([1500, 4.3, 3, 6]);