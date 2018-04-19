/**
 * Created by Valeri on 5/25/2017.
 */
function assignProperties(arr) {
    let obj = {
        [arr[0]]: arr[1],
        [arr[2]]: arr[3],
        [arr[4]]: arr[5]
    };

    console.log(obj);
}
assignProperties([ 'ssid', '90127461', 'status', 'admin', 'expires', '600' ]
);