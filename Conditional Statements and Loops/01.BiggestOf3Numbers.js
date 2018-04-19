/**
 * Created by Valeri on 5/15/2017.
 */
function biggestOfThree(params){
    let firstNum = Number(params[0]);
    let secondNum = Number(params[1]);
    let thirdNum = Number(params[2]);

    console.log(Math.max(firstNum, secondNum, thirdNum));
}

biggestOfThree([12, 13, 14]);