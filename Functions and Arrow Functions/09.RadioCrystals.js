/**
 * Created by Valeri on 5/18/2017.
 */
function radioCrystals(params) {
    function cut(crystal) {
        return crystal / 4;
    }
    function lap(crystal) {
        return crystal -= crystal * 0.20;
    }
    function grind(crystal) {
        return crystal -= 20;
    }
    function etch(crystal) {
        return crystal -= 2;
    }
    function xRay(crystal) {
        return ++crystal;
    }
    function transportingAndWashing(crystal) {
        return Math.floor(crystal);
    }
    let desiredThickness = params[0];
    for (var i = 1; i < params.length; i++) {
        let crystal = Number(params[i]);
        let counter = 0;
        if(crystal < desiredThickness - 1){
            continue;
        }
        console.log(`Processing chunk ${crystal} microns`);
        while (crystal / 4 >= desiredThickness){
            crystal = cut(crystal);
            counter++;
        }
        if(counter > 0){
            console.log('Cut x' + counter);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            counter = 0;
        }
        while (lap(crystal) >= desiredThickness){
            crystal = lap(crystal);
            counter++;
        }
        if(counter > 0){
            console.log('Lap x' + counter);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            counter = 0;
        }
        while (grind(crystal) >= desiredThickness){
            crystal = grind(crystal);
            counter++;
        }
        if(counter > 0){
            console.log('Grind x' + counter);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            counter = 0;
        }

        while (etch(crystal) >= desiredThickness - 1){
            crystal = etch(crystal);
            counter++;
        }
        if(counter > 0){
            console.log('Etch x' + counter);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            counter = 0;
        }
        if(crystal == desiredThickness - 1){
            crystal = xRay(crystal);
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${crystal} microns`);
    }
}

radioCrystals([342, 341]);