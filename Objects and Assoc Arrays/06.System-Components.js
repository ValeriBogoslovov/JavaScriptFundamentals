/**
 * Created by Valeri on 5/23/2017.
 */
function systemComponents(array){
    let systemComponents = new Map();
    for (let line of array) {
        let data = line.split(' | ');
        let [system, component, subcomponent] = [data[0],data[1], data[2]];
        if(!systemComponents.has(system)){
            systemComponents.set(system, new Map());
            systemComponents.get(system).set(component, []);
            systemComponents.get(system).get(component).push(subcomponent)
        }else if(!systemComponents.get(system).has(component)){
            systemComponents.get(system).set(component, []);
            systemComponents.get(system).get(component).push(subcomponent);
        }else {
            systemComponents.get(system).get(component).push(subcomponent);
        }
    }

    let sortedSystems = Array.from(systemComponents.keys()).sort((sortSystems))

    for (let system of sortedSystems) {
        console.log(system);
        let sortedComponents = Array.from(systemComponents.get(system)
            .keys())
            .sort((comp1, comp2) => sortComponents(system, comp1, comp2));

        for (let component of sortedComponents) {
            console.log(`|||${component}`);
            systemComponents.get(system).get(component).forEach(sc => console.log(`||||||${sc}`));
        }
    }

    function sortSystems(key1,key2) {
            if(systemComponents.get(key1).size > systemComponents.get(key2).size){
                return -1;
            }else if(systemComponents.get(key1).size < systemComponents.get(key2).size){
                return 1;
            }else {
                if(key1 > key2){
                    return 1;
                }else {
                    return -1;
                }
            }
    }
    
    function sortComponents(sys, c1, c2) {
        return systemComponents.get(sys).get(c2).length - systemComponents.get(sys).get(c1).length;
    }
}

systemComponents([ 'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security' ]);