function solve(arr){
    let numberArray = arr.map(Number)

    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < numberArray.length; i++) {
        if(numberArray[i] > 0 && numberArray[i] < 10){
            let denotingRange = numberArray[i];
            let nextIndex = i + 1;
            let currentProduct = 1;
            for (let j = 0; j < denotingRange; j++) {
                currentProduct *= numberArray[nextIndex];
                nextIndex++;
            }
            if(currentProduct >= biggestNum){
                biggestNum = currentProduct;
            }
        }
    }
    console.log(biggestNum);
}
solve([
    '10',
    '20',
    '0',
    '-1',
    '-333',
    '3',
    '5',
    '2',
    '2'
]);