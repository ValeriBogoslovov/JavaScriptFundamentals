/**
 * Created by Valeri on 5/23/2017.
 */
function oddEven(num) {
    console.log(num % 2 === 0 ? 'even' : Math.abs( num) % 2 == 1 ? 'odd' : 'invalid');
}
oddEven(-5);