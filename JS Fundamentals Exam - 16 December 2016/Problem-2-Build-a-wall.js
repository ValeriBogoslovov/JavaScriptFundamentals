/**
 * Created by Valeri on 5/25/2017.
 */
function buildWall(arr) {
    let dailyConcrete = 195;
    let concretePerDay = [];
    let totalExpense = 0;
    let wallPieces = arr.map(Number).filter(x => x < 30);

    while(wallPieces.length > 0){
        concretePerDay.push(wallPieces.length * dailyConcrete);
        totalExpense+= wallPieces.length * dailyConcrete * 1900;
        wallPieces = wallPieces.map(w => w+=1).filter(x => x < 30);
    }
    console.log(concretePerDay.join(', '));
    console.log(totalExpense + ' pesos');
}

buildWall([21, 25, 28]);