const accountid="12345"
var accountname =" mrinalika"
let accountEmail = "email.tee@gmail.com"
accountCity =" Hyderabad"

/*
prefer not to use var because of issue in block scope & functional scope
*/
console.log(accountEmail);
console.table([accountid, accountname, accountEmail, accountCity])