/**
 * Created by Valeri on 5/25/2017.
 */
function imperialUnits(num) {
    let foot = Math.floor(num / 12);
    let inches = num % 12;
    console.log(`${foot.toFixed(0)}'-${inches.toFixed(0)}"`);
}
imperialUnits(55);