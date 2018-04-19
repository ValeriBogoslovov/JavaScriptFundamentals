function solve(arr) {
    let n = Number(arr.shift());
    let alphabet = [' ', 'A','B','C','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let matrix = [];
    let code = []

    for (let i = 0; i < n; i++) {
        code.push(arr.shift().split(' ').map(Number))
    }
    for (let obj of arr) {
        matrix.push(obj.split(' ').map(Number));
    }
    let decodedMessage = '';

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let matrixNumber = matrix[row][col];
            let codeNumber = code[row % code.length][col % code[0].length];
            let finalNumber = ((matrixNumber + codeNumber) % 27) + 64;

            decodedMessage += String.fromCharCode(finalNumber)
        }
    }
    decodedMessage = decodedMessage.replace(/@/g, ' ');
    console.log(decodedMessage);
}
solve([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);