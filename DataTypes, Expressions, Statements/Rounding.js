/**
 * Created by Valeri on 5/15/2017.
 */
function rounding(params) {
    let toBeRounded = Number(params[0]);
    let precision = Number(params[1]);

    let index = params[0].indexOf('.');
    let afterDot = params[0].substr(index + 1);

    if(precision > 15){
        precision = 15;
    }

    if(afterDot.length < precision){
        precision = afterDot.length;
    }
    console.log(toBeRounded.toFixed(precision));
}

rounding(['10.5', '3']);