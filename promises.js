

// inside event-handler logic, when an event is fired create new promise = call asynchronous function
// avoid race condition - by selecting last event 
// solution:
// When an asynchronous operation starts, record the relevant app state.
// When it completes, verify that the app is still in the same state.

//From the @quickleft blog: Defusing Race Conditions when Using Promises http://quickleft.com/blog/#defusing-race-conditions-when-using-promises

// // 
// ArticleView.prototype.updateArticle = function (props) {
//   this.setState({ error: null, title: null, body: null });

//   // Record app state:
//   var id = props.articleID;

//   ArticleStore.fetch(id).then(article => {
//     // Verify app state:
//     if (this.props.articleID !== id) return;

//     this.setState({ title: article.title, body: article.body });
//   }).catch(err => {
//     // Verify app state:
//     if (this.props.articleID !== id) return;

//     this.setState({ error: 'Oh Noes!' });
//   });
// };



let asyncFunc1  = new Promise ( (resolve, reject) => {
        setTimeout ( ()=>{ resolve ('it resolved asynfunc1')}, 500);
        //setTimeout ( ()=>{ reject ('it failed')}, 1000);
    });

let asyncFunc2  = new Promise ( (resolve, reject) => {
        setTimeout ( ()=>{ resolve ('it resolved asyncfunc2')}, 1000);
        //setTimeout ( ()=>{ reject ('asyncFunc2 failed')}, 750);
    });

let asyncFunc3  = new Promise ( (resolve, reject) => {
        setTimeout ( ()=>{ resolve ('it resolved asyncfunc3')}, 1000);
        //setTimeout ( ()=>{ reject ('asyncFunc3 failed')}, 1000);
    });

// let's assume pagination problem - 3 pages clickable; user clicks page2 and immediately page3
// how to avoid that page2 is fired and shows content of page2 when user already clicked on page3 and expects
// content of page3 to show up - so if page2 lavoid race condition?
// say page1 for asynfunc1; page2 for asyncfunc2 ...

pageId = 'page3'; // user action

pagesMap = new Map();
pagesMap.set( 'page1', asyncFunc1);
pagesMap.set( 'page2', asyncFunc2);
pagesMap.set( 'page3', asyncFunc3);

console.log('size pagesMap: ' + pagesMap.size);
pagesMap.get(pageId).then( (result)=> { console.log(result); });


// avoid race condition with simple if statement fire only if pageId is the correct one
// asyncFunc1.then( (result)=> { if (pageId ==='page1') { console.log(result);}})              
//           .catch( (error)=>{console.log(error);});

// asyncFunc2.then( (result)=> { if (pageId ==='page2') {console.log(result);}})
//          .catch( (error)=>{console.log(error);});

// asyncFunc3.then( (result)=> { if (pageId ==='page3') {console.log(result);}})
//          .catch( (error)=>{console.log(error);});

console.log("let's start an asyncCall with a promise");




