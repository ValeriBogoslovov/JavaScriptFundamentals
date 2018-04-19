/**
 * Created by Valeri on 5/22/2017.
 */
function findVariableNames(input) {
    let regex = /\b[_]{1}[a-zA-Z0-9]+\b/g;
    function removeUnderscore(word) {
        return word.slice(1);
    }
    console.log(input.match(regex).map(removeUnderscore).join(','));
}
findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
