function test(arg){  
    return arg + arg;
}

function testDecorator(fn, args){  
    var arg = args[0] * 2;

    return fn(arg);
}

function decorate(dec, fn, args){  
    return function(){
        return dec(fn, args);
    }
}

x = decorate(testDecorator, test, [2])();  
console.log(x)  

