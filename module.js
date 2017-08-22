var myNamespace = (function () {
 
  let myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( value ) {
      console.log( value );
  };
 
  return {
 
    // A public variable
    myPublicVar: "blabla",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
      console.log(myPrivateVar);
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    }
  };

  
})();

console.log(myNamespace.myPublicVar);
myNamespace.myPublicFunction( "anything");
//can't call myPrivateMethod directly from outside;

