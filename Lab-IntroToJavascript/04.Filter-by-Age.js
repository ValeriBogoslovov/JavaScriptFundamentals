/**
 * Created by Valeri on 5/23/2017.
 */
function filterByAge(ageMin, name1, age1, name2, age2) {
    let firstPerson = {name: name1, age: age1};
    let secondPerson = {name: name2, age: age2};

    if(firstPerson.age >= ageMin){
        console.log(firstPerson)
    }
    if(secondPerson.age >= ageMin){
        console.log(secondPerson);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);