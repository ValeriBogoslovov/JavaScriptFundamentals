/**
 * Created by Valeri on 5/17/2017.
 */
function checker(params) {
    let [x1, y1, x2, y2] = params.map(Number);

    function validityCheck(x1, y1, x2, y2){
        let a = x1 - x2;
        let b = y1 - y2;
        let c = Math.sqrt(a*a + b*b);

        if(c % 1 == 0){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    validityCheck(x1, y1, 0, 0);
    validityCheck(x2, y2, 0, 0);
    validityCheck(x1, y1, x2, y2);
}

checker(['2','2','-2','-2']);