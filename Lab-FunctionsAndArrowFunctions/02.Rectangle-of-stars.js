/**
 * Created by Valeri on 5/26/2017.
 */
function rectangleOfStars(n) {
    if(n == undefined){
        n = 5;
    }
    for (let i = 0; i < n; i++) {
        printStars(n);
    }

    function printStars(n) {
        console.log("* ".repeat(n));
    }
}
rectangleOfStars();