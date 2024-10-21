/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const X = parseInt(inputs[0]);
const Y = parseInt(inputs[1]);
const n = parseInt(readline());
let xx =X
let c = 0 
let inr = 0 
let res = 0 
let ll = []
for (let i = 0; i < n; i++) {
    const inter = parseInt(readline());
    while(xx > Y){
        xx = xx - inter
        c ++
        inr = inter
        res = xx + inter
    }
    ll.push([c, inr , res])
    xx = res
    c = 0
    inr = 0
}

console.log(length(ll));
for ( let i  in ll){
    console.log(ll[i].join(" ");
}

