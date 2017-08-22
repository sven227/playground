// api service 
let asyncFunc1  = new Promise ( (resolve, reject) => {
        setTimeout ( ()=>{ resolve ('it resolved asynfunc1')}, 1000);
        //setTimeout ( ()=>{ reject ('it failed')}, 1000);
    });

let asyncFunc2  = new Promise ( (resolve, reject) => {
        //setTimeout ( ()=>{ resolve ('it resolved asyncfunc2')}, 1000);
        setTimeout ( ()=>{ reject ('asyncFunc2 failed')}, 1000);
    });

let asyncFunc3  = new Promise ( (resolve, reject) => {
        setTimeout ( ()=>{ resolve ('it resolved asyncfunc3')}, 1000);
        //setTimeout ( ()=>{ reject ('asyncFunc3 failed')}, 1000);
    });
// ui domain side consuming api service
//asyncFunc1.then( (result)=> { console.log(result);})
//          .catch( (error)=>{console.log(error);});

Promise.all ( [asyncFunc1, asyncFunc2]).then ( (result)=> { console.log(`all promises fired with ${result} `);})
                                       .catch( (error) => { console.log(`at least one promise failed: ${error}`);});


console.log("let's start an asyncCall with a promise");

// does defer still work?


