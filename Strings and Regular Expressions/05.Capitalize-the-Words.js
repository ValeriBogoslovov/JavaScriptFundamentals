/**
 * Created by Valeri on 5/22/2017.
 */
function capitalize(words) {

    function toTitle(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    function toLower(word) {
        return word.toLowerCase();
    }

    console.log(words.split(' ').map(toLower).map(toTitle).join(' '));

}
capitalize('Capitalize these words', '', '')