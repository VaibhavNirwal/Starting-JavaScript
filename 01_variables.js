const accountId = 144553
let accountEmail = "vaibhav@google.com"
var accountpassword = "12345"
accountCity = "jaipur"
let accountstate;

// const--used for declaring constant variables


/*
not possible -->
accountId = 2
console.log(accountId);
*/

// possible-->
accountEmail = "super@google.com"
accountpassword = "12221"
accountCity = "Delhi"

/*
prefer not to use var 
because of issue in block  scope and functional scope
*/

console.table([accountEmail,accountpassword,accountCity,accountstate]);


