/**
 * Created by Valeri on 5/25/2017.
 */
function distanceOverTime(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let time = arr[2];
    console.log(Math.abs((v1*(time/60/60))-(v2*(time/60/60))) * 1000);
}
distanceOverTime([11,10,120]);