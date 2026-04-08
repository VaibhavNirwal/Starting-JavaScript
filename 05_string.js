const name = "vaibhav"
const repoCount = 50

// console.log(name + repoCount + "value"); --> Old way 

// --> Better way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// ********  String--prototypes  ********


const gameName = new String('vaibhavTech')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('T'));


const gameName2 = new String('vaibhavTech')

const newstring = gameName2.substring(0,4)
console.log(newstring);

const anotherString = gameName2.slice(-3,4)
console.log(anotherString);

const newStringOne = "   vaibhav   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vaibhav.com/vaibhav%20Nirwal"

console.log(url.replace('%20','-'))


console.log(url.includes('com'));

console.log(gameName.split('i'));






