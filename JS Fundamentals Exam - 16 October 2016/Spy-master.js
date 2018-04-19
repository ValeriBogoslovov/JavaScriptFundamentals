function spyMaster(arr) {
    let specialKey = arr.shift();
    for (let line of arr) {
        let keysRegex = new RegExp(`(?:[ ]+|^)${specialKey}[ ]+`,'gi');
        let specialKeys = line.match(keysRegex);
        let messageRegex;
        if(specialKeys){
            for (let key of specialKeys) {
                messageRegex = new RegExp(`${key}([A-Z!#$%]{8,})(?:[. ,]|$)`,'gm');
                let encodedMessage;

                while((encodedMessage = messageRegex.exec(line))!== null){
                    let decodedMessage = encodedMessage[1];
                    decodedMessage = decodedMessage.replace(/\!/g,'1');
                    decodedMessage = decodedMessage.replace(/\%/g,'2');
                    decodedMessage = decodedMessage.replace(/\#/g,'3');
                    decodedMessage = decodedMessage.replace(/\$/g,'4');
                    decodedMessage = decodedMessage.replace(/[A-Z]/g, letter => letter.toLowerCase());
                    line = line.replace(new RegExp(`(${key})([A-Z!#$%]{8,})([. ,]|$)`), `$1${decodedMessage}$3`);
                }
            }
        }
        console.log(line);
    }
}

spyMaster([
    "secret",
    "Random text with secrets EVERYWHERE",
    "secret HEREHERE and one secret OVERTHEREANDEVERYWHERE",
    "secret SECRETTIME, and secret KINDATHERE.",
    "secret ONELINER",
    "and maybe secret FALSESE or secret TRUESECRET or secret ENDONCOMA,",
    "here are three secrets one secret OVERHERE, one secret OVERTHERE and one secret DISSAPPOINT",
]);