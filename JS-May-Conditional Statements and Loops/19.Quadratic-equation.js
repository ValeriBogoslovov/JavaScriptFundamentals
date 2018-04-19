/**
 * Created by Valeri on 5/26/2017.
 */
function quadraticEquation(a,b,c) {
    let root = Math.pow(b,2) - 4 * a * c;
    let root1 = (-b + Math.sqrt(root))/(2*a);
    let root2 = (-b - Math.sqrt(root))/(2*a);

    if (root > 0){
        if (root1 > root2){
            console.log(`${root2}\n${root1}`);
        }
        else {
            console.log(`${root1}\n${root2}`);
        }
    }
    else if(root == 0){
        console.log(Math.max(root1, root2));
    }
    else {
        console.log('No');
    }
}