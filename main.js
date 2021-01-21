let readlineSync = require("readline-sync");
let count=0;

while(count<3){
    entry=readlineSync.question("username \n");

    if (entry=="elmo"){
    
        console.log("you are in!")
        break;
    }
    if(count<=3){
        count+=1
     console.log("incorect")
     
    }
    
   
}
