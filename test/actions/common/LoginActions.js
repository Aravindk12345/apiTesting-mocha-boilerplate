'use strict';

const supertest = require('supertest');
const should = require('should');
const baseActions = require('./BaseActions');
const baseURLMapper = require('../../../UrlMapper.js').UrlMapper;
const reqBody = require('../../testData/Payloads/CommonPayload');


/** This is just a Login Method of a user with a sendPOSTRequest having baseurl and a request body **/

exports.loginToUser = async function (email, password) {
    let requestBody = reqBody.getRequestBody(email, password);
    URL = baseActions.getBaseURL();
    let res = await baseActions.sendPOSTRequest(URL, baseURLMapper.LOGIN, requestBody);
    console.log(res.body);
    return res;
};
