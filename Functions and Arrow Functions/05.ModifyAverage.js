/**
 * Created by Valeri on 5/17/2017.
 */
function modifyAverage(params) {
    let number = params[0];
    let splittedNumber = number.split("");
    let avgSum = 0;


    function  getAverageSum(splittedNumber) {
        for (var i = 0; i < splittedNumber.length; i++) {
            avgSum += parseInt(splittedNumber[i], 10);
        }
        return avgSum / splittedNumber.length;
    }

    avgSum = getAverageSum(splittedNumber);

    while (avgSum <= 5){
        number += '9';
        splittedNumber = number.split("");
        avgSum = 0;
        avgSum = getAverageSum(splittedNumber);
    }
    console.log(number);
}

modifyAverage(['101']);