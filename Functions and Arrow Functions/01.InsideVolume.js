/**
 * Created by Valeri on 5/17/2017.
 */
function insideVolume(params) {

    function isInside(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return 'inside';
                }
            }
        }
        return 'outside';
    }

    for (var i = 0; i < params.length; i+=3) {
        let x = params[i];
        let y = params[i+1];
        let z = params[i+2];
        if(x == undefined || y == undefined || z == undefined){
            break;
        }
        console.log(isInside(x,y,z));
    }
}

insideVolume([ '8', '20', '22', '' ]);