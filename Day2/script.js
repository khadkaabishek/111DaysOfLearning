const fs = require("fs");
// console.log(fs);

fs.writeFileSync("./text.txt", "Am i there ?");//synchronous file creation 

fs.writeFile('./async.txt','Text for asynchronous files !!',(err)=>{});//asynchronous file creation 



const data = fs.readFileSync('./data.txt','utf-8');  //Synchrounous file reading 
console.log(data);


fs.readFile('./data.txt','utf-8',(err , result)=>{   // Asynchrounous File Reading 
    if(err){
        console.log('Error  : ', err);              // Asynchrounus Reading or writing takes another arrow function as a argument for error handling 
    }
    else {
        console.log(result);
    }
})



fs.appendFileSync('./data.txt',new Date().getDate(). toLocaleString()); // Appending content from last ? adds the exact date of today 


fs.cpSync("./data.txt","./copy.txt"); // copies file 

fs.unlinkSync('./copy.txt');  //deletes the file 

console.log(fs.statSync('./data.txt').isFile());
