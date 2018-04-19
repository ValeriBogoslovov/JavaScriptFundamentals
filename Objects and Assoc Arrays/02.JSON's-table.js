/**
 * Created by Valeri on 5/23/2017.
 */
function jsonTable(array) {
    console.log('<table>');
    for (let data of array) {
        let currentData = JSON.parse(data);
        console.log('   <tr>');
        console.log(`       <td>${currentData.name}</td>`);
        console.log(`       <td>${currentData.position}</td>`);
        console.log(`       <td>${currentData.salary}</td>`);
        console.log('   <tr>');
    }
    console.log('</table>');
}

jsonTable([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]);