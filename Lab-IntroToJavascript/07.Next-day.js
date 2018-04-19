/**
 * Created by Valeri on 5/23/2017.
 */
function nextDay(y,m,d) {
    let date = new Date(y,m -1,d);
    let dayMilliseconds = 24*60*60*1000;
    let nextDay = new Date(date.getTime() + dayMilliseconds);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);
}

nextDay(2016,
9,
30);