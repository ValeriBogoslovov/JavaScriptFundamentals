/**
 * Created by Valeri on 5/15/2017.
 */
function disntaceIn3D(params) {
    let x1 = Number(params[0]);
    let y1 = Number(params[1]);
    let z1 = Number(params[2]);

    let x2 = Number(params[3]);
    let y2 = Number(params[4]);
    let z2 = Number(params[5]);

    let dx = x1 - x2;
    let dy = y1 - y2;
    let dz = z1 - z2;

    console.log(Math.sqrt(dx * dx + dy * dy + dz * dz));
}

disntaceIn3D([1, 1, 0, 5, 4, 0]);