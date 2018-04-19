/**
 * Created by Valeri on 5/22/2017.
 */
function startsWith(text, substring) {
    if(text.startsWith(substring)){
        console.log(true);
    }else{
        console.log(false);
    }

}

startsWith('How have you been?',
    'how'
)