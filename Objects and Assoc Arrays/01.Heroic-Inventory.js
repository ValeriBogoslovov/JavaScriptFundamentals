/**
 * Created by Valeri on 5/23/2017.
 */
function heroicInventory(array) {
    let heroData = [];
    for (let data of array) {
        let currentData = data.split(' / ');
        let name = currentData[0];
        let level = Number(currentData[1]);
        let items = [];
        if(currentData.length > 2){
            items = currentData[2].split(', ');
        }
        let hero = {
            name: name.trim(),
            level: level,
            items: items
        };
        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

heroicInventory([ 'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara' ]);