/**
 * Created by Valeri on 5/18/2017.
 */
function printWithDelimiter(params){
    params = cleanArray(params);
    let delimiter = params.pop();

    console.log(params.join(delimiter));

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
printWithDelimiter([ 'One', 'Two', 'Three', 'Four', 'Five', '-', '', '' ])