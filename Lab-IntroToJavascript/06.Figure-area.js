/**
 * Created by Valeri on 5/23/2017.
 */
function figureArea(a,b,c,d) {
    let w = a;
    let h = b;
    let W = c;
    let H = d;

    let sideOne = w * h;
    let sideTwo = W * H;
    let sideThree = Math.min(w,W) * Math.min(h,H);
    console.log((sideOne + sideTwo) - sideThree);
}
figureArea(2,4,5,3);