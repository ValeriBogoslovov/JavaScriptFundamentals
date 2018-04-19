/**
 * Created by Valeri on 5/26/2017.
 */
function figureOfSquares(params) {
    let numberOfLines = params;
    if (numberOfLines % 2 == 0){
        numberOfLines -= 1;
    }
    let horizontalWalls = 3;
    let numberOfHyphensOrSpaces = params - 2;
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
figureOfSquares(5)