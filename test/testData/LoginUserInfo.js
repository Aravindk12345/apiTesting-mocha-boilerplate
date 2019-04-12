let randchar = Math.random().toString(36).substr(2, 5);
var faker = require('faker');

/** This module is user for creating the User Data **/

exports.UserLoginData = {
    VALID_USER_CREDENTIALS: {"username": "aravind123@yopmail.com", "password": "Password"},
    INVALID_USER_CREDENTIALS: {"username": randchar + "@hjcsjh.com", "password": "Password"},
    USER_DETAILS:{"first_name": faker.name.firstName(), "last_name": faker.name.lastName(), "email": faker.internet.email()}

};
