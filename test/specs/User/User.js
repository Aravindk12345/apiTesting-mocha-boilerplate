const mocha = require('mocha');
const supertest = require('supertest');
const User = require('../../actions/User/UserApiActions');
const data = require('../../testData/LoginUserInfo.js').UserLoginData;
const statusCode = require('../../../StatusCode').StatusCode;


describe("Performing CRUD Operations on User", () => {

    var getauthToken = "";
    let getUserId = "";
    let emptyUserId = "";

    describe('GET Request: Get list of Users', function () {

        it('Getting users list', async function () {
            let res = await User.getUserList(emptyUserId, getauthToken);
            console.log('Getting the user list');
            console.log(res.body);
            res.status.should.equal(statusCode.OK);
        });
    });

    describe('POST Request: Create a User', function () {

        it('creating a User', async function () {
            let res = await User.createUser(data.USER_DETAILS.first_name, data.USER_DETAILS.last_name, data.USER_DETAILS.email, getauthToken);
            console.log(res.body);
            console.log('Getting the userid of the user and storing the userid in getUserId variable');
            getUserId = res.body.id;
            console.log("Printing getUserId:" + getUserId);
            res.status.should.equal(statusCode.CREATED);
        });

        after('Verify the details of created user', async function () {
            let res = await User.getUserList(getUserId, getauthToken);
            console.log('Getting the created user data');
            console.log(res.body);
            res.status.should.equal(statusCode.OK);
        });
    });

    describe('PUT Request: Update the User', function () {

        it('Updating a User', async function () {
            let res = await User.updateUser(getUserId, data.USER_DETAILS.first_name + ' ' + 'asd', data.USER_DETAILS.last_name + ' ' + 'asdf', data.USER_DETAILS.email, getauthToken);
            console.log("Updated User details");
            console.log(res.body);
            res.status.should.equal(statusCode.OK);
        });

        after('Verify the details of updated user', async function () {
            let res = await User.getUserList(getUserId, getauthToken);
            console.log('Getting the updated user data');
            console.log(res.body);
            res.status.should.equal(statusCode.OK);
        });
    });

    describe('DELETE Request: Delete the User', function () {

        it('Deleting a users', async function () {
            let res = await User.deleteUser(getUserId, getauthToken);
            console.log('Deleting the user');
            console.log(res.body);
            res.status.should.equal(statusCode.OK);
        });

        after('Verify that user has been deleted', async function () {
            let res = await User.getUserList(getUserId, getauthToken);
            console.log('Getting the deleted user data');
            console.log(res.body);
            res.status.should.equal(statusCode.NOT_FOUND);
        });
    });


});
