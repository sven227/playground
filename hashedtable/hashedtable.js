var hash = require('object-hash');

function User() {
    this.name = null;
    this.lastname = null;
    this.secret = null;
};

john = new User;
john.name = "John";
john.lastname = "Doe";
john.secret = "12345678";

jane = new User
jane.name = "Jane";
jane.lastname = "Doe";
jane.secret = "12345678";

sven = new User
sven.name = "Sven";
sven.lastname = "Machine";
sven.secret = "12345678";

svenjr = new User
svenjr.name = "SvenJr";
svenjr.lastname = "Arias";
svenjr.secret = "12345678";

let map = new Map();

// returns sth like this: "9a9d6cbae73859cebd577563a5a804619931b1d2"
function hashuser(user) {
    return hash((user.name + user.lastname), { excludeValues: true });
};

//create key-object for map key
//map does not take objects created via object literals
//map can take primitives as key instead too (the alphanumeric string of hashuser itself)
function Key() {
    //    this.key = null;
    this.key = function (obj) {
        if (obj) { return hashuser(obj); }
        else { return null; }
    }


}

console.log(`John: ${hashuser(john)}`);
console.log(`Jane: ${hashuser(jane)}`);
console.log(`Sven: ${hashuser(sven)}`);
console.log(`Svenjr: ${hashuser(svenjr)}`);

// a few ways to construct a key for the Map
johnhashkey = hashuser(john); 
janekeyobj = new Key(jane);
svenkeyobj = { key: function () { return hashuser(sven) } };
svenjrkeyobj = new Key(svenjr);


map.set(hashuser(john), john);
map.set(janekeyobj, jane);
map.set((svenkeyobj), sven);
map.set((svenjrkeyobj.key), svenjr);

console.log(map);



console.log(map.get(johnhashkey));
console.log(map.get(janekeyobj));
console.log(map.get(svenkeyobj));
console.log(map.get(svenjrkeyobj.key));


