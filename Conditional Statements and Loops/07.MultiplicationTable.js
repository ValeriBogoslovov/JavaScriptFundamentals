/**
 * Created by Valeri on 5/15/2017.
 */
function multiplicationTable(params) {
    let count = Number(params[0]);
    let innerCount = count;

    console.log('<table border="1">\n<tr><th>x</th>');

    for (var i = 1; i <= count; i++) {
        console.log(`<th>${i}</th>`);
    }

    console.log('</tr>');

    for (var i = 1; i <= count; i++) {
        console.log('<tr>')
        console.log(`<th>${i}</th>`);

        for (var j = i; j <=  innerCount; j+= i) {
            console.log(`<td>${j}</td>`)

        }
        innerCount += count;
        console.log('</tr>')
    }

    console.log('</table>');
}

multiplicationTable([5]);