/**
 * Created by Valeri on 5/15/2017.
 */
function figureOfFourSquares(params) {
    let numberOfLines = Number(params[0]);
    if (numberOfLines % 2 == 0){
        numberOfLines -= 1;
    }
    let horizontalWalls = 3;
    let numberOfHyphensOrSpaces = Number(params[0]) - 2;
    let verticalWalls = (numberOfLines - horizontalWalls) / 2;

    for (var i = 1; i <= horizontalWalls; i++) {
        console.log(`+${'-'.repeat(numberOfHyphensOrSpaces)}+${'-'.repeat(numberOfHyphensOrSpaces)}+`);
        if(numberOfLines < 2){
            break;
        }
        if (verticalWalls > 0 && i != horizontalWalls){
            for (var j = 0; j < verticalWalls; j++) {
                console.log(`|${' '.repeat(numberOfHyphensOrSpaces)}|${' '.repeat(numberOfHyphensOrSpaces)}|`);
            }
        }
    };
}

figureOfFourSquares([3]);