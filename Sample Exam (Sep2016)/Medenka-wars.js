/**
 * Created by Valeri on 6/8/2017.
 */
function medenkaWars(arr) {
    let medenkaDmg = 60;
    let dmgOfVitkor = 0;
    let dmgOfNaskor = 0;
    let currentVitkorDmg = 0;
    let currentNaskorDmg = 0;

    let vitkorCounter = 0;
    let naskorCounter = 0;

    for (let line of arr) {
        let data = line.split(' ');
        let medenkaCount = Number(data[0]);
        let dmg = medenkaCount * medenkaDmg;

        if(data[1] == "white"){
            if(dmgOfVitkor == 0){
                dmgOfVitkor += medenkaCount * medenkaDmg;
                currentVitkorDmg = dmgOfVitkor;
                vitkorCounter++;
                continue;
            }else {
                if(currentVitkorDmg == dmg){
                    vitkorCounter++;
                }else {
                    vitkorCounter = 1;
                }
                if(vitkorCounter == 2){
                    dmgOfVitkor += (medenkaDmg * medenkaCount) * 2.75;
                    vitkorCounter = 0;
                    currentVitkorDmg = dmg;
                    continue;
                }else {
                    dmgOfVitkor += medenkaDmg * medenkaCount;
                    currentVitkorDmg = dmg;
                }
            }
        }else if(data[1] == 'dark') {
            if(dmgOfNaskor == 0){
                dmgOfNaskor += medenkaCount * medenkaDmg;
                currentNaskorDmg = dmgOfNaskor;
                naskorCounter++;
                continue;
            }else {
                if(currentNaskorDmg == dmg){
                    naskorCounter++;
                }else {
                    naskorCounter = 1;
                }
                if(naskorCounter == 5){
                    dmgOfNaskor += (medenkaDmg * medenkaCount) * 4.5;
                    naskorCounter = 1;
                    currentNaskorDmg = dmg;
                    continue;
                }else {
                    dmgOfNaskor += medenkaDmg * medenkaCount;
                    currentNaskorDmg = dmg;
                }
            }
        }
    }

    if(dmgOfNaskor > dmgOfVitkor){
        console.log(`Winner - Naskor\nDamage - ${dmgOfNaskor}`);
    }else {
        console.log(`Winner - Vitkor\nDamage - ${dmgOfVitkor}`);
    }
}
medenkaWars(['2 white medenkas',
    '2 white medenkas',
    '2 white medenkas',
    '2 white medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
])