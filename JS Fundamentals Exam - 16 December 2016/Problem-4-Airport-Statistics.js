function airportStatistics(planes) {
    let arrivingPlanes = new Map();
    let departingPlanes = new Map();
    let airportsStatistic = new Map();
    let airportsPlanes = new Map();

    for (let plane of planes) {
        let planeTokens = plane.split(/\s+/g);
        let planeName = planeTokens[0];
        let planeDestination = planeTokens[1];
        let planePassengers = planeTokens[2];
        let planeStatus = planeTokens[3];

        if (planeStatus === 'land') {
            if (!arrivingPlanes.has(planeName)) {
                arrivingPlanes.set(planeName, planeDestination)
            } else {
                if (!departingPlanes.has(planeName)) {
                    continue;
                } else {
                    arrivingPlanes.set(planeName, planeDestination);
                    departingPlanes.delete(planeName);
                }
            }
            if (!airportsStatistic.has(planeDestination)) {
                airportsStatistic.set(planeDestination, {Arrivals: 0, Departures: 0});
            }
            airportsStatistic.get(planeDestination)['Arrivals'] += Number(planePassengers);
        } else {
            if (!arrivingPlanes.has(planeName)) {
                continue;
            }
            if (!departingPlanes.has(planeName)) {
                departingPlanes.set(planeName, planeDestination);
                arrivingPlanes.delete(planeName);
            }else{
                departingPlanes.set(planeName, planeDestination);
                arrivingPlanes.delete(planeName);
            }

            if (!airportsStatistic.has(planeDestination)) {
                airportsStatistic.set(planeDestination, {Arrivals: 0, Departures: 0});
            }
            airportsStatistic.get(planeDestination)['Departures'] += Number(planePassengers);

        }

        if (!airportsPlanes.has(planeDestination)) {
            airportsPlanes.set(planeDestination, []);
        }
        if(!airportsPlanes.get(planeDestination).includes(planeName)){
            airportsPlanes.get(planeDestination).push(planeName)
        }
    }

    let orderedLeftPlanes = [...arrivingPlanes].sort(function (a,b) {
        if(a[0].toUpperCase() < b[0].toUpperCase()){
            return -1;
        }
        if(a[0].toUpperCase() > b[0].toUpperCase()){
            return 1;
        }
        return 0;
    });
    let orderedAirportStatistics = [...airportsStatistic].sort(function (a, b) {
        if (a[1]['Arrivals'] < b[1]['Arrivals']) {
            return 1
        } else if (a[1]['Arrivals'] > b[1]['Arrivals']) {
            return -1;
        } else {
            if(a[0] < b[0]){
                return -1;
            }
            if(a[0] > b[0]){
                return 1;
            }
            return 0;
        }
    });

    console.log('Planes left:');
    for (let plane of orderedLeftPlanes) {
        console.log(`- ${plane[0]}`);
    }
    for (let [k, v] of orderedAirportStatistics) {
        console.log(k);
        console.log(`Arrivals: ${v['Arrivals']}`);
        console.log(`Departures: ${v['Departures']}`);
        let sortedPlanes = airportsPlanes.get(k).sort(function (a, b) {
            if(a.toUpperCase() > b.toUpperCase()){
                return 1
            }
            if(a.toUpperCase() < b.toUpperCase()){
                return -1;
            }
            return 0;
        });
        console.log('Planes:');
        for (let plane of sortedPlanes) {
            console.log(`-- ${plane}`);
        }
    }
}
airportStatistics(
    [
        'RTA72 London 140 land',
        'RTA72 Brussels 240 depart',
        'RTA72 Sofia 450 land',
        'RTA72 Lisbon 240 depart',
        'RTA72 Berlin 350 land',
        'RTA72 Otava 201 depart',
        'RTA72 Haga 350 land',
        'RTA72 Otava 201 depart',
        'RTA72 Dortmund 150 land',
        'RTA72 Montana 243 depart',
        'RTA72 Monreal 350 land',
        'RTA72 NewYork 201 depart',
        'RTA72 Pekin 350 land',
        'RTA72 Tokyo 201 depart',
        'RTA72 Warshaw 350 land',
        'RTA72 Riga 201 depart']);