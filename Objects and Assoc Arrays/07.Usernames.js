/**
 * Created by Valeri on 5/30/2017.
 */
function usernames(array) {
    let set = new Set();
    array.sort(sortSet);
    for (let username of array) {
        set.add(username);
    }



    function sortSet(a, b) {
        if(a.length > b.length){
            return -1;
        }else if(a.length < b.length){
            return 1;
        }else {
            if(a > b){
                return -1;
            }else {
                return 1;
            }
        } 
    }

    [...set].reverse().forEach(x => console.log(x));
}
usernames([]);