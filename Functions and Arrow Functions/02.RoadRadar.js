/**
 * Created by Valeri on 5/17/2017.
 */
function roadRadar(params) {
    let speed = Number(params[0]);
    let zone = params[1];

    function getZoneLimit(zone) {
        switch (zone){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    let limit = getZoneLimit(zone);
    
    function getInfraction(speed, limit) {
        let overspeed = speed - limit;
        if(overspeed <= 0){
            return '';
        }else {
            if(overspeed > 0 && overspeed <= 20){
                return 'speeding';
            }else if(overspeed > 20 && overspeed <= 40){
                return 'excessive speeding';
            }
            else {
                return 'reckless driving';
            }
        }
    }

    console.log(getInfraction(speed, limit));
}

roadRadar([200, 'motorway']);