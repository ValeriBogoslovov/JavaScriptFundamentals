/**
 * Created by Valeri on 5/15/2017.
 */
function distance(params) {
    let firstKmPerHour = Number(params[0])
    let secondKmPerHoud = Number(params[1]);
    let timeInSecs = Number(params[2]);
    let timeInHours = (timeInSecs / 60) / 60;
    let distanceFirst = firstKmPerHour * timeInHours;
    let distanceSecond = secondKmPerHoud * timeInHours;

    let delta = Math.abs(distanceFirst - distanceSecond);

    console.log(delta * 1000);
}

distance(['0', '60', '3600']);