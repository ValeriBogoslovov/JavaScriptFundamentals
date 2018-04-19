/**
 * Created by Valeri on 5/26/2017.
 */
function calculator(num1,num2,str) {
    switch(str){
        case '+': return num1+num2;break;
        case '-': return num1-num2;break;
        case '/': return num1/num2;break;
        case '*': return num1*num2;break;
    }
}