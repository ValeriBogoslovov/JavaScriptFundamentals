/**
 * Created by Valeri on 5/23/2017.
 */
function letterOccurances(w, l) {
    let word = w;
    let letter = l;
    let counter = 0;
    for (var i = 0; i < word.length; i++) {
        if(word[i] == letter){
            counter++;
        }
    }
    console.log(counter);
}

letterOccurances('hello', 'l');