// Your goal is to determine how many times a bus is passing in front of a stop or the terminus.
// You're given the max people capacity C of the bus and N stops with how many people are on stops.

// The bus is collecting people by stopping on stops until the bus is full.
// The bus can't have more people than its max capacity C
// Each person collected are dropped off at the terminus, which is located after the last stop.
// The bus route is circular, that means that after passing on the terminus, the bus goes on the first stop.

// Until there are people on the bus route, the bus doesn't stop and will continue to collect the remaining people.
// If there is no one or no more people to collect, the bus stop on the terminus.

// Note: The terminus is not counted in the stop list.
// e.g: N equals 3, so we have : Stop 1 => Stop 2 => Stop 3 => Terminus
// Input
// Line 1: An integer C, the max capacity of the bus
// Line 2: An integer N, the number of stops
// N next lines: Line by line, the number of people on each stop
// Output
// The number of times the bus passed in front of a stop / terminus.
// Example
// Input
// 20
// 3
// 50
// 20
// 5
// Output
// 16


const C = parseInt(readline());
const N = parseInt(readline());
let totalPeople = 0
for (let i = 0; i < N; i++) {
     const P = parseInt(readline());
     totalPeople += P
    // while (P > 0 ){
    //     c = c + N
    //     P = P - C
    // }
}
const fullLoads = Math.floor(totalPeople / C);

// Calculate the total number of passes
let additionalPass = 0; // Variable to determine if we need an extra pass

if (totalPeople % C > 0) {
    additionalPass = 1; // If there are remaining people, we need one extra pass
}

// Total passes calculation
const totalPasses = (fullLoads + additionalPass) * (N + 1);
console.log()
