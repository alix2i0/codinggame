// print("".join([[e.lower(),e.upper()][i%2]for i,e in enumerate(input())if e.isalpha()]))
// firstanswer
console.log([...readline()].map((c, i) => /^[A-Za-z]$/.test(c) ? (i % 2 ? c.toUpperCase() : c.toLowerCase()) : '').join(''));
// sconed

const s = readline().toString().split('');

const tt = s.map((c,i) => /^[A-Za-z]$/.test(c) ? (i%2==0 ? c.toLowerCase() : c.toUpperCase()):'').join('')
console.log(tt)


// third
function isalph(c){
    return /^[A-Za-z]$/.test(c)
}
let t = ''
for (let i in s){
    if(isalph(s[i])){
        if(i%2 ==0){

            t +=s[i].toLowerCase()
        }else{

            t +=s[i].toUpperCase()
        }
    }
    console.log(t)
}
