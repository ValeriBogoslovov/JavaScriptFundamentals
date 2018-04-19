/**
 * Created by Valeri on 5/19/2017.
 */
function extractSubsequence(params) {
    let previousNumber = Number.NEGATIVE_INFINITY;

    for (let num of params) {
        if(previousNumber <= num){

            previousNumber = num;
            console.log(num);
        }
    }
}

extractSubsequence([-220, 3,3, -8.6, 4, 27.1, 27.1, 3, 2, 24,25,25,25,9999.999])