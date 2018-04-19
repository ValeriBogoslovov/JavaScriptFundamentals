/**
 * Created by Valeri on 5/25/2017.
 */
function gradsToDegrees(num) {
    let degree = (num * (360 / 400)) % 360;
    if(degree < 0){
        degree = 360 - Math.abs(degree);
    }
    console.log(degree);
}
gradsToDegrees(400);