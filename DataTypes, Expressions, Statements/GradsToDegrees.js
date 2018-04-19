/**
 * Created by Valeri on 5/15/2017.
 */
function gradsToDegrees(params) {
    let grads = Number(params[0]);
    let difference = 360 / 400;
    let degree = grads * difference;
    degree = degree % 360;
    if(degree < 0){
        degree = 360 - Math.abs(degree);
    }
    console.log(degree);
}

gradsToDegrees([-50]);