/** This module is user for creating the Body Structure
       this needs to be modified according to the api body structure **/

exports.getRequestBody = (email, password) => {
    return {
        "user": {
            "email": email,
            "password": password
        }
    }
};

exports.userBody = (firstname, lastname, email) => {
    return {
        "first_name": firstname,
        "last_name": lastname,
        "email": email
    }
};
