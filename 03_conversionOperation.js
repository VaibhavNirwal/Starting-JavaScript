let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // we convert any data type in number by this
console.log(typeof valueInNumber); // data type --> number
console.log(valueInNumber); // but value print --> NaN (not a number)

//---> If value is null <--

let score_2 = null

console.log(typeof score_2);
console.log(typeof(score_2));

let valueInNumber_2 = Number(score_2)
console.log(typeof valueInNumber_2); 
console.log(valueInNumber_2);

//--> If value is undefined <--

let score_3 = undefined

console.log(typeof score_3);
console.log(typeof(score_3));

let valueInNumber_3 = Number(score_3)
console.log(typeof valueInNumber_3); 
console.log(valueInNumber_3);


let isloggedin = "vaibhav"

let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

// 1=> true; 0=> false
//""=> false
//"vaibhav" =>true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);

//********** Operations **********

let value = 3
let negvalue = -value
//  console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2%2);

let str1 = "hello"
let str2 ="vaibhav"

let str3 = str1 + str2 
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log((3+4)*5 % 3); //--> prefer prenthesis for calcculation

//  increment statement-->

let gamecounter = 100
gamecounter++; 
console.log(gamecounter);

















