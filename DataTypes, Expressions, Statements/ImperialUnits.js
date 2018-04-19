/**
 * Created by Valeri on 5/15/2017.
 */
function inchesToFeet(params) {
    let inches = Number(params[0]);
    let feet = Math.floor(inches / 12);
    let remainingInches = inches % 12;
    console.log(feet + "'" + "-" + remainingInches + '"');
}

inchesToFeet([55]);