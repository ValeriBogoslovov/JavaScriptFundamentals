function solve(message) {
    if(!message.startsWith('<message')){
        console.log('Invalid message format');
        return;
    }
    let openingTag = message.substring(1, message.indexOf('>'));
    let openingTagRegex = /^message\s+(?:[a-z]+="+[a-zA-Z0-9 .]+"+\s*)+$/gm;

    if(!openingTag.match(openingTagRegex)){
        console.log('Invalid message format');
        return;
    }
    if(!openingTag.includes('to') || !openingTag.includes('from')){
        console.log('Missing attributes');
        return;
    }
    let closingTag = message.substring(message.indexOf('<',1),message.lastIndexOf('>')+1);
    if(closingTag !== '</message>'){
        console.log('Invalid message format');
        return;
    }
    let toWhom = openingTag.split(' to="');
    let recipient = toWhom[1].substring(0, toWhom[1].indexOf('"'));
    
    let fromWhom = openingTag.split(' from="');
    let sender = fromWhom[1].substring(0, fromWhom[1].indexOf('"'));
    
    let body = message.substring(message.indexOf('>')+1, message.indexOf('</message>'));
    
    body = body.replace(/\n/g, '</p>\n    <p>');

    let output = `<article>\n  <div>From: <span class="sender">${sender}</span></div>\n  <div>To: <span class="recipient">${recipient}</span></div>\n  <div>\n    <p>${body}</p>\n  </div>\n</article>`;
    console.log(output);
}

solve(`<message mailto="everyone" from="Grandma" to="Everyone">FWD: FWD: FWD: FWD: Forwards from grandma</message>`);