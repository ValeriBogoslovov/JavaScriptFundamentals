/**
 * Created by Valeri on 5/26/2017.
 */
function multiplicationTable(n) {
    let innerCount = n;

    console.log('<table border="1">\n<tr><th>x</th>');

    for (var i = 1; i <= n; i++) {
        console.log(`<th>${i}</th>`);
    }

    console.log('</tr>');

    for (var i = 1; i <= n; i++) {
        console.log('<tr>')
        console.log(`<th>${i}</th>`);

        for (var j = i; j <=  innerCount; j+= i) {
            console.log(`<td>${j}</td>`)

        }
        innerCount += n;
        console.log('</tr>')
    }

    console.log('</table>');
}
multiplicationTable(9)