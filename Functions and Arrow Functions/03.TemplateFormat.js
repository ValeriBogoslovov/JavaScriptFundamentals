/**
 * Created by Valeri on 5/17/2017.
 */
function templateFormat(params) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log(`<quiz>`);

    for (var i = 0; i < params.length; i+=2) {
        let question = params[i];
        let answer = params[i + 1];
        if(question == '' || answer == ''){
            break;
        }
        console.log(`\t<question>\n\t  ${question}\n\t</question>`);
        console.log(`\t<answer>\n\t  ${answer}\n\t</answer>`);
    }
    console.log('</quiz>');
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius",]
)