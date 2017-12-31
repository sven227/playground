

const assert = require('assert');
const user = require('./functionexpression');

var newUser = user.createUser({
    name: 'Mike', 
    showInSearch: false,
    colorScheme: 'dark'
});


it('User account creation', function () {
    
    assert.equal(newUser.colorScheme, 'dark',
        'colorScheme stored correctly.');
});
