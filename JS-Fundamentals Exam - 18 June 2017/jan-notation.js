function solve(arr) {
    let numbers = [];
    let first = 0;
    let second = 0;
    for (let element of arr) {
        if(!isNaN(element)){
            numbers.push(element)
        }else{
            if(element === '+'){
                if(numbers.length < 2){
                    console.log('Error: not enough operands!');
                    return;
                }
                second = numbers.pop();
                first = numbers.pop();
                numbers.push(first + second);
            }else if(element === '-'){
                if(numbers.length < 2){
                    console.log('Error: not enough operands!');
                    return;
                }
                second = numbers.pop();
                first = numbers.pop();
                numbers.push(first - second);
            }else if(element === '/'){
                if(numbers.length < 2){
                    console.log('Error: not enough operands!');
                    return;
                }
                second = numbers.pop();
                first = numbers.pop();
                numbers.push(first / second);
            }else{
                if(numbers.length < 2){
                    console.log('Error: not enough operands!');
                    return;
                }
                second = numbers.pop();
                first = numbers.pop();
                numbers.push(first * second);
            }
        }
    }
    if(numbers.length > 1){
        console.log('Error: too many operands!');
        return;
    }
    console.log(numbers.join(''));
}

solve([5,
    3,
    4,
    '*',
    '-']
);