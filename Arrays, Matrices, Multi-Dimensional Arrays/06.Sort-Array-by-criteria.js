/**
 * Created by Valeri on 5/19/2017.
 */
function sortArray(params) {
    params = cleanArray(params);

    params.sort(function(a, b) {
        if(a.length > b.length){
            return a.length > b.length
        }else if(a.length == b.length){
            return a > b;
        }
    });
    console.log(params.join('\n'));

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

sortArray([ 'test', 'Deny', 'omen', 'Default', '', '' ]);