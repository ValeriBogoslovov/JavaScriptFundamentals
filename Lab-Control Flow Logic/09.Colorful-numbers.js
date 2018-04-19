/**
 * Created by Valeri on 5/25/2017.
 */
function colorfulNumbers(num) {
    console.log('<ul>')
    for (var i = 1; i <= num; i++) {
        if(i % 2 != 0){
            console.log(`  <li><span style='color:green'>${i}</span></li>`);
        }else{
            console.log(`  <li><span style='color:blue'>${i}</span></li>`);
        }
    }
    console.log('</ul>');
}
colorfulNumbers(10);