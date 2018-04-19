/**
 * Created by Valeri on 5/26/2017.
 */
function palindrome(str) {
    return str == str.split('').reverse().join('');
}