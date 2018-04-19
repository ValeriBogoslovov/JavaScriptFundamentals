/**
 * Created by Valeri on 5/18/2017.
 */
function rotateArray(params) {
    params = cleanArray(params);
    let numberOfShifts = params.pop() % params.length

    for (var i = 0; i < numberOfShifts; i++) {
        params.unshift(params.pop());
    }
    console.log(params.join(' '));
    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }

        }
        return newArray;
    }
}

rotateArray([1,2,3,4,2]);