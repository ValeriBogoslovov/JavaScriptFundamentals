/**
 * Created by Valeri on 5/22/2017.
 */
function wordOccurrences(text, word) {
    let reg = '\\b' + word + '\\b';
    let regex = new RegExp(reg,'gi');
    if(regex.test(text)){
        console.log(text.match(regex).length);
    }else {
        console.log('0');
    }
}
wordOccurrences('',
'there');