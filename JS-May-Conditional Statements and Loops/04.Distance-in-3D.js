/**
 * Created by Valeri on 5/25/2017.
 */
function distanceIn3D(arr) {
    let [x1,y1,z1,x2,y2,z2] = [arr[0], arr[1],arr[2],arr[3],arr[4],arr[5]];
    console.log(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)+Math.pow(z1-z2,2)));
}
distanceIn3D([1, 1, 0, 5, 4, 0]);