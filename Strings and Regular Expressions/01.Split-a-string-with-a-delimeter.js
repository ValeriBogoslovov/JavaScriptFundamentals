/**
 * Created by Valeri on 5/22/2017.
 */
function splitString(a, b) {
    let text = a;
    let delimiter = b;
    let output = text.split(delimiter);
    console.log(output.join('\n'));
}