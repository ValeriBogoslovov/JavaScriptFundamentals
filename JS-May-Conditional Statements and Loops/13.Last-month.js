/**
 * Created by Valeri on 5/26/2017.
 */
function lastMonth(arr) {
    let date = new Date(arr[2], arr[1] - 1, 0);
    let lastDay = date.getDate();
    console.log(lastDay);
}
lastMonth([17, 3, 2002]);