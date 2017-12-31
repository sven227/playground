//much better way then functionconstructors
//constructors are pointint this to main exex context no matter if .bind or call is applied





var userProto = {
    name: '',
    email: '',
    alias: '', 
    showInSearch: true, 
    colorScheme: 'light'
};



function createUser(options) {
    let someUser = Object.assign({}, userProto, options);
    return someUser;
}

module.exports.createUser = createUser; 





