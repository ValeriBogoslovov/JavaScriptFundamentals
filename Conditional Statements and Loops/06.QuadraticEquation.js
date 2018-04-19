/**
 * Created by Valeri on 5/15/2017.
 */
function quadraticEquation(params) {
    let inputA = Number(params[0]);
    let inputB = Number(params[1]);
    let inputC = Number(params[2]);
    let root = Math.pow(inputB,2) - 4 * inputA * inputC;
    let root1 = (-inputB + Math.sqrt(root))/(2*inputA);
    let root2 = (-inputB - Math.sqrt(root))/(2*inputA);

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

quadraticEquation(['1', '-12', '36']);