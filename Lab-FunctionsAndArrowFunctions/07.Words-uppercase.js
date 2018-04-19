/**
 * Created by Valeri on 5/26/2017.
 */
function toUpper(str) {
    str = str.split(/[., ''""!?:;-]+/);
    str = str.filter(w => w != '');
    str = str.map(w => w.toUpperCase());
    console.log(str.join(', '));
}
toUpper('Hi, hHIIIIow  COME?ON!MAN .are you??... "m-a:a;m"""');