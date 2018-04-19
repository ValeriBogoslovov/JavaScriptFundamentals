/**
 * Created by Valeri on 5/18/2017.
 */
function addRemove(params) {
    params = cleanArray(params);

    let array = new Array();

    for (var i = 0; i < params.length; i++) {
        if(params[i] != 'remove'){
            array.push(i + 1);
        }else {
            array.pop();
        }

    }
    if(array.length < 1){
        console.log('Empty');
    }else {
        console.log(array.join('\n'));
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

addRemove([ 'remove', 'remove', 'remove']);