/**
 * Created by Valeri on 5/30/2017.
 */
function uniqueSequences(arr) {
    function sortNumbers(a, b) {
        if(a < b){
            return 1;
        }else if(a > b){
            return -1;
        }else {
            return 0;
        }
    }
    function sortLength(a, b) {
        if(a.length < b.length){
            return -1;
        }else if(a.length > b.length){
            return 1;
        }else {
            return 0;
        }
    }

    let numberArray = [];
    let trySet = new Set();
    for (let i = 0; i < arr.length; i++) {
        numberArray[i] = JSON.parse(arr[i]).sort(sortNumbers);
    }
    numberArray.sort(sortLength).forEach(x => trySet.add(JSON.stringify(x)));
    [...trySet].map(JSON.parse).forEach(x => console.log("[" + x.join(', ')+ "]"));
}
uniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']
)