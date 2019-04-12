'use strict';

const supertest = require('supertest');
const should = require('should');
const baseActions = require('../common/BaseActions');
const baseURLMapper = require('../../../UrlMapper').UrlMapper;
const reqBody = require('../../testData/Payloads/CommonPayload');


/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api **/

exports.createUser = async function (firstname, lastname, emailid, token) {
    let requestBody = reqBody.userBody(firstname, lastname, emailid);
    URL = baseActions.getBaseURL();
    console.log(URL + baseURLMapper.USER, requestBody);
    let res = await baseActions.sendPOSTRequest1(URL, baseURLMapper.USER, requestBody, token);
    return res;
};

/** This getUserList will help us in getting all the users that are present in the database **/

exports.getUserList = async function (getUserId, token) {
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendGETRequest(URL, baseURLMapper.USER + getUserId, token);
    console.log(res.body.id);
    return res;
};

/** This updateUser will help us in updating the user using the user-id **/

exports.updateUser = async function (getUserId, firstname, lastname, emailid, token) {
    let requestBody = reqBody.userBody(firstname, lastname, emailid);
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendPUTRequest(URL, baseURLMapper.USER + getUserId, requestBody, token);
    console.log(res.body);
    return res;
};

/** This deleteUser will help us in deleting the user using the user-id **/

exports.deleteUser = async function (getUserId, token) {
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendDELETERequest(URL, baseURLMapper.USER + getUserId, token);
    console.log(res.body);
    return res;
};
