const fs = require('fs');



fs.readFile('./name.txt','utf-8',(err,result)=>{
    console.log(result);
})


// Blocking tasks == synchronous operations that blocks all other ? and thread can be used to perform such operation 
// by default 4 thread can be used and maximun upto no of cores available in the cpu

//Non blocking tasks means aynchrounous tasks that allows other tasks to be performed 