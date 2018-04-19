function solve(arr) {
    let systems = new Map();
    let candidates = new Map();
    let candidateWiningSystems = new Map();

    for (let obj of arr) {
        if(!systems.has(obj['system'])){
            systems.set(obj['system'], new Map());
        }
        if(!systems.get(obj['system']).has(obj['candidate'])){
            systems.get(obj['system']).set(obj['candidate'],0)
        }
        let currentVotes = systems.get(obj['system']).get(obj['candidate']);
        systems.get(obj['system']).set(obj['candidate'], currentVotes += obj['votes'])
    }

    for (let system of systems) {
        let descendingVotes = [...system[1]].sort((a, b) => b[1] - a[1]);
        let winner = descendingVotes[0][0];

        if(!candidates.has(winner)){
            candidates.set(winner, 0);
            candidateWiningSystems.set(winner, new Map())
        }
        let votesOfSystem = 0
        for (let candidatesOfSystem of system[1]) {
            votesOfSystem += candidatesOfSystem[1];
        }
        let candidateVotes = candidates.get(winner);
        candidates.set(winner, candidateVotes += votesOfSystem);
        candidateWiningSystems.get(winner).set(system[0], votesOfSystem);
    };

    let orderedCandidates = [...candidates].sort((a,b) => b[1] - a[1]);
    let [firstCandidate, firstCandidateVotes] = orderedCandidates[0];


    let allSystemVotes = 0;

    for (let [candidate, votes] of candidates) {
        allSystemVotes += votes;
    }
    
    if(allSystemVotes === firstCandidateVotes){
        console.log(`${firstCandidate} wins with ${firstCandidateVotes} votes`);
        console.log(`${firstCandidate} wins unopposed!`);
    }else if(firstCandidateVotes > allSystemVotes / 2){
        let [secondCandidate, secondCandidateVotes] = orderedCandidates[1];
        console.log(`${firstCandidate} wins with ${firstCandidateVotes} votes`);
        console.log(`Runner up: ${secondCandidate}`);
        let sortedWiningSystems = [...candidateWiningSystems.get(secondCandidate)]
            .sort((a,b) => b[1] - a[1])
            .forEach(([systemName, systemVotes]) => console.log(`${systemName}: ${systemVotes}`))
    }else{
        let [secondCandidate, secondCandidateVotes] = orderedCandidates[1];
        let firstCandidatePercentage = Math.floor((firstCandidateVotes / allSystemVotes) * 100);
        let secondCandidatePercentage = Math.floor((secondCandidateVotes / allSystemVotes) * 100);
        console.log(`Runoff between ${firstCandidate} with ${firstCandidatePercentage}% and ${secondCandidate} with ${secondCandidatePercentage}%`);
    }
}

solve([{ system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
);

solve([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]
);

solve([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
);