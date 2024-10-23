// how i can extract this formula : 
// New York driver's licenses encode a person's date of birth into the number's final five digits. The last two digits indicate the year, and the three preceding digits code the month and day of birth using the formula 63*month+2*day (where month ranges from 0 to 11).

const N = readline();

const year = parseInt( N.slice(7,8))
const d = parseInt( N.slice(4,7))
let month = Math.floor(d / 63);
let remainder = d % 63;     

let day = Math.floor(remainder / 2);
console.log(month+'/'+day + '/'+)
