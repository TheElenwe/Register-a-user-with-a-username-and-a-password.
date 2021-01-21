let readlineSync = require("readline-sync");
count = 0;
while (true) {
  userName = readlineSync.question("username \n");
  count += 1;
  if (count === 3) {
    console.log("incorect");
    break;
  } else if (userName == "ilias") {
    console.log("You are In!");
    break;
  }
}

