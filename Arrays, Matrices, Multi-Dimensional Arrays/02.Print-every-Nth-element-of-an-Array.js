/**
 * Created by Valeri on 5/18/2017.
 */
function printNth(params) {
    params = cleanArray(params);
    let step = Number(params.pop());

    for (var i = 0; i < params.length; i+=step) {
        console.log(params[i]);
    }

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

printNth([ '5', '20', '31', '4', '20', '2', '', '' ])