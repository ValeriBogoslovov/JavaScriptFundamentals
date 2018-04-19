/**
 * Created by Valeri on 5/23/2017.
 */
function coneVolume(a,b) {
    let radius = Number(a);
    let height = Number(b);

    let V = (1/3)*Math.PI*(radius*radius)*height;
    let s = Math.sqrt(radius*radius + height*height);
    let L = Math.PI*radius*s;
    let B = Math.PI*(radius*radius);
    let A = L + B;
    console.log('volume = ' + V.toFixed(4))
    console.log('surface = ' + A.toFixed(4));
}
coneVolume(3,5);