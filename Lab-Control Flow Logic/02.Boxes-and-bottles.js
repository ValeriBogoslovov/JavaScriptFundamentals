/**
 * Created by Valeri on 5/23/2017.
 */
function boxesAndBottles(a, b) {
    let bottle = Number(a);
    let capacity = Number(b);
    console.log(Math.ceil(bottle/capacity));
}
boxesAndBottles(20,5);