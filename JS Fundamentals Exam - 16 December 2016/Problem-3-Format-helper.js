function formatHelper(arr) {
    let text = arr[0];
    text = text.replace(/[ ]*([.!?,;:])[ ]*/gm,'$1 ');
    text = text.replace(/\.[ ]+(?=\d+)/gm,'.');
    text = text.replace(/" *(.+?) *"/gm,'"$1"');
    text = text.replace(/([.,:;?!]) (?=[.,?!;:])/gm,'$1');
    console.log(text);
}
formatHelper([' Terribly formatted text      . . .!  With chaotic spacings." Terrible quoting   235511 " ! ' +
'Also this date is pretty confusing : 20   .   12.  16 .  ' +
'Make,sure to give:proper spacing where is needed... !']);