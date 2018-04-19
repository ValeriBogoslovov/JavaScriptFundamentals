/**
 * Created by Valeri on 5/22/2017.
 */
function secretData(array) {
    let nameRegex = /\*[A-Z][a-zA-Z]*(?=[\t{ }]|$)/g;
    let phoneRegex = /\+[0-9-]{10}(?=[\t{ }]|$)/g;
    let idRegex = /\![a-zA-Z0-9]+(?=[\t{ }]|$)/g;
    let secretBaseRegex = /\_[a-zA-Z0-9]+(?=[\t{ }]|$)/g;

    for (let text of array) {

        if(nameRegex.test(text)){
            let names = text.match(nameRegex);
            for (let word of names) {
                text = text.replace(word, '|'.repeat(word.length));
            }
        }
        if(phoneRegex.test(text)){
            let phones = text.match(phoneRegex);
            for (let word of phones) {
                text = text.replace(word, '|'.repeat(word.length));
            }
        }
        if(idRegex.test(text)){
            let ids = text.match(idRegex);
            for (let word of ids) {
                text = text.replace(word, '|'.repeat(word.length));
            }
        }
        if(secretBaseRegex.test(text)){
            let bases = text.match(secretBaseRegex);
            for (let word of bases) {
                text = text.replace(word, '|'.repeat(word.length));
            }
        }

        console.log(text);
    }
    if(array == undefined || array.length == 0 || array.length === 0 || array == null){
        console.grumni
    }
}

secretData([]);