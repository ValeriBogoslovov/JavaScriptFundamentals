/**
 * Created by Valeri on 5/26/2017.
 */
function pointInRectangle(arr) {
    let [x, y, xMin, xMax, yMin, yMax] = arr.map(Number);

    if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax) ){
        console.log("inside");
    }
    else {
        console.log("outside")
    }
}