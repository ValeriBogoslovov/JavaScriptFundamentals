/**
 * Created by Valeri on 5/26/2017.
 */
function triangleOfStars(n) {
    let counter = n*2-1;
    let steps = 1;
    while(counter > 0){
        if(steps == n){
            console.log("*".repeat(n));
            steps--;
            n--;
        }else {
            console.log("*".repeat(steps));
            steps++;
        }
        counter--;
    }
}
triangleOfStars(2);