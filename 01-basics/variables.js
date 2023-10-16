const accountId = 123456;
let accountEmail = "xyz@gmail.com";
var accountPassword = "123456789";
accountCity = "noida";

accountEmail = "abc@gmail.com";
accountCity = "rishikesh";
accountPassword = "987654";

/*
Prefer not to use var 
because of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
