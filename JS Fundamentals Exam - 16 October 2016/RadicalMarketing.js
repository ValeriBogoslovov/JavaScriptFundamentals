function radicalMarketing(arr) {
    let people = new Map();
    let subscriber = new Map();

    for (let person of arr) {
        let personTokens = person.split('-');
        if (personTokens.length === 1) {
            if (!people.has(personTokens[0])) {
                people.set(personTokens[0], new Set());
                subscriber.set(personTokens[0], new Set());
            }
        } else {

            if (people.has(personTokens[0]) && people.has(personTokens[1])) {
                people.get(personTokens[1]).add(personTokens[0]);
                subscriber.get(personTokens[0]).add(personTokens[1]);
            }
        }
    }

    let orderedPeople = [...people].sort(function (a, b) {
        if (a[1].size < b[1].size) {
            return 1;
        }
        if (a[1].size > b[1].size) {
            return -1;
        }
        if (a[1].size === b[1].size) {
            return subscriber.get(b[0]).size - subscriber.get(a[0]).size;
        }
    });

    console.log(orderedPeople[0][0]);
    let count = 1;
    for (let subs of orderedPeople[0][1]) {
        console.log(`${count}. ${subs}`);
        count++;
    }
}
radicalMarketing([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'D-A',
    'D-B',
    'C-D',
    'C-A',
    'A-C',
    'A-D'
]);