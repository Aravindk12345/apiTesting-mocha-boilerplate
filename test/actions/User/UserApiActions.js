'use strict';

const supertest = require('supertest');
const should = require('should');
const baseActions = require('../common/BaseActions');
const baseURLMapper = require('../../../UrlMapper').UrlMapper;
const reqBody = require('../../testData/Payloads/CommonPayload');

let getUserId = "";

/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api **/

exports.createUser = async function (ID, id, name, token) {
    let requestBody = reqBody.industryBody(id, name);
    URL = baseActions.getBaseURL();
    console.log(URL + baseURLMapper.USER, requestBody);
    let res = await baseActions.sendPOSTRequest1(URL, baseURLMapper.USER + ID, requestBody, token);
    console.log(res.body);
    if (res.body.status == 'SUCCESS') {
        getUserId = res.body.data.user.id;
        console.log('Getting the userid of the user and storing the userid in getUserId variable');
        console.log(getUserId);
        return res;
    } else {
        return res;
    }
};

/** This getUserList will help us in getting all the users that are present in the database **/

exports.getUserList = async function (ID, token) {
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendGETRequest(URL, baseURLMapper.USER + ID, token);
    console.log('Getting all the user List');
    console.log(res.body.data);
    return res;
};

/** This updateUser will help us in updating the user using the user-id **/

exports.updateUser = async function (ID, id, name, token) {
    let requestBody = reqBody.industryBody(id, name);
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendPUTRequest(URL, baseURLMapper.USER + getUserId + ID, requestBody, token);
    console.log(res.body);
    return res;
};

/** This deleteUser will help us in deleting the user using the user-id **/

exports.deleteUser = async function (ID, token) {
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendDELETERequest(URL, baseURLMapper.USER + getUserId + ID, token);
    console.log(res.body);
    return res;
};
