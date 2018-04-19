/**
 * Created by Valeri on 5/22/2017.
 */
function extractTheLinks(params) {
    let text = params.join(' ');
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;

    if(regex.test(text)){
        console.log(text.match(regex).join('\n'));
    }else {
        console.log('');
    }

}