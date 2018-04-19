/**
 * Created by Valeri on 5/22/2017.
 */
function captureTheNumbers(input) {
    let text = input.join(' ');
    let regex = /\d+/g;
    let numbers = text.match(regex);

    console.log(numbers.join(' '));
}

captureTheNumbers(['alabala300', 'sdasfasf2', 'asdgja20','','']);