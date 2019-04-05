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

exports.userBody = (id, name) => {
    return {
        "user": {
            "userId": id,
            "name": name
        }
    }
};
