/**
 * Created by Valeri on 5/26/2017.
 */
function dayOfWeek(str) {
    switch(str.toLowerCase()){
        case 'monday': return 1;break;
        case 'tuesday': return 2;break;
        case 'wednesday': return 3;break;
        case 'thursday': return 4;break;
        case 'friday': return 5;break;
        case 'saturday': return 6;break;
        case 'sunday': return 7;break;
        default: return 'error' ;break;
    }
}
dayOfWeek('Monday')