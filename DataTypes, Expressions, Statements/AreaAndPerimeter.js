/**
 * Created by Valeri on 5/15/2017.
 */
function areaPerimeter(params) {
    let sideA = Number(params[0]);
    let sideB = Number(params[1]);
    console.log(sideA * sideB);
    console.log((2*sideA) + (2*sideB));
}

areaPerimeter(['1','3']);