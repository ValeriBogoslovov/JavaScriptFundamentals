/**
 * Created by Valeri on 5/25/2017.
 */
function spiceMustFlow(arr) {
    let startingYield = Number(arr);
    let harvestDays = 0;
    let harvestSpice = 0;
    while(startingYield >= 100){
        harvestDays++;
        harvestSpice += startingYield - 26;
        startingYield-=10;
    }
    if((harvestSpice -= 26) <= 0){
        console.log(harvestDays);
        console.log('0');
    }else {
        console.log(harvestDays);
        console.log(harvestSpice);
    }
}

spiceMustFlow(111);