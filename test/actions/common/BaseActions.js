'use strict';

const supertest = require('supertest');
const headers = require('../../testData/DefaultHeaders').myHeaders;


/** This getBaseUrl will help you in dynamically assigning the baseurl to the ENVIRONMENT variable
        for more information about env var read the Readme file **/

exports.getBaseURL = () => {
    let baseURL = "";
    try {
        baseURL = process.env.ENVIRONMENT;
        console.log("BaseURL : " + baseURL);
    } catch (err) {
        throw new Error("BASE URL is not Defined, Please Specify the BASE URL : " + process.env.ENVIRONMENT);
    }
    let BaseURLSpecifications = {
        BASE_URL: baseURL,
        BASE_URL_EXTENSION: ""     // Here you need to give baseUrl_ext(Ex:'api/v1/')
    };
    return BaseURLSpecifications.BASE_URL + BaseURLSpecifications.BASE_URL_EXTENSION;
};

/** This sendPOSTRequest can be used when you dont need to pass a token while performing a POST operation **/

exports.sendPOSTRequest = async (baseUrl, apiEndPoint, requestBody) => {
    try {
        let res = await supertest(baseUrl).post(apiEndPoint).retry(2)
            .set(headers.ACCEPT_JSON)
            .set(headers.APPLICATION_JSON)
            .send(requestBody);
        return res;
    } catch (err) {
        console.log('Error in sending POST Request: ', err);
    }
};

/** This sendPOSTRequest1 can be used when you will be passing a token and body params while performing a POST operation **/

exports.sendPOSTRequest1 = async (baseUrl, apiEndPoint,requestBody, token) => {
    try {
        console.log(token);
        console.log(baseUrl + apiEndPoint);
        let res = await supertest('').post(baseUrl + apiEndPoint).retry(2)
            .set(headers.ACCEPT_JSON)
            .set(headers.APPLICATION_JSON)
            .set('Authorization', 'Token ' + token)
            .send(requestBody);
        return res;
    } catch (err) {
        console.log('Error in sending POST Request: ', err);
    }
};

/** This sendGETRequest can be used when you will be passing a token while performing a GET operation **/

exports.sendGETRequest = async (baseUrl, apiEndPoint, token) => {
    try {
        let res = await supertest(baseUrl).get(apiEndPoint).retry(2)
            .set(headers.ACCEPT_JSON)
            .set(headers.APPLICATION_JSON)
            .set('Authorization', 'Token ' + token);
        return res;
    } catch (err) {
        console.log('Error in sending GET Request: ', err);
    }
};

/** This sendPUTRequest can be used when you will be passing a token and body params while performing a PUT operation **/

exports.sendPUTRequest = async (baseUrl, apiEndPoint, requestBody, token) => {
    try {
        let res = await supertest(baseUrl).put(apiEndPoint).retry(2)
            .set(headers.ACCEPT_JSON)
            .set(headers.APPLICATION_JSON)
            .set('Authorization', 'Token ' + token)
            .send(requestBody);
        return res;
    } catch (err) {
        console.log('Error in sending PUT Request: ', err);
    }
};

/** This sendDELETERequest can be used when you will be passing a token while performing a DELETE operation **/

exports.sendDELETERequest = async (baseUrl, apiEndPoint, token) => {
    try {
        let res = await supertest(baseUrl).delete(apiEndPoint).retry(2)
            .set(headers.ACCEPT_JSON)
            .set(headers.APPLICATION_JSON)
            .set('Authorization', 'Token ' + token);
        return res;
    } catch (err) {
        console.log('Error in sending DELETE Request: ', err);
    }
};
