function solve(base, increment) {
    let fifthStep = 1;
    let heightOfPyramid = increment;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (base - 2 > 0){
        stone += ((base - 2) * (base - 2)) * increment;
        if(fifthStep === 5){
            lapis += (2*(base + base) - 4) * increment;
            fifthStep = 0;
        }else{
            marble += (2*(base + base) - 4) * increment;
        }
        base-=2;
        heightOfPyramid += increment;
        fifthStep++;
    }
    gold = (base * base) * increment;
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapis)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(heightOfPyramid)}`);
}

solve(22,0.25);