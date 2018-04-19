/**
 * Created by Valeri on 5/18/2017.
 */
function tripLength(params) {
    let [x1, y1, x2,y2, x3, y3] = params.map(Number);

    let firstPoint = {x:x1, y:y1, name:1};
    let secondPoint = {x:x2, y:y2, name:2};
    let thirdPoint = {x:x3, y:y3, name:3};

    let firstDistane = 0;
    let secondDistance = 0;
    let thirdDistance = 0;

    let output = '';

    function getDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        return distance;
    }

    firstDistane = getDistance(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y);
    secondDistance = getDistance(secondPoint.x, secondPoint.y, thirdPoint.x, thirdPoint.y);
    thirdDistance = getDistance(thirdPoint.x, thirdPoint.y, firstPoint.x, firstPoint.y);

    if(firstDistane <= thirdDistance && thirdDistance >= secondDistance){
        output = `${firstPoint.name}->${secondPoint.name}->${thirdPoint.name}: ${firstDistane + secondDistance}`;
    }else if(firstDistane <= secondDistance && thirdDistance < secondDistance){
        output = `${secondPoint.name}->${firstPoint.name}->${thirdPoint.name}: ${thirdDistance + firstDistane}`;
    }else{
        output = `${firstPoint.name}->${thirdPoint.name}->${secondPoint.name}: ${secondDistance + thirdDistance}`;
    }

    console.log(output);
}

tripLength([-1, -2, 3.5, 0, 0, 2]);