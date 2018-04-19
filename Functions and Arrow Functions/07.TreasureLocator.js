function treasureLocator(params) {
    let Tuvalu = {name:'Tuvalu',x1:1, y1:1, x2:3, y2:3};
    let Tonga = {name:'Tonga',x1:0, y1:6, x2:2, y2:8};
    let Samoa = {name:'Samoa',x1:5, y1:3, x2:7, y2: 6};
    let Cook = {name:'Cook',x1:4, y1:7, x2:9, y2:8};
    let Tokelau = {name:'Tokelau',x1:8, y1:0, x2:9, y2:1};

    let islands = [Tuvalu, Tonga, Samoa, Cook, Tokelau];
    for (var i = 0; i < params.length; i+=2) {
        let x = Number(params[i]);
        let y = Number(params[i + 1]);
        let islandName = '';
        if(isNaN(x) || isNaN(y)){
            return;
        }
        for (let island of islands) {
            islandName = checkCoords(x, y, island);
            if(islandName != undefined){
                console.log(islandName);
                break;
            }
        }
        if(islandName == undefined){
            console.log("On the bottom of the ocean");
        }

    }

    function checkCoords(x, y, island) {
        if((x >= island.x1 && x <= island.x2) && (y >= island.y1 && y <= island.y2)){
            return island.name;
        }
    }
}

treasureLocator([1.5, 6.5, 0 ]);