/**
 * Created by Valeri on 5/25/2017.
 */
function chessBoard(n) {
    console.log('<div class="chessboard">');
    let isBlack = true;

    for (var i = 0; i < n; i++) {
        console.log('  <div>');
        
        for (var j = 0; j < n; j++) {
            if(isBlack){
                console.log('    <span class="black"></span>');
                isBlack = false;
                if(n % 2 == 0 && j == n - 1){
                    isBlack = true;
                }
            }else {
                console.log('    <span class="white"></span>');
                isBlack = true;
                if(n % 2 == 0 && j == n - 1){
                    isBlack = false;
                }
            }
        }
        console.log('  </div>');
    }
    
    console.log('</div>');
}

chessBoard(2);