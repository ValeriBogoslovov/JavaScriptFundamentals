/**
 * Created by Valeri on 5/23/2017.
 */
function stringOfNumbers(str) {
    let endNum = Number(str);
    let output = '';
    for (var i = 1; i <= endNum; i++) {
        output += i;

    }
    console.log(output);
}
stringOfNumbers('11');