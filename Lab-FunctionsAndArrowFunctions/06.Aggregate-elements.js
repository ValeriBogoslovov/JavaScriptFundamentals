/**
 * Created by Valeri on 5/26/2017.
 */
function aggregateElements(arr) {
    let current = 0;
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let num of arr) {
        current = num;
        sum+=current
        inverseSum += 1/current;
        concat += current.toString();
    }
    console.log(`${sum}\n${inverseSum}\n${concat}`);
}
aggregateElements([3,5,9]);