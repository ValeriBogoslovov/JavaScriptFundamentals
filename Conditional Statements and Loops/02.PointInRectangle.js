/**
 * Created by Valeri on 5/15/2017.
 */
function pointInRectangle(params) {
    let [x, y, xMin, xMax, yMin, yMax] = params.map(Number);

    if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax) ){
        console.log("inside");
    }
    else {
        console.log("outside")
    }
}