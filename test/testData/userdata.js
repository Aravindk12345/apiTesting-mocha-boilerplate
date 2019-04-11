var faker = require('faker');

/** generateUsers function is user to create a list of users with different fields like first_name, last_name, email and id.
         We are using faker.js npm library to generate a relevant user data **/

function generateUsers() {
    var users = [];

    for (var id = 0; id < 10; id++) {
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();

        users.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email
        });
    }

    return {"users": users}
}

module.exports = generateUsers;
