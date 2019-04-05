const mocha = require('mocha');
const supertest = require('supertest');
const LoginActions = require('../../actions/common/LoginActions.js');
const data = require('../../testData/LoginUserInfo').UserLoginData;
const statusCode = require('../../../StatusCode').StatusCode;
const statusMessage = require('../../testData/DefaultHeaders').statusMessages;
const schemaValidation = require('../../utils/SchemaUtils');
const loginSchema = require('../../schema/LoginSchema').loginSchema;

let getauthToken = '';

describe("Login Api", () => {

    it('Login check : Valid User Credentials', async function () {
        let res = await LoginActions.loginToUser(data.VALID_USER_CREDENTIALS.username, data.VALID_USER_CREDENTIALS.password);
        console.log('Validating the Response status code check');
        res.status.should.equal(statusCode.OK);
        console.log('Validating the Response Status Message');
        res.body.status.should.equal(statusMessage.SUCCESS);
        console.log('Get the Generated Auth Token and store it in the getauthToken variable');
        getauthToken = res.body.data.user.token.authToken;
        console.log("You are just printing the generated Auth Token:", getauthToken);
        schemaValidation.ValidateJsonSchema(loginSchema, res.body);
    });

    it('Login check ( Negative ) : Invalid Credentials', async function () {
        let res = await LoginActions.loginToUser(data.INVALID_USER_CREDENTIALS.username, data.INVALID_USER_CREDENTIALS.password);
        console.log('Validating the Response status code check');
        res.status.should.equal(statusCode.UNAUTHORIZED);
        console.log('Validating the Response Status Message');
        res.body.status.should.equal(statusMessage.FAILURE);
    }); 

});
