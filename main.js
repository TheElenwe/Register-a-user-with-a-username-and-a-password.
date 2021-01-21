const readlineSync = require("readline-sync");
let count = 0;
while (true) {
  userName = readlineSync.question("Username \n");
  password = readlineSync.question("Password \n");

  if (userName == "ilias" && password == "poker21") {
    console.log("You are In!");
    break;
  }

  count+=1
  if (count === 3) {
    console.log("Incorrect");
    break;
  }
}
