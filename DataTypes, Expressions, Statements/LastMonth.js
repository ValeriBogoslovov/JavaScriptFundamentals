/**
 * Created by Valeri on 5/15/2017.
 */
function lastMonth(params) {
    let date = new Date(params[2], params[1] - 1, 0);
    let lastDay = date.getDate();
    console.log(lastDay);
}

lastMonth(['13','12','2004']);