let orders = [
    { orderid: '001', amount: 250},
    { orderid: '002', amount: 150},
    { orderid: '003', amount: 300},
    { orderid: '004', amount:400 }
]
let offset = 0;

var totalAmount = orders.reduce( (previous, currentV)=>{
       console.log(currentV);
    return previous = currentV.amount + previous; 
    
}, offset);

console.log(totalAmount);