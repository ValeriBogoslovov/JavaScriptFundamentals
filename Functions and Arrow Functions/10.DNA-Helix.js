/**
 * Created by Valeri on 5/18/2017.
 */
function dna(params) {
    let rows = Number(params[0]);
    let chainSequence = ['A','T','C','G','T','T','A','G','G','G'];

    let firstRow = '**12**';
    let secondRow = '*1--2*';
    let thirdRow = '1----2';
    let fourthRow = secondRow;

    let template = [firstRow, secondRow, thirdRow, fourthRow];
    let rowCounter = 0;
    let chainCounter = 0;
    let output = '';
    for (var i = 0; i < rows; i++) {
        let text = template[rowCounter];
        text = text.replace('1', chainSequence[chainCounter]);
        text = text.replace('2', chainSequence[chainCounter + 1]);
        output += text + '\n';
        rowCounter++;
        chainCounter += 2;
        if(chainCounter >= 10){
            chainCounter = 0;
        }
        if(rowCounter >= 4){
            rowCounter = 0;
        }
    }
    console.log(output);
}

dna([10]);