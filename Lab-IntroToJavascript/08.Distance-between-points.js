/**
 * Created by Valeri on 5/23/2017.
 */
function distanceBetweenPoints(x1,y1,x2,y2) {
    let a = x1 - x2;
    let b = y1 - y2;

    console.log(Math.sqrt(a*a + b*b));
}
distanceBetweenPoints(2,4,5,0);